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
    let clone = Object.assign({}, MORSE_TABLE);
    let arr = expr.split("");
    let arr_new = [];
    let i = 0;
    let arr_new2 = [];
    let result = '';

    for (let j = 0; j < arr.length / 10; j++) {
        arr_new[j] = arr.slice(i, i + 10);
        i = i + 10;
    }
    for (i = 0; i < arr_new.length; i++) {
        arr_new2[i] = arr_new[i].join("");

    }
    for (let key in clone) {

        let new_key = transform(key);
        clone[new_key] = clone[key];
        delete clone[key];

    }
    for (i = 0; i < arr_new2.length; i++) {
        if (arr_new2[i] == "**********") {
                result += " ";
        } else {
        
        for (let key in clone) {
            if (key == arr_new2[i]) {
                result += clone[key];
            } 
            }
        }
    }
return(result);
    

    function transform(x) {

        let arr_res = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
        let arr_morse = x.split("");
        for (let j = 0; j < arr_morse.length; j++) {
            if (arr_morse[j] == '.') {
                arr_res.push('1');
                arr_res.push('0');
                arr_res.splice(0, 2);
            } else if (arr_morse[j] == '-') {
                arr_res.push('1');
                arr_res.push('1');
                arr_res.splice(0, 2);
            } else {
                return;
            }
        }

        return arr_res.join().split(",").join("");
    }
}

module.exports = {
    decode
}