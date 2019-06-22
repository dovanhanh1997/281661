document.getElementById("button").innerHTML = '<button onclick="checkname()">Check ID</button>';
function checkname() {
    let name = document.getElementById("EnterID").value;
    if (name == 'Admin') {
        document.getElementById("type").innerHTML = 'Password<br><input type="password" id="password">';
                document.getElementById("button").innerHTML = '<button onclick="checkPass()">Check Pass</button>';
    } else {
        document.getElementById("type").innerHTML = "I don't know you";
    }
    if (name == "") {
        document.getElementById("type").innerHTML = "Canceld";
    }
}

function checkPass() {
    let pword = document.getElementById("password").value;
    if (pword == 'TheMaster') {
        alert("Welcome");
    } else if (pword == null) {
        alert("Canceld");
    } else {
        alert("Wrong Password");
    }
}
