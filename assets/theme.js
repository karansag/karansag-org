(function () {
  var button = document.querySelector(".theme-toggle");
  var root = document.documentElement;

  if (!button) {
    return;
  }

  function currentTheme() {
    if (root.dataset.theme) {
      return root.dataset.theme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateButton() {
    var theme = currentTheme();
    button.setAttribute("aria-pressed", String(theme === "dark"));
    button.textContent = theme === "dark" ? "dark / light" : "light / dark";
  }

  button.addEventListener("click", function () {
    var nextTheme = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    updateButton();
  });

  updateButton();
}());
