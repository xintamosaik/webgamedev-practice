import { systems } from './core/ecs.js';

export function initGameLoop() {
  const TICK_RATE = 60;
  const MS_PER_TICK = 1000 / TICK_RATE;
  let lastTime = performance.now();
  let accumulator = 0;

  function gameLoop() {
    const currentTime = performance.now();
    let deltaTime = currentTime - lastTime;
    lastTime = currentTime;
    
    if (deltaTime > 1000) deltaTime = MS_PER_TICK;
    
    accumulator += deltaTime;
    
    while (accumulator >= MS_PER_TICK) {
      systems.forEach(system => system.update(MS_PER_TICK));
      accumulator -= MS_PER_TICK;
    }
    
    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);
}
