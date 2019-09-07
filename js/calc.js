$(document).ready(function(){
    
    var $costField = $("#cost");
    var $qualityField = $("#quality");
    var $guestsField = $("#guests");
    
    $( ".calculate" ).click(function() {
        
        // Get field values
        var cost = parseFloat($costField.val());
        var quality = parseFloat($qualityField.val());
        var guests = parseInt($guestsField.val());
        
        // Check for Non-numeric
        if(!$.isNumeric(cost) || !$.isNumeric(quality) || !$.isNumeric(guests)){
            alert("Please fill out all fields.");
            return false;
        }
        
        // Check for Negative values
        if(cost < 0 || quality < 0 || guests < 0){
            alert("Please do not use negative values.");
            return false;
        }
        
        // Calculate tip and round
        var tip = cost * quality;
        tip = tip.toFixed(2);
        
        // Calculate tip per guest and round
        var tipPerGuest = tip/guests;
        tipPerGuest = tipPerGuest.toFixed(2);
        
        $(".block p").text("$" + tipPerGuest);
    });
});