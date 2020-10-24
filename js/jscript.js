(function() {
  

	jQuery(document).ready(function(){
		
		/* Carousel Display */ 
		$('.carousel').carousel({
		  interval: 30000
		})
		
		/* ToolTip */ 
		$('[data-toggle="tooltip"]').tooltip();

		function slideUpDown(yourElement, yOffset) {

			 var yCoordinate = yourElement.getBoundingClientRect().top + window.pageYOffset;

			window.scrollTo({
				top: yCoordinate + yOffset,
				behavior: 'smooth'
			});
			clear();
			
		}
		
		function clear(){
			slideUpDown("", "");
		}
		
		// Hamburger and X Icon
		$(".navbar-close").hide();
		$(".navbar-toggler-icon").click(function() {
			$(".navbar-toggler-icon").hide();
			$(".navbar-close").show();
		});
		$(".navbar-close").click(function() {
			$(".navbar-close").hide();
			$(".navbar-toggler-icon").show();
		});
		
		
		/* Navigation ScrollTo Click Event */ 
		$(".navHome").click(function() {
			slideUpDown(document.getElementById('myHome'), -1000);
		});
		$(".navAbout").click(function() {
			slideUpDown(document.getElementById('myAboutUs'), -120);
		});		
		$(".navCareers").click(function() {
			slideUpDown(document.getElementById('myCareers'), -80);
		});
		$(".navTeam").click(function() {
			slideUpDown(document.getElementById('myTeam'), -120);
		});
		$(".fa-arrow-alt-circle-up").click(function() {
			slideUpDown(document.getElementById('myHome'), -1000);
		});
		$(".navContact").click(function() {
			$('#email, #name, #message').val('');
			$('.badge-warning').hide();
		});
		
		
		/*Arrow up navigation*/
		$(".fa-arrow-alt-circle-up").hide();
		$(window).scroll(function() {
			var scrlHeight = window.pageYOffset;
			if(scrlHeight == 2000 || scrlHeight > 2000){
				$(".fa-arrow-alt-circle-up").show();
			}else{
				$(".fa-arrow-alt-circle-up").hide();
			}
		});
		
		function hideTeam(){
			$('#teamJob1, #teamJob2, #teamJob3').hide();
		}
		
		function team(t){
			
			if (t == 1){
				hideTeam();
				$('#teamJob1').show();
			}else if (t == 2){
				hideTeam();
				$('#teamJob2').show();
				
			}else if(t == 3){
				hideTeam();
				$('#teamJob3').show();
			}
			
			//$('#modalTeamMember').modal();
			
		}
		// Click Team Member
		var altVal = "";
		$('#teamMember1').click(function(t) {
			altVal = document.getElementById("teamMember1").alt;
			team(altVal);
		});
		$('#teamMember2').click(function(t) {
			altVal = document.getElementById("teamMember2").alt;
			team(altVal);
		});
		$('#teamMember3').click(function(t) {
			altVal = document.getElementById("teamMember3").alt;
			team(altVal);
		});
		
		
		// Blink
      setInterval(function()
        {

        setTimeout(function()
        {

        //$(".blink").css("color","rgba(0,0,0,0.1)"); // If you want simply black/white blink of text
        $(".blink").css("visibility","hidden"); 


        },600);


        //$(".blink").css("color","rgba(0,0,0,1)");  // If you want simply black/white blink of text
        $(".blink").css("visibility","visible");  

        },1000);
		
		
		/* Tab - Job Position */ 
		$('a[href="#tab1primary"]').click();
		$('li a[href="#tab1primary"]').parent().addClass('active');
		
		function tabpanel1(){
			$('li a[href="#tab2primary"]').parent().removeClass('active');
			$('li a[href="#tab1primary"]').parent().addClass('active');
		}
		
		function tabpanel2(){
			$('li a[href="#tab1primary"]').parent().removeClass('active');
			$('li a[href="#tab2primary"]').parent().addClass('active');
		}
		
		// Click Tab-1
		$('a[href="#tab1primary"]').click(function() {
			tabpanel1();
		});
		// Click Tab-2
		$('a[href="#tab2primary"]').click(function() {
			tabpanel2();
		});
		
		
		// Button for every Job Position
		$(".btn-job-position-1").click(function() {
			tabpanel1();
			$('a[href="#tab1primary"]').click();
			slideUpDown(document.getElementById('myCareers'), 1000);
			
		});
		$(".btn-job-position-2").click(function() {
			tabpanel2();
			$('a[href="#tab2primary"]').click();
			slideUpDown(document.getElementById('myCareers'), 1000);
		});
		
		
		/* Footer */ 
		var dt = new Date();
		$("#footerYear").text(dt.getFullYear());
		
		setTimeout(function() {
		  location.reload();
		}, 1800000);

	});

	
})();
