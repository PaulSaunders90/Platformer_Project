const canvas = document.getElementById('canvas') as HTMLCanvasElement,
      context = canvas.getContext('2d')!;


// Initialization Function //
function init(){ 
    gameLoop();
};

// Infinite Game Loop //
function gameLoop() {
    window.requestAnimationFrame(gameLoop);
};

document.addEventListener("DOMContentLoaded", init, false);