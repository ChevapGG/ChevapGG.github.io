//this function takes an Element and returns the value 
function getSelectValue(s1) {
    var s1;
    var selectedValue = document.getElementById(s1).value;
}

//this function is called when the physical size is changed or when the PWA loads for the first time
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
        var optionArray = ["1|Micrometre", "1000|Milimetre", "10000|Centimetre", "1000000|Metre", "1000000000|Kilometre"];
    }
    if (s1.value == "mass") {
        var optionArray = ["1|Microgram", "1000|Milligram", "1000000|Gram", "1000000000|Kilogram", "1000000000000|Tonne"];
    }
    if (s1.value == "time") {
        var optionArray = ["1|Second", "60|Minute", "36000|Hour", "86400|Day", "604800|Week"];
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

//this is used to store the last selection because onchange triggers after the change and the old selection gets lost
function memory() {
    this.left = 0;
    this.right = 1;
}

//this function takes care of the conversions
function Converter(source, target, element_nr) {

    // declare variables
    var sourcelist;
    var targetlist;
    var source;
    var target;

    // sets source and target according to the sequence of values passed to the function
    if (source == 'l_nr')
        sourcelist = document.getElementById('list2');
    else
        sourcelist = document.getElementById('list3');

    if (target == 'l_nr')
        targetlist = document.getElementById('list2');
    else
        targetlist = document.getElementById('list3');
    
    //preparation for further processing
    source = document.getElementById(source);
    target = document.getElementById(target);

    //catch undefined memory to avoid unexpected behavior
    if (typeof memory.left === "undefined")              // === to avoid implicit conversions 
       memory.left = 0;
    if (typeof memory.right === "undefined")
         memory.left = 1;

    //prevents the unit from being converted to the same unit
    if (sourcelist.selectedIndex == targetlist.selectedIndex) {
        if (sourcelist.id == 'list2') { sourcelist.selectedIndex = memory.right; targetlist.selectedIndex = memory.left; }
        if (sourcelist.id == 'list3') { sourcelist.selectedIndex = memory.left; targetlist.selectedIndex = memory.right; }
    }

    //this formula calculates the actual conversion to other units
    target.value = sourcelist.value / targetlist.value * source.value

    //save state
    memory.left = list2.selectedIndex
    memory.right = list3.selectedIndex

}
