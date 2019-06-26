// Business Logic
var akan = function(){

    var female_names = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var male_names = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
    // Simple functions to check if the day and Month entered by the user are valid.
    var is_invalid_day = function(d){
        return d <= 0 || d > 31;
    };
    
    var is_invalid_month = function (m) {
        return m <= 0 || m > 12;
    };
    
    var day = (document.getElementById('day').value)-0;
    console.log(day);
    // While the user is giving us wrong day, ask them for a new one
    while (is_invalid_day(day)){
        alert('Valid days are between 1 and 31. Please input a valid day.');
        break;
    }
    
    var month = (document.getElementById('month').value)-0;
    console.log(month);
    while (is_invalid_month(month)){
        alert("Valid months are between 1 and 12.Please input a valid month");
         break;
    }
    // Get the value of the year from the user
    var year = (document.getElementById('year').value)-0;
    console.log(typeof year);

    var century = (year/100)|0;
    var c = Math.floor(century/4) - 2 * century - 1;
    console.log('century: ' + century);
    var last_two_digits_of_year = year % 100;
    console.log('last two digits :' + last_two_digits_of_year);
    
    var month_temp = Math.floor(26*(month + 1)/10);
    console.log('month: ' + month_temp);
    var year_temp = Math.floor (5*last_two_digits_of_year/4);
    console.log('year_temp:' + year_temp);
    var day_of_the_week = (day + month_temp + year_temp + c) % 7;
    console.log('day of the week: '+ day_of_the_week);
    
    var gender = document.querySelector('.gender:checked').value;
    console.log(gender);
    var name = ' ';
    // Checking the gender of the user and displaying his name according to the akan name
    if (gender === 'Male'){
        name = male_names[day_of_the_week];
    
    }else if(gender === 'Female'){
        name = female_names[day_of_the_week];
    }else {
        alert('You have chosen the wrong option. Please choose only one gender.');
    }
    
    var el = document.getElementById("p1").innerHTML = "You would've been called " + name;
    
    document.getElementById('year').value=" ";
    document.getElementById('day').value = " ";
    document.getElementById('month').value = " ";
};