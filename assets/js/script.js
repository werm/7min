$('#start-workout').on('click', function(){
  $('#main').empty();
  $('#main').load('../../templates/1-jumping-jacks.liquid', function() {
    $(".time").delay(2000).countDown({
      startNumber: 5,
      callBack: function(me) {
        $(me).text("Next!").css("color", "#bb0000");
      }
    });
  });
})


