// alert("Only for RENATOCHKA!");

$(document).ready(function() {
    $("#yes-button").click(function(){
        $("#flower").hide()
        $("#pistol").hide()
        $("#dancing").show()
        $("#hey").hide()
        $("#will").hide()
        $("#no").hide()
        $("#see").show()
        $("#purpur").show()
        $("#yes-button").hide()
        $("#no-button").hide()
    });
    $("#no-button").click(function(){
        $(this).addClass("no-button");
        $("#flower").hide()
        $("#pistol").show()
        $("#hey").hide()
        $("#will").hide()
        $("#no").show()
        $(this).animate({
            'top': Math.random() * window.innerHeight + "px",
            'left': Math.random() * window.innerWidth + "px"
          }, "medium");
    }); 
});
