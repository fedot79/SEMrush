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
    $("#x").hide();
    $(function() {

        $('#firstInput').on('change', function() {
          switch (this.value) {
              case "Text field":
                  $('#secondInput > option').remove();
                  $('#filterValue').val('');
                  $('#filterValue').attr({type:'text'});
                  $('#filterValue').keypress(function (e) {
                      var regex = new RegExp(/^[a-zA-Zа-яА-Я\s]+$/);
                      var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
                      if (regex.test(str)) {
                          return true;
                      }
                      else {
                          e.preventDefault();
                          return false;
                      }
                  });
                  $.each(optionInputText, function(key, value) {
                      $('#secondInput').append('<option value="' + value + '">' + value + '</option>');
                  });
                  break;
              case  "Number field":

                  $('#secondInput > option').remove();
                  $('#filterValue').attr({type:'number'});
                  $.each(optionInputNumber, function(key, value) {
                      $('#secondInput').append('<option value="' + value + '">' + value + '</option>');
                  });
          }

        })
    });
    var countFields = 0;
    $('#add').on('click',function () {
       countFields++;
        $("#x").show();
        $("#firstInput",).clone(true).attr('id','firstInput'+ countFields).appendTo("#filter" );
        $("#secondInput").clone(true).attr('id','secondInput'+ countFields).css({'margin-left':'4px'}).appendTo("#filter" );
        $("#filterValue").clone(true).attr('id','filterValue'+ countFields).css({'margin-left':'4px'}).appendTo("#filter" );

        $("#x").clone().css({'margin-left':'4px'}).appendTo("#filter" );
        
    });


});