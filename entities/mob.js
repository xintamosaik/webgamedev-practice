import { entities } from '../core/ecs.js';
import { createPositionComponent } from '../components/position.js';
import { createVelocityComponent } from '../components/velocity.js';
import { createAIComponent } from '../components/ai.js';

export default function addMob(x, y) {
  const id = entities.length;
  const entity = {
    id,
    components: {
      position: createPositionComponent(x, y),
      velocity: createVelocityComponent(),
      ai: createAIComponent(),
      type: { name: 'mob' }
    }
  };
  entities.push(entity);
  return entity;
}
