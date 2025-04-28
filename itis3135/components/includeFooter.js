function includeFooter() {
    console.log("includeFooter is running...");
    var xhttp = new XMLHttpRequest();
    var elmnt = document.getElementById("footer-container");
    var file = elmnt.getAttribute("data-include");

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                elmnt.innerHTML = this.responseText;
            } else if (this.status == 404) {
                elmnt.innerHTML = "Footer not found.";
            }
        }
    };
    
    xhttp.open("GET", file, true);
    xhttp.send();
}
