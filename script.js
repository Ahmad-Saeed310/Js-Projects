// const { createElement } = require("react")

const add = document.getElementById("add");
const del = document.getElementById("del");
const edit = document.getElementById("edit");
const ordered = document.querySelector(".delete");
const texts = document.getElementById("texts");
const reveal = document.querySelector(".reveal");



const task = [];
reveal.addEventListener("click", function () {
  console.log(task.length)
  console.log(texts.value);
});

const textField = document.getElementById("textField");

add.addEventListener("click", function () {
  // alert("button clicked");

  // textField.classList.add("block")

  textField.classList.remove("hidden");
  //   const addingTODO = document.createElement("input");
  //   addingTODO.setAttribute("input", "text");
  //   addingTODO.style.backgroundColor = "red";
  //   addingTODO.style.height = "100px";
  //   ((addingTODO.style.widows = "100%"), (addingTODO.style.display = "absolute"));
  //   ordered.appendChild(addingTODO);
});
del.addEventListener("click", function () {
  // textField.style.display = "none";
});


texts.addEventListener("keydown", function (event) {
  event.preventDefault;
  if (event.key == "Enter")
    {
    textField.classList.add("hidden");
    const cross = document.createElement("i");
    cross.classList.add("ri-delete-back-2-line");
    // cross.innerHTML= "<i class="ri-delete-back-2-line"></i>";
    const li = document.createElement("li");
    li.style.backgroundColor = "red";
    li.style.height = "30px";
    li.style.width = "100%";
    li.innerHTML = texts.value;
    texts.value = "";
    ordered.appendChild(li);
    ordered.appendChild(cross);
    cross.addEventListener("click", function () {
      task.pop();
      console.log(task.length)
    });
    task.push(li)
    console.log(task.length+"task array")

  }
});

// console.log(textField.classList);
