function calculateHandler(event) {
  // read & process user input from event
  let input1 = parseFloat(document.getElementById("inputbox1").value);
  let input2 = parseFloat(document.getElementById("inputbox2").value);
  let op = document.getElementById("operation").value;
  let result;
  // pass user input through core logic
  result = doMath(op,input1,input2);
  // render output to DOM for user
  document.getElementById("result").innerHTML = result;
  // log user action for developers
  console.log(`${input1} ${op} ${input2} = ${result}`);
  // return true for the browser
  return true;
}
