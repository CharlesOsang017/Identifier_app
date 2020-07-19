 
function dateOfBirth() {
    return document.forms['form'];
}
var k, b, c;
dateOfBirth()['btn'].addEventListener('click', function (e) {
    e.preventDefault();
    checkEmpty();
});

function checkEmpty() {
    function w(k) {
        return dateOfBirth()[k].value;
    }
    var d, m, y, g;
    d = w('day');
    m = w('month');
    y = w('year');
    g = w('g');
    if (d == '' && m == '' && y == '' && g == '') {
        alert('make sure you have provided all the required information inorder to get your Akan name');
        return 0;
    } else if (d == '') {
        alert('Provide your day date of birth eg 01 for first day of the month');
        return 0;
    } else if (m == '') {
        alert('Provide your month of birth please!!');
        return 0;
    } else if (y == '') {
        alert(' Provide your year of birth please!!');
        return 0;
    } else if (g == '') {
        alert('Provide your gender');
        return 0;
    } else {
        charles(d, m, y, g);
    }
}

function charles(d, m, y, g) {
    d = parseInt(d);
    m = parseInt(m);
    y = parseInt(y);
    var cc = (y - 1) / 100 + 2;
    var formula = parseInt(((26 * (m + 1) / 10)) + ((5 * y / 4)) + ((cc / 4) - 2 * cc - 1) + d) % 7;
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (m < 1 || m > 12 || m == 2 && d > 29) {
        alert("Invalid month");
        return 0;
    } else if (d < 1 || d > 31) {
        alert("Invalid day");
        return 0;
    }
    else if(y<1489 || y>2020){alert('Invalid year')}

    if (g == 'm') {
        g = male;
    } else if (g == 'f') {
        g = female;
    } else {
        alert("Please choose from the options given");
        return 0;
    }

    for (var k = 0; k< 7; k++) {
        if (Math.ceil(formula) == (k)) {
            document.getElementById("results").innerHTML = ("Your day of birth is: " + day[k] + "<br/>Your Akan name is   " + g[k]);     
            return 0;
        }
    }

}

















