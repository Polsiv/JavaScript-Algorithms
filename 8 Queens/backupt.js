let population = [];
let fathers = [];
let experimentation = [];
let solution = 0;
//generate population of choromosomes

for (let a = 0; a < 10; a++) {
  let childArray = [];

  while (childArray.length < 8) {
    const random = Math.floor(Math.random() * 8);
    if (!childArray.includes(random)) {
      childArray.push(random);
    }
  }
  population[a] = childArray;
}

//Fitness
fitness(population);

function fitness() {
  for (let b = 0; b < population.length; b++) {
    let childArray = [];
    childArray = population[b];
    let duplicated;
    let diagonal;
    let counterA = 0,
      counterD = 0;

    function checkDiagonal(chromosome) {
      let diagonals = false;
      for (i = 0; i < chromosome.length - 1; i++) {
        for (j = i + 1; j < chromosome.length; j++) {
          if (Math.abs(i - j) === Math.abs(chromosome[i] - chromosome[j])) {
            diagonals = true;
          }
        }
      }
      return diagonals;
    }

    function hasDuplicates(chromosome) {
      let seen = {};
      for (let i = 0; i < chromosome.length; i++) {
        if (chromosome[i] in seen) {
          return true;
        }
        seen[chromosome[i]] = true;
      }
      return false;
    }

    for (let i = 0; i < 8; i++) {
      if (childArray[i] + 1 == childArray[i + 1]) {
        counterA++;
      }

      if (childArray[i] - 1 == childArray[i - 1]) {
        counterA++;
      }
    }

    for (let i = 7; i >= 0; i--) {
      if (childArray[i] - 1 == childArray[i - 1]) {
        counterD++;
      }
      if (childArray[i] - 1 == childArray[i + 1]) {
        counterD++;
      }
    }

    diagonal = checkDiagonal(childArray);
    duplicated = hasDuplicates(childArray);

    let conflict = counterA + counterD;

    if (conflict >= 1 || diagonal == true || duplicated == true) {
      experimentation.push(childArray);
    }

    if (conflict == 0 && diagonal == false && duplicated == false) {
      fathers.push(childArray);
      solution ++;
    }
  }

if(solution >= 1){
  console.log(fathers)
  }

if(solution == 0){
  console.log(experimentation)
  geneticAlgorithm(experimentation);
}
}


//-------------------------------------------------------------------------------\


function geneticAlgorithm(expPopulation) {
  let experimentationarray = expPopulation;

  //Crossover============

  crossover(experimentationarray);

  function crossover(experimentation) {
    let newpopulation = [];
    for (let i = 0; i < experimentation.length - 1; i += 2) {
      const parent1 = experimentation[i];
      const parent2 = experimentation[i + 1];
      const crossoverPoint = Math.floor(Math.random() * parent1.length);
      const child1 = parent1
        .slice(0, crossoverPoint)
        .concat(parent2.slice(crossoverPoint));image.png
      const child2 = parent2
        .slice(0, crossoverPoint)
        .concat(parent1.slice(crossoverPoint));
      newpopulation.push(child1);
      newpopulation.push(child2);
    }
    return newpopulation;
  }
  let newpopulation = crossover(experimentation);
  console.log(newpopulation)

  //Mutation==========

  let mutedpopulation = JSON.parse(JSON.stringify(newpopulation)); //DEEPCOPY

  function mutation(mutedpopulation) {
    for (let i = 0; i < mutedpopulation.length; i++) {
      const chromosome = mutedpopulation[i];
      const index1 = Math.floor(Math.random() * chromosome.length);
      let index2 = Math.floor(Math.random() * chromosome.length);
      while (index2 == index1) {
        index2 = Math.floor(Math.random() * chromosome.length);
      }
      const temp = chromosome[index1];
      chromosome[index1] = chromosome[index2];
      chromosome[index2] = temp;
    }
    return mutedpopulation;
  }
  let newMutedPopulation = mutation(mutedpopulation);
console.log(newMutedPopulation)
}
