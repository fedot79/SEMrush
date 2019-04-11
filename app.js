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

            $('#add').on('click', function () {
                countFields++;
                $("#x").show();
                $("#firstInput",).clone(true).attr({
                    'id': 'firstInput' + countFields,
                    'name': countFields
                }).appendTo("#filter");
                $("#secondInput").clone(true).attr({
                    'id': 'secondInput' + countFields,
                    'name': countFields
                }).css({'margin-left': '4px'}).appendTo("#filter");
                $("#filterValue").clone(true).attr({
                    'id': 'filterValue' + countFields,
                    'name': countFields
                }).css({'margin-left': '4px'}).appendTo("#filter");

                // $("#x").clone().attr({'id':'x'+ countFields,'name':countFields}).css({'margin-left':'4px'}).appendTo("#filter" );
                $("<button>X</button>").attr({
                    'id': 'x' + countFields,
                    'name': countFields,
                    'class': 'btn btn-link del',
                    'type': 'button'
                }).css({'margin-left': '5px'}).appendTo("#filter");
                $("#x" + countFields).click(function () {
                    var arrChkBox = document.getElementsByName(this.name);
                    $(arrChkBox).remove();

                });
                if (countFields==8){
                    $('#add').on('click', function () {
                        $("<p>Больше полей добавлять нельзя</p>").css({'color': 'red'}).appendTo("#filter");
                        $('#add').hide();
                    })
                }
            });






});