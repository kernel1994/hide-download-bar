'use strict';

chrome.downloads.onChanged.addListener((downloadDelta) => {
  if (typeof(downloadDelta.state) != 'undefined') {
    if (downloadDelta.state.current === "complete") {
      // hide the download bar while compeleting 3 seconds later.
      setTimeout(() => {
        chrome.downloads.setShelfEnabled(false);
      }, 3000);

      // and after the download bar was hidden, make it show agin to avoid
      // that the bar dose not show up when the next download.
      setTimeout(() => {
        chrome.downloads.setShelfEnabled(true);
      }, 3500);
    }
  }
});
