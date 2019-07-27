

var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userNumber = document.getElementById("number");
var userMessage = document.getElementById("message");


function myFunction() {
  console.log(userName.value);
  console.log(userEmail.value);
  console.log(userNumber.value);
  console.log(userMessage.value);
}

// var output = document.getElementById("demo");

// var res = userName.value;
// output.innerHTML = `Thanks for Submitting data here....`;
// var p = userName.value + `Thanks for Submitting data here....`;
// console.log(p)
function Submit(){
  // console.log(`${userName} + Thanks for Sbumitting data here....`);
  // // document.getElementById("demo").innerHTML = `${userName} + Thanks for Sbumitting data here....`;
  // console.log(res)
  document.write("Thanks for Subumitting data here....");
  // document.body.append(output);
}