$(function () {
    var date = new Date();
    var y = date.getFullYear();

	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title'
		},
		editable: true
	});
});

// Modal Javascript

// Getting the modal
var modal = document.getElementById("myModal");

// Getting the element that opens the modal
var ele = document.getElementById("plusIcon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//When the user clicks on the button, open the modal
ele.onclick = function(){
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if(event.target == modal) {
    modal.style.display = "none";
  }
}
