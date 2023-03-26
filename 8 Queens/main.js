
let population = [];
let fathers = [];
let experimentation = [];
for(let a = 0; a < 100; a++){

let diagonal = 0;
let childArray = [];
let counterA=0,counterD=0;


while (childArray.length < 8) {
  const random = Math.floor(Math.random() * 8);
  if (!childArray.includes(random)) {
    childArray.push(random);
  }
}
population[a] = childArray;



//Fitness============================

  for(let i = 0; i < 8; i++){
    if(childArray[i] + 1 == childArray[i + 1]){
        counterA++;
    }

    if(childArray[i] + 1 == childArray[i - 1]){
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
detectDiagonals(childArray);
    function detectDiagonals(chromosome) {
      const diagonals = {
        topLeftDiagonal: 0,
        topRightDiagonal: 0,
        bottomLeftDiagonal: 0,
        bottomRightDiagonal: 0,
      };
    
      for (let i = 0; i < chromosome.length; i++) {
        for (let j = i + 1; j < chromosome.length; j++) {
          if (chromosome[i] - i === chromosome[j] - j) {
            diagonals.topLeftDiagonal++;
          }
          if (chromosome[i] + i === chromosome[j] + j) {
            diagonals.topRightDiagonal++;
          }
          if (chromosome[i] + i === chromosome[j] + j - 2 * (j - i)) {
            diagonals.bottomLeftDiagonal++;
          }
          if (chromosome[i] - i === chromosome[j] - j + 2 * (j - i)) {
            diagonals.bottomRightDiagonal++;
          }
        }
      }
      diagonal=diagonals.topLeftDiagonal+diagonals.topRightDiagonal+diagonals.bottomLeftDiagonal+diagonals.bottomRightDiagonal;
      return diagonal;
    }
    
let nonvalid = counterA + counterD + diagonal;

  if(nonvalid == 0){
    fathers.push(childArray)
    }
  
  if(nonvalid >= 1){
    experimentation.push(childArray)
  }
}


console.log(experimentation);
console.log(fathers)





