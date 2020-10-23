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
        var elmntChckbx = document.getElementsByTagName("INPUT")[inputCounter];
        var elmntTxtbx = document.getElementsByTagName("INPUT")[inputCounter + 1];
        elmntChckbx.remove();
        elmntTxtbx.remove();
        inputCounter -= 2;
    }

    index = 0;
    addListItem();
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
    var br = document.createElement("BR");
    document.body.appendChild(br);
}

function collectListItemsContents() {
    var listItemsContents = [];
    var originalInputCounter = inputCounter;
    
    while (inputCounter >= 0) {
        var elmntTxtbx = document.getElementsByTagName("INPUT")[inputCounter + 1];
        listItemsContents.push(elmntTxtbx.value);
        inputCounter -= 2;
    }

    inputCounter = originalInputCounter;    
    listItemsContents.reverse();
    return listItemsContents;
}