// nav 滾動收合
$(function(){
    $(window).scroll(function(){
        // 檢查視窗寬度是否大於1200px
        if ($(window).width() >= 768) {
            let scrollFirst = window.scrollY;

            $(window).scroll(function(){
                let scrollSecond = window.scrollY;

                if((scrollFirst - scrollSecond) < 0) {
                    $(".main_menu").addClass("headerUp");
                    $(".main_menu").removeClass("headerDown");
                } else {
                    $(".main_menu").removeClass("headerUp");
                    $(".main_menu").addClass("headerDown");
                }

                scrollFirst = scrollSecond;
            });
        }
    });
});




// nav 登入及註冊事件
$(function () {
    let openBtn = $("#openBtn");
    let phoneNavOpenBtn = $(".phone-nav-bar .nav-bar-btn #openBtn");
    let card = $(".card-login");
    let closeBtn = $("#closeBtn");
    let registerLink = $(".registerLink");
    let loginLink = $(".loginLink");
    let containerForm = $(".container-form");

    // 點擊一般的開啟按鈕
    $(openBtn).click(function () {
        $(card).addClass('show');
    });

    // 點擊手機版的開啟按鈕
    $(phoneNavOpenBtn).click(function () {
        $(card).addClass('show');
    });

    // 點擊關閉按鈕
    $(closeBtn).click(function () {
        $(card).removeClass('show');
    });

    // 點擊註冊連結
    $(registerLink).click(function (e) {
        e.preventDefault();
        $(containerForm).addClass('active');
    });

    // 點擊登入連結
    $(loginLink).click(function (e) {
        e.preventDefault();
        $(containerForm).removeClass('active');
    });

    // 點擊除卡片以外的區域關閉卡片
    $(document).on('click', '.card-login.show', function (e) {
        // 檢查點擊的元素是否在 .container-form 內部
        if (!$(e.target).closest('.container-form').length) {
            $(card).removeClass('show');
        }
    });
});


//index-banner 煙霧效果
const filter = document.querySelector("#turbulence");
let frames = 1;
let rad = Math.PI / 180;
let bfx, bfy;

function freqAnimation() {
    frames += .2

    bfx = 0.03;
    bfy = 0.03;

    bfx += 0.005 * Math.cos(frames * rad);
    bfy += 0.005 * Math.sin(frames * rad);

    bf = bfx.toString() + " " + bfy.toString();
    filter.setAttributeNS(null, "baseFrequency", bf);

    window.requestAnimationFrame(freqAnimation);
}

window.requestAnimationFrame(freqAnimation);



//index container 上移事件
// $(function () {
//     let showHeight = 300;
//     if ($(window).width() >= 768) {
    
//         $("#index-area").css({
//             display: "block",
//             opacity: 0,
//         });

//         $(window).scroll(function () {
            
//             $("#index-area").each(function () {
//                 let setThis = $(this);
//                 let areaTop = setThis.offset().top;

//                 if ($(window).scrollTop() + $(window).height() >= areaTop) {
//                     setThis.stop().animate({
//                         opacity: 1,
//                     }, 300);
//                 } else {
//                     setThis.stop().animate({
//                         opacity: 0,
//                     }, 300);
//                 }
//             });
//         });
//     }
// });



// products 小圖換大圖
function showLarge(e) {
    let small = e.target;
    document.getElementById("large-img").src = small.src;
}

function init() {
    let smalls = document.querySelectorAll(".product-more-img img");

    for (let i = 0; i < smalls.length; i++) {
        smalls[i].onclick = showLarge;
    }
}

document.addEventListener("DOMContentLoaded", init, false);




// 購物車商品數量加減

//add
var adds = document.getElementsByClassName("btnPlus");
//循環
for (var i = 0; i < adds.length; i++) {
    //單擊事件
    adds[i].onclick = function () {
        //1.獲取輸入框對象
        var inputEle = this.previousElementSibling;
        //2.獲取原來的值
        var inputValue = inputEle.value;
        //3.重新複製
        inputEle.value = parseInt(inputValue) + 1;

        //計算金額
        //1.數量
        var number = parseInt(inputEle.value);
        //2.單價
        var commElement = this.closest('.cart-detail').querySelector(".comm");
        if (commElement !== null) {
            var price = parseFloat(commElement.textContent);

            //3.金額
            var sum = number * price;

            //4.賦值 保留2位小數點->toFixed(2)
            this.closest('.cart-detail').querySelector(".total").textContent = sum;

            //調用方法
            getAmount();
        } else {
            console.error(".comm element not found!");
        }
    }
}

//minus
var minus = document.getElementsByClassName("btnMinus");
//循環
for (var i = 0; i < minus.length; i++) {
    //單擊事件
    minus[i].onclick = function () {
        //1.獲取輸入框對象
        var inputEle = this.nextElementSibling;
        //2.獲取原來的值
        var inputValue = inputEle.value;
        
        //判斷
        if (parseInt(inputValue) > 1) {
            //3.重新複製
            inputEle.value = parseInt(inputValue) - 1;


            //計算金額
            //1.數量
            var number = parseInt(inputEle.value);
            //2.單價
            var commElement = this.closest('.cart-detail').querySelector(".comm");
            if (commElement !== null) {
                var price = parseFloat(commElement.textContent);

                //3.金額
                var sum = number * price;

                //4.賦值 保留2位小數點->toFixed(2)
                this.closest('.cart-detail').querySelector(".total").textContent = sum;

                //調用方法
                getAmount();
            } else {
                console.error(".comm element not found!");
            }
        }
    }
}


