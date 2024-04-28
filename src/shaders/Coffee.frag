#include "utils/utils.glsl";

uniform float uTime;
uniform float uMix;
uniform float uAlpha;
uniform vec3 uCoffee;
uniform vec3 uCream;
uniform vec2 uResolution;
uniform int uFragmentShader;
varying vec2 vUv;

vec4 swirls() {
  vec2 st = gl_FragCoord.xy / uResolution.xy;
  st.x *= uResolution.x / uResolution.y;
  vec3 color = vec3(0.0f);
  float t = 1.0f;
  float d2 = pnoise(vec2(st * 5.f + uTime), vec2(1.2f, 3.4f)) * 0.5f + 0.5f;
  float d3 = pnoise(vec3(st * 5.f, uTime * 2.f), vec3(1.2f, 3.4f, 5.6f)) * 0.5f + 0.5f;
  t = abs(1.0f - sin(uTime * .1f)) * 5.f;
  st += noise(st * 2.f) * t;
  color = vec3(1.f) * smoothstep(.18f, .2f, noise(st));
  color += smoothstep(.15f, .2f, noise(st * 10.f + uTime / 2.f));
  color += mix(d2, d3, step(0.5f, st.x));
  color -= smoothstep(.35f, .4f, noise(st * 10.f - uTime / 15.f));
  color = mix(mix(color, uCoffee, .95f), uCream, .18f);
  return vec4(color, 1.0f);
}

void main() {
  if (uFragmentShader == 1) {
    gl_FragColor = swirls();
  } else if (uFragmentShader == 2) {
        // Case 2
        // Do something else
  } else {
    gl_FragColor = vec4(uCoffee, 1.f);
  }

}