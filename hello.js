$(document).ready(function() {
	$('#other').hide();
    $.ajax({
        url: "https://api.github.com/users/techbola"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-name').append(data.name);
       $('.greeting-location').append(data.location);
       $('.greeting-login').append(data.login);
    });

    $( "#btn" ).click(function(e){
        e.preventDefault();

          $("#first").hide();
          $("#other").show();

      });
    $( "#btn2" ).click(function(e){
        e.preventDefault();

          $("#first").show();
          $("#other").hide();

      });



});

