document.addEventListener("DOMContentLoaded", function() {
    let textarea = document.getElementById("blockedSites");
    let saveButton = document.getElementById("save");
  
    chrome.storage.local.get(["blockedSites"], function(data) {
      if (data.blockedSites) {
        textarea.value = data.blockedSites.join("\n");
      }
    });
  
    saveButton.addEventListener("click", function() {
      let sites = textarea.value.split("\n").map(s => s.trim()).filter(Boolean);
      chrome.storage.local.set({"blockedSites": sites});
    });
  });