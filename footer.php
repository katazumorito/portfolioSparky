 <span id="clear">
                <div class="container">
                    <p id="typedtext"></p>
                    <span id="okGotIt" onclick="okClicked();">OK, Got it!</span>
                </div>
            </span>
            </body>
<script src="node_modules/barba.js/dist/barba.min.js"></script>
<script src="node_modules/barba-transitions/dist/barba.transitions.min.js" type="text/javascript"></script>
<script src="dist/js/barbajs.js"></script>
<script>
window.jQuery || document.write('<script src="dist/js/jquery.min.js"><\/script>')
</script>
<!-- Your custom scripts compressed  -->
<script src="dist/js/scripts.min.js" async></script>
<!-- Add scripts that are not critical but simply enhance - like social sharing widgets -->
<script type="text/javascript">
function downloadJSAtOnload() {
    var element = document.createElement("script");
    element.src = "dist/js/defer.min.js";
    document.body.appendChild(element);
}
if (window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;

/*var links = document.querySelectorAll('a[href]');
var cbk = function(e) {
 if(e.currentTarget.href === window.location.href) {
   e.preventDefault();
   e.stopPropagation();
 }
};

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', cbk);
}*/
</script>

</html>