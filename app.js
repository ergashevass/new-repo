let container = document.querySelector(".container");
let box = document.querySelector(".box");
let button = document.querySelector(".add");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let button1 = document.querySelector(".add1");
let button2 = document.querySelector(".add2");
function init() {
  let buttons = document.createElement("div");
  buttons.classList.add("buttons");
  box.appendChild(buttons);

  let buttons2 = document.createElement("div");
  buttons2.classList.add("buttons2");
  box2.appendChild(buttons2);

  let buttons3 = document.createElement("div");
  buttons3.classList.add("buttons3");
  box3.appendChild(buttons3);

  for (let i = 1; i < 5; i++) {
    let todo = document.createElement("div");
    todo.classList.add("todo-1");
    buttons.appendChild(todo);
    todo.innerText = `To Do #${i}`;
  }

  for (let i = 1; i < 5; i++) {
    let ip = document.createElement("div");
    ip.classList.add("ip");
    buttons2.appendChild(ip);
    ip.innerText = `IP #${i}`;
  }

  for (let i = 1; i < 5; i++) {
    let donee = document.createElement("div");
    donee.classList.add("donee");
    buttons3.appendChild(donee);
    donee.innerText = `Done #${i}`;
  }

  button.addEventListener("click", () => {
    for (let i = 0; i < 1; i++) {
      let todo = document.createElement("div");
      todo.classList.add("todo-1");
      buttons.appendChild(todo);
      todo.innerText = `New #${i}`;
    }
  });

  button1.addEventListener("click", () => {
    for (let i = 0; i < 1; i++) {
      let ip = document.createElement("div");
      ip.classList.add("ip");
      buttons2.appendChild(ip);
      ip.innerText = `New IP`;
    }
  });

  button2.addEventListener("click", () => {
    for (let i = 0; i < 1; i++) {
      let donee = document.createElement("div");
      donee.classList.add("donee");
      buttons3.appendChild(donee);
      donee.innerText = `New Done`;
    }
  });
}

init();
