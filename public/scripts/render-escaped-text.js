const renderEscapedText = (str) => {
  /**
   * (string) => string
   * Return an escaped string of str that is safe to be rendered on to screen
   **/

  let div = document.createElement("div"); // Create div
  div.appendChild(document.createTextNode(str)); // Create and append a text node to div
  return div.innerHTML;
};