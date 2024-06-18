document.addEventListener('DOMContentLoaded', () => {
  const gridOverlay = document.querySelector('.grid-overlay');
  const gridSize = 10;
  const imageSize = 500;
  let hoverTimer;
  let activeCell = null;

  
  for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
          const cell = document.createElement('div');
          cell.classList.add('grid-cell');
          cell.style.backgroundPosition = `${-col * (imageSize / gridSize)}px ${-row * (imageSize / gridSize)}px`;
          gridOverlay.appendChild(cell);

          
          cell.addEventListener('mouseover', () => {
              
              document.querySelectorAll('.grid-cell').forEach(c => {
                  if (c !== cell) {
                      c.classList.add('darken');
                  }
              });

              
              clearTimeout(hoverTimer);

              
              cell.style.transform = 'scale(2.5)';
              activeCell = cell; 
          });

          cell.addEventListener('mouseover', () => {
            
            document.querySelectorAll('.grid-cell').forEach(c => {
                if (c !== cell) {
                    c.classList.add('darken');
                }
            });
        });
  
        cell.addEventListener('mouseout', () => {
            
            document.querySelectorAll('.grid-cell').forEach(c => {
                c.classList.remove('darken');
            });
        });
      }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const blinkingText = document.getElementById('blinking-text');
  let isBlack = true; 

  setInterval(function() {
      if (isBlack) {
          blinkingText.style.color = 'white';
      } else {
          blinkingText.style.color = 'black';
      }
      isBlack = !isBlack; 
  }, 1000); 
});


