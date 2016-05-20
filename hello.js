$(document).ready(function() {
    $.ajax({
        url: "https://api.github.com/users/techbola?client_id=bef8ea7b242ccd6eea1c&client_secret=9397daa9a55fa06b819bd97305baf93752116888"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('<img src="" />').append(data.avatar_url);
       $('.greeting-name').append(data.name);
       $('.greeting-location').append(data.location);
       $('.greeting-login').append(data.login);
    });
});

