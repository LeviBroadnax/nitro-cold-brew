#include "utils.glsl";

uniform float uTime;
uniform float uMix;
uniform float uAlpha;
uniform vec3 uCoffee;
uniform vec3 uCream;

varying vec2 vUv;

void main() {
  gl_FragColor.rgba = vec4(uCoffee, uAlpha);
}