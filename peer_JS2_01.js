//
// 1. Start with the number 14 and set that equal to 'value'
var value = 14;
// 2. Create condition logic to check if the value is great or equal to 86
if (value >= 86) {
 value += 14;
}

else {
 value -= 2;
}
// 2-1. If true, add 14 to 'value'
// 2-2. If false, subtract 2 from 'value'
//
// 3. Create a string that is set to 64, add it to 'value'
value += "64";
//
// 4. Create an array, loop through 'value' using charAt, set array[i] to each value
var array = [];
for (var i = 0; i < value.length; i++) {
 array[i] = value.charAt(i);
}
//
// 5. Remove the first and last values off the array
array.shift();
array.pop();

//
// 6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)
var newValue = '';
for (var i = array.length - 1; i >= 0; i--) {
 newValue += array[i];
}

//
// 7. parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;
value = parseInt(value);
newValue = parseInt(newValue);
//
// ******* SWITCH PROGRAMMERS *******
//
// 8. Add 'value' and the new variable created in Step 6 together and store them in 'value'
value += newValue;

//
// 9. If the new value of 'value' is greater than 1326, set 'value' equal to 2. If not, check to see if it is equal to 4040, if it is, set 'value' equal to 13.
// If neither of these are true, set the value to 9.
if(value > 1326) {
 value = 2;
} else if(value == 4040) {
 value = 13;
} else {
 value = 9;
}
//
// 10. Create a while loop that counts down from 9 and increments 'value' by 1.
//
i = 9;

while(i > 0) {
 value += 1;
 i--;
}

// 11. Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there
// is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.
//
function stringConvert(val) {
 val = val.toString();

 if(val.length > 1) {
  val = val.slice(1);
  // var arr = val.split('');
  // arr.shift();
  // val = arr.join('');
 }
 value = val;
 return val;
}
// 12. Call the function.
//
stringConvert(value);
// 13. Console log value. Create an index.html file, link the this Javascript file. Load in the browser, check the value.
//
console.log(value);
// 14. Your answer should be a String value that equals 8. Is that what you got?
//
