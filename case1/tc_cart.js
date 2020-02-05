"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   
   
   Filename: tc_cart.js
	
*/

var orderTotal = [0];

var cartHTML = "<table>" + "<tr>" + "<th>" + "item" + "</th>" + "<th>" + "Description" + "</th>" + "<th>" + "Price" + "</th>" + "<th>" + "Qty" + "</th>" + "<th>" + "Total" + "</th>" + "</tr>";

 for(var i =0; i < cartHTML ; i ++){
    cartHTML+="<tr>" + "<td>" + "<img src='tc_item.png' alt='item' />" + "</td>";
 }
 var cartHTML = "<td>" + "description" + "</td>" + "<td>" + "$price" + "</td>" + "<td>" + "quanity" + "</td>";

 var itemCost = price() * quanity();

 var cartHTML = "<tr>" + "<td colspan= '4'>" + "subtotal" + "</td>" + "<td>" + "$total" + "</td>" + "</tr>" + "</table>";

 document.getElementById("cartHTML").innerHTML;




