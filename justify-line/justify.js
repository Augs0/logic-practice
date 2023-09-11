function justifyText (str, maxLength) {
  if(str.length > maxLength){
    return "String exceeds maximum line length"
  }

  const numOfSpacesToAdd = maxLength - str.length;
  let splitStr = str.split(' ');

  if(splitStr.length === 1) {
    return " ".repeat(numOfSpacesToAdd) + str;
  }
  
  splitStr = splitStr.map((word, index) => {
    if(index === splitStr.length-1) return word;
    return word + " ";
  })

   let counter = 0;
   let currentWordIndex = 0;

   while(counter < numOfSpacesToAdd) {
      splitStr[currentWordIndex] = splitStr[currentWordIndex] + " ";
      counter++;
      currentWordIndex++
      if(currentWordIndex === splitStr.length - 1){
        currentWordIndex = 0;
      }
  }

  let result = '';
  
  for (let i = 0; i < splitStr.length; i++) {
    const word = splitStr[i];
    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      result += letter;
    }
    
  }
  return result;
}

module.exports = { justifyText }