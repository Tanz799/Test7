function myFun()
        {
            let num = parseInt(prompt("Enter the number : "));

            let sum = 0;
            let text = "";
            if(num != null)
            {
                for(let i=1; i<=num; i++)
                {
                    if(i%2 != 0)
                    {
                        sum += i;
                        text += i + "+";
                    }
                }
                document.getElementById("output").innerHTML = text + " = " + sum;
            }
            else
            {
                document.getElementById("output").innerHTML = "Number is not odd";
            }
        }