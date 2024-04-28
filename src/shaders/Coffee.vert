uniform float uTime;
uniform float uFloor;
uniform float uCeiling;
varying vec2 vUv;

void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  modelPosition.y = clamp(modelPosition.y, uFloor, uCeiling / uTime);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;
}
