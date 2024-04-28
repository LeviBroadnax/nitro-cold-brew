#ifndef UTILS
#define UTILS 1
float random(vec2 st, float seed, float seed2, float seed3) {
  return fract(sin(dot(st.xy, vec2(seed2, seed3))) * seed);
}

vec2 random2(vec2 st) {
  st = vec2(dot(st, vec2(127.1f, 311.7f)), dot(st, vec2(269.5f, 183.3f)));
  return - 1.0f + 2.0f * fract(sin(st) * 43758.5453123f);
}

float random(vec2 st, float seed, vec2 seed2) {
  return fract(sin(dot(st.xy, seed2)) * seed);
}
float random(vec2 st, float seed) {
  return random(st, seed, 0.21f, 1341.0f);
}
float random(vec2 st) {
  return random(st, 99999.f);
}
vec2 rotate(vec2 uv, float rotation, vec2 mid) {
  return vec2(cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x, cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y);
}
#define QTR_PI 0.78539816339
#define HALF_PI 1.5707963267948966192313216916398
#define PI 3.1415926535897932384626433832795
#define TWO_PI 6.2831853071795864769252867665590
#define TAU 6.2831853071795864769252867665590
#define INV_PI 0.31830988618379067153776752674503
#define INV_SQRT_TAU 0.39894228040143267793994605993439  // 1.0/SQRT_TAU
#define SQRT_HALF_PI 1.25331413732
#define PHI 1.618033988749894848204586834
#define EPSILON 0.0000001
#define GOLDEN_RATIO 1.6180339887
#define GOLDEN_RATIO_CONJUGATE 0.61803398875
#define GOLDEN_ANGLE 2.39996323
#endif

#include "funcs.glsl";