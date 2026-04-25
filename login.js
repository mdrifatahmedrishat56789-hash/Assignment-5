document.getElementById("login").addEventListener('click',function(){
    // user Name 
    const userName = document.getElementById("userName")
    const showUserName = userName.value
    console.log(showUserName)
    
    // Password

    const password = document.getElementById("password")
    const showPassword = password.value
    console.log(showPassword)

    if(showUserName == 'admin' && showPassword == 'admin123'){
        alert("Login Success")
        window.location.assign("./home.html")
    }
    else{
        alert("Incorrect Password and User Name")
    }

})