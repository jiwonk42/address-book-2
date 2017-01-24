//BUSINESS LOGIC


//USER INTERFACE
$(document).ready(function(){
  // Click Listener for Another Address
  $("#add-address").click(function(){
    $("#new-addresses").append('<div class="new-addresses">' + '<div class="form-group">' +'<label for="new-street"></label>'+'<input type="text" class="form-control new-street">'+'
    </div>' + '<div class="form-group">' +
    '<label for="new-city">City</label>' +
    '<input type="text" class="form-control new-city">' + '</div>' + '<div class="form-group">' + '<label for="new-state">State</label>' + '<input type="text" class="form-control new-state">' + '</div>');
  });
    //Submit Listener for Add Address
    $("form#new-contact").submit(function(event){
      event.preventDefault();



      $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.newcity").val();
        var inputtedState = $(this).find("input.new-state").val();
        var newAdress = new Address(inputtedStreet,inputtedCity,inputtedState);
        newContact.addresses.push(newAdress);
      });

  });
});
