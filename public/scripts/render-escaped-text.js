const renderEscapedText = (str) => {
  // Render HTML-safe text
  let div = document.createElement("div"); // Create div
  div.appendChild(document.createTextNode(str)); // Create and append a text node to div
  return div.innerHTML;
};