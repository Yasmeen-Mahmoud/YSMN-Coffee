
function myNav()
{
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = () => {
        if (nav.style.left == "0%"){
            nav.style.left = "-100%";
            bar.src = "images/menu.png"
        }
        else{
            nav.style.left = "0%";
            bar.src = "images/x.png"
        }
    }
}
myNav();

window.onload = () => {
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}

// let shop = document.getElementById("shop");

// let productItemData = 
// [
//     {
//         id: "coffee",
//         img: "../images/picture-1.png",
//         price: "-7%",
//         name: "hot coffee",
//         art: 32.00,
//         desc: 45.00,
//         star1: `<i class="fas fa-star gold"></i>`,
//         star2: `<i class="far fa-star"></i>`,
//     },
//     {
//         id: "coffee",
//         img: "../images/picture-2.png",
//         price: "-12%",
//         name: "hot coffee",
//         art: 82.00,
//         desc: 95.00,
//         star1: `<i class="far fa-star"></i>`,
//         star2: `<i class="far fa-star"></i>`,
//     },
//     {
//         id: "coffee",
//         img: "../images/picture-3.png",
//         price: "-13%",
//         name: "hot coffee",
//         art: 84.00,
//         desc: 102.00,
//         star1: `<i class="fas fa-star gold"></i>`,
//         star2: `<i class="far fa-star"></i>`,
//     },
//     {
//         id: "coffee",
//         img: "../images/picture-4.png",
//         price: "-6%",
//         name: "hot coffee",
//         art: 66.00,
//         desc: 85.00,
//         star1: `<i class="fas fa-star gold"></i>`,
//         star2: `<i class="far fa-star"></i>`,
//     },
//     {
//         id: "machines",
//         img: "../images/m1.png",
//         price: "-20%",
//         name: "coffee machines",
//         art: 203.00,
//         desc: 205.00,
//         star1: `<i class="fas fa-star gold"></i>`,
//         star2: `<i class="far fa-star"></i>`,
//     },
//     {
//         id: "machines",
//         img: "../images/m2.png",
//         price: "-5%",
//         name: "coffee machines",
//         art: 265.00,
//         desc: 293.00,
//         star1: `<i class="fas fa-star gold"></i>`,
//         star2: `<i class="fas fa-star gold"></i>`,
//     },
//     {
//         id: "machines",
//         img: "../images/m3.png",
//         price: "-7%",
//         name: "coffee machines",
//         art: 160.00,
//         desc: 192.00,
//         star1: `<i class="fas fa-star gold"></i>`,
//         star2: `<i class="far fa-star"></i>`,
//     },
//     {
//         id: "sweets",
//         img: "../images/m4.png",
//         price: "-15%",
//         name: "hot coffee",
//         art: 28.00,
//         desc: 66.00,
//         star1: `<i class="fas fa-star gold"></i>`,
//         star2: `<i class="far fa-star"></i>`,
//     },
// ];

// const generateProduct = () => {
//     return (shop.innerHTML = productItemData.map((x) => {
//         let {id, img, price, name, art, desc, star1, star2} = x;
    
//         return `<div class="shop-flex mix ${id}" >
//                 <div class="shop1">
//                     <div class="shop-image">
//                         <img src=${img} alt="one">
//                         <div class="price">
//                             ${price}
//                         </div>
//                         <div class="social">
//                             <a href="#"><i class="fas fa-heart"></i></a>
//                             <a href="#"><i class="fas fa-shopping-cart"></i></a>
//                             <a href="#"><i class="fas fa-share-alt"></i></a>
//                             <a href="#"><i class="fas fa-search"></i></a>
//                         </div>
//                     </div>
//                     <h2>${name}</h2>
//                     <div class="stars">
//                         <i class="fas fa-star gold"></i>
//                         <i class="fas fa-star gold"></i>
//                         <i class="fas fa-star gold"></i>
//                         ${star1}
//                         ${star2}
//                     </div>
//                     <article>$ ${art}</article>
//                     <span>$ ${desc}</span>
//                 </div>
//             </div>`;
//     }).join(""));
// };

// generateProduct();


// let menu = document.getElementById("menu");

// let menuItemData = 
// [
//     {
//         imgM: "../images/menu-item-1.jpg",
//         nameM: "caffee latte",
//         priceM: 3.86,
//     },
//     {
//         imgM: "../images/menu-item-2.jpg",
//         nameM: "caffee latte",
//         priceM: 4.72,
//     },
//     {
//         imgM: "../images/menu-item-3.jpg",
//         nameM: "caffee latte",
//         priceM: 2.45,
//     },
//     {
//         imgM: "../images/menu-item-4.jpg",
//         nameM: "caffee latte",
//         priceM: 5.95,
//     },
//     {
//         imgM: "../images/menu-item-5.jpg",
//         nameM: "caffee latte",
//         priceM: 7.02,
//     },
//     {
//         imgM: "../images/menu-item-6.jpg",
//         nameM: "caffee latte",
//         priceM: 6.25,
//     },
//     {
//         imgM: "../images/menu-item-7.jpg",
//         nameM: "caffee latte",
//         priceM: 4.00,
//     },
//     {
//         imgM: "../images/menu-item-8.jpg",
//         nameM: "caffee latte",
//         priceM: 5.21,
//     },
//     {
//         imgM: "../images/menu-1.jpg",
//         nameM: "caffee latte",
//         priceM: 3.86,
//     },
//     {
//         imgM: "../images/menu-2.jpg",
//         nameM: "caffee latte",
//         priceM: 3.86,
//     },
// ];

// const generateMenu = () => {
//     return (menu.innerHTML = menuItemData.map((x) => {
//         let {imgM, nameM, priceM} = x;
    
//         return `<div class="menu-flex">
//                         <div class="menu1">
//                             <div class="small-image">
//                                 <img src=${imgM} alt="item1">
//                             </div>
//                             <div>
//                                 <h4>${nameM}</h4>
//                             </div>
//                             <div class="line"></div>
//                             <div>
//                                 <h4>$ ${priceM}</h4>
//                             </div>
//                         </div>
//                     </div>`;
//     }).join(""));
// };

// generateMenu();



/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector(".style__switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style__switcher").classList.toggle("open");
});

// HIDE STYLE SWITCHER ON SCROLL
window.addEventListener("scroll", () => {
    if (document.querySelector(".style__switcher").classList.contains("open")) 
    {
        document.querySelector(".style__switcher").classList.remove("open");
    }
});

// THEME COLORS
function themeColors() {
    const colorStyle = document.querySelector(".js-color-style"),
        themeColorsContainer = document.querySelector(".js-theme-colors");
    
    themeColorsContainer.addEventListener("click", ({target}) => {
        if (target.classList.contains("js-theme-color-item"))
        {
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColors();
        }
    });
    function setColors() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

        if (document.querySelector(".js-theme-color-item.active")) 
        {
            document.querySelector(".js-theme-color-item.active").classList.remove("active");
        }
        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
    }
    if (localStorage.getItem("color") !== null) 
    {
        setColors();
    }
    else
    {
        const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color" + defaultColor + "]").classList.add("active");
    }

}
themeColors();

