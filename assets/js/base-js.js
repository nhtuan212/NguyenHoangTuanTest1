$(document).ready(function() {
    $('.vortex-box').vortex({speed: 1000,});

    // Pause / Play
    $('.vortex-box').hover(function(){
    	$(this).data('vortex').stop();
    }, function(){
    	$(this).data('vortex').start();
    });
});