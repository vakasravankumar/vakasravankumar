function io() {
    var gmail = document.gmaillogin.email1;
    var pwd = document.gmaillogin.password1;
    var pno = document.gmaillogin.phnum;

    if (Validateemail1(gmail)) {
        if (password1_validation(pwd, 10, 12)) {
            if (phnum_validation(pno, 10, 10)) {
                return true;
            }
        }
    }

    return false; 
}
function Validateemail1(gmail) {
    var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (gmail.value.match(emailformat)) {
        return true; 
    } else {
        alert("Please enter a valid email id");
        gmail.focus();
        return false;
    }
}

function password1_validation(pwd, mx, my) {
    var a = pwd.value.length;
    if (a === 0 || a > my || a < mx) {
        alert("Please enter a valid password (between " + mx + " and " + my + " characters)");
        pwd.focus();
        return false; 
    }
    return true;
}

function phnum_validation(pno, mx, my) {
    var numbers = /^[0-9]+$/;
    var phoneno = pno.value;
    if (phoneno.length !== mx || phoneno[0] !== '9') {
        alert("Phone number should contain exactly " + mx + " digits and start with 9.");
        pno.focus();
        return false; 
    }
    alert("Phone number is successfully updated");
    // window.location.onload(); 
    return true; 
}

