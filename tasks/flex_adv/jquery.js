$(document).ready( function() {
    $(".item2").hover(function() {//this function would swap colors when mouse goes over item2('hero')
        var item2_color=$(this).css("background-color");//storing color of item2 in variable
        var item4_color=$(".item4").css("background-color");//storing color of item4 in variable
        $(this).css("background-color",item4_color);
        $(".item4").css("background-color",item2_color)
    },
        function() {
            var item2_color=$(this).css("background-color");//this function would swap colors when mouse gets off item2('hero')
            var item4_color=$(".item4").css("background-color");
            $(this).css("background-color",item4_color);
            $(".item4").css("background-color",item2_color)
    });

    $(".item4").hover(function() {//this function would swap colors when mouse goes over item4('sidebar')
        var item4_color=$(this).css("background-color");
        var item2_color=$(".item2").css("background-color");
        $(this).css("background-color",item2_color);
        $(".item2").css("background-color",item4_color)
    },
        function() {//this function would swap colors when mouse gets off item4('sidebar')
            var item4_color=$(this).css("background-color");
            var item2_color=$(".item2").css("background-color");
            $(this).css("background-color",item2_color);
            $(".item2").css("background-color",item4_color)
           
        });

    $(".item6").click(function() {
        $(".item6 p").css("visibility","hidden");//hiding the text 'related images'
        $(this).css({"background-image":"url('jquery.jpg')","background-size":"cover","background-position":"right center"
        });//setting image as background
    });

    $(".item1").click(function() {
        $(".item3").append("<p style='color:red'>This text has been added after clicking on the header.</p>");
            });//appending the text as 'header' is clicked

        })