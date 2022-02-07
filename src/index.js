const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let res = "";
  let temp = "";
  let startIndex = 0;
  let endIndex = 10;
  for (let i = 0; i < Math.ceil(expr.length / 10); i++) {
    temp += expr.substring(startIndex, endIndex) + " ";
    startIndex += 10;
    endIndex += 10;
  }
  let codes = temp.split(" ");
  let checkLetter = "";


  for (let i = 0; i < codes.length; i++) {

    codes[i] = codes[i].replace(/^0+/g, "");
    if (codes[i] === '') {
        codes[i] = undefined;
    }
  }
  codes = codes.filter(n => n);
  let sentence = new Array();
  codes.forEach(element => {
    let word = '';
    let a = element.match(/.{1,2}/g);
    for(let i = 0; i < a.length;i++) {
        if(a[i] == '11') {
            word+='-';
        }
        else if(a[i] == '10') {
            word+='.';
        }
    }
    if (MORSE_TABLE[word] === undefined) {
        res += ' ';
    }
    else {
       res += MORSE_TABLE[word];

    }
  });
  return res;

}

module.exports = {
  decode,
};
