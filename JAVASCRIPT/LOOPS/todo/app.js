let input = prompt("What would you like to do?");

const todos = ["Collect", "Milk"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("************");
  } else if (input === "new") {
    const newTodo = prompt("New todo");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete") {
    const index = prompt("Enter the index to delete");
    const deleted = todos.splice(index, 1);
    console.log(deleted);
  }
  input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");
