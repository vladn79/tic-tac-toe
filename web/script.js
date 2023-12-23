function animateDiagonal() {
      const canvas = document.getElementById('diagonalLineCanvas');
      const context = canvas.getContext('2d');
      const ticTacToeImage = document.getElementById('ticTacToeImage');
      const canvasWidth = ticTacToeImage.width;
      const canvasHeight = ticTacToeImage.height;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    
      const duration = 1500; 
      const lineWidth = 10;
      let startTime;
    
      function drawLine(progress) {
          context.clearRect(0, 0, canvasWidth, canvasHeight);
          context.beginPath();
          context.moveTo(canvasWidth, 0);
          context.lineTo(canvasWidth * (1 - progress), canvasHeight * progress);
          context.strokeStyle = 'white';
          context.lineWidth = lineWidth;
          context.stroke();
      }
    
      function animate(time) {
          if (!startTime) startTime = time;
          const progress = Math.min(1, (time - startTime) / duration);
    
          drawLine(progress);
    
          if (progress < 1) {
              requestAnimationFrame(animate);
          }
      }
    
      requestAnimationFrame(animate);
  }
  