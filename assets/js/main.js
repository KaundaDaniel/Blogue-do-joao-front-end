//Filter
$(document).ready(function () {
    $('.filter-item').click(function () {
        const value = $(this).attr("data-filter");
        if (value == "todos") {

            $(".post-box").show("1000");
        }
        else {
            $(".post-box")
            .not("." + value)
            .hide("1000");
            $(".post-box")
            .filter("." + value)
            .show("1000");
        }

        $(".filter-item").click(function(){
            $(this).addClass("filter-active").siblings().removeClass("filter-active");

        });

    });

});


let header= document.querySelector("header");
window.addEventListener("scroll",()=>{
header.classList.toggle("shadow",window.scrollY>0);
})