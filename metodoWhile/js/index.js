
const shoppingList = [
    "Pane",
    "Uova",
    "Patate",
    "Panino",
    "Formaggio"
];

const output = document.getElementById("output");

let i = 0;
while (i < shoppingList.length) {
    const li = document.createElement("li");
    li.textContent = shoppingList[i];
    output.append(li);
    i++;
}
