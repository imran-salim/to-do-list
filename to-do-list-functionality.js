var inputCounter = 0;
var brCounter = 0;
var index = 1;

function addListItem() {
    addChckbox();
    addTxtbox();
    addLinebr();

    index += 1;
    inputCounter += 2;
    brCounter += 1;
    // console.log(brCounter);
}

function removeCheckedListItems() {
    var listContents = collectListItemsContents();
    // for (var i = 0; i < listContents.length; i++) {
    //     console.log(listContents[i]);
    // }
}

function removeAllListItems() {
    while (brCounter >= 0) {
        var elmntBr = document.getElementsByTagName("BR")[brCounter];
        elmntBr.remove();
        brCounter -= 1;
    }

    while (inputCounter >= 0) {
        var elmntChckbx = document.getElementsByTagName("INPUT")[inputCounter + 1];
        var elmntTxtbx = document.getElementsByTagName("INPUT")[inputCounter];
        elmntChckbx.remove();
        elmntTxtbx.remove();
        inputCounter -= 2;
    }

    index = 0;
    // console.log("List is empty");
    // console.log("Input counter: " + inputCounter);
    // console.log("Line break counter: " + brCounter);
    addListItem();
    // console.log("Initial list item has been added");
    // console.log("Input counter: " + inputCounter);
    // console.log("Line break counter: " + brCounter);
}

function addChckbox() {
    var chckbx = document.createElement("INPUT");
    chckbx.setAttribute("type", "checkbox");
    chckbx.setAttribute("class", "item"+index)
    chckbx.setAttribute("id", "checkbox"+index)
    document.body.appendChild(chckbx);
}

function addTxtbox() {
    var txtbx = document.createElement("INPUT");
    txtbx.setAttribute("type", "text");
    txtbx.setAttribute("class", "item"+index)
    txtbx.setAttribute("id", "textbox"+index);
    document.body.appendChild(txtbx);
}

function addLinebr() {
    var br = document.createElement("BR")
    document.body.appendChild(br);
}

function collectListItemsContents() {
    var listItemsContents = [];
    
    while (inputCounter >= 0) {
        var elmntTxtbx = document.getElementsByTagName("INPUT")[inputCounter]
        // console.log(inputCounter);
        var txtboxValue = elmntTxtbx.value;
        console.log(txtboxValue);
        // listItemsContents.push(txtboxValue);
        inputCounter -= 2;
    }

    // listItemsContents.reverse();
    return listItemsContents;
}