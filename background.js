
chrome.runtime.onInstalled.addListener(function() {
    // Create a context menu item
    chrome.contextMenus.create({
      id: "myContextMenuOption",
      title: "Break this Article!",
      contexts: ["all"],
    });
  });
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "myContextMenuOption") {
      // Check if the context is within medium.com
      if (tab.url && tab.url.startsWith("https://medium.com/")) {
        let url = "http://webcache.googleusercontent.com/search?q=cache:"+tab.url
        //chrome.tabs.create({url:"http://webcache.googleusercontent.com/search?q=cache:"+tab.url})
        fetch(url)
        .then(async (res)=>{
          console.log(await res.text())
          return res.text
        })
        .then((res)=>{
          console.log(res)
        })
      } else {
        chrome.contextMenus.update("myContextMenuOption", { visible: false });
      }
    }
  });  

  
  