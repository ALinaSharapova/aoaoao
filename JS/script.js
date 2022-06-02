const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const popupnav = document.querySelector("#popupnav")

hamb.addEventListener("click", hambHandler);

function hambHandler(e){
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    popupnav.addEventListener("click", deletee);
     
}

function deletee(){
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

// let menu = $(selector);
// let button = document.querySelector("#popupnav");
// button.on("click", (e) => {
//     e.preventDefault();
//     toggleMenu();
// })

// function toggleMenu() {
//     menu.toggleClass("")
// }

// 
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function(item){
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        tabsBtn.forEach(function(item) {
            item.classList.remove("active");
        });
        tabsItems.forEach(function(item) {
            item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
    });
})



// 
$(".open-popup").click(function(e){
    e.preventDefault();
    $('.popup-bg').fadeIn(600);
});
$(".close-popup").click(function(){
    $('.popup-bg').fadeOut(600);
});


// 

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;




mainForm.addEventListener("submit", function (event) {
    if (emailTest(mainFormInput)) {
        mainFormInput.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="main-form__error">
                Введите email
            </div>`
        );
        event.preventDefault();
    }
});

mainFormInput.addEventListener("focus", function (event) {
    if (mainFormInput.nextElementSibling) {
        mainFormInput.nextElementSibling.remove();
    }
});

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


