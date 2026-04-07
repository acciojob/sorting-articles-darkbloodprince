//your JS code here

const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Function to remove articles
function strip(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort ignoring articles
const sortedBands = bands.sort((a, b) => {
  if (strip(a) > strip(b)) return 1;
  if (strip(a) < strip(b)) return -1;
  return 0;
});

// Add to DOM
const ul = document.getElementById("band");

sortedBands.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});