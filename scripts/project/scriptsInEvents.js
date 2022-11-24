


const scriptsInEvents = {

	async EventSheet1_Event5_Act1(runtime, localVars)
	{
		alert("Unable to connect to Room: ''"+runtime.globalVars.roomName+"'' at: ''"+runtime.globalVars.serverURI+"''")
	},

	async EventSheet1_Event7_Act4(runtime, localVars)
	{
		console.log("Add entities")
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

