function reply_click() {
	var items = Array(278622, 314116, 505219, 549217, 719437, 758978, 802673, 836547, 964054, 968903);
	var item = items[Math.floor(Math.random()*items.length)];

    $(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "quotes/" + item + ".txt",
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