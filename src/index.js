function open_onClick() {
  document.querySelector(".modal").style.display = "flex";
  // document.querySelector(".modalwrap").style.display = "flex";
  document.querySelector("body").style.overflow = "hidden";
}

function close_onClick() {
  document.querySelector(".modal").style.display = "none";
  // document.querySelector(".modalwrap").style.display = "none";
  document.querySelector("body").style.overflow = "auto";
}
