inputCounter = 0;
brCounter = 0;
index = 1;

function addItem() {
    var chckbx = document.createElement("INPUT");
    chckbx.setAttribute("type", "checkbox");
    chckbx.setAttribute("class", "item"+index)
    document.body.appendChild(chckbx);

    var txtbx = document.createElement("INPUT");
    txtbx.setAttribute("type", "text");
    txtbx.setAttribute("class", "item"+index)
    document.body.appendChild(txtbx);

    var br = document.createElement("BR")
    document.body.appendChild(br);

    index += 1;
    inputCounter += 2;
    brCounter += 1;
}

function removeCheckedItems() {
    var elmntBr = document.getElementsByTagName("BR")[brCounter];
    elmntBr.remove();
    brCounter -= 1;

    var elmntChckBx = document.getElementsByTagName("INPUT")[inputCounter - 1];
    var elmntTxtBx = document.getElementsByTagName("INPUT")[inputCounter];
    elmntChckBx.remove();
    elmntTxtBx.remove();
    inputCounter -= 2;
}

function removeAllItems() {
    while (brCounter > 0) {
        var elmntBr = document.getElementsByTagName("BR")[brCounter];
        elmntBr.remove();
        brCounter -= 1;
    }

    while (inputCounter > 0) {
        var elmntChckBx = document.getElementsByTagName("INPUT")[inputCounter - 1];
        var elmntTxtBx = document.getElementsByTagName("INPUT")[inputCounter];
        elmntChckBx.remove();
        elmntTxtBx.remove();
        inputCounter -= 2;
    }
}