exports.sortString = (str) => {
    if(str.length == 0) return '';
    const allWords = str.split(' ');
    let wordsLookUp = {};

    allWords.forEach(word => {
        const match = word.match(/\d+/);
        wordsLookUp[word] = match[0];
    })
    
    const sortedWords = Object.fromEntries(
        Object.entries(wordsLookUp).sort(([,a],[,b]) => a-b)
    );

    let finalStr = '';

    for (const word in sortedWords) {
       finalStr += `${word} `;
    }

   return finalStr.trim();
}