import * as hoverObj from "./hover.js";
hoverObj.submitHover();
let myMovies = [];
let mySubscribers = [];
getMovies("now_playing");
$(".sideBar").css({ left: `-${$(".blackBar").outerWidth()}px` });
$(".alert").css({display:"none"});

$(".fa-bars").click(function () {
    $(".fa-bars").css({ display: "none" });
    $(".fa-xmark").css({ display: "block" });
    $(".sideBar").animate({ left: `0` }, 1000);
    $(".blackBar ul li").animate({ left: "0" }, 2000)
})

$(".fa-xmark").click(function () {
    $(".fa-bars").css({ display: "block" });
    $(".fa-xmark").css({ display: "none" });
    $(".sideBar").animate({ left: `-${$(".blackBar").outerWidth()}px` }, 1000);
})

function getMovies(target) {
    let myHTTP = new XMLHttpRequest();
    myHTTP.open("GET", `https://api.themoviedb.org/3/movie/${target}?api_key=8c6228e0f8193f959bb72650ee76dffb&language=en-US`)
    myHTTP.send();
    myHTTP.addEventListener("readystatechange", function () {
        if (myHTTP.readyState == 4 && myHTTP.status == 200) {
            myMovies = Array.from(JSON.parse(myHTTP.response).results);
            console.log(myMovies[0].id);
            display();
        }
    });


}

function display() {
    let empty = ``;
    for (let i = 0; i < myMovies.length; i++) {
        empty += ` <div class="moviesItem pointer">
        <img src="https://image.tmdb.org/t/p/w500/${myMovies[i].poster_path}" alt="">
        <div class="layer">
            <h3>${myMovies[i].original_title}</h3>
            <p>${myMovies[i].overview}</p>
            <p>rate: ${myMovies[i].vote_average}</p>
            <p>${myMovies[i].release_date}</p>
        
        </div>
        
        
        </div>`

    }
    document.getElementById("movies").innerHTML = empty;
}


$(".targets").click(function () {
    getMovies($(this).attr("target"))
})
$(".firstInputs input").keyup(function(){
    searchMovies(this.value);
})
function searchMovies(target){
    let myHTTP = new XMLHttpRequest();
    myHTTP.open("GET", `
    https://api.themoviedb.org/3/search/movie?api_key=8c6228e0f8193f959bb72650ee76dffb&language=en-US&query=${target}`)
    myHTTP.send();
    myHTTP.addEventListener("readystatechange", function () {
        if (myHTTP.readyState == 4 && myHTTP.status == 200) {
            myMovies = Array.from(JSON.parse(myHTTP.response).results);
            display();
        }
    });
}

$(".targetTrending").click(function(){
    getTrending();
})

function getTrending(){
    let myHTTP = new XMLHttpRequest();
    myHTTP.open("GET", `https://api.themoviedb.org/3/trending/all/day?api_key=8c6228e0f8193f959bb72650ee76dffb&language=en-US`)
    myHTTP.send();
    myHTTP.addEventListener("readystatechange", function () {
        if (myHTTP.readyState == 4 && myHTTP.status == 200) {
            myMovies = Array.from(JSON.parse(myHTTP.response).results);
            display();
        }
    });
}

let validName = /^[a-zA-Z ]{5,20}$/
let validEmail = /^[a-zA-Z0-9]{5,20}@[a-zA-Z]{5,7}\.[a-z]{3,5}$/
let validPhone = /^[0-9]{11,}$/
let validPassword = /^[a-zA-Z0-9]{8,20}$/
let validAge = /^[1-9][0-9]$/

$(".name input").keyup(function(){
    if(!validName.test($(".name input").val())){
        $(".name .alert").css({display:"block"});
    }
    else{
        $(".name .alert").css({display:"none"});
    }
})

$(".email input").keyup(function(){
    if(!validEmail.test($(".email input").val())){
        $(".email .alert").css({display:"block"});
    }
    else{
        $(".email .alert").css({display:"none"});
    }
})
$(".phone input").keyup(function(){
    if(!validPhone.test($(".phone input").val())){
        $(".phone .alert").css({display:"block"});
    }
    else{
        $(".phone .alert").css({display:"none"});
    }
})
$(".age input").keyup(function(){
    if(!validAge.test($(".age input").val())){
        $(".age .alert").css({display:"block"});
    }
    else{
        $(".age .alert").css({display:"none"});
    }
})
$(".password input").keyup(function(){
    if(!validPassword.test($(".password input").val())){
        $(".password .alert").css({display:"block"});
    }
    else{
        $(".password .alert").css({display:"none"});
    }
})
$(".repassword input").keyup(function(){
    if($(".repassword input").val()!=$(".password input").val()){
        $(".repassword .alert").css({display:"block"});
    }
    else{
        $(".repassword .alert").css({display:"none"});
    }
})


/* <div class="moviesItem pointer">
        <img src="${element.poster_path}" alt="">
        <div class="layer">
            <h3>${element.original_title}</h3>
            <p>${element.overview}</p>
            <p>rate: ${element.vote_average}</p>
            <p>${element.release_date}</p>
        
        </div>
        
        
        </div> */