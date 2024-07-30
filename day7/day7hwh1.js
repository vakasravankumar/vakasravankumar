function io() {
    var pno = document.register.phnum;
    return phnum_validation(pno, 10, 10);
}

function phnum_validation(pno, mx, my) {
    var numbers = /^[0-9]+$/;
    var phoneno = pno.value;
    if (phoneno.length !== mx ||  phoneno[0] !== '9') {
        alert("Phone number should contain exactly " + mx + " digits and start with 9.");
        pno.focus();
        return false;
    }
    alert("Phone number is successfully updated");
    return true;
}