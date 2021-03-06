$(document).ready(function() {
    // Set panel height
    // Close modal
    $("#yes-btn").on("click", function() {
        $('#nontifi-modal').modal('hide');
    });
    /*date picker*/
    $(function() {
        $('.date-picker').datetimepicker();
    });
    //advance-search
    // Insert product
    $(function() {
        $('#insert-product-btn').click(function(e) {
            $("#insert-product-form").show('fast');
        });
        $('#insert-btn-active').click(function(e) {
            $("#insert-product-form").hide('fast');
        });
    });
    // Show report form
    $(function() {
        var checkboxValue;
        $('.report-form-control').click(function() {
            checkboxValue = $(this).attr('id');
            $('.report-form').removeClass('report-form-selected');
            $('.' + checkboxValue).addClass('report-form-selected');
        });
    });
    //Show promotion form
    function radioControlform(rbtn) {
        var checkboxValue;
        $(rbtn).click(function() {
            $('.promotion-radio-btn').removeClass('active');
            $(this).parent().addClass('active');
            checkboxValue = $(this).attr('id');
            $('.promotion-form').removeClass('promotion-form-selected');
            $('.' + checkboxValue).addClass('promotion-form-selected');
            $('.promotion-form-selected .promotion-option-control').click(function() {
                $('.promotion-form-selected .promotion-radio-label').removeClass('active');
                $(this).parent().addClass('active');
                var checkboxValue2 = $(this).attr('id');
                $('.promotion-form-selected .promotion-option-form').removeClass('promotion-form-selected');
                $('.promotion-form-selected').find('.' + checkboxValue2).addClass('promotion-form-selected');
            });
        });
    }
    radioControlform('.promotion-form-control');
    // add item-active for inbox-list
    $(function() {
        $('.fb-chat-list li.item').click(function(e) {
            $(".fb-chat-list li.item").removeClass('item-active');
            $(this).addClass('item-active');
        });
    });
    $(function() {
        $('.imgs-list li').click(function(e) {
            $(".imgs-list li").removeClass('active');
            $(this).addClass('active');
        });
    });
    //dropdown-active
    $(function() {
        var open = false;
        var openSidebar1 = function() {
            $(".box-search-product .panel-product-dropdown").addClass('active');
            open = true; //This is the new part!
        }
        var openSidebar2 = function() {
            $(".dropdown-pd-list").addClass('active');
            open = true; //This is the new part!
        }
        var closeSidebar = function() {
            $(".panel-product-dropdown").removeClass('active');
            open = false;
        }
        $('.product-dropdown-ct').click(function(event) {
            event.stopPropagation();
            var toggle = open ? closeSidebar : openSidebar1;
            toggle();
        });
        $('.add-product-ct').click(function(event) {
            event.stopPropagation();
            var toggle = open ? closeSidebar : openSidebar2;
            toggle();
        });
        $(document).click(function(event) {
            if (!$(event.target).closest('.panel-product-dropdown').length) {
                closeSidebar();
            }
        });
    });
    //slimscroll
    $(function() {
        $('.slimscroll500').slimScroll({
            height: '500px',
            size: '5px'
        });
        $('.new-order-box').slimScroll({
            height: '634px',
            size: '5px'
        });
        $('.direct-chat-messages').slimScroll({
            height: '397px',
            size: '5px',
            start: 'bottom'
        });
        $('.product-list-in-box').slimScroll({
            height: '161px',
            size: '5px'
        });
        $('.dash-invoice-new .box-body').slimScroll({
            height: '505px',
            size: '5px'
        });
        $('.slimcroll330').slimScroll({
            height: '330px',
            size: '5px'
        });
        $('.slimscroll297').slimScroll({
            height: '297px',
            size: '5px'
        });
        $('.slimscroll155').slimScroll({
            height: '155px',
            size: '5px'
        });
        //termofuse
        $('.termofuse-inner').slimScroll({
            color: '#c1c1c1',
            height: '300px',
            size: '7px',
            opacity: 1,
            railVisible: true,
            railOpacity: 1,
            railColor: '#ebebeb',
            alwaysVisible: true
        });
    });
    //add class notifi-scroll
    $(function() {
        var countLi = $('.notifi-invoice-list > li').size();
        if (countLi > 10) {
            $('.notifi-invoice-list').addClass('notifi-scroll');
        }
        //add scroll notifi
        $('.notifi-scroll').slimScroll({
            color: '#d9e0e7',
            height: '500px',
            size: '6px',
            distance: '10px',
            opacity: 1,
            wheelStep: 60,
            alwaysVisible: 'true'
        });
    });
    //multiple
    $('.st-select-product-group').selectpicker();
    $('.st-select-product').selectpicker();
    //active search
    $(function() {
        $('.search-btn-control').click(function(e) {
            if (!$('.search-dropdown').hasClass('active')) {
                $('.search-dropdown').addClass('active');
                $('body').addClass('search-body-overlay');
            } else {
                $('.search-dropdown').removeClass('active');
                $('body').removeClass('search-body-overlay');
            }
        });
        $('.search-close').click(function(e) {
            $('.search-dropdown').removeClass('active');
            $('body').removeClass('search-body-overlay');
        });
    });
    //link-shop
    $(".name-store").keyup(function() {
        $('.link-shop-text').text($('.name-store').val());
    });
    //edit-address
    $(".edit-address").click(function() {
        $('.create-new-address').show();
        $('.address-infor').show();
        $('.edit-address-form').hide();
        $(this).closest('.box').children('.edit-address-form').slideDown("slow");
    });
    $(".cancel-edit, .cancel-update").click(function(e) {
        e.preventDefault();
        $(this).closest('.edit-address-form').slideUp("slow");
        $(".create-new-address").show();
    });
    //create-address
    $(".create-new-address").click(function() {
        $('.edit-address-form').slideUp("fast");
        $(this).slideUp();
        $('.new-address-form').slideDown("slow");
    });
    //edit-info
    $(".edit-info").click(function() {
        $('.address-infor').show();
        $('.edit-address-form').hide();
        $(this).closest('.address-infor').hide();
        $(this).closest('.box').children('.edit-address-form').slideDown("slow");
    });
    $(".cancel-update").click(function(e) {
        e.preventDefault();
        $(this).closest('.edit-address-form').slideUp("slow");
        $(this).closest('.box').children('.address-infor').slideDown("slow");
    });
    $(".cancel-invoice-step-2").click(function(e) {
        event.preventDefault();
        $('.invoice-edit-step-2').removeClass('active');
        $('.invoice-edit-step-1').addClass('active');
        $('html, body').animate({scrollTop: 0}, 600);
    });
    //collapse-table
    $(".collapse-close").click(function(e) {
        e.preventDefault();
        $(this).closest('.collapse-row').find('.collapse-div').slideUp("slow");
        $('.collapse-toggle-nav').removeClass('show-collapse');
    });
    //collapse radio
    $("#radio_company").click(function(){
        $(".wrap_radio").slideDown();
        $(".first_choice .invoice-promotion-box").slideUp();
    });
    $("#radio_shop").click(function(){
        $(".wrap_radio").slideUp();
        $(".first_choice .invoice-promotion-box").slideDown();
    });

    $('input:radio[name="payment_method1"]').change(
    function(){
        if ($(this).is(':checked')) {
            $(".radio .block").slideUp();
            $(this).parent().parent().find(".block").slideDown();
        }
    });
    //promotion
    $(".multi-collapse-toggle").click(function(e) {
        e.preventDefault();
        if (!$(this).closest('.collapse-toggle-nav').hasClass('show-collapse')) {
            $('.collapse-div').slideUp("slow");
            $('.collapse-toggle-nav').removeClass('show-collapse');
            $(this).closest('.collapse-toggle-nav').addClass('show-collapse');
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-promotion-detail')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-promotion-detail').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-promotion-date')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-promotion-date').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-promotion-turns')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-promotion-turns').slideDown("slow");
            }

            //multi-invoice
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-store-address-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.store-address-info').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-address-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.address-info').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-ship-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.ship-info').slideDown("slow");
            }
        } else {
            $(this).closest('.collapse-toggle-nav').removeClass('show-collapse');
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-promotion-detail')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-promotion-detail').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-promotion-date')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-promotion-date').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-promotion-turns')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-promotion-turns').slideDown("slow");
            }

            //multi-invoice
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-store-address-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.store-address-info').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-address-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.address-info').slideDown("slow");
            }
            if ($(this).closest('.multi-collapse-toggle').hasClass('show-ship-control')) {
                $('.collapse-div').slideUp("slow");
                $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.ship-info').slideDown("slow");
            }
        }
    });
    //Create-multi-invoice
    $(".show-add-product-control").click(function(e) {
        e.preventDefault();
        $(this).hide();
        $('.collapse-div').hide("slow");
        $(this).closest('.product-col').find('.add-product-control').show();
    });

    // Modal
    (function($) {
        "use strict";

        function centerModal() {
            $(this).css('display', 'block');
            var $dialog = $(this).find(".modal-dialog"),
                offset = ($(window).height() - $dialog.height()) / 3,
                bottomMargin = parseInt($dialog.css('marginBottom'), 10);
            // Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
            if (offset < bottomMargin) offset = bottomMargin;
            $dialog.css("margin-top", offset);
        }
        $(document).on('show.bs.modal', '.modal', centerModal);
        $(window).on("resize", function() {
            $('.modal:visible').each(centerModal);
        });
    }(jQuery));
});
