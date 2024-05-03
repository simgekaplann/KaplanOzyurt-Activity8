$(document).ready(function(){
    $( "#birthday" ).datepicker();
    
var lang = ["ActionScript", "AppleScript", "Asp","JavaScript","Lisp","Perl","PHP","Python"];
$( "#language" ).autocomplete({ source: lang });

});





document.getElementById('myForm').addEventListener('submit', function(event) {
    var languageInput = document.getElementById('language');
    
    // Check if the language input is empty
    if (languageInput.value.trim() === '') {
        // Prevent form submission
        event.preventDefault();
        // Apply red border to language input
        languageInput.style.border = '2px solid #ff0000';
    } else {
        // Reset border if language input is filled
        languageInput.style.border = '1px solid #ccc';
    }
});
