function setup() {
  document.querySelectorAll("video").forEach(video => video.controls = true)
}

chrome.storage.sync.get("options", async ({ options }) => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setup,
    args: [],
  });
});
