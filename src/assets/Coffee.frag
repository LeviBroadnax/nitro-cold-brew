uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;
void main() {
  gl_FragColor.rgba = vec4(mix(uColor1, uColor2, .2), 1.0);
}