function reply_click() {
	var items = Array(1282797484, 1517135247, 2416440192, 2503892042, 2786228532, 3141163357, 3514156308, 4265239147, 4763746520, 5052199684, 5492171126, 6531919631, 7194379434, 7454753973, 7589785835, 8026731274, 8365475125, 8596979813, 9640549627, 9689038523);
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