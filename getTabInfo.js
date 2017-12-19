// content script
// chrome.runtime.sendMessage(
//     JSON.stringify(chrome.runtime.getManifest())
// );
chrome.runtime.sendMessage(
    "oh, hi, Mark"
);
// chrome.tabs.query(
//     { 
//         currentWindow: true, 
//         active: true }, 
//         function (tabs) {
//         console.log(tabs[0]);
//     }
// );

// if (tabs) {
//     chrome.runtime.sendMessage(tabs);
// }