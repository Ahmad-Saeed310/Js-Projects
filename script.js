// const { createElement } = require("react")

const add = document.getElementById("add");
const del = document.getElementById("del");
const edit = document.getElementById("edit");
const ordered = document.querySelector(".delete");
const texts = document.getElementById("texts");
const reveal = document.querySelector(".reveal");

localStorage.setItem("1",texts.value);

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
// del.addEventListener("click", function () {
//   // textField.style.display = "none";
// });


texts.addEventListener("keydown", function (event) {
  // event.preventDefault();
  if (event.key === "Enter")
    {
    textField.classList.add("hidden");
    const cross = document.createElement("i");
    cross.classList.add("ri-delete-back-2-line");
    const edit = document.createElement("i");
    edit.classList.add("ri-pencil-line");
    // cross.innerHTML= "<i class="ri-delete-back-2-line"></i>";
    const li = document.createElement("li");
    li.style.backgroundColor = "";
    li.style.height = "30px";
    li.style.width = "100%";
    li.style.display = "flex";
    li.style.justifyItems = "center"
    li.style.justifyContent = "space-between"

    const checkes = document.createElement("input");
    checkes.setAttribute("type","checkbox")
    const indexed= task.length+1;
    const serial = document.createElement("i");
    serial.textContent = indexed;
localStorage.setItem("1",texts.value);
    li.textContent = localStorage.getItem("1");
    texts.value = "";
    ordered.appendChild(li);
    li.appendChild(cross);
    li.appendChild(checkes);
    li.appendChild(serial);
    li.appendChild(edit);
    cross.addEventListener("click", function () {
      // task.pop();
      li.remove()
      // cross.remove()
      console.log(task.length)
      // localStorage.setItem(li);

    });
    edit.addEventListener("click",function(){
      console.log(li.textContent)
    })
    checkes.addEventListener("click",function(){
      
      if(checkes.checked){
  
        li.style.textDecoration =  "line-through"
        console.log(checkes.checked)
    }else{
       li.style.textDecoration =  ""
        console.log(checkes.checked)

    }
    })
    task.push(li)
    console.log(task.length+"task array")

    const local = localStorage.getItem("1");
    console.log(local)

  }
});

// console.log(textField.classList);
