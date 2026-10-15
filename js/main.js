function vaildateValue() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");

    result.setAttribute("class","alert theme-danger text-center d-block");
    
    if (name == "" && email == "" && pass == "" && confirm == "") {
        result.innerHTML = "Enter Data";
        return false
    }else if(name.length <5 || name.length>15){
        result.innerHTML = "Enter 5-15 chaacter in Name";
        return false
    }else if(email.indexOf("@",1) ==-1 || email.indexOf(".com",3) == -1) {
        result.innerHTML = "Enter Vaild Email";
        return false
    }else if(pass.length <8){
        result.innerHTML = "Week Password";
        return false;
    }else if ( pass != confirm) {
        result.innerHTML ="Matched Password";
        return false;
    }else{
        return true;
    }


}