$(document).ready(function() {
	// Set panel height
  // Close modal
  $("#yes-btn").on("click", function () {
    $('#nontifi-modal').modal('hide');
  });
  /*date picker*/
	$(function () {
    $('.date-picker').datetimepicker();
  });
  //advance-search

  // Insert product
  $(function () {
    $( '#insert-product-btn').click(function(e) {
      $( "#insert-product-form" ).show('fast');
    });
    $( '#insert-btn-active').click(function(e) {
      $( "#insert-product-form" ).hide('fast');
    });
  });

  // Show report form
  $(function () {
    var checkboxValue;
    $('.report-form-control').click(function(){
      checkboxValue = $(this).attr('id');
      $('.report-form').removeClass('report-form-selected');
      $('.'+ checkboxValue).addClass('report-form-selected');
    });
  });

  // register form
  $(function () {
    $( '#step-2-btn').click(function(e) {
      $( "#step-1-f" ).hide('fast');
      $( "#step-2-f" ).show('slow');
    });
    $( '#step-1-btn').click(function(e) {
      $( "#step-2-f" ).hide('fast');
      $( "#step-1-f" ).show('fast');
    });
  });

  // add item-active for inbox-list
  $(function () {
    $( '.fb-chat-list li.item:first-child').addClass('item-active');
    $( '.fb-chat-list li.item').click(function(e) {
      $( ".fb-chat-list li.item" ).removeClass('item-active');
      $(this).addClass('item-active');
    });
  });
  //dropdown-active
  $(function () {
    var open = false;
    var openSidebar = function(){
      $( ".panel-product-dropdown").addClass('active');
      open = true; //This is the new part!
    }
    var closeSidebar = function(){
      $( ".panel-product-dropdown").removeClass('active');
      open = false;
    }
    $('.product-dropdown-ct').click( function(event) {
      event.stopPropagation();
      var toggle = open ? closeSidebar : openSidebar;
      toggle();
    });
    $(document).click( function(event){
      if ( !$(event.target).closest('.panel-product-dropdown').length ) {
          closeSidebar();   
      }
    });
  });

	// Modal
	(function ($) {
    "use strict";
    function centerModal() {
        $(this).css('display', 'block');
        var $dialog  = $(this).find(".modal-dialog"),
        offset       = ($(window).height() - $dialog.height()) / 3,
        bottomMargin = parseInt($dialog.css('marginBottom'), 10);

        // Make sure you don't hide the top part of the modal w/ a negative margin if it's longer than the screen height, and keep the margin equal to the bottom margin of the modal
        if(offset < bottomMargin) offset = bottomMargin;
        $dialog.css("margin-top", offset);
    }

    $(document).on('show.bs.modal', '.modal', centerModal);
    $(window).on("resize", function () {
        $('.modal:visible').each(centerModal);
    });
	}(jQuery));
});