//AJAX is the use of the XMLHttpRequest object to communicate with server-side scripts

//to make a request create an instance of the class XMLHttpRequest (built into the global Object)

//in this example I am 'GET'ting data

function makeRequest(url){			
	httpRequest = new XMLHttpRequest();	//creating instance of the class XMLHttpRequest

	if (!httpRequest) {					
		alert("Cannot create XMLHttp instance");  //error message in case the request fails
		return false
	}

	httpRequest.onreadystatechange = alertContents;	//alertContents will be invoked once a response is recieved
	httpRequest.open('GET', url, true); // 1st param is the request method ('GET'), 2nd param is the url of the file I am getting data from, 3rd param states whether the request will be synchronous or asychronous, true for asych and false for sych (asych is almost always better)
	httpRequest.send()
}

function alertContents(){						//the function that processes the recieved response
	if (httpRequest.readyState === XMLHttpRequest.DONE){
		if (httpRequest.status === 200){		//200 is the status when all is well
			alert(httpRequest.responseText)	// returns the server response as a string of text
		}
		else{
			alert("Something went wrong")	//error msg in case of other statuses like 404 or 500
		}
	}
}

