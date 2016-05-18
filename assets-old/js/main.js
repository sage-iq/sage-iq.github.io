;(function(){
	// Menu settings
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});

  // Show contact form
  $('.show-contact-form').click(function(e) {
    e.preventDefault();
    $('#contact-form .form-elements').slideDown(800, function(){
      $('#contact-form .submit-form').show();
    });
    $(this).hide().next().show();
  });

  var clearValidationError = function(ele)
  {
    var $ele = $(ele.target);
    if ($.trim($ele.val())!=='')
      $ele.parent().removeClass('has-error');
  }

  $('#contact-form input').on('keyup', clearValidationError);
  $('#contact-form select').on('change', clearValidationError);

  $('#contact-form .submit-form').click(function(e) {
    var $this = $(this);
    var $form = $this.parents('form');
    e.preventDefault();
    // var csrftoken = getCookie('csrftoken');

    if ($this.hasClass('sent')) {
      $this.removeClass('btn-primary-green sent').addClass('btn-primary-blue').html("Submit <i class='icon-paperplane'></i>");
    } else {
      // validation
      var formData = $form.serializeArray();
      $(formData).each(function(){
        var $d = $('#' + this.name).parent();
        if ($.trim(this.value)=='')
          $d.addClass('has-error');
        else
          $d.removeClass('has-error');
      });
      if ($form.find('.has-error').length)
        return;

      // send via AJAX
      $this.addClass('sending');
      $.ajax({
        type:"POST",
        // beforeSend: function (request)
        // {
        //   request.setRequestHeader("X-CSRFToken", csrftoken);
        // },
        url: '/contact.php',
        data: $form.serialize(),
        success: function(msg) {
          $this.removeClass('sending').html('<span class="icon-spinner"></span>').addClass('submitting');
          setTimeout(function() {
            $this.removeClass('btn-primary-blue submitting').addClass('btn-primary-green sent').html("Thanks, we'll be in touch! <span class='icon-cancel pull-right'></span>");
          }, 500);
        },
        error: function(xhr, textStatus, errorThrown){
          $this.removeClass('sending');
          alert(xhr.responseText);
        }
      });

    }
  });
})(jQuery)