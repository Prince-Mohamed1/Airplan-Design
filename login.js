let form = document.querySelector(".form-group");
form.onsubmit = function() {
    let email = document.querySelector(".email").value;
    let emailRegex = /^[a-z-0-9._%+-]+@[a-z-0-9.-]+\.[a-z]{2,}$/;
    let pass = document.querySelector(".password").value;

    if (emailRegex.test(email) && pass.length >= 8) {
return true
    } else {
        return false;
    }

};


