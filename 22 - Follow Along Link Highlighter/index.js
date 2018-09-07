const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  const linksCoords = this.getBoundingClientRect();
  console.log(linksCoords);
  const coords = {
    width: linksCoords.width,
    height: linksCoords.height,
    top: linksCoords.top + window.scrollY,
    left: linksCoords.left + window.scrollX
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
