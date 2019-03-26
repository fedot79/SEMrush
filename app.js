$(document).ready(function () {
    var filterInput = {1: "Text field",2:"Number field" } ;
    var optionInputText = ["Containing","Exactly matching","Begins with","Ends with"];
    var optionInputNumber = ["Equal","Greater than","Less than"];

    $.each(filterInput, function(key, value) {
        $('#firstInput').append('<option value="' + value + '">' + value + '</option>');
    });
    $.each(optionInputText, function(key, value) {
        $('#secondInput').append('<option value="' + value + '">' + value + '</option>');
    });
    $(function() {
        $('#firstInput').on('change', function() {
          switch (this.value) {
              case "Text field":
                  $('#secondInput > option').remove();
                  $.each(optionInputText, function(key, value) {
                      $('#secondInput').append('<option value="' + value + '">' + value + '</option>');
                  });
                  break;
              case  "Number field":
                  $('#secondInput > option').remove();
                  $.each(optionInputNumber, function(key, value) {
                      $('#secondInput').append('<option value="' + value + '">' + value + '</option>');
                  });
          }

        })
    });
});