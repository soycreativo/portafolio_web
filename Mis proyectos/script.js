function usrpas(){

    if (document.form1.txt.value=="admin" && document.form1.num.value=="1234"){window.location="home.htm"}
    
    else {alert("Error en Usuario o Contraseña. Intenta de nuevo.")}
    
    }
    
    document.oncontextmenu=new Function("return false");