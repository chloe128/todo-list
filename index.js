//Add a to do

//access "add todo" button
const button = document.getElementById("add-todo");
console.log(button);

//function to run when button is clicked
function handleAddTodo() {
  const ul = document.querySelector("ul");

  //create an li to go into my unorder list
  const li = document.createElement("li");
  //console.log("created list item", li);

  //access the input element
  const input = document.querySelector("input");
  //const inputValue = input.value;

  //set the input text to my list item text
  li.textContent = input.value;
  //console.log(li);

  //append my list item to my unordered list(as a child element)
  ul.appendChild(li);
}
//add event listener
button.addEventListener("click", handleAddTodo);
