// JavaScript source code

//BUGS: wenn ich mehrere umrechnungen mache bevor ich nach bit umrechne ist das ergebnis falsch, da
//      nicht vor jeder umrechnung in bit umgerechnet wird (?)


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function getSelectValue(s1) {
    var s1;
    var selectedValue = document.getElementById(s1).value;
}

var memory = ['Bit', 'Bit']; //Linkes TextFeld, Rechtes Textfeld


function populate(s1, s2, s3) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);

    s2.innerHTML = "";
    s3.innerHTML = "";

    if (s1.value == "ds") {
       // var optionArray = ["1|Bit", "1000|Kilobit", "1024|Kibibit", "1000000|Megabit", "1049000|Mebibit", "1000000000|Gigabit", "1074000000|Gibibit", "8|Byte", "8000|Kilobyte", "8192|Kibibyte", "0,00000125|Megabyte", "0,0000011921|Mebibyte", "0,00000000125|Gigabyte", "0,0000000011642|Gibibyte"];
        var optionArray = ["1|Bit", "1000|Kilobit", "1024|Kibibit", "1000000|Megabit", "1049000|Mebibit", "1000000000|Gigabit", "1074000000|Gibibit", "8|Byte", "8000|Kilobyte", "8192|Kibibyte", "0,00000125|Megabyte", "0,0000011921|Mebibyte", "0,00000000125|Gigabyte", "0,0000000011642|Gibibyte"];
         
    }
    if (s1.value == "le") {
        var optionArray = ["1|Micrometre", "0,001|Milimetre", "0,0001|Centimetre", "0,000001|Metre", "0,000000009|Kilometre"];
        //var optionArray = [{value: 1, name: Micrometre}, "0,001|Milimetre", "0,0001|Centimetre", "0,000001|Metre", "0,000000009|Kilometre"];
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
    
}

function getSelectedOption(sel) {
    var opt;
    for (var i = 0, len = document.getElementById(sel).options.length; i < len; i++) {
        opt = document.getElementById(sel).options[i];
        if (opt.selected === true) {
            break;
        }
    }
    return opt;
}


////////////////////////////////////////////////// Converter Funktion / Alle berechnungen /////////////////////////////////////////////////////////////

function Converter(number, s1, s2) {

    var e = document.getElementById(s2);
    var Faktor = e.options[e.selectedIndex].value;
    var Faktor2 = e.options[e.selectedIndex + 2].value;
    var optionArrayl2 = [];
    var nameArray = [];
    var l_tf_found = 0;
    var r_tf_found = 0;
    var opt = getSelectedOption('list2');
    var opt2 = getSelectedOption('list3');
    var number2 = 1;
    var memfound = 0;
    var textfound = 0;


 

   // var dll;
   // var ddl = document.getElementById('list2');

    //////////////////////////////////////////////////// Arrays befüllen (mit inhalt der Auswahlmenues //////////////////////////
    for (i = 0; i < document.getElementById('list2').options.length; i++) {
        optionArrayl2[i] = document.getElementById('list2').options[i].value;
        nameArray[i] = document.getElementById('list2').options[i].innerHTML;
        //console.log(document.getElementById('list2').options[i].innerHTML);

        console.log('zu Bit umrechnen?');
        //Wert im linken TF in Bit umrechnen:

        if (opt.text != 'Bit') {
            console.log("Das ist kein BIT! :0");
            if (nameArray[i] == document.getElementById('list2').options[i].innerHTML) {
                number2 = document.getElementById('l_nr').value * optionArrayl2[i];
            } else { number2 = document.getElementById('l_nr') }
        }
        console.log('suche nach vorzeichen...' + opt.text);
        //Überprüfung, ob die Auswahl im linken oder rechten dropdown groesser ist -> Anschließende berechnung und verlassen der grossen for schleife
        if (opt.text == nameArray[i]) { l_tf_found = 1; console.log('links gefunden!'); }
        if (opt2.text == nameArray[i]) { r_tf_found = 1; console.log('rechts gefunden!'); }

        if (l_tf_found == 1 && r_tf_found == 0) { document.getElementById(s1).value = number2 * Faktor; console.log('multipliziert'); break; }
        if (l_tf_found == 0 && r_tf_found == 1) { document.getElementById(s1).value = number2 / Faktor; console.log('geteilt'); break; }

        //Wenn l und r gleich groß sind, fallunterscheidung s2 == 'l_nr' -> linkes tf ändern
                                                                 //'l_nr' -> rechtes tf ändern
        // /*

        /////////////////////////////////////////////////////////////////////////Wenn beide Auswahlfelder den gleichen wert haben///////////////////////////////
        if (l_tf_found == 1 && r_tf_found == 1) {



        //////////////////////////////////////////////////////////////////////// Wenn das linkes Auswahlfeld geändert wurde ........... //////////
            if (s2 == 'list2') {

                //Rechenzeichen basierend auf platz im array zuweisen. vergleich mit memory (war der alte wert grösser -> * ; alte wert kleiner -> / ;)
                for (i = 0; i < document.getElementById('list2').options.length; i++) {
                    optionArrayl2[i] = document.getElementById('list2').options[i].value;       //wert
                    nameArray[i] = document.getElementById('list2').options[i].innerHTML;           //beschriftung

                    if (nameArray[i] == memory[0]) {
                        document.getElementById(s1).value = memory[2] / memory[4];
                        console.log('mem wurde zuerst gefunden!');
                        console.log("memory2: " + memory[2] + " Faktor2 " + Faktor2 + " memory3: " + memory[3]);
                        break;
                    }

                    if (nameArray[i] == opt.text) {
                        document.getElementById(s1).value = memory[2] * memory[4];
                        console.log('Text wurde zuerst gefunden!');
                        console.log("memory2: " + memory[2] + " Faktor2 " + Faktor2 + " memory3: " + memory[3]);
                        break;
                    }

                }              
               
               
            }
                      
            //document.getElementById(s1).value = number2 * Faktor; console.log('beide gleich! -> Fallunterscheidung:'); break;
            break;
            console.log('if beended');
        }
      //  */
        
    } 

    ///////////////////////////////////////////////////// Memory befüllen ////////////////////////////////////////////////////////////////

      console.log("-----------");
    memory = [opt.text, opt2.text, opt.value, opt2.value, document.getElementById('l_nr').value, document.getElementById('r_nr').value]

}           //ende von converter





/*  ziel und source bestimmen (bei onchange übergeben)
 *  das Verhälnis zwischen (x/y) oder (y/x) [je nach target/source] * den Wert im textfeld auf der source seite = ergebnis 
 *  ließ dir nochmal die spezifikationen vom program durch! gibt da noch sachen auf die ich achten muss
 */
