const list = document.querySelector("ul");

const valueArray = [];

setInterval(genBar, 1000);

function genBar() {
  const rndNum = Math.floor(Math.random() * 100);
  valueArray.push(rndNum);
  const li = document.createElement("li");
  li.style.setProperty("--height", rndNum);
  list.appendChild(li);
  if (valueArray.length > 20) {
    valueArray.shift();
  }

  if (list.children.length > 20) {
    console.log("list length virker");
    list.removeChild(list.children[0]);
  }

  console.log("Generating Bars", valueArray);
}
