function animateDiagonal() {
      const contContainer = document.querySelector('.cont');
      const menuContainer = document.getElementById('menu');
      const canvas = document.getElementById('diagonalLineCanvas');
      const context = canvas.getContext('2d');
      const ticTacToeImage = document.getElementById('ticTacToeImage');
      const canvasWidth = ticTacToeImage.width;
      const canvasHeight = ticTacToeImage.height;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
  
      const lineDuration = 1500;
      const fadeDuration = 500; 
      const lineWidth = 10;
      let lineStartTime;
      let fadeStartTime;
  
      function drawLine(progress) {
          context.clearRect(0, 0, canvasWidth, canvasHeight);
          context.beginPath();
          context.moveTo(canvasWidth, 0);
          context.lineTo(canvasWidth * (1 - progress), canvasHeight * progress);
          context.strokeStyle = 'white';
          context.lineWidth = lineWidth;
          context.stroke();
      }
  
      function animateLine(time) {
          if (!lineStartTime) lineStartTime = time;
          const lineProgress = Math.min(1, (time - lineStartTime) / lineDuration);
  
          drawLine(lineProgress);
  
          if (lineProgress < 1) {
              requestAnimationFrame(animateLine);
          } else {
              fadeStartTime = performance.now();
              requestAnimationFrame(animateFade);
          }
      }
  
      function animateFade(time) {
          const fadeProgress = Math.min(1, (time - fadeStartTime) / fadeDuration);
          contContainer.style.opacity = 1 - fadeProgress;
          menuContainer.style.opacity = fadeProgress;
  
          if (fadeProgress < 1) {
              requestAnimationFrame(animateFade);
          } else {
              contContainer.style.display = 'none';
              menuContainer.style.display = 'block';
          }
      }
  
      requestAnimationFrame(animateLine);
  }
  