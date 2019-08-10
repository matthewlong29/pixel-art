const themeSelector = document.querySelector(
  '.theme-option input[type="radio"]'
);

function switchTheme(event) {
  if (event.target.checked.value === "one") {
    document.documentElement.setAttribute("data-theme", "one");
  } else if (event.target.checked.value === "two") {
    document.documentElement.setAttribute("data-theme", "two");
  } else if (event.target.checked.value === "three") {
    document.documentElement.setAttribute("data-theme", "three");
  } else if (event.target.checked.value === "four") {
    document.documentElement.setAttribute("data-theme", "four");
  } else {
    document.documentElement.setAttribute("data-theme", "one");
  }
};

themeSelector.addEventListener("change", switchTheme, false);
