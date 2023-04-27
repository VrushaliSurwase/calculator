const cal=(opt)=>{
        let a=document.getElementById("first").value;
        let b=document.getElementById("second").value;
        let out=0;
        if(opt=="Add"){
           out ='sum of number is ${Number(a)+Number(b)}'
        }
        else{
            out='Subtraction of number is ${Number(a)-Number(b)}'
        }
        document.getElementsByClassName('output')[0].innerText=out

        if(opt=="Multiply"){
            out='Multiplication of number is ${Number(a)*Number(b)}'
        }
        else{
            out='Multiplication of number is ${Number(a)/Number(b)}'
        }
        document.getElementByIdByClassName('output')[0].innerText=out

        if(opt=='Divide'){
            out='Division of number is ${Number(a)/Number(b)}'
       }
       else{
            out='Division of number is ${Number(a)*Number(b)}'
       }
    }