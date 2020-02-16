function getDate()
            {
                //to get input date
                var dayOfBirth = document.getElementById("DOB").value;
                var DD = parseInt(dayOfBirth);
                var monthOfBirth = document.getElementById("MOB").value;
                var MM = parseInt(monthOfBirth);
                var yearOfBirth = document.getElementById("YOB").value;
                var CC = parseInt(yearOfBirth / 100);
                var YY = yearOfBirth%100;
                var f = Math.round((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7);

                //to get gender
                var gender = document.getElementById("gender").value;

                //to limit invald entries
                if (dayOfBirth<1 || dayOfBirth>31)
                    {
                        alert("Please enter valid day!");
                    }
                    else if (monthOfBirth<1 || monthOfBirth>12)
                    {
                        alert("Please enter valid month!");
                    }
                    else
                //To display Akan name
                if(gender=="female")
                {
                    switch(f)
                    {
                        case 0:
                            document.write("Your Akan name is Adwoa");
                            break;
                        case 1:
                            document.write("Your Akan name is Abenaa");
                            break;
                        case 2:
                            document.write("Your Akan name is Akua");
                            break;
                        case 3:
                            document.write("Your Akan name is Yaa");
                            break;
                        case 4:
                            document.write("Your Akan name is Afua");
                            break;
                        case 5:
                            document.write("Your Akan name is Ama");
                            break;
                        default:
                            document.write("Your Akan name is Akosua");
                            break;
                    }
                }
                else if(gender=="male")
                {
                    switch(f)
                    {
                        case 0:
                            document.write("Your Akan name is Kwadwo");
                            break;
                        case 2:
                            document.write("Your Akan name is Kwabena");
                            break;
                        case 2:
                            document.write("Your Akan name is Kwaku");
                            break;
                        case 3:
                            document.write("Your Akan name is Yaw");
                            break;
                        case 4:
                            document.write("Your Akan name is Kofi");
                            break;
                        case 5:
                            document.write("Your Akan name is Kwame");
                            break;
                        default:
                            document.write("Your Akan name is Kwasi");
                            break;
                    }
                }
                else
                {
                    alert("Please choose your gender!");
                }

            }
