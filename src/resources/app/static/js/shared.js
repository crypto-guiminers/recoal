/*
  shared.js contains functions used by both firstrun and app
 */

let shared = {
  // showError takes an error message and display's it using the
  // bundled modal
  showError: function(message) {
    let errDiv = document.createElement("div");
    errDiv.innerHTML = "<h2>Something went wrong</h2>" +
      "<p>" + message + "</p>";
    $('.astimodaler-body').removeClass('ann');
    $('.astimodaler-body').addClass('error');
    asticode.modaler.setContent(errDiv);
    asticode.modaler.show();
  },
  // validateWalletAddress checks if the given address is a valid Stellite
  // wallet address
  validateWalletAddress: function(address) {
    if (address.substring(0, 3) == 'cty')
    {
      return true;
    }
    return false;
  },
  // bindExternalLinks ensures external links are opened outside of Electron
  bindExternalLinks: function() {
    var shell = require('electron').shell;
    $(document).on('click', 'a[href^="http"]', function(event) {
      event.preventDefault();
      shell.openExternal(this.href);
    });
    // This stops electron from updating the window title when a link
    // is clicked
    $(document).on('click', 'a[href^="#"]', function(event) {
      event.preventDefault();
    });
  },
  isMac: function() {
    return window.navigator.platform.toLowerCase().includes("mac");
  }
}
