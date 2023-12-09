const popup = document.getElementById("popup");
const addButton = document.getElementById("add-button");
const closeButton = document.getElementById("close-button");
const submitButton = document.getElementById("submit-button");
const textfield = document.getElementById("popup-textfield");
const logsButton = document.getElementById("viewLogs-button");
const logsContainer = document.getElementById("logs-container");
const otherContainer = document.getElementById("value-container");
const browseButton = document.getElementById("browse-button");
const fileInput = document.getElementById("file-input");
const uploadButton = document.getElementById("upload-button");
const printButton = document.getElementById("print-button");

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

function enableElementById(id) {
  document.getElementById(id).disabled = false;
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

function populateHeaderValues(id, value) {
  document.getElementById(id).textContent = value;
}

function changeColorById(id) {
  document.getElementById(id).style.backgroundColor = "#b7efc5";
  document.getElementById(id).style.color = "#155d27";
}

logsButton.addEventListener("click", () => {
  logsContainer.style.display = "block";
  otherContainer.style.display = "none";
});

// Hide the "Logs" container and show the "Other" container when the cancel icon is clicked
const cancelIcon = logsContainer.querySelector("#cancel-icon");
cancelIcon.addEventListener("click", () => {
  logsContainer.style.display = "none";
  otherContainer.style.display = "block";
});

browseButton.addEventListener("click", () => {
  fileInput.click(); // Trigger the file input when the "Browse" button is clicked
});

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    uploadButton.style.display = "block";
  } else {
    uploadButton.style.display = "none";
  }
});

const logsArray = ["Log 1", "Log 2", "Log 3", "Log 4", "Log 5"];

// function to append logs to the logs list and to display logs

function appendLogs(logsArray) {
  const logsList = document.getElementById("logs-list");

  logsArray.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    logsList.appendChild(listItem);
    listItem.style.marginBottom = "10px";
  });
}
// function to add new log to the logs array

function addNewLogToLogsArray(newLog) {
  logsArray.push(newLog);
}

addNewLogToLogsArray("Log 6");
addNewLogToLogsArray("Log 7");
addNewLogToLogsArray("Log 8");
addNewLogToLogsArray("Log 9");
addNewLogToLogsArray("Log 10");
addNewLogToLogsArray(
  "Log 11 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
);

//call the function to display logs
appendLogs(logsArray);

populateDropdown("select1", data1);
populateDropdown("select2", data2);
populateDropdown("select3", data3);

populateHeaderValues("imei", 123456789);
populateHeaderValues("iccid", "ICCID_VALUE");
populateHeaderValues("gsm-signal", "AIRTEL");
populateHeaderValues("version", "1.3.5");

populateValues(valuesArray);

changeColorById("id1");

function displayToast(message) {
  const toastContainer = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = message;

  toastContainer.appendChild(toast);

  // Show the toast
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Hide the toast after 10 seconds
  setTimeout(() => {
    toast.classList.remove("show");

    // Remove the toast element from the DOM after transition
    setTimeout(() => {
      toast.remove();
    }, 500); // Assuming the transition duration is 0.5 seconds
  }, 10000); // Duration to show the toast
}

// Example: Call displayToast function with different messages
displayToast("This is an error message!");
setTimeout(() => {
  displayToast("Another error occurred!");
  displayToast("Yet another error!");
}, 2000); // Simulate a delay before showing multiple messages
setTimeout(() => {
  displayToast("And one more error!");
}, 5000); // Simulate a delay before showing the next message

function printImage(imagePath) {
  printJS({
    printable: imagePath,
    type: "image",
    header: "image",
    imageStyle: "width:50%;",
  });
}

printButton.addEventListener("click", () => {
  console.log("Print button clicked");
  printImage("./assets/printer.jpg");
});
