const $contactBtn = document.querySelector("#contact");
const $modal = document.querySelector(".modal_container");
const $flex = document.querySelector(".flex");
$contactBtn.addEventListener("click", () => {
  $modal.classList.toggle("active");
  $flex.classList.toggle("modal-active");
});
