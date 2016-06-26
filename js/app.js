// Rozwijane menu

var aboutMenu = document.querySelector("#about"),
    dropdownMenu = document.querySelector(".navigation_dropdown");

aboutMenu.addEventListener("mouseover", function(ev) {
    dropdownMenu.style.display = "block";
});

aboutMenu.addEventListener("mouseout", function(ev) {
    dropdownMenu.style.display = "none";
});





// Znikające etykiety w blokach z obrazkami

var imgs = document.querySelectorAll(".blockImage");

for ( var i = 0; i < imgs.length; i++ ) {
        
    imgs[i].addEventListener("mouseover", function(ev) {
        var label = this.querySelector(".image_label");
        label.style.display = "none";
    });

    imgs[i].addEventListener("mouseout", function(ev) {
        var label = this.querySelector(".image_label");
        label.style.display = "block";
    });
};




// Slider

var next = document.querySelector(".next"),
    prev = document.querySelector(".prev"),
    img = document.querySelectorAll("ul img"),
    index = 0;

img[index].classList.add("visible");

next.addEventListener("click", function(ev) {
    img[index].classList.remove("visible");
    index += 1;
    if ( index > 2 ) {
        index = 0;
    };
    img[index].classList.add("visible");
});

prev.addEventListener("click", function(ev) {
    img[index].classList.remove("visible");
    index -= 1;
    if ( index < 0 ) {
        index = 2;
    };
    img[index].classList.add("visible");   
});




// Kalkulator

var dropList = document.querySelectorAll(".list_arrow"),
    sumToPay = document.querySelector("div.sum strong");

for ( var i = 0; i < dropList.length; i++ ) {
    dropList[i].addEventListener("click", function (ev) {
        this.nextElementSibling.classList.toggle("show");
    });
};
 
var uls = document.querySelectorAll("ul.list_panel"),
    namePrice = 0,
    colPrice = 0,
    patPrice = 0,
    tranPrice = 0,
    totalPrice = 0;

for ( var i = 0; i < uls.length; i++ ) {
    var lis = uls[i].querySelectorAll("li");
    for ( var j = 0; j < lis.length; j++ ) {
        lis[j].addEventListener("click", function(event) {
            if (this.parentElement.id == "title") {
                totalPrice -= namePrice;
                namePrice = 0;
                var chairName = document.querySelector("h4.title"),
                    chairPrice = document.querySelector("h4.value");
                chairName.innerHTML = this.innerHTML;
                chairPrice.innerHTML = this.dataset.price;
                namePrice = parseFloat(this.dataset.price);
                totalPrice += namePrice;
                this.parentElement.classList.remove("show");    
            }
            else if (this.parentElement.id == "color") {
                totalPrice -= colPrice;
                colPrice = 0;
                var colorName = document.querySelector("span.color"),
                    colorPrice = document.querySelector("span.color.value");
                colorName.innerHTML = this.innerHTML;
                colorPrice.innerHTML = this.dataset.price;
                colPrice = parseFloat(this.dataset.price);
                totalPrice += colPrice;
                this.parentElement.classList.remove("show");    
            }
            else if (this.parentElement.id == "pattern") {
                totalPrice -= patPrice;
                patPrice = 0;
                var patternName = document.querySelector("span.pattern"),
                    patternPrice = document.querySelector("span.pattern.value");
                patternName.innerHTML = this.innerHTML;
                patternPrice.innerHTML = this.dataset.price;
                patPrice = parseFloat(this.dataset.price);
                totalPrice += patPrice;
                this.parentElement.classList.remove("show");    
            };
            sumToPay.innerHTML = totalPrice + " zł";
        });
    };
};


var transport = document.querySelector("#transport");

transport.addEventListener("change", function(event) {
    tranPrice = parseFloat(this.dataset.price);
    if ( transport.checked ) {
        console.log("check");
        var transportName = document.querySelector("span.transport"),
            transportPrice = document.querySelector("span.transport.value"),
            checkboxTxt = document.querySelector("div.checkbox.check-box span");
        transportName.innerHTML = checkboxTxt.innerHTML;
        transportPrice.innerHTML = this.dataset.price;
        totalPrice += tranPrice;
    }
    else if ( transport.checked == false ) {
        console.log("uncheck");
        var transportName = document.querySelector("span.transport"),
            transportPrice = document.querySelector("span.transport.value");
        transportName.innerHTML = "";
        transportPrice.innerHTML = "";
        totalPrice -= tranPrice;
    };
    sumToPay.innerHTML = totalPrice + " zł";
});


