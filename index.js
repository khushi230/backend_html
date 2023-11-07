const popup = document.getElementById("popup");
const addButton = document.getElementById("add-button");
const closeButton = document.getElementById("close-button");
const submitButton = document.getElementById("submit-button");
const textfield = document.getElementById("popup-textfield");

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

// Data for the dropdown options,
const data1 = ["Option 1", "Option 2", "Option 3", "Option 4"];
const data2 = ["Choice A", "Choice B", "Choice C", "Choice D"];
const data3 = ["category 1", "category 2", "category 3", "category 4"];

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

populateDropdown("select1", data1);

populateDropdown("select2", data2);

populateDropdown("select3", data3);
