function validate()
{
    var name=document.getElementById("name").value;
    var pattern=/^[a-zA-Z ]+$/
    if(name== " "){
        alert("Enter name")
        return;
    }
    else if(!pattern.test(name))
    {
        alert("invalid name");
        return;
    }
    var num=document.getElementById("number").value;
    var pattern1=/^\d{10}$/
    if(!pattern1.test(num)){
        alert("invalid number");
        return;
    }
    var email=document.getElementById("mail").value;
    var pattern2=/^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    if(!pattern2.test(email))
    {
        document.getElementById("emailerror").textContent = "Invalid email format";

        return;
    }
      var cname=document.getElementById("country").value;
      if(cname.trim()=== ""){
        alert("Enter country name");
        return;
    }
    if(!pattern.test(cname)){
        alert("invalid");
        return;
    
    }
    var gender=document.getElementsByName("gender");
    if(!gender[0].checked&&!gender[1].checked){
        alert("select gender");
        return;
    }
}