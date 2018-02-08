 
 //Include html file

$(document).on('click tap touchstart', '.reveal-modal-bg', function() {
    return $('[data-reveal]').foundation('reveal', 'close');
}); 

//$('#close').foundation('reveal', 'close');

 $(document).foundation({
  accordion: {
    // specify the class used for active (or open) accordion panels
    active_class: 'active',
    // allow multiple accordion panels to be active at the same time
    multi_expand: true,
    toggleable: true
  }
});

var accordion = document.getElementsByClassName('accordion-navigation');
var content = document.getElementsByClassName('content');
var viewAll = document.getElementById('expand-all');
var arrow = document.getElementsByClassName('arrow');

$(viewAll).click(function(){
	$(accordion).toggleClass('active');
	$(content).toggleClass('active');
	//$(this).text($(this).text() == 'Close All' ? 'Close All' : 'Expand All');

});


 $("#expand-all").click(function(){
 	el = document.getElementsByClassName('el');
 	console.log()
    $(el).toggleClass('hide');
 });

$('#iribbon-container').click(function(){
	$(this).toggleClass('show');
});


function openNav() {
    	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    	document.getElementById("mySidenav").style.width = "0";
}



var buttons = document.querySelectorAll('video + a.close');

for(var b = 0; b < buttons.length; b++){
  var button = buttons[b];
  button.addEventListener('click', function(){
    var video = this.parentNode.childNodes[1];
    video.pause();

  });
}

