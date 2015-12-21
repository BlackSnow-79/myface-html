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
  $(function () {
    $( '#show-advance-search-btn').click(function(e) {
    	e.preventDefault();
    	if ($('#advance-search').hasClass('advance-hidden')) {
    		$( "#advance-search" ).slideDown('slow');
    		$( "#advance-search" ).removeClass('advance-hidden');
    	}
    	else {
    		$( "#advance-search" ).addClass('advance-hidden');
    		$( "#advance-search" ).hide('slow');
    	}
		});
		$( '#advance-search-btn').click(function() {
			$( "#advance-search" ).addClass('advance-hidden');
		  $( "#advance-search" ).hide('slow');
		});
  });
  // Insert product
  $(function () {
    $( '#insert-product-btn').click(function(e) {
      $( "#insert-product-form" ).show('fast');
    });
    $( '#insert-btn-active').click(function(e) {
      $( "#insert-product-form" ).hide('fast');
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