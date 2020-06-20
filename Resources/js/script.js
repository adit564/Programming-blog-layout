// ---------------------------------------------------------//
// Basic Setup//
// ---------------------------------------------------------//

var print = function(x) {
    console.log(x);

}
$(document).ready(function() {
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated zoomIn');
    }, {
        offset: '50%'
    }, {
        delay: 1
    });
    $('.Hero-text-heading').waypoint(function(direction) {
        $('.Hero-text-heading').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeIn');
    }, {
        offset: '30%'
    }, {
        delay: 2
    });
    $('.card').waypoint(function(direction) {
        $('.card').addClass('animated pulse');
    }, {
        offset: '80%'
    });



});




// ---------------------------------------------------------//
// POP-UPS//
// ---------------------------------------------------------//
$(document).ready(function() {

    $(".java-icon, .js-icon, .html-icon, .css-icon").click(function() {
        $(".Hero-text").hide();
    });

    $(".close").click(function() {
        $(".Hero-text").show(200);
        $("#Pop-up-1,#Pop-up-2,#Pop-up-3,#Pop-up-4").hide()
        $(".container-btn").show()
    });

    $(".java-icon").click(function() {
        $("#Pop-up-1").show();
        $("#Pop-up-2,#Pop-up-3,#Pop-up-4,.container-btn").hide();

    });
    $(".js-icon").click(function() {
        $("#Pop-up-2").show();
        $("#Pop-up-1,#Pop-up-3,#Pop-up-4,.container-btn").hide();
    });
    $(".html-icon").click(function() {
        $("#Pop-up-3").show();
        $("#Pop-up-1,#Pop-up-2,#Pop-up-4,.container-btn").hide();
    });
    $(".css-icon").click(function() {
        $("#Pop-up-4").show();
        $("#Pop-up-1,#Pop-up-2,#Pop-up-3,.container-btn").hide();
    });


    // ---------------------------
    // Dark mode
    // -----------------------------
    $(".dark-mode-on").click(function() {
        var element = document.body;
        element.classList.toggle("dark-mode");
        $(".dark-mode-on").hide();
        $(".switch").show();
        $(" .label-c").css("color", "#6c757d");


    });
    $(".dark-mode-off").click(function() {
        var element = document.body;
        element.classList.toggle("normal-mode");
        $(" .par").css("color", "#6c757d");



    });


});
// ---------------------------------------------------------//
// Sticky -nav//
// ---------------------------------------------------------//
$(function() {
    $('.section-1').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

});

// ---------------------------------------------------------//
// Typing animation//
// ---------------------------------------------------------//
$(function() {
    ityped.init(document.querySelector(".Hero-text-p"), {
        showCursor: true,
        cursorChar: " ",
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 900,
        strings: [
            "Here you will find content related with Programming languages.", "Feel  free enjoy  to   dive   into   the   basics   and   start   your   journey."
        ]
    });
});
// ---------------------------------------------------------//
// PRE LOADER//
// ---------------------------------------------------------//

window.addEventListener("load", function() {

    const loader = document.querySelector('.loader')
    this.print(loader);
    loader.classList.add("hidden");
});

//    for scrolling via buttons
$(document).ready(function() {
    $('.js--scroll-to-start').click(function() {
        $('html,body').animate({ scrollTop: $('.js--section-1').offset().top }, 1000);
    });
    $('.js--scroll-to-contact').click(function() {
        $('html,body').animate({ scrollTop: $('.js--section-4').offset().top }, 1000);
    });
    $('.js--scroll-to-skills').click(function() {
        $('html,body').animate({ scrollTop: $('.js--section-3').offset().top }, 1000);
    });
    $('.js--scroll-to-footer').click(function() {
        $('html,body').animate({ scrollTop: $('.js--footer').offset().top }, 1000);
    });
});