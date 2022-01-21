$(function (){
    var role=0;
    var roles=["Programming Enthusiast","Web Developer","Digital Marketing Fanatic"];
    setInterval( () => {
   $(".home-content h2 span").fadeOut(500, function () {
        $(this).text(roles[role++ % roles.length] + "...");
        $(this).fadeIn(500);
      });
    }, 2500);
});
