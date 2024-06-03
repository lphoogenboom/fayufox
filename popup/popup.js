document.getElementById('theme1').addEventListener('click', () => {
  console.log('Ayu Light button clicked');
  browser.runtime.getBackgroundPage().then(bg => {
    if (bg) {
      console.log('Background page found');
      bg.applyTheme('ayuLight');
    } else {
      console.error('Background page not found');
    }
  }).catch(error => {
    console.error('Error getting background page:', error);
  });
});

document.getElementById('theme2').addEventListener('click', () => {
  console.log('Ayu Mirrage button clicked');
  browser.runtime.getBackgroundPage().then(bg => {
    if (bg) {
      console.log('Background page found');
      bg.applyTheme('ayuMirrage');
    } else {
      console.error('Background page not found');
    }
  }).catch(error => {
    console.error('Error getting background page:', error);
  });
});
