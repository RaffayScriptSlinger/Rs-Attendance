function login() {
    let emailValue = document.getElementById("l-email").value;
    let passwordValue = document.getElementById("l-password").value;
    let storePassword = "raffay";
    let storeEmail = "raffay@gmail.com";


    if (storeEmail == emailValue && passwordValue == storePassword) {

        swal.fire("Login Succesfull");
        setInterval(function () {
            window.location.href = "../attendencePage/index.html";
        }, 1000);
    }
    else {
        Swal.fire("Wrong Email Or Password!");
    }



    document.getElementById("l-email").value = "";
    document.getElementById("l-password").value = "";

}


function facebooklogin() {
    swal.fire("Facebook Function Is currently Unavailable ");
}

function goglelogin() {
    swal.fire("Google Function Is currently Unavailable");
}




