import React, { useEffect, useRef } from 'react';

const InteractiveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let points = [];
    const maxDistance = 150;
    const breakpoints = {
      mobile: 600,
      tablet: 900,
    };

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }

    function getNumberOfPoints() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= breakpoints.mobile) {
        return 35;
      } else if (screenWidth <= breakpoints.tablet) {
        return 55;
      } else {
        return 100;
      }
    }

    function createPoints() {
      points = [];
      const numberOfPoints = getNumberOfPoints();
      for (let i = 0; i < numberOfPoints; i++) {
        points.push(
          new Point(Math.random() * canvas.width, Math.random() * canvas.height)
        );
      }
    }

    function drawLines() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          let distance = Math.sqrt(
            Math.pow(points[i].x - points[j].x, 2) +
              Math.pow(points[i].y - points[j].y, 2)
          );
          if (distance < maxDistance) {
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
          }
        }
      }
      ctx.strokeStyle = '#05494A';
      ctx.stroke();
    }

    const handleMouseMoveGlobal = (e) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const scaleX = canvasRef.current.width / rect.width;
      const scaleY = canvasRef.current.height / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;
      if (
        x >= 0 &&
        y >= 0 &&
        x <= canvasRef.current.width &&
        y <= canvasRef.current.height
      ) {
        points.push(new Point(x, y));
        drawLines();
        points.pop();
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createPoints();
      drawLines();
    };

    window.addEventListener('mousemove', handleMouseMoveGlobal);
    window.addEventListener('resize', handleResize);

    createPoints();
    drawLines();

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveGlobal);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="header__interactive-canvas" />;
};

export default InteractiveCanvas;
