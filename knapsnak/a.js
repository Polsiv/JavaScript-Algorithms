const array = [];

for (let i = 0; i < 6; i++) {
  const binary = [];
  const weightMax = 16;


  for (let j = 0; j < 10; j++) {
    binary.push(0);
  }

const indicesElegidos = [];
while (indicesElegidos.length < 4) {
  const indiceAleatorio = Math.floor(Math.random() * 10);
  if (!indicesElegidos.includes(indiceAleatorio)) {
    indicesElegidos.push(indiceAleatorio);
    binary[indiceAleatorio] = 1;
  }
}

  let weight = 0;
  let Benefit = 0;

  for (let l = 0; l < binary.length; l++) {
    if (binary[l] === 1) {
      switch (l) {
        case 0:
          weight += 2;
          Benefit += 18;
          break;
        case 1:
          weight += 3;
          Benefit += 28;
          break;
        case 2:
          weight += 4;
          Benefit += 12;
          break;
        case 3:
          weight += 6;
          Benefit += 9;
          break;
        case 4:
          weight += 2;
          Benefit += 25;
          break;
        case 5:
          weight += 3;
          Benefit += 24;
          break;
        case 6:
          weight += 4;
          Benefit += 17;
          break;
        case 7:
          weight += 6;
          Benefit += 5;
          break;
        case 8:
          weight += 3;
          Benefit += 21;
          break;
        case 9:
          weight += 6;
          Benefit += 14;
          break;
      }
    }

    //fitness
    var fitness=0;
    if (weight>weightMax) {
        fitness=Benefit-weight;
    }else{
        fitness=Benefit;
    }
  }

  array.push({
    binary,
    weight,
    Benefit,
    fitness
  });
}

//======================================================================================================================

array.sort((a, b) => b.fitness - a.fitness);


const father1 = array[0].binary;
const father2 = array[1].binary;

//Cruce

const puntoCruce = Math.floor(father1.length / 2);

// Se crea un nuevo array vacío para almacenar el resultado del cruce
const hijo1 = [];

// Se copia la primera mitad del primer array en el hijo1
for (let i = 0; i < puntoCruce; i++) {
    hijo1.push(father1[i]);
}

// Se copia la segunda mitad del segundo array en el hijo1
for (let i = puntoCruce; i < father2.length; i++) {
    hijo1.push(father2[i]);
}

const hijo2 = [];
// Se copia la primera mitad del primer array en el hijo1
for (let i = 0; i < puntoCruce; i++) {
    hijo2.push(father2[i]);
  }
  
  // Se copia la segunda mitad del segundo array en el hijo1
  for (let i = puntoCruce; i < father2.length; i++) {
    hijo2.push(father1[i]);
  }

  array[4].binary.splice(0, array[4].binary.length, ...hijo1);
  array[5].binary.splice(0, array[5].binary.length, ...hijo2);

//volver a calcular los valores de benefico, weight y fitness
function weights(binary) {
  let weight=0;
for (let l = 0; l < binary.length; l++) {
    if (binary[l] === 1) {
        switch (l) {
            case 0:
              weight += 2;  
              break;
            case 1:
              weight += 3;            
              break;
            case 2:
              weight += 4;    
              break;
            case 3:
              weight += 6;            
              break;
            case 4:
              weight += 2;      
              break;
            case 5:
              weight += 3;             
              break;
            case 6:
              weight += 4;       
              break;
            case 7:
              weight += 6;      
              break;
            case 8:
              weight += 3;            
              break;
            case 9:
              weight += 6;            
              break;
            }
        }
    }
    return weight;
}

function Benefits(binary) {
let Benefit=0;
for (let l = 0; l < binary.length; l++) {
    if (binary[l] === 1) {
        switch (l) {
        case 0:
          Benefit += 18;
          break;
        case 1:
          Benefit += 28;
          break;
        case 2:
          Benefit += 12;
          break;
        case 3:
          Benefit += 9;
          break;
        case 4:
          Benefit += 25;
          break;
        case 5:
          Benefit += 24;
          break;
        case 6:
          Benefit += 17;
          break;
        case 7:
          Benefit += 5;
          break;
        case 8:
          Benefit += 21;
          break;
        case 9:
          Benefit += 14;
          break;
            }
        }
    }
    return Benefit;
}

array[4].weight=weights(array[4].binary);
array[5].weight=weights(array[5].binary);
array[4].Benefit=Benefits(array[4].binary);
array[5].Benefit=Benefits(array[5].binary);

function fit(weight,Benefit) {
 let Max=16;
 let Fitness=0;
    if (weight>Max) {
     Fitness=Benefit-weight;
 }else{
     Fitness=Benefit;
 }
 return Fitness;
}
array[4].fitness=fit(array[4].weight,array[4].Benefit);
array[5].fitness=fit(array[5].weight,array[5].Benefit);



let position1 = [];
let position2 = [];

while (position1.length < 3 || position2.length < 3) {
  let pos1 = Math.floor(Math.random() * array[2].binary.length);
  let pos2 = Math.floor(Math.random() * array[3].binary.length);

  if (!position1.includes(pos1)) {
    position1.push(pos1);
  }

  if (!position2.includes(pos2)) {
    position2.push(pos2);
  }
}

for (let i = 0; i < position1.length; i++) {
  let pos1 = position1[i];
  let pos2 = position2[i];

  let valor1 = array[2].binary[pos1];
  let valor2 = array[3].binary[pos2];

  array[2].binary[pos1] = valor2;
  array[3].binary[pos2] = valor1;
}


array[2].weight=weights(array[2].binary);
array[3].weight=weights(array[3].binary);
array[2].Benefit=Benefits(array[2].binary);
array[3].Benefit=Benefits(array[3].binary);

array[2].fitness=fit(array[2].weight,array[2].Benefit);
array[3].fitness=fit(array[3].weight,array[3].Benefit);

console.log(array);