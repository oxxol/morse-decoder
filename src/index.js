const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrayNumbers = [];
let key = '';
let arrayKeys = [];
    for (i = 0; i < expr.length; i = i + 10) {
        arrayNumbers.push(expr.substring(i, i + 10))
  
};
console.log(arrayNumbers.length)
arrayNumbers.forEach((el) => {
        if (el === '**********') {
            key = ' ';
            arrayKeys.push(key)
        }
        else {
            for (let j = 0; j < 10; j = j + 2) {
                
                if (el.substring(j, (j + 2)) === '00') {
                    key = key + '';
                }
                    else if (el.substring(j, j + 2) === '11') {
                    key = key + '-';
                }
                    else if (el.substring(j, j + 2) === '10') {
                    key = key + '.';
                };
            } arrayKeys.push(key)
            
    }key = '';
    return arrayKeys;
    } 
    );
    let string = '';
    let letter = '';
arrayKeys.forEach(function (el) {
        if (el == ' ') {
            letter = ' ';
        }
        else {
            letter = MORSE_TABLE[el];
            
        }
    string = string + letter;  
    letter = '';
        
        return string;
        
})
    return string;

}

module.exports = {
    decode
}