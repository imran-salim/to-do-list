inputCounter = 0;
brCounter = 0;
index = 1;

function addItem() {
    var chckbx = document.createElement("INPUT");
    chckbx.setAttribute("type", "checkbox");
    // chckbx.setAttribute("class", "item"+index)
    document.body.appendChild(chckbx);

    var txtbx = document.createElement("INPUT");
    txtbx.setAttribute("type", "text");
    // document.setAttribute("class", "item"+index)
    document.body.appendChild(txtbx);

    var br = document.createElement("BR")
    document.body.appendChild(br);

    inputCounter += 2;
    brCounter += 1;
}

function removeItem() {
    var elmntBr = document.getElementsByTagName("BR")[brCounter];
    elmntBr.remove();
    brCounter -= 1;

    var elmntChckBx = document.getElementsByTagName("INPUT")[inputCounter - 1];
    var elmntTxtBx = document.getElementsByTagName("INPUT")[inputCounter];
    elmntChckBx.remove();
    elmntTxtBx.remove();
    inputCounter -= 2;
}