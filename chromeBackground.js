//message = info sent from content script
//sender = info about tab
//sendResponse = used to send reponse back to content script
var index;
function resetIndex(){
    if (index) {
        index = null;
    }  
}
chrome.runtime.onMessage.addListener(function (message, sender, response) {
    console.log("running listener");
  
    if (message.length < 5){
        console.log("Message coming from grid click")
        index = Number(message);
        console.log(index);
        console.log(typeof(index));
    } 
    
    if (message.length === 5) {

        let currentTiles = JSON.parse(window.localStorage.tilelist);
        var favicon = sender.tab.favIconUrl;
        var tabId = sender.tab.id;
        var tileIndex = String(index);
        resetIndex();
        addFavIcon(favicon, tileIndex);
    }
}  
);