/*==============jQuery File=============*/


$(document).on("ready", function() {
    var button = $('.switch > button');

    function changeText() {
      if (button.hasClass('on')) {
        $(".status").text("It's so bright in here!");
      } else {
        $(".status").text("Hey, who turned off the lights?");
      }
    }

    function onOff() {
      $("body").toggleClass("light dark");
    }

    function switchOnOff() {
      button.toggleClass("on off");
    }

    function buttonClick() {
      onOff();
      switchOnOff();
      changeText();
    };

    button.on('click', buttonClick);
});
