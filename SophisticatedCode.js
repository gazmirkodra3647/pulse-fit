// Filename: SophisticatedCode.js

/**
 * This code implements a complex simulation of a virtual ecosystem.
 * It models the behavior of various species in their natural environment.
 */

// Constants
const WORLD_SIZE = 100; // Size of the virtual world grid
const NUM_SPECIES = 10; // Number of species in the simulation
const MAX_POPULATION = 1000; // Maximum population per species
const INITIAL_RESOURCES = 100; // Initial resources available in the virtual world

// Species class
class Species {
  constructor(name, population, consumptionRate) {
    this.name = name;
    this.population = population;
    this.consumptionRate = consumptionRate;
    this.resources = INITIAL_RESOURCES;
  }

  reproduce() {
    if (this.population < MAX_POPULATION && this.resources >= 10) {
      this.population += Math.floor(this.resources / 10);
      this.resources -= (this.population - 1) * 10;
    }
  }

  consumeResources() {
    const consumedResources = this.population * this.consumptionRate;
    if (this.resources >= consumedResources) {
      this.resources -= consumedResources;
    } else {
      this.resources = 0;
      this.population = Math.floor(this.population * (1 - (consumedResources - this.resources) / (this.population * this.consumptionRate)));
    }
  }
}

// Initialize species
const speciesList = [];
speciesList.push(new Species("Species A", 50, 1));
speciesList.push(new Species("Species B", 30, 1.5));
speciesList.push(new Species("Species C", 20, 2));

// Simulate ecosystem for 100 steps
for (let step = 1; step <= 100; step++) {
  console.log(`Step ${step}:`);
  
  // Reproduction phase
  for (const species of speciesList) {
    species.reproduce();
  }
  
  // Consumption phase
  for (const species of speciesList) {
    species.consumeResources();
  }

  // Display species information
  for (const species of speciesList) {
    console.log(`${species.name}: Population=${species.population}, Resources=${species.resources}`);
  }
  
  console.log(""); // Empty line for readability
}