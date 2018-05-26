var pageLoadCtr = 0;
var aText = new Array(
    "Hi! my name is AJ",
    "and I will be Your navigator",
    "Just click me if You need me :)"
);
var iSpeed = 55; // time delay of print out
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

function okClicked() {
    pageLoadCtr++;
    document.getElementById("typedtext").innerHTML = "";
    document.getElementById("okGotIt").innerHTML = "";
    dialougeBoxAnim(0, 'backwards');
}

function imageCenter(param, direction) {
    var center = document.getElementById("centerMe");
    if (direction == 'backwards') {
        //alert();
        // param[0].addEventListener("animationend", function() {

        center.style.animation = "beBannerReturn ease 1.5s forwards";
        document.getElementById('clear').innerHTML = "";

        // });
    } else {
        center.style.animation = "beBanner ease 1.5s forwards 2s";
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

        param.addEventListener("animationend", function() {
            try {
                dialougeBox[0].style.animation = "dialougeBoxAnim linear .5s forwards 1s";
                typeWriter(dialougeBox);
            } catch (err) {
                console.log("success animation");
                //alert(pageLoadCtr);
            }
        });


    }
}

function typeWriter(param) {
    param[0].addEventListener("animationend", function() {
        typewriter();
    });
}