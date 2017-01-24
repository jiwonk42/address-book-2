//BUSINESS LOGIC
//Contact constructor and prototype
function Contact(first, last){
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

//Adress constructor and prototype
function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function () {
  return this.street + ", " + this.city + ", " + this.state;
};

//Blank out the form fields after the submit button is hit
function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
}

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

      //Create object newContact with first and last name elements
      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName =
      $("input#new-last-name").val();
      var newContact = new Contact (inputtedFirstName,inputtedLastName);

      //Create object address within object newContact
      $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.newcity").val();
        var inputtedState = $(this).find("input.new-state").val();
        var newAdress = new Address(inputtedStreet,inputtedCity,inputtedState);
        newContact.addresses.push(newAdress);
      });

      // Insert Name Information
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

      // Click Listener for New Contact
      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        //Insert address details from the new object
        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.fullAddress()+ "</li>");
        });
      });

    resetFields();
  });
});
