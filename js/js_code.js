jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

$(window).scroll(
  {
      previousTop: 0
  }, 
  function () {
  var currentTop = $(window).scrollTop();
  if (currentTop < this.previousTop) {
      $(".sidebar em").text("Up"); 
      $(".header").show();
  } else {
      $(".sidebar em").text("Down");
      $(".header").hide();
  }
  this.previousTop = currentTop;
});

function SendEmail() {
 
  var nome = document.getElementById("idname");

  if (nome.value != "") {
      alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
  }

}