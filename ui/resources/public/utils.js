define(["jquery"], function($) {
  return {
    pushHistory: function (name) {
      history.pushState(name, "", window.location.pathname + (name ? "#" + name : ""));
    },

    hash: function() {
      return window.location.hash.substr(1)
    },

    toggleButton: function (button, e) {
      // Manually toggle bootstrap button.
      e.stopPropagation();
      $(button).toggleClass("active");
    },
  };
});
