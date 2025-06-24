function check()
{
    var number=document.getElementById("number").value;
    var pattern= /^[0-9]+$/;
    if(pattern.test(number))
    {
        alert("accepted");
        
    }
    else{
        alert("enter correct number!");
    }
}