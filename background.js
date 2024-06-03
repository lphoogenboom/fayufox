function fetchTheme(themeName) {
    return fetch(`themes/${themeName}.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok ${response.statusText}`);
        }
        return response.json();
      });
  }
  
  function applyTheme(themeName) {
    console.log(`Applying theme: ${themeName}`);
    fetchTheme(themeName)
      .then(theme => {
        console.log(`Fetched theme data:`, theme);
        return browser.theme.update(theme);
      })
      .then(() => {
        console.log(`Theme ${themeName} applied successfully`);
      })
      .catch(error => {
        console.error(`Failed to apply theme: ${error}`);
      });
  }
  
  // This is an editable section
// Function to remove box shadow and border rounding from active tab
function removeTabStyles(tabId) {
    // Remove CSS injected into active tab
    browser.tabs.insertCSS(tabId, {
      code:
        `/* Remove box shadow and border rounding from active tab */
    ]   .tab-background[selected]{
            box-shadow: none !important;
            border-radius: 0 !important;
        }`
    })
    .then(() => {
      console.log("CSS removed successfully from the active tab");
    })
    .catch(error => {
      console.error("Error removing CSS from the active tab:", error);
    });
  }
  
  // Add listener for activated tabs
  browser.tabs.onActivated.addListener(activeInfo => {
    // Get the active tab ID
    const activeTabId = activeInfo.tabId;
    
    // Remove CSS features from the active tab
    removeTabStyles(activeTabId);
  });
  