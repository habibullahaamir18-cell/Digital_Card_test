import React, { useEffect, useRef } from "react";

// WebGL animated background with red, green & blue floating bubbles
export default function WebGLBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vertexSrc = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentSrc = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      // Soft circular gradient for bubble shape
      float circle(vec2 uv, vec2 p, float r) {
        return smoothstep(r, r - 0.02, distance(uv, p));
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        uv -= 0.5; // center
        uv.x *= u_resolution.x / u_resolution.y;

        float t = u_time * 0.2;

        // Soft neutral background (light gray/white)
        vec3 baseColor = vec3(0.96, 0.97, 1.0);

        // Bubble positions (animated)
        vec2 p1 = vec2(sin(t * 1.2) * 0.3, cos(t * 1.1) * 0.25);
        vec2 p2 = vec2(cos(t * 0.9) * -0.25, sin(t * 1.4) * 0.35);
        vec2 p3 = vec2(sin(t * 0.7 + 1.2) * 0.35, cos(t * 0.8 + 0.6) * -0.3);

        // Bubble shapes
        float g1 = circle(uv, p1, 0.55);
        float g2 = circle(uv, p2, 0.5);
        float g3 = circle(uv, p3, 0.45);

        // Bubble colors (logo colors)
        vec3 c1 = vec3(0.0, 0.45, 1.0); // blue
        vec3 c2 = vec3(0.0, 0.8, 0.2);  // green
        vec3 c3 = vec3(0.95, 0.1, 0.1); // red

        // Combine bubbles softly on background
        vec3 color = baseColor;
        color = mix(color, c1, g1 * 0.7);
        color = mix(color, c2, g2 * 0.7);
        color = mix(color, c3, g3 * 0.7);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compile(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const vs = compile(gl.VERTEX_SHADER, vertexSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fragmentSrc);
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const quad = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quad);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
        1, -1,
        -1, 1,
        -1, 1,
        1, -1,
        1, 1,
      ]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(prog, "u_resolution");
    const timeLoc = gl.getUniformLocation(prog, "u_time");

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth, clientHeight } = canvas.parentElement;
      const width = Math.max(320, clientWidth);
      const height = Math.max(320, clientHeight);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
    }

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    let start = performance.now();
    function frame(now) {
      const t = (now - start) / 1000;
      gl.uniform1f(timeLoc, t);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafRef.current = requestAnimationFrame(frame);
    }
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="webgl-bg" aria-hidden="true" />;
}
