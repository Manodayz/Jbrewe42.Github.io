function includeHTML(callback) {
    var z, i, elmnt, file, xhttp;
    /* Loop through all elements with the "data-include" attribute */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("data-include");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText; // Load the content into the element
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found."; // Handle file not found
                    }
                    if (callback) {
                        callback(); // Execute the callback function once the file is loaded
                    }
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            return; // Return immediately after making the request, halting further execution
        }
    }
}


/*function includeHTML() {
    var elements, i, element, file, xhttp;
    elements = document.querySelectorAll('[include-html]');
    
    for (i = 0; i < elements.length; i++) {
        element = elements[i];
        file = element.getAttribute('include-html');
        
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText;
                    } else {
                        element.innerHTML = "Page not found.";
                    }
                }
            };
            xhttp.open('GET', file, true);
            xhttp.send();
            return;
        }
    }
}
*/