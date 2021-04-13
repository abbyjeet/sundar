function toggle() {
  // const def = document.querySelector("link[rel].default");
  const fancy = document.querySelector("link[rel].fancy");
  if (fancy.getAttribute("rel").indexOf("disabled") > -1) {
    fancy.setAttribute("rel", "stylesheet");
    // fancy.setAttribute("rel", "disabled");
  } else {
    fancy.setAttribute("rel", "disabled");
    // fancy.setAttribute("rel", "stylesheet");
  }
}
