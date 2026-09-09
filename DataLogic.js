function render(id) {
  if (currentDialogue && typeof currentDialogue.onExit === "function") {
    currentDialogue.onExit();
  }

  const current = dialogueData.find(d => d.id === id);
  if (!current) {
    closeDia();
    return;
  }

  currentDialogue = current;
  
  const optionsDiv = document.getElementById("options");
  const nextButton =document.getElementById("continueButton");
  
  document.getElementById("text").innerHTML = current.text;
  document.getElementById("Name").innerHTML = current.Name;
  document.getElementById("charPic").src = current.avatar
  optionsDiv.innerHTML ="";
  
  if (current.clearEffect) {current.clearEffect.forEach(target=>clearEffect(target));}
  if (current.removeEffect) {current.removeEffect.forEach(({target, classname})=>removeEffect(target,classname));}
  if (current.effect) {effects(current.effect).apply()}
  
  if (current.options && current.options.length >0) {nextButton.style.display = "block"; current.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerHTML = opt.label;
    btn.onclick = () => 
    { if (opt.onSelect) opt.onSelect();
      render(opt.next);
    }
    optionsDiv.appendChild(btn);
    });
  }
    else if (current.next) {
      nextButton.style.display = "block";
      nextButton.innerText ="Tiếp tục";
      nextButton.onclick = () => render(current.next) }
      else {
        nextButton.style.display = "block";
      nextButton.innerText ="Tiếp tục";
      nextButton.onclick = () => closeDia();
      }
}
function openDia(id) {
  const current = dialogueData.find (d => d.id === id);
  if (!current) {
    closeDia();
    return;
  }
  if (current.sfx) { playSfx(current.sfx); }
  document.getElementById("dialogueWrapper").style.display = "flex";
  render(id);
}

function closeDia() {
  if (currentDialogue && typeof currentDialogue.onExit === "function") {
    currentDialogue.onExit();
  }
  stopSfx();
  currentDialogue = null;
  document.getElementById("dialogueWrapper").style.display = "none";
}