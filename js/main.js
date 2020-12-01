
function TheEquationNun() {
    let numer1 = document.getElementById("num1").value;  
    let numer2 = document.getElementById("num2").value;
   
    cleanHtml()
    if (numer1 !== "" && numer2 !== ""){
        if(numer1 > numer2) {
            document.getElementById("stroka1").innerHTML = (`<p>1</p>`);
        } else if (numer1 < numer2) {
            document.getElementById("stroka1").innerHTML = (`<p>-1</p>`);
        } else {
            document.getElementById("stroka1").innerHTML = (`<p>0</p>`);
        }
    
    }else
    document.getElementById("stroka1").innerHTML = (`<p>Пустое поле</p>`);
 
}
//2

function factorialNun() {
    let n = document.getElementById("num3").value; 
    if (n !== ""){
        function factorial(n) {
            return n ? n * factorial(n - 1) : 1;
          } 
          document.getElementById("stroka2").innerHTML = (`<p>${factorial(n)}</p>`);

    }  else
       document.getElementById("stroka2").innerHTML = (`<p>Пустое поле</p>`);
  
}
//3    

function SummNum() {
    let numer4 = document.getElementById("num4").value;  
    let numer5 = document.getElementById("num5").value;
    let numer6 = document.getElementById("num6").value;
    
    let CollectNumer = numer4 + numer5 + numer6;
    if (numer4 !== "" || numer5 !== "" || numer6 !== ""){
        document.getElementById("stroka3").innerHTML = (`<p>${CollectNumer}</p>`);
    }
    else
    document.getElementById("stroka3").innerHTML = (`<p>Пустое поле</p>`);
}

//4
function Square(){
    let numer7 = document.getElementById("num7").value;  
    let numer8 = document.getElementById("num8").value; 

    let SummSquare = 0;
    if (numer7 == ""){
        numer7 = numer8;
    } 
    if (numer8 == ""){
        numer8 = numer7;
    } 
    if( numer7 > 0 && numer8 > 0){
        SummSquare = Number(numer7)*Number(numer8);
        document.getElementById("stroka4").innerHTML = (`<p>${SummSquare}</p>`);
    } else {
        document.getElementById("stroka4").innerHTML = (`<p>Ведите значение больше 0</p>`);
    }
     

}
//5
function Verify(){
    let numer9 = document.getElementById("num9").value;  
    var sum = numer9-1;
    var temp = numer9;
    let s = 0;
    if (numer9 !== ""){

        for (let i = 1; i < numer9 - 1; i++)
        {
            if (numer9 % i == 0)
            {
                s += i;
            }
        }
        if (s == numer9) {
            document.getElementById("stroka5").innerHTML = ('beforeend',` <p>Число: ${numer9} является совершенным</p>`);
           
        } else {
        
            document.getElementById("stroka5").innerHTML = ('beforeend',` <p>Число: ${numer9} не является совершенным</p>`);
        }
 
    }
    else
    document.getElementById("stroka5").innerHTML = (`<p>Пустое поле</p>`);
}

//6
function VerifyNum(){
    let numer10 = document.getElementById("num10").value; 
    let numer11 = document.getElementById("num11").value;
    let allAnsver  = document.getElementById("stroka6");
    let numNumer10 = Number(numer10);
    let numNumer11 = Number(numer11);
    let s = 0;
  
    if (numer10 !== "" && numer11 !== ""){
       if (numNumer10 < numNumer11) {
        cleanP()
        for (numNumer10; numNumer10 <= numNumer11; numNumer10++){
            s = 0;
            for (let i = 1; i < numNumer10 - 1; i++)
            {
                if (numNumer10 % i == 0)
                {
                    s += i;
                }
            }
            if (s == numNumer10) {
                allAnsver.insertAdjacentHTML('beforeend', `<p>Число: ${numNumer10} является совершенным</p>`);
              
               
            }
        }
       } else {
        document.getElementById("stroka6").innerHTML = (`<p>Второе значение меньше первого</p>`);
       }

    } else
    document.getElementById("stroka6").innerHTML = (`<p>Пустое поле</p>`);
   
  
}






function cleanHtml() {
    var element = document.getElementById("stroka1");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
function cleanP() {
    var element = document.getElementById("stroka6");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
 