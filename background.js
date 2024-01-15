let counter = 0;
let ids = [];






function generateUniqueId() {
  let timestamp = new Date().getTime();
  timestamp = timestamp-(Math.floor(timestamp / 1000)*1000)
  counter++;
  return counter+timestamp ;
}



const contextMenuId = "myContextMenuOption";
chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: contextMenuId,
    title: "Break this Article!",
    contexts: ["all"],
  });
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (!(tab.url.includes("webcache.googleusercontent"))) {
    let rules = await chrome.declarativeNetRequest.getDynamicRules();
    let rulesArr = []
      for(let i of rules){
        rulesArr.push(i.id)
      }
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: rulesArr,
    });
  }
});

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId === "myContextMenuOption" && !(tab.url.includes("webcache.googleusercontent.com"))) {
    let url = "http://webcache.googleusercontent.com/search?q=cache:" + tab.url;
    chrome.tabs.update({ url: url });

    let id = Math.floor(generateUniqueId());
    console.log(id)
    await chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          id: id,
          priority: 1,
          action: { type: "block" },
          condition: {
            urlFilter:
              "https://cdn-client.medium.com/lite/static/js/main*",
          },
        },
      ],
    });

    ids.push(id);
  }
});
