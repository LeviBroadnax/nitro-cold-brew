param(
  [switch]$install = $false,
  [string]$source_folder = '../public',
  [string]$draco_encoder = './draco/build/Release/draco_encoder.exe',
  [float]$compression_threshhold = .95
)
if ($args[0] -in @('-h', 'help')) {
  Write-Host '-install ='$install', Forces draco encoder reinstall (requires cmake, python3, c++ build tools)'
  Write-Host '-source_folder ='$source_folder', Folder of assets to be compressed'
  Write-Host '-draco_encoder ='$draco_encoder', Decoder path'
  Write-Host '-compression_threshhold ='$compression_threshhold', Minimum compression ratio to keep the encoded version'
  return;
}

#region Install
function AssertDependencies {
  try {
    py --version
  }
  catch {
    try {
      python --version
    }
    catch {
      Write-Host "Missing dependency Python: (https://www.python.org/downloads/)"
      return $false;
    }
  }
  try {
    cmdake --version
  }
  catch {
    Write-Host "Missing dependency CMake: (https://cmake.org/download/)"
    return $false;
  }
  
  return $true
}
function InstallDraco {
  if (Test-Path './draco') {
    npx rimraf ./draco
  }
  $script_dir = Resolve-Path "."
  git clone https://github.com/google/draco
  mkdir ./draco/build | Set-Location
  git submodule update --init
  cmake ../ -DDRACO_TRANSCODER_SUPPORTED=ON
  cmake --build . --config Release
  
  # Verify installation
  Set-Location $script_dir
  & $draco_encoder -i  "./draco/testdata/two_objects_inverse_materials.gltf" -o 'success.glb'
}

function AssertDracoInstallation() {
  if ($install -or !(Test-Path $draco_encoder)) {
    $res = Read-Host "
  Install Draco? (y/n)
  Requires:
  * Python: https://www.python.org/downloads/ 
  * C++ Build Tools: https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022
  * CMake: https://cmake.org/download/"
    if ($res.ToLower().Contains("y")) {
      if (AssertDependencies) {
        InstallDraco
        return $true
      }
    }
  }
  else {
    return $true
  }
  return $false
}
#endregion Install

function ProcessQueue {
  param([System.Collections.Queue]$q)
  while ($q.Count) {
    $source = $q.Dequeue()
    $target = $source -replace '\.gl(b|tf)$', '.draco.glb'
    Encode $source $target
  }
  return $q
}

function EnqueueModels {
  param([string]$folder)
  $q = New-Object System.Collections.Queue
  foreach ($file in Get-ChildItem -Path $folder | Where-Object { $_.extension -in ".gltf", ".glb" }) {
    if (-not $file.FullName.Contains(".draco")) {
      $q.Enqueue($file.FullName)
    }
  }
  foreach ($subfolder in Get-ChildItem -Path $folder -Directory) {
    EnqueueModels -folder $subfolder.FullName
  }
  return $q
}

function Encode([string]$source, [string]$target) {
  & $draco_encoder -i $source -o $target -cl 10
  if (-not (Test-Path $target)) {
    Write-Host "Please Fix $source"
    return
  }

  $sourceSize = (Get-Item $source).Length
  $targetSize = (Get-Item $target).Length
  $ratio = (($sourceSize - $targetSize) / $sourceSize)
  $compressionRatio = "{0:P2}" -f $ratio
  Write-Host "Compression Ratio: $compressionRatio"
  if ($ratio -le $compression_threshhold) {
    return
  }

  $choice = Read-Host "Do you want to keep the target file '$target'? (Y/N)"
  if (!($choice.ToLower().Contains("y"))) {
    Remove-Item $target -Force
  }
}

function Run {  
  if (AssertDracoInstallation) {
    $modelQueue = EnqueueModels -folder (Resolve-Path $source_folder)
    ProcessQueue $modelQueue
  }
  
}
Run