function funcdroppmeny() {
    /*
    Funktionen kollar om elementet <droppmeny-content>
    stil-attribut "visibility" har värdet "hidden" eller "visible".

    1) Om värdet är "hidden", så anvisar skriptet höjdvärdet "auto", och paddingvärdet "10px 0".

    2) Annars, om värdet är "visible", så anvisar skriptet
   höjdvärdet 0, samt paddingvärdet 0 till <droppmeny-content> */
    var menyn = document.getElementById("droppmeny_content");
    var STATUS = getComputedStyle(menyn).visibility;
    if (STATUS == "hidden") {
        menyn.style.cssText="padding:10px0;height:185px;visibility:visible;transition:height, 370ms ease-in-out";
        
    }
    else if (STATUS == "visible") {
        menyn.style.cssText="padding:0;height:0px;visibility:hidden;transition:height, 370ms ease-out";
    }
    
} 
