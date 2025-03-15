import { entities } from '../core/ecs.js';
import { createPositionComponent } from '../components/position.js';
import { createVelocityComponent } from '../components/velocity.js';
import { createInputComponent } from '../components/input.js';

export function createPlayer(x, y) {
  const id = entities.length;
  const entity = {
    id,
    components: {
      position: createPositionComponent(x, y),
      velocity: createVelocityComponent(),
      input: createInputComponent(),
      type: { name: 'player' }
    }
  };
  entities.push(entity);
  return entity;
}

