function BrowserDetect() {
	var module = module || (function(){
		var instance;
		var browser;
		var version;

		function createInstance(){
			var singleton={};

			var dataBrowser = [
				{string : navigator.userAgent,subString : "Chrome",identity : "Chrome"},
				{string : navigator.userAgent,subString : "MSIE",identity : "Explorer"},
				{string : navigator.userAgent,subString : "Trident",identity : "Explorer"},
				{string : navigator.userAgent,subString : "Firefox",identity : "Firefox"},
				{string : navigator.userAgent,subString : "Safari",identity : "Safari"},
				{string : navigator.userAgent,subString : "Opera",identity : "Opera"}
			];

			browser = searchString(dataBrowser) || "Other";
			version = searchVersion(navigator.userAgent) || searchVersion(navigator.appVersion) || "Unknown";

			function searchString(data){
				for (var i = 0; i < data.length; i++) {
					var dataString = data[i].string;
					this.versionSearchString = data[i].subString;

					if (dataString.indexOf(data[i].subString) !== -1) {
						return data[i].identity;
					}
				}
			}

			function searchVersion(dataString){
				var index = dataString.indexOf(this.versionSearchString);
				if (index === -1) {
					return;
				}

				var rv = dataString.indexOf("rv:");
				if (this.versionSearchString === "Trident" && rv !== -1) {
					return parseFloat(dataString.substring(rv + 3));
				} else {
					return parseFloat(dataString.substring(index
							+ this.versionSearchString.length + 1));
				}
			}

			singleton.useClassList=function(){
				var result=true;
				if(browser.match(/Explorer/i)){
					if(version==9){
						result=false;
					}
				}
//				console.log("You are using "+browser+ " with version "+version);
				return result;
			};

			singleton.unsupportedBrowserCheck=function(){
				var result=false;
				if(browser.match(/Explorer/i)){
					if(version<9){
						result=true;
					}
				}
//				console.log("You are using "+browser+ " with version "+version);
				return result;
			};

			singleton.getBrowser=function(){
				return browser;
			};

			singleton.getVersion=function(){
				return version;
			};

			return singleton;
		};

		/**
		 * @desc I'm curious about this whole js file. I'm just throwing crap at
		 *       a wall and it just seems to work the way I expect it to with
		 *       very little debugging. No one is that lucky so I'm waiting for
		 *       it all to blow up!
		 * @author boppenhe
		 */
		function getInstance(){
			if(!instance){
				instance = createInstance();
			}
			return instance;
		};

		return {
			getInstance:getInstance
		};
	})();

	return module;
};