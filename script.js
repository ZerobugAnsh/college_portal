const form = document.getElementById("admissionForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let dob = document.getElementById("dob");
    let gender = document.getElementById("gender");
    let course = document.getElementById("course");
    let address = document.getElementById("address");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");

    let namePattern = /^[A-Za-z ]+$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;

    let valid = true;

    document.querySelectorAll("input,select,textarea").forEach(function(input){
        input.style.border = "2px solid #ccc";
    });

    if(name.value.trim() == ""){
        alert("Name is required");
        name.style.border = "2px solid red";
        name.focus();
        return;
    }

    if(!namePattern.test(name.value)){
        alert("Name should contain only alphabets");
        name.style.border = "2px solid red";
        name.focus();
        return;
    }

    name.style.border="2px solid green";

    if(!emailPattern.test(email.value)){
        alert("Enter valid Email");
        email.style.border="2px solid red";
        email.focus();
        return;
    }

    email.style.border="2px solid green";

    if(!phonePattern.test(phone.value)){
        alert("Phone number must contain 10 digits");
        phone.style.border="2px solid red";
        phone.focus();
        return;
    }

    phone.style.border="2px solid green";

    if(dob.value==""){
        alert("Select Date of Birth");
        dob.style.border="2px solid red";
        dob.focus();
        return;
    }

    let birth = new Date(dob.value);
    let today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    if(age < 17){
        alert("Age should be at least 17 years");
        dob.style.border="2px solid red";
        dob.focus();
        return;
    }

    dob.style.border="2px solid green";

    if(gender.value==""){
        alert("Select Gender");
        gender.style.border="2px solid red";
        gender.focus();
        return;
    }

    gender.style.border="2px solid green";

    if(course.value==""){
        alert("Select Course");
        course.style.border="2px solid red";
        course.focus();
        return;
    }

    course.style.border="2px solid green";

    if(address.value.trim()==""){
        alert("Enter Address");
        address.style.border="2px solid red";
        address.focus();
        return;
    }

    address.style.border="2px solid green";

    if(password.value.length < 8){
        alert("Password should contain minimum 8 characters");
        password.style.border="2px solid red";
        password.focus();
        return;
    }

    password.style.border="2px solid green";

    if(confirmPassword.value==""){
        alert("Confirm your Password");
        confirmPassword.style.border="2px solid red";
        confirmPassword.focus();
        return;
    }

    if(password.value != confirmPassword.value){
        alert("Passwords do not match");
        confirmPassword.style.border="2px solid red";
        confirmPassword.focus();
        return;
    }

    confirmPassword.style.border="2px solid green";

    alert("🎉 Admission Submitted Successfully!");

    form.reset();

    document.querySelectorAll("input,select,textarea").forEach(function(input){
        input.style.border = "2px solid #ccc";
    });

});