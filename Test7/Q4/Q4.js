function myFun()
        {
            let num = parseInt(prompt("Enter the number : "));

            let prime = 0;
            let text = "";

            if(num != null)
            {
                let n = num;
                let count = 0;
                let index = 0;
                for(let i =2; i<num;i++)
                {
                    num++;

                    let j =0;
                    for(j =2; j<=i;j++)
                    {
                        if(i%j == 0)
                            break;
                    }
                    if(j == i)
                    {
                        count = j;
                        index++;
                    }
                    if(index == n)
                        break;
                }
                document.getElementById("output").innerHTML = count;
            }
            else
            {
                document.getElementById("output").innerHTML = "Improper input";
            }
        }