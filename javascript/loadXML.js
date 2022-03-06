$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "quotes/quotes.txt",
		dataType: "text",
		success: function(data){
            var lines = data.split("\n");

            //Random item number
            var r = Math.floor(Math.random() * lines.length);

            //Get random line
            var line = lines[r].split("|");
            $('#author').val(" " + line[0]);
			$('#quote').val(line[1]);
		    },
		error: function() {
		    alert("An error occurred while processing quote dataset.");
		}
	});
});

function reply_click() {
    $(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "quotes/quotes.txt",
		dataType: "text",
		success: function(data){
            var lines = data.split("\n");

            //Random item number
            var r = Math.floor(Math.random() * lines.length);

            //Get random line
            var line = lines[r].split("|");
            $('#author').val(" " + line[0]);
			$('#quote').val(line[1]);
		    },
		error: function() {
		    alert("An error occurred while processing quote dataset.");
		}
	});
});
}