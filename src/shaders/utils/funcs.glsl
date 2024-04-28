// Gradient Noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/XdXGW8
#ifndef NOISE
#define NOISE 1
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  vec2 u = f * f * (3.0f - 2.0f * f);

  return mix(mix(dot(random2(i + vec2(0.0f, 0.0f)), f - vec2(0.0f, 0.0f)), dot(random2(i + vec2(1.0f, 0.0f)), f - vec2(1.0f, 0.0f)), u.x), mix(dot(random2(i + vec2(0.0f, 1.0f)), f - vec2(0.0f, 1.0f)), dot(random2(i + vec2(1.0f, 1.0f)), f - vec2(1.0f, 1.0f)), u.x), u.y);
}
#endif
/*
contributors: Inigo Quiles
description: quintic polynomial https://iquilezles.org/articles/smoothsteps/
use: <float|vec2|vec3|vec4> quintic(<float|vec2|vec3|vec4> value);
examples:
    - https://raw.githubusercontent.com/patriciogonzalezvivo/lygia_examples/main/math_functions.frag
*/

#ifndef FNC_QUINTIC
#define FNC_QUINTIC

float quintic(const in float v) {
  return v * v * v * (v * (v * 6.0f - 15.0f) + 10.0f);
}
vec2 quintic(const in vec2 v) {
  return v * v * v * (v * (v * 6.0f - 15.0f) + 10.0f);
}
vec3 quintic(const in vec3 v) {
  return v * v * v * (v * (v * 6.0f - 15.0f) + 10.0f);
}
vec4 quintic(const in vec4 v) {
  return v * v * v * (v * (v * 6.0f - 15.0f) + 10.0f);
}

#endif
/*
contributors: [Stefan Gustavson, Ian McEwan]
description: Fast, accurate inverse square root.
use: <float|vec2|vec3|vec4> taylorInvSqrt(<float|vec2|vec3|vec4> x)
*/

#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r) {
  return 1.79284291400159f - 0.85373472095314f * r;
}
vec2 taylorInvSqrt(in vec2 r) {
  return 1.79284291400159f - 0.85373472095314f * r;
}
vec3 taylorInvSqrt(in vec3 r) {
  return 1.79284291400159f - 0.85373472095314f * r;
}
vec4 taylorInvSqrt(in vec4 r) {
  return 1.79284291400159f - 0.85373472095314f * r;
}
#endif

/*
contributors: [Stefan Gustavson, Ian McEwan]
description: modulus of 289
use: <float|vec2|vec3|vec4> mod289(<float|vec2|vec3|vec4> x)
*/

#ifndef FNC_MOD289
#define FNC_MOD289

float mod289(const in float x) {
  return x - floor(x * (1.f / 289.f)) * 289.f;
}
vec2 mod289(const in vec2 x) {
  return x - floor(x * (1.f / 289.f)) * 289.f;
}
vec3 mod289(const in vec3 x) {
  return x - floor(x * (1.f / 289.f)) * 289.f;
}
vec4 mod289(const in vec4 x) {
  return x - floor(x * (1.f / 289.f)) * 289.f;
}

#endif

/*
contributors: [Stefan Gustavson, Ian McEwan]
description: permute
use: <float|vec2|vec3|vec4> permute(<float|vec2|vec3|vec4> x)
examples:
    - https://raw.githubusercontent.com/patriciogonzalezvivo/lygia_examples/main/math_functions.frag
*/

#ifndef FNC_PERMUTE
#define FNC_PERMUTE

float permute(const in float v) {
  return mod289(((v * 34.0f) + 1.0f) * v);
}
vec2 permute(const in vec2 v) {
  return mod289(((v * 34.0f) + 1.0f) * v);
}
vec3 permute(const in vec3 v) {
  return mod289(((v * 34.0f) + 1.0f) * v);
}
vec4 permute(const in vec4 v) {
  return mod289(((v * 34.0f) + 1.0f) * v);
}

#endif
#include "pnoise.glsl";