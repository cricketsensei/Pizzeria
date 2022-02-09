menu_list_array = ["Cheese Pizza","Veg Pizza","Chicken Taco Pizza","MeatZZa Pizza","Deluxe Pizza","ExtravaganZZa Pizza", "Philly Cheese Steak Pizza", "Pacific Veg Pizza", "Honolulu Hawaiian", "Cali Chicken Bacon", "Buffalo Chicken Pizza", "Ultimate Pepperoni Pizza", "Memphis BBQ Chicken Pizza", "Wisconsin 6 Cheese Pizza", "Spinach & Feta Pizza"];
    
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
     htmldata=htmldata+"</ol>"
     document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="card">' +'<img src="Pizza-afterbutton.jpg"/>' + menu_list_array[i] + '</div>'
    }
      htmldata=htmldata+"</section>"
     document.getElementById("display_addedmenu").innerHTML = htmldata;
    
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}