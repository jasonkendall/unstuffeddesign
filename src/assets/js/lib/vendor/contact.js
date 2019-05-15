$(function() {
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $("#contact-form").validator();

  // when the form is submitted
  $("#contact-form").on("submit", function(e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "contact.php";

      // POST values in the background the the script URL
      $.ajax({
        type: "POST",
        url: url,
        data: $(this).serialize(),
        success: function(data) {
          // data = JSON object that contact.php returns

          // we recieve the type of the message: success x danger and apply it to the
          var messageAlert = data.type;
          var messageText = data.message;

          // let's compose Bootstrap alert box HTML
          var alertBox =
            '<div class="callout ' +
            messageAlert +
            '" data-closable>' +
            messageText +
            '<button class="close-button" aria-label="Dismiss alert" type="button" data-close><span aria-hidden="true">&times;</span></button>' +
            "</div>";

          // If we have messageAlert and messageText
          if (messageAlert && messageText) {
            // inject the alert to .messages div in our form
            $("#contact-form")
              .find(".messages")
              .html(alertBox);
            // empty the form
            $("#contact-form")[0].reset();
          }
        }
      });
      return false;
    }
  });
});
