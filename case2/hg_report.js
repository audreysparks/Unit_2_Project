"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: 
   Date:   
   
   Filename: hg_report.js
	
*/

var gameReport = "<h1>" + itemTitle + "</h1 \
               <h2>By:" + itemManufactuerer + "<h2 \
               <img src=‘hg_” + itemID + “.png’ alt=‘id’ id=‘gameImg’ /> \
               <table> \
               <tr><th>Product Id</th><td>“+itemID+“</td></tr> \
               <tr><th>List Price</th><td>“+itemPrice+“</td></tr> \
               <tr><th>Platform</th><td>“+itemPlatform +“</td></tr> \
               <tr><th>ESRB Rating</th><td>“+itemESRB+“</td></tr> \
               <tr><th>Condition</th><td>“+itemCondition+“</td></tr> \
               <tr><th>Release</th><td>“+itemRelease+“</td></tr> \
              </table> \ 
               "+itemSummary;
              // html code for layout of the sports items 

   var ratingsSum = 0; 
   var ratingsCount = ratings.length; 

   for(var i = 0; i<ratings.length; i++ ){
      ratings[i] += ratingsSum;
   }

   var ratingAvg = 
   ratingsSum/ratingsCount;
   var ratingReport =
   "<h1>Customer Reviews </h1> \
   <h2>"+ratingsAvg+"out of 5 stars ("+ratingsCount+"reviews)</h2>"; //reviews for the sports items 

   for(var i=-; ratings[0,1,2]; i++){
      ratingReport+="<div class='review'>\
      <h1>"+ratingTitles+"</h1> \
      <table>
      <tr><th>By</th><td>"+ratingAuthors+"</td>
      </tr> \
         <tr><th>ReivewDate</th>
         <td>"+ratingDates+"</td></tr> \
         <tr><th>Rating</th></tr>";
         for(var i=0; ratings[i]; i++){
            ratingReport += “<img src=‘hg_star.png’/>“;
         }

         ratingReport+="</td></tr></table>\
         "+ratingSummaries
      } //summaries of the ratings of the items 
      document.getElementsByTagName("aside").innerHTMl = ratingReport;
      ratingReport;
      document.getElementsByTagName("article").innerHTML = gameReport;
   
