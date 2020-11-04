var inputCounter = 0;
var brCounter = 0;
var index = 1;
var inputs = document.getElementsByTagName("INPUT");
var linebreaks = document.getElementsByTagName("BR");

function addListItem() {
    addChckbox();
    addTxtbox();
    addLineBr();
    index += 1;
    inputCounter += 2;
    brCounter += 1;
    printInputStateByFunction("add");
}

function removeCheckedListItems() {
    var listContents = collectUncheckedListItemsContents();
    removeAllListItems();
    for (var i = 0; i  < listContents.length-1; i++) {
        addListItem();
    }
    repopulateListItems(listContents);
}

function removeAllListItems() {
    while (brCounter >= 0) {
        var elmntBr = linebreaks[brCounter];
        elmntBr.remove();
        brCounter -= 1;
    }

    while (inputCounter >= 0) {
        var elmntChckbx = inputs[inputCounter];
        var elmntTxtbx = inputs[inputCounter + 1];
        elmntChckbx.remove();
        elmntTxtbx.remove();
        inputCounter -= 2;
    }

    index = 0;
    printInputStateByFunction("remove");
    addListItem();
}

function addChckbox() {
    var chckbx = document.createElement("INPUT");
    chckbx.setAttribute("type", "checkbox");
    chckbx.setAttribute("class", "item" + index);
    chckbx.setAttribute("id", "checkbox" + index);
    document.body.appendChild(chckbx);
}

function addTxtbox() {
    var txtbx = document.createElement("INPUT");
    txtbx.setAttribute("type", "text");
    txtbx.setAttribute("class", "item" + index)
    txtbx.setAttribute("id", "textbox" + index);
    document.body.appendChild(txtbx);
}

function addLineBr() {
    var br = document.createElement("BR");
    document.body.appendChild(br);
}

function collectUncheckedListItemsContents() {
    var listItemsContents = [];
    var originalInputCounter = inputCounter;
    printInputState();
    
    while (inputCounter >= 0) {
        var elmntChckbx = document.getElementsByTagName("INPUT")[inputCounter];
        if (elmntChckbx.checked == false) {
            var elmntTxtbx = inputs[inputCounter + 1];
            listItemsContents.push(elmntTxtbx.value);
        }       
        inputCounter -= 2;
    }
  
    // for (var i = 0; i < listItemsContents.length; i++) {
    //     console.log(listItemsContents[i]);
    // }
    inputCounter = originalInputCounter;
    printInputStateByFunction("collect");
    return listItemsContents;
}

function repopulateListItems(contents) {
    originalInputCounter = inputCounter;
    contentsIndex = 0;

    while (inputCounter >= 0) {
        var elmntTxtbx = inputs[inputCounter + 1];
        elmntTxtbx.value = contents[contentsIndex];
        contentsIndex += 1;
        inputCounter -= 2;
    }

    inputCounter = originalInputCounter;
}

function printInputStateByFunction(funcName) {
    if (funcName == "add") {
        console.log("Added new item")
        printInputState();
    } else if (funcName == "remove") {
        console.log("Removed all items")
        printInputState();
    } else if (funcName == "collect") {
        console.log("Removed checked items")
        printInputState();
    }
}

function printInputState() {
    console.log("current index: " + index);
    console.log("current input counter: " + inputCounter);
    console.log("current br counter: " + brCounter);
    console.log("\n");
}