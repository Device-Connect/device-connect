$( document ).ready(function() {

	var client = new ClientJS(); // Create A New Client Object

	var OS = client.getOS(); // Get OS Version

	console.log( OS );

	var osVersion = client.getOSVersion(); // Get OS Version

	console.log( osVersion );

	var browser = client.getBrowser(); // Get Browser

	console.log( browser );


});
