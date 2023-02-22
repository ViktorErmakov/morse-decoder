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
    
    let result = '';
    let a = 0;
    for (let index = 10; index <= expr.length; index+=10) {
        let str = expr.slice(a, index);
        // console.log(str);
        if(str === '**********'){
            result += ' '
            a += 10;
        }else{
            str = Number(str);
            str = str.toString();
            // console.log(str);
            let char = '';
            for (let index = 0; index < str.length; index += 2) {
                let charNum = str.substr(index, 2);
                if(charNum === '10'){
                    char += '.';
                }else{
                    char += '-';
                }
            }
            // console.log(char);
            result += MORSE_TABLE[char];
            // arrChar.push(MORSE_TABLE[char]);
            a += 10;
        }
    }
    console.log(result);
    // for (const char of expr) {
        
        //     if(char === ' '){
    //         strMorze += '**********';
    //     } else {
    //         let charMorze = Object.keys(MORSE_TABLE)[morseValue.indexOf(char)];
    //         let numStr = '';
    //         for (const a of charMorze) {
    //             if(a === '.'){
    //                 numStr += '10';
    //             }else if(a === '-'){
    //                 numStr += '11';
    //             }
    //         }
    //         while (numStr.length < 10) {
    //             numStr = '0' + numStr;
    //         }
    //         strMorze += numStr;
    //     }
    // }
    // console.log(strMorze);
    // console.log(strMorze === "hello world");
    return result;
}

module.exports = {
    decode
}

decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010');