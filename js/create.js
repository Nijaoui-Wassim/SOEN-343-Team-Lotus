let btnDsn = document.querySelector("#btn-design");
localStorage.setItem('Name','CLICKED');
let name = localStorage.getItem('Name');
  
// (function (){
//     btnDsn.onclick = function() {
//         // btnDsn.textContent = name;
//         console.log("Event Submitted");
//         alert("Event Submitted");
//         window.location.href = "index.html";
//     };
// }

// )();


function addEntry(element, newelement) {
    // Parse any JSON previously stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem(element));
    if(existingEntries == null) existingEntries = [];
    // var entryTitle = document.getElementById("entryTitle").value;
    // var entryText = document.getElementById("entryText").value;
    // var entry = {
    //     "title": name,
    //     "content": entryText
    // };
    // localStorage.setItem(name, JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(newelement);
    localStorage.setItem(element, JSON.stringify(existingEntries));
};


function ValidateEventDetails() {
    console.log("Validating event details.")

    let validated = false;

    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var category = document.getElementById("category").value;
    var duration = document.getElementById("duration").value;

    if (name && description && (category != "Default") && (duration != "Default")) {
        validated = true;
    }

    if (validated == true) {
        CreateEvent();
    } else {
        DisplayValidationError();
    }
    
}


function DisplayValidationError() {
    console.log("Displaying validation error.")
    alert("Please fill out the required fields.");
}


function CreateEvent() {
    console.log("Creating event.");

    console.log("Values Submitted are: "); 
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var datetime = document.getElementById("meeting-time").value;
    var category = document.getElementById("category").value;
    var duration = document.getElementById("duration").value;
    var eventid = document.getElementById("eventid").value;
    var img = document.getElementById("myFile").value;
    
    // console.log("Name: " + name);
    // console.log("Description: " + description);
    // console.log("Date and Time: " + datetime);
    // console.log("Category: " + category);
    // console.log("Duration: " + duration);
    // console.log("Event ID: " + eventid);
    // console.log("Image: " + img);
    
    alert("Event Submitted!");
    // Saving all values to local storage and append them for future usage

    addEntry('Names', name);
    addEntry('Descriptions', description);
    addEntry('Date and Times', datetime);
    addEntry('Categories', category);
    addEntry('Durations', duration);
    addEntry('Event IDs', eventid);
    addEntry('Images', img);
    
    // display all values in local storage
    // console.log("Names "+localStorage.getItem('Names'));
    // console.log("Descriptions "+localStorage.getItem('Descriptions'));
    // console.log("Date and Times "+localStorage.getItem('Date and Times'));
    // console.log("Categories "+localStorage.getItem('Categories'));
    // console.log("Durations "+localStorage.getItem('Durations'));
    // console.log("Event IDs "+localStorage.getItem('Event IDs'));
    // console.log("Images "+localStorage.getItem('Images'));

    let numEvents = localStorage.getItem("numEvents");

    if (numEvents == null) {
        numEvents = 0;
    }
    
    numEvents = Number(numEvents);
    // console.log(numEvents);

    localStorage.setItem("numEvents", numEvents + 1);

    window.location.href = "BrowseEvents.html";
}


// in case we want to reset the local storage
function clearStorage() {
    localStorage.clear();
    console.log("Storage Cleared");
}


function displayEvents() {
    let numEvents = localStorage.getItem("numEvents");

    console.log(numEvents);

    const names = JSON.parse(localStorage.getItem("Names"));
    const categories = JSON.parse(localStorage.getItem("Categories"));
    const dates = JSON.parse(localStorage.getItem("Date and Times"));

    // dynamically create html elements to display events from local storage
    for (i = 0; i < numEvents; i++) {

        const event = document.createElement("div");
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");
        const div4 = document.createElement("div");
        const div5 = document.createElement("div");
        const p = document.createElement("p");
        const a = document.createElement("a");
        h4 = document.createElement("h4");
        h6_1 = document.createElement("h6");
        h6_2 = document.createElement("h6");


        // Adding classes to the divs and other elements
        event.className = "col Event-holder";
        div1.className = "img-holder";
        div2.className = "text-holder";
        div3.className = "col";
        div4.className = "col";
        div5.className = "col";
        a.className = "btn btn-primary";
        a.href = "EventViewer.html";


        // Adding required assosiations to the elements
        event.appendChild(div1);
        event.appendChild(div2);
        div2.appendChild(div3);
        div2.appendChild(div4);
        div2.appendChild(p);
        div2.appendChild(div5);
        

        div3.appendChild(h4);
        div4.appendChild(h6_1);
        div5.appendChild(h6_2);
        div5.appendChild(a);

        h4.textContent = names[i];
        h6_1.textContent = categories[i];
        h6_2.textContent = dates[i].substring(0, 10);
        a.textContent = "More Details"

        document.getElementById("MainContainer").appendChild(event);
    }
}