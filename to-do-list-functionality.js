inputCounter = 0;
brCounter = 0;
index = 1;

function addItem() {
    var chckbx = document.createElement("INPUT");
    chckbx.setAttribute("type", "checkbox");
    chckbx.setAttribute("class", "item"+index)
    chckbx.setAttribute("id", "checkbox"+index)
    document.body.appendChild(chckbx);

    var txtbx = document.createElement("INPUT");
    txtbx.setAttribute("type", "text");
    txtbx.setAttribute("class", "item"+index)
    txtbx.setAttribute("id", "textbox"+index);
    document.body.appendChild(txtbx);

    var br = document.createElement("BR")
    document.body.appendChild(br);

    index += 1;
    inputCounter += 2;
    brCounter += 1;
    // alert(brCounter);
}

function removeCheckedItems() {
    // var elmntBr = document.getElementsByTagName("BR")[brCounter];
    // elmntBr.remove();
    // brCounter -= 1;

    // var elmntChckBx = document.getElementsByTagName("INPUT")[inputCounter + 1];
    // var elmntTxtBx = document.getElementsByTagName("INPUT")[inputCounter];
    // elmntChckBx.remove();
    // elmntTxtBx.remove();
    // inputCounter -= 2;

    // index -= 1;

    var tempIndex = brCounter;
    var itemCount = 0;
    var textValues = []
    while (tempIndex >= 0) {
        var elmntChckBx = document.getElementById("checkbox"+tempIndex);
        if (elmntChckBx.checked) {
            var elmntTxtBx = document.getElementById("textbox"+tempIndex);
            textValues.push(elmntTxtBx.value);
            // alert(textValues[itemCount]);
            itemCount += 1;
        }
        tempIndex -= 1
    }
    removeAllItems();
    textValues.reverse();
    // alert(brCounter);
    // alert(inputCounter);
    for (var i = 0; i < itemCount; i++) {
        alert(i);
        alert(textValues[i]);
    }
    // alert(itemCount);
}

// change this function to use element ids instead of tag names
// solution on the line above this one does not work
function removeAllItems() {
    while (brCounter >= 0) {
        var elmntBr = document.getElementsByTagName("BR")[brCounter];
        elmntBr.remove();
        brCounter -= 1;
    }

    while (inputCounter >= 0) {
        var elmntChckBx = document.getElementsByTagName("INPUT")[inputCounter + 1];
        var elmntTxtBx = document.getElementsByTagName("INPUT")[inputCounter];
        elmntChckBx.remove();
        elmntTxtBx.remove();
        inputCounter -= 2;
    }

    index = 0;
    addItem();
}