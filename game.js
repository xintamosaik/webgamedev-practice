import { register } from "./core/ecs.js";
import { Input } from "./systems/input.js";
import { Ai } from "./systems/ai.js";
import { Movement } from "./systems/movement.js";
import { Renderer } from "./systems/render.js";
import addPlayer from "./entities/player.js";
import addMob from "./entities/mob.js";
import initLoop from "./loop.js";

// Configure input handling
function setupInput() {
  function handleInput(keyState, isPressed) {
    // Implementation
  }

  window.addEventListener("keydown", (e) => handleInput(e.key, true));
  window.addEventListener("keyup", (e) => handleInput(e.key, false));
}

// Initialize game
function init() {
  // Register systems in execution order
  register(Input);
  register(Ai);
  register(Movement);
  register(Renderer);

  // Create initial entities
  addPlayer(100, 100);
  addMob(200, 150);
  addMob(300, 200);

  // Setup input handling
  setupInput();

  // Start game loop
  initLoop();
}

// Start the game when page loads
window.addEventListener("DOMContentLoaded", init);
