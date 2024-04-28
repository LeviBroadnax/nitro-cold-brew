#include "utils/gerstnerWave";
uniform float uTime;
uniform float uFloor;
uniform float uCeiling;
uniform float uWaveLength;
uniform float uSteepness;
uniform vec2 uDirection;
uniform int uVertexShader;
varying vec2 vUv;

void WaveFunc() {
  vec4 modelPosition = vec4(position, 1.0f);
  vec4 viewPosition = viewMatrix * modelMatrix * modelPosition;
  vec3 waveDisplacement = gerstnerWave(viewPosition.xy, uDirection, uSteepness / 25.0f, uWaveLength, uTime);
  viewPosition.xyz += waveDisplacement;

  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;
}

void SlowlyDecreasing() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0f);

  float ceiling = max(uFloor, uCeiling - (uTime * .005f));
  modelPosition.y = clamp(modelPosition.y, uFloor, ceiling);

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;
}

void Clamper() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0f);
  modelPosition.y = clamp(modelPosition.y, uFloor, uCeiling);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;
}

void main() {
  vUv = uv;
  if (uVertexShader == 1) {
    WaveFunc();
  } else if (uVertexShader == 2) {
    Clamper();
  } else {
    SlowlyDecreasing();
  }
}
