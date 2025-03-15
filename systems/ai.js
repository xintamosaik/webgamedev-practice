import { getEntitiesWith } from '../core/ecs.js';

export const aiSystem = {
  update(dt) {
    const entities = getEntitiesWith('ai', 'velocity');
    
    entities.forEach(entity => {
      const ai = entity.components.ai;
      const velocity = entity.components.velocity;
      
      ai.timeSinceLastChange += dt;
      
      if (ai.timeSinceLastChange >= ai.nextDirectionChange) {
        const speed = 0.05;
        velocity.x = (Math.random() - 0.5) * speed * 2;
        velocity.y = (Math.random() - 0.5) * speed * 2;
        
        ai.timeSinceLastChange = 0;
        ai.nextDirectionChange = 1000 + Math.random() * 2000;
      }
    });
  }
};
