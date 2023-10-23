const inputs = document.querySelectorAll(".input");

window.addEventListener("DOMContentLoaded", function () {
  const firstInput = document.querySelector("input"); // İlk input elemanını seç
  if (firstInput) {
    firstInput.focus(); // Odaklan
    addcl.call(firstInput); // focus olayını manuel olarak tetikle
  }
});

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});
