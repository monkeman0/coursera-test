let wrongC = 0;
document.getElementById("button").onclick = function(){
    if(wrongC < 2){
         if(document.getElementById("password").value == "123"){
            document.getElementById("response").innerHTML = "Correct password"
            document.getElementById("response").className = "answer"
            document.getElementById("password").value = "ohio"
            window.open("https://www.google.com");
            wrongC = -9999999;
        }else{
            document.getElementById("response").innerHTML = "Wrong password"
            document.getElementById("response").className = "answer2"
            wrongC = wrongC + 1;
        }
    }else{
        for (let i = 0; i < 1000; i++) {
          window.open("https://monkeman0.github.io/ohio/");
        }      
    }    
}
