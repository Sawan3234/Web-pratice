function validate(){
    var email=document.getElementById("mail").value;
    var pattern=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
    if(pattern.test(email))
    {
        alert("valid");
    }
    else{
        alert("invalid email");
    }
}