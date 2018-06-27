//Description:
//This time no story, no theory. The examples below show you how to write function accum:
//Examples:
//accum("abcd");    // "A-Bb-Ccc-Dddd"
//accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt");    // "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let output = "";
  let dash = "-";
  for ( let i = 0; i < s.length; i++) {
    output = output + s[i].toUpperCase();
    console.log("output before second for: ", output);
    for (let j = 0; j < i; j++) {
      output = output + s[i].toLowerCase();
    }
    output = output + dash;
    console.log("output after second for: ", output);
  }

  return output.slice(0, output.length-1);
}
