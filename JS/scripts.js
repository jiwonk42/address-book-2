//BUSINESS LOGIC


//USER INTERFACE
$(document).ready(function(){
  $("#add-address").click(function(){
    $("#new-addresses").append('<div class="new-addresses">' + '<div class="form-group">' +'<label for="new-street"></label>'+'<input type="text" class="form-control new-street">'+'
    </div>')  });
});
