let population = [];
let fathers = [];
let experimentation = [];
for(let a = 0; a < 10; a++){

let diagonal;
let childArray = [];
let counterA=0,counterD=0;

while (childArray.length < 8) {
  const random = Math.floor(Math.random() * 8);
  if (!childArray.includes(random)) {
    childArray.push(random);
  }
}

//Fitness=========================================================================

population[a] = childArray; 

function checkDiagonal(chromosome) {
  let diagonals = false;
  for(i = 0; i < chromosome.length - 1; i++) {
    for(j = i + 1; j < chromosome.length; j++) {
      if (Math.abs(i - j) === Math.abs(chromosome[i] - chromosome[j])) {
        diagonals = true;
      }
    }
  }
  return diagonals;
}

  for(let i = 0; i < 8; i++){
    if(childArray[i] + 1 == childArray[i + 1]){
        counterA++;
    }

    if(childArray[i] - 1 == childArray[i - 1]){
        counterA++;
  }
}

for(let i = 7; i >= 0; i--){
    if(childArray[i] - 1 == childArray[i - 1]){
        counterD++;
    }
    if(childArray[i] - 1 == childArray[i + 1]){
        counterD++;
  }
}

diagonal = checkDiagonal(childArray);
    
let conflict = counterA + counterD;

  if(conflict == 0 && diagonal == false){
    fathers.push(childArray)
    }
  
  if(conflict >= 1 || diagonal == true){
    experimentation.push(childArray)
  }
}

console.log(experimentation)
//console.log(fathers)

//Crossover========================================================

crossover(experimentation)

function crossover(experimentation) {
  let newpopulation = [];
  for (let i = 0; i < experimentation.length - 1; i += 2) {
    const parent1 = experimentation[i];
    const parent2 = experimentation[i + 1];
    const crossoverPoint = Math.floor(Math.random() * parent1.length);
    const child1 = parent1.slice(0, crossoverPoint).concat(parent2.slice(crossoverPoint));
    const child2 = parent2.slice(0, crossoverPoint).concat(parent1.slice(crossoverPoint));
    newpopulation.push(child1);
    newpopulation.push(child2);
  }
  return newpopulation;
}

let newpopulation = crossover(experimentation);

console.log(newpopulation);

//Mutation===================================================================

let mutedpopulation = JSON.parse(JSON.stringify(newpopulation))//DEEPCOPY

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

newMutedPopulation = mutation(mutedpopulation);
console.log(newMutedPopulation);




