function setcookie(name,value){
    let name=document.getElementById("name").value;
    let inputvalue=document.getElementById("value").value;
    if(inputvalue =="")
    {
        alert("enter a value");
        return;
    }
    document.cookie=`${name}=${inputvalue};path=/`;
     alert('COOKIE SET');
}