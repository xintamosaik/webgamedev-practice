import { getEntitiesWith } from '../core/ecs.js';

export const Input = {
  update(dt) {
    const entities = getEntitiesWith('input', 'velocity');
    
    entities.forEach(entity => {
      const input = entity.components.input;
      const velocity = entity.components.velocity;
      
      const speed = 0.1;
      velocity.x = 0;
      velocity.y = 0;
      
      if (input.up) velocity.y = -speed;
      if (input.down) velocity.y = speed;
      if (input.left) velocity.x = -speed;
      if (input.right) velocity.x = speed;
    });
  }
};
