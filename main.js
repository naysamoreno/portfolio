"use strict"

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

function renderCoffee(coffee) {
    var html = '<tr class="coffee d-flex flex-row card flex-end col-6 border-0" style="height: 80px; background: none; ">';
    html += '<td class="card-body  flex-row flex-grow-0 align-self-center p-1 mr-0 " style="font-size: xx-large; background: none; color: white; font-family: Apple SD Gothic Neo,sans-serif; font-weight: bold">' + coffee.name + '</td>';
    html += '<td class="card-text d-inline-flex flex-grow-1 flex-row align-self-center p-0 mr-0" style=" background: none; font-size: large; color: gray; font-family: Apple SD Gothic Neo,sans-serif; font-weight: lighter; ">' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// var filteredCoffees = [];
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var searchCoffee = coffeeSearch.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (selectedRoast !== 'light' && selectedRoast !== 'medium' && selectedRoast !== 'dark') {
            filteredCoffees = coffees;
        } else if (coffee.roast === selectedRoast && ((coffee.name.toLowerCase()).includes(searchCoffee))) {
            filteredCoffees.push(coffee);
        }
        tbody.innerHTML = renderCoffees(filteredCoffees);
    });
}


function  addNewCoffee(e) {
    e.preventDefault();
    // var newCoffee = [];
    // newCoffee = coffees
    // var added = document.getElementById('addCoffee').value
    coffees.push({
        id: coffees.length,
        name: addCoffee.value,
        roast: newRoast.value
    });

    tbody.innerHTML = renderCoffees(coffees);
    console.log(renderCoffee(coffees));
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-search');
var addCoffee = document.querySelector('#addCoffee');
var newRoast = document.querySelector('#new-roast');
var submit2 = document.querySelector('#submit-2');


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
coffeeSearch.addEventListener('keyup', updateCoffees);
submit2.addEventListener('click', addNewCoffee);