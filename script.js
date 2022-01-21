$(function (){
    var role=0;
    var roles=["Undergraud Student","Web Developer"];
    setInterval( () => {
   $(".home-content h2 span").fadeOut(500, function () {
        $(this).text(roles[role++ % roles.length] + "...");
        $(this).fadeIn(500);
      });
    }, 2500);
});
