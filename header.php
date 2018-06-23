<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="dist/css/styles.css">
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="dist/js/portfolio.js"></script>
    <link rel="stylesheet" type="text/css" href="dist/css/portfolio.css">
    <link rel="stylesheet" type="text/css" href="node_modules/aos/dist/aos.css">
    <script src="node_modules/aos/dist/aos.js"></script>
    <style>
    body{
        font-family: monospace;
    }
    h1{
        text-align: center;
        color: white;
        letter-spacing: 15px;
    }
    .title{
        display: block;
        background-color:black;
        height: 10%;
        width: 100%;
        position: absolute;
        z-index: -2;
        /*color: white;*/
        top:0;
    }
    
    @keyframes slideIn {
        0% {
           /* margin-left: 60%;
            width: 45%;
            position: relative;*/
            
            transform: translateX(-80%);
        }
        100% {
            /* margin-left: 0%;
            width: 100%;
            position: relative; */
          
            transform: translateX(0%);
        }
    }
    
    </style>
</head>

<body onload="doThisOnLoad();" id="page">
        <div id="centerMe">
            <img src="resources/banner.png" alt="banner" id="banner">
        </div>
        <!-- <div class="col-sm-12"> -->
           
                <div class="title"></div>
    <div class="black-background"></div>
   <a id="myskills" href="myskills.php"></a>
   <a id="index" href="index.php"></a> 
   <a id="aboutme" href="aboutme.php"></a> 
   <a id="projects" href="projects.php"></a>  