
  let copyButton = document.getElementById("copyButton");
  
  /*
  add event listener to trigger callback that turns the
  selected text to an input, selects it then fires up the
  copy command
  */
  copyButton.addEventListener("click", () => {
    let results = document.getElementById("results-area").innerText;
    let copyText = document.createElement("INPUT");
    copyText.setAttribute("type", "text");
    copyText.setAttribute("value", results);
    copyText.style.opacity = 0;
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand("copy");

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied all " + copyText.value.length + " characters!";
  })

  copyButton.addEventListener("mouseout", () => {
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  })
