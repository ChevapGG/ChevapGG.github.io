// JavaScript source code


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function getSelectValue(s1) {
    var s1;
    var selectedValue = document.getElementById(s1).value;
}

function populate(s1, s2, s3) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);

    s2.innerHTML = "";
    s3.innerHTML = "";

    if (s1.value == "ds") {
        var optionArray = ["1|Bit", "1000|Kilobit", "1024|Kibibit", "1000000|Megabit", "1049000|Mebibit", "1000000000|Gigabit", "1074000000|Gibibit", "8|Byte", "8000|Kilobyte", "8192|Kibibyte", "0,00000125|Megabyte", "0,0000011921|Mebibyte", "0,00000000125|Gigabyte", "0,0000000011642|Gibibyte"];
    }
    if (s1.value == "le") {
        var optionArray = ["1|Micrometre", "0,001|Milimetre", "0,0001|Centimetre", "0,000001|Metre", "0,000000009|Kilometre"];
    }
    if (s1.value == "mass") {
        var optionArray = ["1|Microgram", "0,001|Milligram", "0,000001|Gram", "0,000000009|Kilogram", "0,000000000009|Tonne"];
    }
    if (s1.value == "temp") {
        var optionArray = ["1|Celsius", "9/5+32|Fahrenheit", "1+273,15|Kelvin"];
    }

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
        // s3.options.add(newOption);
    }

    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        //s2.options.add(newOption);
        s3.options.add(newOption);
    }

    s3.selectedIndex = "1";
}

function getSelectedOption(sel) { //gibt die selektierte option aus (für die listen) //legacy?, da besser weg gefunden
    var opt;
    for (var i = 0, len = document.getElementById(sel).options.length; i < len; i++) {
        opt = document.getElementById(sel).options[i];
        if (opt.selected === true) {
            break;
        }
    }
    return opt;
}


function memory() { //stellt public vars bereit 
    this.left = 0;
    this.right = 1;
}


////////////////////////////////////////////////// Converter Funktion / Alle berechnungen /////////////////////////////////////////////////////////////

function Converter(source, target) {    //nr = tf , list = option // number = wert der umgerechnet werden soll

    var sourceopt;
    var targetopt;
    var sourcelist;
    var targetlist;
    //l_nr => list2
    //r_nr => list3




    if (source == 'l_nr') {
        sourcelist = document.getElementById('list2'); console.log("sourcelist gesetzt");
        targetlist = document.getElementById('list3')
    } else {
        sourcelist = document.getElementById('list3'); console.log("sourcelist gesetzt");
        targetlist = document.getElementById('list2')
    }

    if (source == 'l_nr')
        console.log("Source == links") 
    else
        console.log("Source == rechts")




    var source = document.getElementById(source);
    var target = document.getElementById(target);


    //tauschen zum alten wert also speicher was
    if (sourcelist.selectedIndex == targetlist.selectedIndex) {
        console.log("oh nein, du sollst das nicht tuen :0")
        if (sourcelist == 'list2') { var mem = memory.left; console.log("altes links nach rechts") }
        if (sourcelist == 'list3') { var mem = memory.right; console.log("altes rechts nach links") }
        console.log("Du hast folgende liste angeklickt: " + document.getElementById(sourcelist))
        sourcelist.selectedIndex = targetlist.selectedIndex
        targetlist.selectedIndex = mem
    }

    console.log("source.value: " + source.value + " target.value: " + target.value)
    console.log("sourcelist.value: " + sourcelist.value + " targetlist.value: " + targetlist.value)

    target.value = sourcelist.value / targetlist.value * source.value

    //save state
    memory.left = list2.selectedIndex
    memory.right = list3.selectedIndex


    console.log("---------------");
}           //ende von converter





/*  Kommentar Bereich:
 *      Ließ dir die bewertungskriterien nochmal durch!
 *  
 *  
 */
