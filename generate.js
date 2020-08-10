/*
File: /~alora1/public_html/assignments/5/generate.js (91.46) COMP 4610 GUI Programming I
Assignment 7: Dynmaic Multiplication Table with tabs and sliders
Ambioris Lora, UMass Lowell Computer Science, alora1@cs.uml.edu
Copyright (c) 2020 by Ambioris Lora. All rights reserved. May be
freely
copied or excerpted for educational purposes with credit to the
author.
*/


/*
Function Name: ""
Expected Values: None

Description: this is a jquery function that validates the info being inserted

Variables:


*/

var string = "tabs-1";
var tableid = 1;
var tablecount = 0;

var tabs = $( "#myTabs" ).tabs();

//the following 4 sliders assign the value from the sldier to the input form and the the following 2 buttons are for calling functions
$(document).ready(function() {
    $("#slider1").slider({
      max:50,
      min:-50,
      change: function(event, ui) {
        $('#num1').val(ui.value);
        test();
      }
    });
    $("#slider2").slider({
      max:50,
      min:-50,
      change: function(event, ui) {
        $('#num2').val(ui.value);
        test();
      }
    });
    $("#slider3").slider({
      max:50,
      min:-50,
      change: function(event, ui) {
        $('#num3').val(ui.value);
        test();
      }
    });
    $("#slider4").slider({
      max:50,
      min:-50,
      change: function(event, ui) {
        $('#num4').val(ui.value);
        test();
      }
    });
    $("#button2").click(function(){
      //$(this).hide();

      save();
    });
    $("#button4").click(function(){
      $("#myTabs li").remove();

    });
    $( function() {
      $( "#tabs" ).tabs();
    } );

    //assign the following slider value to the input
    $("#num1").keyup(function() {
      $("#slider1").slider("value" , $(this).val())
    });
    $("#num2").keyup(function() {
      $("#slider2").slider("value" , $(this).val())
    });
    $("#num3").keyup(function() {
      $("#slider3").slider("value" , $(this).val())
    });
    $("#num4").keyup(function() {
      $("#slider4").slider("value" , $(this).val())
    });

    //slider/input rules
    $("#signup").validate({
      rules: {
        num1: {
          required: true,
          number: true,
          max: 50,
          min: -50,
          minlength: 1
        },
        num2: {
          required: true,
          number: true,
          max: 50,
          min: -50,
          minlength: 1
        },
        num3: {
          required: true,
          number: true,
          max: 50,
          min: -50,
          minlength: 1
        },
        num4: {
          required: true,
          number: true,
          max: 50,
          min: -50,
          minlength: 1
        }


      },
        messages: {
            num1: {
                required: "Please provide a value"
            },
            num2: {
                required: "Please provide a value"
            },
            num3: {
                required: "Please provide a value"
            },
            num4: {
                required: "Please provide a value"
            }
        }
    });
});



/*
function: test();

purpose: this function simply gets the values and generates the table from them. It also removes the table if theres more than one table being made
variables: n1,n2,n3,n4, row , cell, tab, container

*/
function test() {
  //Get the blank table and assign to variables row and cell
  /*if(bool == true){
    var tbl = document.getElementById("table1");
    tbl.remove();
    bool == false
  }
  */

  if(!$("#signup").valid()){
     return;
   }
   var createtable = document.createElement('table');
   createtable.id = "table1";
   if(tablecount > 0){
     $("#table1 tr").remove();
   }

  var n1 = Math.abs(document.getElementById("num1").value);
  var n2 = Math.abs(document.getElementById("num2").value);
  var n3 = Math.abs(document.getElementById("num3").value);
  var n4 = Math.abs(document.getElementById("num4").value);
  //var table = document.getElementById("myTable");
  var row, cell;


  //Super useful swap function from : https://dmitripavlutin.com/swap-variables-javascript/#:~:text=JavaScript%20offers%20a%20bunch%20of,way%20uses%20a%20temporary%20variable.
  if(n4 < n3){
    [n3,n4] = [n4,n3];
  }
  if(n2 < n1){
    [n1,n2] = [n2,n1];
  }

  //blank corner
  //row = table.insertRow();
  //cell = row.insertCell();

  row = createtable.insertRow();
  cell = row.insertCell();

  //This is where we fill the table
  for(let i = n1; i <= n2; i++) {
    cell = row.insertCell();
    cell.innerHTML = i;
  }

  for(let i = n3; i <= n4; i++) {
    row = createtable.insertRow();
    cell = row.insertCell();

    cell.innerHTML = i;
    for (let j = n1; j <= n2; j++) {
      cell = row.insertCell();
      cell.innerHTML = j*i;
    }
  }

  //Here we insert the table before the tabs
  let tab = document.getElementById('myTabs');
  let container = document.querySelector('body');
  console.log(createtable);

  container.insertBefore(createtable, tab);
  console.log(tableid);
  //tablecount++;


}

/*
* function: save()
*
* purpose: The function gets the tableid and then appends it to the tab
*
* variables: list1, tableholdid, list1, tablehold
*
*/

function save() {
  //get the list of tabs
  //create a tab
  //console.log(tab);

  //get the table with the id we created
  var tableholdid = "myTable1";

  //
  var table = document.getElementById(tableholdid);

  //create the list item

  //now put it all together
	//this is test whether i could use a variable to set id
  let list1 = document.getElementById("a");
  let tablehold = document.getElementById("table1");
  list1.appendChild(tablehold);

  tableid+=1;
}

// close icon: removing the tab on click
