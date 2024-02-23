const defaultOpions = {
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ options: defaultOpions });
});
