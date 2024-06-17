//Add a to do

//access "add todo" button
const button = document.getElementById("add-todo");
console.log(button);

//function to run when button is clicked
function handleAddTodo() {
  console.log("button is clicked");
}
//add event listener
button.addEventListener("click", handleAddTodo);
