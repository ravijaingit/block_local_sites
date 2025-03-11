function updateBlockedSites() {
    chrome.storage.local.get(["blockedSites"], function(data) {
      let blockedSites = data.blockedSites || [];
      let rules = blockedSites.map((site, index) => ({
        "id": index + 1,
        "priority": 1,
        "action": { "type": "block" },
        "condition": { "urlFilter": site, "resourceTypes": ["main_frame"] }
      }));
      
      chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: rules.map(r => r.id),
        addRules: rules
      });
    });
  }
  
  chrome.runtime.onInstalled.addListener(updateBlockedSites);
  chrome.storage.onChanged.addListener(updateBlockedSites);
  