$('document').ready(function() {
    Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck;

    Barba.Pjax.preventCheck = function(evt, element) {
        if ($(element).attr('href') && $(element).attr('href').indexOf('#') > -1)
            return true;
        else
            return Barba.Pjax.originalPreventCheck(evt, element)
    };
    Barba.Pjax.start();
    Barba.transitionLength = 500;
});
