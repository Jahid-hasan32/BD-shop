document.addEventListener('DOMContentLoaded', function () {

    // nav links

    let dropdown_links = document.getElementById("dropdown_links")
    let dropdown = document.getElementById("dropdown")

    dropdown_links.addEventListener("mouseenter", () => {
        dropdown.classList.add("nav_men_hov_active");
    })


  document.body.addEventListener("click", function (event) {
    dropdown.classList.remove("nav_men_hov_active");
  });

  document.body.addEventListener("scroll", function (event) {
    dropdown.classList.remove("nav_men_hov_active");
  });


    //  tab btn -> feature
let tab_btn = document.querySelectorAll(".tab_btn");
let all_content = document.querySelectorAll(".content");

tab_btn.forEach((tab, index) => {

    tab.addEventListener('click', () => {
        tab_btn.forEach((remove_tab) => {
            remove_tab.classList.remove('active_btn');
        })
        tab.classList.add('active_btn');

        all_content.forEach((remove_all_c_active) => {
            remove_all_c_active.classList.remove('active_produc_card');
        });
        all_content[index].classList.add('active_produc_card');

    });

});

//  product details 

let show_img = document.getElementById("show_img");
let list_img = document.querySelectorAll(".list_img");

list_img.forEach((img) => {
    // console.log('3423', img);
    console.log(show_img.src);
    img.addEventListener('click', () => {
        show_img.src = img.src; 

    })
});

});

// swiper -> banner
var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 4000,
    },
    mousewheel: true,
    keyboard: true,
});
