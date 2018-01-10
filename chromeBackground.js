//message = info sent from content script
//sender = info about tab
//sendResponse = used to send reponse back to content script

var testString = "TEST";

// TODO: try message passing to get this running
function getScreenshot() {
    console.log("getScreenshot is running!");
    chrome.tabs.captureVisibleTab(function(screenshotUrl) {
        console.log(screenshotUrl);
    })
}


chrome.runtime.onMessage.addListener(function (message, sender, response) {
    console.log("running listener");
    // try: if message == "screenshot":
        // do captureVisibleTab
    
    let currentTiles = JSON.parse(window.localStorage.tilelist);
    for (var i = 0; i < currentTiles.length; i++) {
    	let sentURL = sender.tab.url;
        let prefix = "http://";
        let urlBody = sender.tab.url.slice(8);
        let shortUrl = sender.tab.url.slice(12);
        let current = currentTiles[i].url;
        //let linkedin = new RegExp(/https:\/\/www\.linkedin\.com\/[a-z]*\/*/i);
        //console.log("linkedin var: " + linkedin);
        // console.log("prefix + urlbody: " + prefix + urlBody);
        // console.log("URL without prefix: " + urlBody);
        // console.log("url saved in localStorage: " + current);
        // console.log("sender.tab.url is: " + sender.tab.url);
        // console.log("");
        if (sender.tab.url === current // perfect match (https)
            || prefix + urlBody === current // http prefix
            || urlBody === current // no http
            || prefix + shortUrl === current // no www.
            //|| sender.tab.url === "https://mail.google.com/mail/u/0/" //gmail
            //|| sentURL.search("linkedin")
            ) { 
            // console.log("------Match found------")
            var url = currentTiles[i].url;
            var favicon = sender.tab.favIconUrl;
            var tabId = sender.tab.id;
            // call function in portals.js
            printTabInfo(url, favicon, tabId);
            break;
        }
    }
});