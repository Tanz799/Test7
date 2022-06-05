function myFun()
        {
            let num = parseInt(prompt("Enter the number : "));



            if(num != null)
            {
                document.getElementById("output").innerHTML = (num*num*num);
            }
            else
            {
                document.getElementById("output").innerHTML = "0";
            }  
        }