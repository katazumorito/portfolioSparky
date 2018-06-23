// window.onload=function(e){

// }
var bannerDir = "forwards";
var bannerClickCtr = 1; // try to optimize the code using this logic
var ctr = 1;
var aText = new Array(
    "Hi! my name is AJ",
    "and I will be Your navigator",
    "Just click me if You need me :)"
);
var iSpeed = 45; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    try {
        destination.innerHTML = aText[iIndex].substring(0, iTextPos);
        if (iTextPos++ == iArrLength) {
            iTextPos = 0;
            iIndex++;
            if (iIndex != aText.length) {
                iArrLength = aText[iIndex].length;
                setTimeout("typewriter()", 1000);
            }
        } else {
            setTimeout("typewriter()", iSpeed);
        }
    } catch (err) {
        console.log("done")
    }

    if (iIndex == 2) {
        var okGotIt = document.getElementById("okGotIt");
        // destination.innerHTML =  aText[1];
        okGotIt.style.animation = "okAnim ease .5s forwards 2.5s";
    }

}

function doThisOnLoad() {
   // setInterval(function(){ AOS.init(); }, 100);
    imageCenter();
}
function initAos(){
    AOS.init();
}
function bannerClick() {
    bannerClickCtr++;
    if (ctr > 0) {
       ctr = ctr - 1;
 
   }else{
    ctr++;
   }
       // alert("ctr in bannerClick: "+ctr);
   
    if (bannerClickCtr % 2 == 0) {
        bannerDir = "forwads"
    } else {
        bannerDir = "backwards"
    }
    // if (ctr>0) {
    //     document.getElementById('clear').innerHTML = "<div class='container'></div>";
    //     }
    document.getElementById('clear').innerHTML = "<div class='container'></div>";
    imageCenter(null, bannerDir);
    //alert(bannerDir); 
}

function okClicked() {
   //ctr++;
    document.getElementById("typedtext").innerHTML = "";
    document.getElementById("okGotIt").innerHTML = "";
    dialougeBoxAnim(0, 'backwards');

}

function imageCenter(param, direction) {
    var center = document.getElementById("centerMe");
    var blackBackground = document.getElementsByClassName("black-background");

    if (direction == 'backwards') {
        center.style.animation = "beBannerReturn ease 1.5s forwards";
        document.getElementById('clear').innerHTML = "";
        document.getElementById('banner').setAttribute("onclick", "bannerClick()");
         blackBackground[0].style.animation = "blackBackgroundReturnAnim linear 1.5s forwards";
        blackBackground[0].style.webkitAnimation = "blackBackgroundReturnAnim linear 1.5s forwards";
       // document.getElementById('anchorId').click();
       document.getElementById("page").style.overflow = "visible";
    } else {
        center.style.animation = "beBanner ease 1.5s forwards";
        blackBackground[0].style.animation = "blackBackgroundAnim linear 1.5s forwards";
        document.getElementById("page").style.overflow = "hidden";

        dialougeBoxAnim(center, 'forwards');


    }

}

function dialougeBoxAnim(param, direction) {
    var dialougeBox = document.getElementsByClassName('container');
    if (direction == 'backwards') {
        dialougeBox[0].style.animation = "dialougeBoxAnimReturn linear .5s forwards";
        dialougeBox[0].addEventListener("animationend", function() {
            imageCenter(dialougeBox, 'backwards');
        });
    } else {
        if (ctr == 0) {
            dialougeBox[0].addEventListener("animationend", function() {

                //make this with typewriter effect
                document.getElementsByClassName('container')[0].innerHTML = "<div class='col-md-6 col-sm-6'><button id='index' onclick='clickedLink(this.id)'>Home</a></div>" +
                    "<div class='col-md-6 col-sm-6'><button id='aboutme' onclick='clickedLink(this.id);'>About Me</button></div>" +
                    "<div class='col-md-6 col-sm-6'><button id='myskills' onclick='clickedLink(this.id)'>My Skills</button></div>" +
                    "<div class='col-md-6 col-sm-6'><button id='projects' onclick='clickedLink(this.id)'>My Projects</button></div>";
            });
        } else {
            param.addEventListener("animationend", function() {
                //if dito

                try {
                    dialougeBox[0].style.animation = "dialougeBoxAnim linear .5s forwards 0s";
                    typeWriter(dialougeBox);
                } catch (err) {
                    console.log("success animation");
                    //alert(pageLoadCtr);
                }

            });
        }

    }
}

function typeWriter(param) {
    param[0].addEventListener("animationend", function() {
        typewriter();
    });
}
function clickedLink(id){
   // alert(id);
    document.getElementById('clear').innerHTML = "<div class='container'></div>";
    imageCenter('clickedLinkFunction', 'backwards');
    document.getElementById(id).click();
}