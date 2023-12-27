//conversion in js
x = "123qw";
cnvrtString = Number(x);//NAN
console.log( typeof cnvrtString); //number


//******converting boolen to string */
x = true;
convertX = String(x);
console.log(convertX);// displays true with the type string

//*********convert string to boolean */
y = "wasoo";
convertY = Boolean(x);
console.log(convertY);//displays true 

y = "";
convertY = Boolean(x);
console.log(convertY); //displays false
