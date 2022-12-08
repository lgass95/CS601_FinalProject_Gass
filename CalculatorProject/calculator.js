// DOM content loaded function
window.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Loaded");

    let form = document.getElementById("form");
    form.style.display='block';
        //Welcome alert
        alert("Hello!");
        //Asks user to enter their name
        //Gives default welcome message if no name given
        let name = prompt("Please enter your name.", "your name here");
            if (name !== "your name here") {
                document.getElementById("Greeting").innerHTML =
                "Welcome, " + name;
            }
            else {
                document.getElementById("Greeting").innerHTML =
                "Welcome";
            }

            //A for loop is shown on the page and in the console
            //The loop is a counter that counts from 1 to 10
            document.getElementById("counter");
            let count = "";
            for (let i = 1; i <= 10; i++) {
                count += i + ' ';
                document.getElementById("counter").innerHTML= '<div>'+ count + '<br>' + '</div>';
                console.log(count);
            } 
            //The input fields will always be empty at the start of the program.
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
                //When clicked, the "calculate" button will assign numeric values entered to both inputs
                document.getElementById("button1").addEventListener("click", function(){
                let num1 = document.getElementById("num1").value;
                let num2 = document.getElementById("num2").value;
            
              //Validates if inputs are numbers, shows error and reloads page if both are not  
               if(!parseInt(num1) || !parseInt(num2)) {
                alert("Error: Please enter two valid numbers.");
                location.reload();
                document.getElementById("num1").value = "";
                document.getElementById("num2").value = "";
               }
               //Calculates input numbers
                let sum = parseInt(num1) + parseInt(num2);
                let difference1 = parseInt(num1) - parseInt(num2);
                let difference2 = parseInt(num2) - parseInt(num1);
                let product = parseInt(num1) * parseInt(num2);
                let quotient1 = parseInt(num1) / parseInt(num2);
                let quotient2 = parseInt(num2) / parseInt(num1);
                 
            //addition
                let add = document.createElement("div");
                    add.innerHTML = '<div  id = "sum" class = "result" role = "alert">' + "The sum of your numbers is: " + sum +  '</div>';
                    document.getElementById("form").appendChild(add);
                    if (sum > 10) {
                        let add1 = document.createElement("div");
                        add1.innerHTML = '<div>' + "That is a big number" + '</div>';
                        document.getElementById("sum").appendChild(add1);
                    }
                    else {
                        let add2 = document.createElement("div");
                        add2.innerHTML = '<div>' + "That is a small number" + '</div>';
                        document.getElementById("sum").appendChild(add2);
                    }

            //subtraction
                let subtract = document.createElement("div");
                    subtract.innerHTML = '<div  id = "difference" class = "result" role = "alert">' + "The difference of your numbers is: " + difference1 + " or " + difference2 + " (depending on position)" + '</div>';
                    document.getElementById("form").appendChild(subtract);
                    if (difference1 > 10) {
                        let sub1a = document.createElement("div");
                        sub1a.innerHTML = '<div>' + "The first difference is a big number" + '</div>';
                        document.getElementById("difference").appendChild(sub1a);
                    }
                    else {
                        let sub2a = document.createElement("div");
                        sub2a.innerHTML = '<div>' + "The first difference is a small number" + '</div>';
                        document.getElementById("difference").appendChild(sub2a);
                    }

                    if (difference2 > 10) {
                        let sub1b = document.createElement("div");
                        sub1b.innerHTML = '<div>' + "The second difference is a big number" + '</div>';
                        document.getElementById("difference").appendChild(sub1b);
                    }
                    else {
                        let sub2b = document.createElement("div");
                        sub2b.innerHTML = '<div>' + "That second difference is a small number" + '</div>';
                        document.getElementById("difference").appendChild(sub2b);
                    }
             //multiplication   
                let multiply = document.createElement("div");
                    multiply.innerHTML = '<div  id = "product" class = "result" role = "alert">' + "The product of your numbers is: " + product +  '</div>';
                    document.getElementById("form").appendChild(multiply);
                    if (product > 10) {
                        let mult1 = document.createElement("div");
                        mult1.innerHTML = '<div>' + "That is a big number" + '</div>';
                        document.getElementById("product").appendChild(mult1);
                    }
                    else {
                        let mult2 = document.createElement("div");
                        mult2.innerHTML = '<div>' + "That is a small number" + '</div>';
                        document.getElementById("product").appendChild(mult2);
                    }

            //division       
                let divide = document.createElement("div");
                    divide.innerHTML = '<div  id = "quotient" class = "result" role = "alert">' + "The quotient of your numbers is: " + quotient1 + " or "  + quotient2 + " (depending on position)" + '</div>';
                    document.getElementById("form").appendChild(divide);
                    if (quotient1 > 10) {
                        let quo1a = document.createElement("div");
                        quo1a.innerHTML = '<div>' + "The first quotient is a big number" + '</div>';
                        document.getElementById("quotient").appendChild(quo1a);
                    }
                    else {
                        let quo2a = document.createElement("div");
                        quo2a.innerHTML = '<div>' + "The first quotient is a small number" + '</div>';
                        document.getElementById("quotient").appendChild(quo2a);
                    }

                    if (quotient2 > 10) {
                        let quo1b = document.createElement("div");
                        quo1b.innerHTML = '<div>' + "The second quotient is a big number" + '</div>';
                        document.getElementById("quotient").appendChild(quo1b);
                    }
                    else {
                        let quo2b = document.createElement("div");
                        quo2b.innerHTML = '<div>' + "That second quotient is a small number" + '</div>';
                        document.getElementById("quotient").appendChild(quo2b);
                    }

                        //Reset
                        //button1 is "Calculate"
                        document.getElementById("button1").addEventListener("click", function(){
                            let reload = confirm("Would you like to calculate two more numbers?");
                            //program is reloaded
                            if (reload){
                               location.reload();
                               document.getElementById("num1").value = "";
                               document.getElementById("num2").value = "";
                                return true;
                            }
                            //program is terminated
                           else{
                               alert("Goodbye");
                               document.getElementById("content").innerHTML= '<h1>' + "Thank You!" + '</h1>';
                               return false;
                           }
                        });
                        
                        //button2 is "Reset"
                        document.getElementById("button2").addEventListener("click", function(){
                            let reload = confirm("Would you like to calculate two more numbers?");
                            //Program is reloaded
                            if (reload){
                               location.reload();
                               document.getElementById("num1").value = "";
                               document.getElementById("num2").value = "";
                                return true;
                            }
                            //Program is terminated
                           else{
                               alert("Goodbye");
                               document.getElementById("content").innerHTML= '<h1>' + "Thank You!" + '</h1>';
                               return false;
                           }
                         
                        });
                         

            });
        
        });