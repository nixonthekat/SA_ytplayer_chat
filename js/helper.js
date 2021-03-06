function trimStuff (str) {
    str = str.replace(/^\s+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
        if (/\S/.test(str.charAt(i))) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return str;
}

function checkForJoin(){
	if(trimStuff($("#username").val()) == ""){
		$("#username").val("");
		alert("Please enter a username.");
		$("#username").focus();
		return false;
	}
	if(trimStuff($("#sessionURL").val()) == ""){
		$("#sessionURL").val("");
		alert("Please enter a session URL.");
		$("#sessionURL").focus();
		return false;
	}

	return true;
}

function checkForNew(){
	if(trimStuff($("#username").val()) == ""){
		$("#username").val("");
		alert("Please enter a username.");
		$("#username").focus();
		return false;
	}
	return true;
}

function checkForWebsockets(){
	window.WebSocket = window.WebSocket || window.MozWebSocket;
		if ((!window.WebSocket)){
			//Browser does not support websockets
			return false;
		}
		else if (!("WebSocket" in window)){ 
		   //Browser does not support websockets
			return false;
		}
		else if( typeof(WebSocket) != "function" ) {
		    //Browser does not support websockets
			return false;
		}
		else{
			//Browser does support websockets
			return true;
		}
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function validateURL(url) {
    var result = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
    return (url.match(result)) ? RegExp.$1 : false;
}