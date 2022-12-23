const challengeInput = require('./input')
const exampleInput = require('./exampleInput')

function findBiggerMeasurements(input){
    const splitInput =  input.split('\n');
    let counter = 0;
    for (let index = 0; index < splitInput.length; index++) {
        const number = splitInput[index];
        const previousNumber = splitInput[index - 1];
        if(number > previousNumber){
            counter++;
        }
    }
    return counter;
}

findBiggerMeasurements(exampleInput);
findBiggerMeasurements(challengeInput);