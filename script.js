/*$(function (){
    var role=0;
    var arr=["Undergraud Student","Upcoming Engineer","Web Developer"];
    setInterval( () => {
    $(".home-content h2 span").text(arr[role++ & arr.length]);
    }, 1000);
});*/

$(function () {
    var role = 0;
    var roles = ["IT Security Specialist", "Digital Marketing Fanatic", "Programming Enthusiast"];
    setInterval(() => {
      $(".home-content h2 span").fadeOut(500, function () {
        $(this).text(roles[role++ % roles.length] + "...");
        $(this).fadeIn(500);
      });
    }, 2500);
  });