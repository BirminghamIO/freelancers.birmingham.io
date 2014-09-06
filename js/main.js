$(function (){
	//load spreadsheet
	var mySpreadsheet = 'https://docs.google.com/spreadsheet/pub?key=0AgYVWMxsntVodGlNeS13M0V1dmFmakJENTlaMWoxV2c&single=true&gid=3';
	$('#freelancerslist').sheetrock({
		url: mySpreadsheet,
		chunkSize: 100,
		sql: 'select B,E,C,D,F,G order by A desc',
		userCallback: function() {
			links();
			twitter();
		}
	});

	// work out portfolio link
	$('table td a:not([href~=twitter])').parent().addClass('website-link');
	$('table td a:not([href~=twitter])').css('border', '1px solid yellow');

	// add boostrap style to table
	$('table').addClass('table table-striped table-hover');


	//add links
	function links() {
		var websiteEl = $('#freelancerslist td:nth-child(5)');
		websiteEl.each(function(index) {
			var link = $(this).text();
			$(this).wrapInner('<a target="_blank" href="'+ link +'" />');
		});	
	};

	//add links
	function twitter() {
		var twitterEl = $('#freelancerslist td:nth-child(6)');
		twitterEl.each(function(index) {
			var link = "http://twitter.com/"; //twitter url 
			var text = $(this).text();
				text = text.replace("@", "");
			link += text;
			$(this).wrapInner('<a target="_blank" href="'+ link +'" />');
		});	
	}


});