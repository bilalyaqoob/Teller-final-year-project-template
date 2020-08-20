// Sidebar open close
$(document).ready(function(){
    $('#jq-sidebar-show-my').click(function(){
        $('#jq-overlay-my').fadeIn();
        $('#jq-sidebar-my').animate({left:0});
    });
    $('#jq-sidebar-hide-my,#jq-overlay-my').click(function(){
        $('#jq-sidebar-my').animate({left:-250});
        $('#jq-overlay-my').fadeOut();
    });
});// Sidebar open close End

// Header Search bar open & cloase
$(document).ready(function(){
    $('#jq-search-btn-my').click(function(){
        $('#jq-header-my').hide();
        $('#jq-search-form-my').show();
    });
    $('#jq-search-back-btn-my').click(function(){
        $('#jq-header-my').show();
        $('#jq-search-form-my').hide();
    });
});// Header Search bar open & cloase End

// panel close by button (x)
$(document).ready(function(){
    $("#jq-close-btn-my").click(function(){
        $("#dismissable-panel-my").slideUp('slow');
    });
});// panel close by button (x) end