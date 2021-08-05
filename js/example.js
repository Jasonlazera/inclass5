// ADD NEW ITEM TO END OF LIST
var node = document.createElement('li');
node.setAttribute('id', 'five')
node.appendChild(document.createTextNode('cream'));
document.querySelector('ul').appendChild(node);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var el =  document.getElementById('one');
var el2 = document.getElementById('two');
var el3 = document.getElementById('three');
var el4 = document.getElementById('four');
var el5 = document.getElementById('five');

el.setAttribute('class', 'cool');
el2.setAttribute('class', 'cool');
el3.setAttribute('class', 'cool');
el4.setAttribute('class', 'cool');
el5.setAttribute('class', 'cool');

// ADD NEW ITEM START OF LIST
var node2 = document.createElement('li');
node2.setAttribute('id', 'zero')
node2.appendChild(document.createTextNode('kale'));

document.querySelector('ul').insertBefore(node2, document.getElementById('one'));
var el6 = document.getElementById('zero');
el6.setAttribute('class', 'cool');

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var element = document.getElementsByTagName("li");
var number = element.length;

document.querySelector('h2').append(' ');
document.querySelector('h2').append(number);