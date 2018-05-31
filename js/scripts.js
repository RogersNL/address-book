$(document).ready(function(){

$("#addressBook").submit(function(event){
  event.preventDefault();

  var inputName = $("input#name").val();
  var inputStreet = $("input#addressStreet").val();
  var inputCity = $("input#addressCity").val();
  var inputState = $("select#addressState").val();
  var inputZip = $("input#addressZip").val();
  var inputPhone = $("input#phoneNumber").val();
  var inputEmail =$("input#email").val();


  $("ul#contactList").prepend(
    '<li>' +
        '<div class="shownInfo">' +
          '<h2>Name: ' + inputName + '</h2>' +
        '</div>' +
        '<div class="hiddenInfo">' +
          '<p>Phone #: ' + inputPhone + '</p>' +
          '<p>Email: ' + inputEmail +'</p>' +
          '<p>Address: </p>' +
          '<p> '+ inputStreet + '</p>' +
          '<p>' + inputCity + ', ' + inputState + ' ' + inputZip + '</p>' +
        '</div>' +
      '</li>'

    ).click(function(){
      $(".hiddenInfo").toggle();

  });

});


});

// '<li>' +
//     '<div class="shown">' +
//       '<p>Name: ' + inputName + '</p>' +
//     '</div>' +
//     '<div class="hidden">' +
//       '<p>Phone #: ' + inputPhone + '</p>' +
//       '<p>Email: ' + inputEmail +'</p>' +
//       '<p>Address: </p>' +
//       '<p> '+ inputStreet + '</p>' +
//       '<p>' + inputCity + ', ' + inputState + ' ' + inputZip + '</p>' +
//     '</div>' +
//   '</li>'
