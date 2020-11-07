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
    // printInputStateByFunction("add");
}

function removeCheckedListItems() {
    var listContents = collectUncheckedListItemContents();
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
    // printInputStateByFunction("remove");
    // localStorage.clear();
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

function collectUncheckedListItemContents() {
    var listItemContents = [];
    var originalInputCounter = inputCounter;
    // printInputState();
    
    while (inputCounter >= 0) {
        var elmntChckbx = document.getElementsByTagName("INPUT")[inputCounter];
        if (elmntChckbx.checked == false) {
            var elmntTxtbx = inputs[inputCounter + 1];
            listItemContents.push(elmntTxtbx.value);
        }       
        inputCounter -= 2;
    }
  
    // for (var i = 0; i < listItemContents.length; i++) {
    //     console.log(listItemContents[i]);
    // }
    inputCounter = originalInputCounter;
    // printInputStateByFunction("collect");
    return listItemContents;
}

function repopulateListItems(listContents) {
    originalInputCounter = inputCounter;
    contentsIndex = 0;

    while (inputCounter >= 0) {
        var elmntTxtbx = inputs[inputCounter + 1];
        elmntTxtbx.value = listContents[contentsIndex];
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
    // console.log("\n");
}

function storeList() {
    originalInputCounter = inputCounter;
    originalBrCounter = brCounter;

    while (inputCounter >= 0) {
        var elmntTxtbx = inputs[inputCounter + 1];
        if (elmntTxtbx.value != "") {
            console.log("index/val: " + brCounter + " " + elmntTxtbx.value);
            localStorage.setItem(brCounter, elmntTxtbx.value);
        }
        inputCounter -= 2;
        brCounter -= 1;
    }

    inputCounter = originalInputCounter;
    brCounter = originalBrCounter;
    printInputState();
    printStoredList();
}

function restoreList() {
    var numOfItems = localStorage.length;
    console.log(numOfItems);

    if (numOfItems > 0) {
        for (var i = 0; i < numOfItems-1; i++) {
            addListItem();
        }

        var originalBrCounter = brCounter;
        var originalInputCounter = inputCounter;

        while (brCounter >= 0 && inputCounter >= 0) {
            storedValue = localStorage.getItem(brCounter);
            console.log("key/val: " + brCounter + " " + localStorage.getItem(brCounter));
            var elmntTxtbx = inputs[inputCounter + 1];
            elmntTxtbx.value = localStorage.getItem(brCounter);
            brCounter -= 1;
            inputCounter -= 2;
        }

        brCounter = originalBrCounter;
        inputCounter = originalInputCounter;
        localStorage.clear();
    }

    // first textbox is filled with a value from local storage upon reopening page

    printInputState();
}

function printStoredList() {
    originalBrCounter = brCounter;

    while (brCounter >= 0) {
        storedValue = localStorage.getItem(brCounter);
        console.log("key/val: " + brCounter + " " + localStorage.getItem(brCounter));
        brCounter -= 1;
    }

    brCounter = originalBrCounter;
}