// $(document).ready(function(){

// })

// jquery
// $('ul.tabs li').click(function () {
// 	var tab_id = $(this).attr('data-tab');

// 	$('ul.tabs li').removeClass('current');
// 	$('.tab-content').removeClass('current');

// 	$(this).addClass('current');
// 	$("#" + tab_id).addClass('current');
// })

// $('.item').bind('touchstart mousedown', function () {
// 	var item_id = $(this).attr('id');
// 	$("#" + item_id).addClass('active');
// })

// $('.item').bind('touchend mouseup', function () {
// 	var item_id = $(this).attr('id');
// 	$("#" + item_id).removeClass('active');
// })

// javascript
var links = document.querySelectorAll('.tab-link');
[].forEach.call(links, function(link) {
	link.addEventListener('click', event => {
		var item_id = link.getAttribute('data-tab');
	
		for (var i = 0; i < links.length; i++) {
			links[i].classList.remove('current');
		}
		var tabs = document.querySelectorAll('.tab-content');
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove('current');
		}
	
		link.classList.add('current');
		document.querySelector("#" + item_id).classList.add('current');
	})
});

document.querySelector('.item').addEventListener('touchstart mousedown', event => {
	var item_id = document.querySelector('.item').getAttribute('id');
	document.querySelector("#" + item_id).classList.add('active');
})

document.querySelector('.item').addEventListener('touchend mouseup', event => {
	var item_id = document.querySelector('.item').getAttribute('id');
	document.querySelector("#" + item_id).classList.remove('active');
})

document.querySelector('#smart-view').addEventListener('click', event => {
	console.log("smart view");
})