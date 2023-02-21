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
    
    let strMorze = '';
    const morseValue = Object.values(MORSE_TABLE);
    for (const char of expr) {
        if(char === ' '){
            strMorze += '**********';
        } else {
            let charMorze = Object.keys(MORSE_TABLE)[morseValue.indexOf(char)];
            let numStr = '';
            for (const a of charMorze) {
                if(a === '.'){
                    numStr += '10';
                }else if(a === '-'){
                    numStr += '11';
                }
            }
            while (numStr.length < 10) {
                numStr = '0' + numStr;
            }
            strMorze += numStr;
        }
    }
    console.log(strMorze);
    console.log(strMorze === "10111111111111101010001110101000101011101010111111101010101011111111101110101010");
    return strMorze;
}

module.exports = {
    decode
}

decode('17bf2596');