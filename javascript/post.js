function reply_click() {
    $(document).ready(function(){
		$(document).ready(function(){
			$.ajax({
				type: "POST",
				contentType: 'application/json',
				processData: false,
				url: "https://api.twitter.com/oauth2/token",
				headers: {
					"Authorization":"Basic OWpGZ1J1NG5hdENuZGZ1Y0owNmJaUToyWFdDcnR4SEdMMEJhMjFMcHZuT3NZakNHcGpSV2luS0V0MkExQ2xHNA==",
					"Content-Type":"application/x-www-form-urlencoded",
					"cache-control":"no-cache"
				  },
				data: '{"grant_type":"client_credentials"}',
				dataType: "json",
				success: function (data) {
					alert(JSON.stringify(data));
				  },
				  error: function(){
					alert("Cannot get data");
				  }
			});
		});
    });
}