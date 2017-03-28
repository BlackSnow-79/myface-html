//dont upload to live version
$(document).ready(function() {
  //advance-search
  $(function () {
    $( "#advance-search" ).addClass('advance-hidden');
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
  //fanpage-setting
  $(function () {
    $( '.setting-form-control').click(function() {
      $( ".setting-form-db" ).show('fast');
    });
  });
  $(function () {
    $( '.order-next-step').click(function() {
      $( '#invoice-dashboard-modal' ).hide();
      $( '#invoice-complete-modal' ).show();
    });
    $( '.back-action').click(function() {
      $( '#invoice-complete-modal' ).hide();
      $( '#invoice-dashboard-modal' ).show();
    });
  });
  $('.invoiceStatuschange').on('change', function() {
    $('#confirmModal').modal({
      show: true
    })
  });
  //goto-next-step in create invoice
  $(".goto-invoice-step-2").click(function() {
      $('.invoice-edit-step-1').removeClass('active');
      $('.invoice-edit-step-2').addClass('active');
      $('html,body').animate({scrollTop: ($('.'+'invoice-edit-step-2').offset().top - 80)},'slow');
  });
  //collapse-table
  $(".collapse-toggle").click(function(e) {
      e.preventDefault();
      if (!$(this).closest('.collapse-toggle-nav').hasClass('show-collapse')) {
          $('.collapse-div').slideUp("slow");
          $('.collapse-toggle-nav').removeClass('show-collapse');
          $(this).closest('.collapse-toggle-nav').addClass('show-collapse');
          $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-div').slideDown("slow");
      } else {
          $(this).closest('.collapse-toggle-nav').removeClass('show-collapse');
          $(this).closest('.collapse-toggle-nav').next('.collapse-row').find('.collapse-div').slideUp("slow");
      }
  });
});
