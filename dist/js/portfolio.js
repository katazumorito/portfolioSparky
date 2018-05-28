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
    imageCenter();
}

function bannerClick() {
    bannerClickCtr++;
    ctr = ctr - 2;
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
    ctr++;
    document.getElementById("typedtext").innerHTML = "";
    document.getElementById("okGotIt").innerHTML = "";
    dialougeBoxAnim(0, 'backwards');

}

function imageCenter(param, direction) {
    var center = document.getElementById("centerMe");
    if (direction == 'backwards') {
        center.style.animation = "beBannerReturn ease 1.5s forwards";
        document.getElementById('clear').innerHTML = "";
        document.getElementById('banner').setAttribute("onclick", "bannerClick()");
        /*center.addEventListener("animationend", function(){
            document.getElementById('clear').innerHTML = "<div class='container'>joojo</div>";
        });*/
    } else {

        center.style.animation = "beBanner ease 1.5s forwards .5s";
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
                document.getElementsByClassName('container')[0].innerHTML = "<div class='col-md-6 col-sm-6'><a href='#'>Home</a></div>" +
                    "<div class='col-md-6 col-sm-6'><a href='#'>About Me</a></div>" +
                    "<div class='col-md-6 col-sm-6'><a href='#'>My Skills</a></div>" +
                    "<div class='col-md-6 col-sm-6'><a href='#'>My Projects</a></div>";
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