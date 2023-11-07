const popup = document.getElementById("popup");
const addButton = document.getElementById("add-button");
const closeButton = document.getElementById("close-button");
const submitButton = document.getElementById("submit-button");
const textfield = document.getElementById("popup-textfield");

// Data for the dropdown options,
const data1 = ["Option 1", "Option 2", "Option 3", "Option 4"];
const data2 = ["Choice A", "Choice B", "Choice C", "Choice D"];
const data3 = ["category 1", "category 2", "category 3", "category 4"];

// Data for the boxes
const valuesArray = [
  { label: "value1", id: "id1" },
  { label: "value2", id: "id2" },
  { label: "value3", id: "id3" },
  { label: "value4", id: "id4" },
  { label: "value5", id: "id5" },
  { label: "value6", id: "id6" },
  { label: "value7", id: "id7" },
  { label: "value8", id: "id8" },
  { label: "value9", id: "id9" },
  { label: "value10", id: "id10" },
];
addButton.addEventListener("click", () => {
  popup.style.display = "flex";
  textfield.value = "";
  document.body.classList.add("active");
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
  document.body.classList.remove("active");
});

submitButton.addEventListener("click", () => {
  console.log(textfield.value);
  popup.style.display = "none";
  document.body.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.body.classList.remove("active");
  }
});

function populateDropdown(selectId, data) {
  const select = document.getElementById(selectId);

  select.innerHTML = "";

  data.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    select.appendChild(option);
  });
}


function disableElementById(id) {
  document.getElementById(id).disabled = true;
}

function populateValues(valuesArray) {
  const gridContainer = document.getElementById("grid-container");

  // Loop through the array and create boxes
  valuesArray.forEach((item) => {
    const box = document.createElement("div");
    box.className = "box";
    box.id = item.id;
    box.textContent = item.label;
    gridContainer.appendChild(box);
  });
}

function changeColorById(id) {
  document.getElementById(id).style.backgroundColor = "#b0c4b1";
  document.getElementById(id).style.color = "#386641";
}

populateDropdown("select1", data1);
populateDropdown("select2", data2);
populateDropdown("select3", data3);

populateValues(valuesArray);

disableElementById("dsn");
changeColorById("id1");
