import React, { useEffect, useRef } from 'react';
import { breakpoints } from '../Styled/mediaqueries';
import StyledCanvas from './InteractiveCanvas.styled';

const InteractiveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let points = [];
    const maxDistance = 150;
    const bp = {
      mobile: parseInt(breakpoints.mobile, 10),
      tablet: parseInt(breakpoints.tablet, 10),
    };

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }

    function getNumberOfPoints() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= bp.mobile) {
        return 35;
      } else if (screenWidth <= bp.tablet) {
        return 55;
      } else {
        return 120;
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
      points.forEach((point, i) => {
        points.slice(i + 1).forEach((otherPoint) => {
          let distance = Math.hypot(
            point.x - otherPoint.x,
            point.y - otherPoint.y
          );
          if (distance < maxDistance) {
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
          }
        });
      });
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

    function checkAndApplyInteraction() {
      const enableInteraction = window.innerWidth > bp.mobile;
      if (enableInteraction) {
        window.addEventListener('mousemove', handleMouseMoveGlobal);
      } else {
        window.removeEventListener('mousemove', handleMouseMoveGlobal);
      }
    }

    const handleResize = () => {
      if (window.innerWidth > bp.mobile) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createPoints();
        drawLines();
      }
      checkAndApplyInteraction();
    };

    window.addEventListener('resize', handleResize);
    checkAndApplyInteraction();
    createPoints();
    drawLines();

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveGlobal);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <StyledCanvas ref={canvasRef} />;
};

export default InteractiveCanvas;
