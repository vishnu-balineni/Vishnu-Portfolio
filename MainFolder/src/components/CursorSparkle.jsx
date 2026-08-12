import React, { useEffect } from 'react';

const CursorSparkle = () => {
  useEffect(() => {
    let animationFrameId;
    let particles = [];
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    
    // Create a container for the sparkles
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9998';
    document.body.appendChild(container);

    const createParticle = (x, y, dx = 0, dy = 0) => {
      const particle = document.createElement('div');
      
      const size = Math.random() * 4 + 2; 
      // Original colors but glassy/translucent
      const colors = [
        'rgba(255, 42, 42, 0.7)',   // Red
        'rgba(255, 115, 115, 0.7)', // Light Red
        'rgba(255, 255, 255, 0.8)', // White
        'rgba(255, 215, 0, 0.7)'    // Gold
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.position = 'absolute';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.borderRadius = '50%';
      // Soft glow
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      particle.style.opacity = '1';
      particle.style.transform = 'translate(-50%, -50%)';
      particle.style.transition = 'none'; 
      
      container.appendChild(particle);

      // Trailing backwards based on mouse movement velocity (dx, dy)
      // If dx,dy are 0 (like in the heart anim), just slight random scatter
      const vx = -dx * 0.15 + (Math.random() - 0.5) * 1.5;
      const vy = -dy * 0.15 + (Math.random() - 0.5) * 1.5;
      
      particles.push({
        el: particle,
        x,
        y,
        vx,
        vy,
        life: 1, 
        decay: Math.random() * 0.02 + 0.02 
      });
    };

    const handleMouseMove = (e) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      
      for (let i = 0; i < 4; i++) {
        createParticle(e.clientX, e.clientY, dx, dy);
      }
    };

    const animate = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= p.decay;
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.life <= 0) {
          if (p.el.parentNode === container) {
            container.removeChild(p.el);
          }
          particles.splice(i, 1);
        } else {
          p.el.style.left = `${p.x}px`;
          p.el.style.top = `${p.y}px`;
          p.el.style.opacity = p.life;
          p.el.style.transform = `translate(-50%, -50%) scale(${p.life})`;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    // Draw heart shape programmatically after load
    let heartTimeout;
    const drawHeart = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2 - 50; // slightly above center
      let t = 0;
      
      const drawStep = () => {
        if (t > Math.PI * 2) return;
        
        // Parametric equations for a heart
        const scale = 18;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        
        const screenX = centerX + x * scale;
        const screenY = centerY + y * scale;
        
        // Generate a cluster of particles at the current point
        for (let i = 0; i < 8; i++) {
          createParticle(screenX + (Math.random()-0.5)*15, screenY + (Math.random()-0.5)*15, 0, 0);
        }
        
        t += 0.08; // speed of drawing
        requestAnimationFrame(drawStep);
      };
      
      drawStep();
    };

    heartTimeout = setTimeout(() => {
      drawHeart();
    }, 4000); // Waits 4 seconds for the Preloader "curtain" to fully disappear

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(heartTimeout);
      if (container.parentNode) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return null;
};

export default CursorSparkle;
