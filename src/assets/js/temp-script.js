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
});
