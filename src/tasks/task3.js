function sortReindeer(reindeerNames) {
  return reindeerNames.sort((a, b) => {
    return a.split(' ')[1].localeCompare(b.split(' ')[1]);
  });
}

let array = [
  'Dasher Tonoyan',
  'Dancer Moore',
  'Prancer Chua',
  'Vixen Hall',
  'Comet Karavani',
  'Cupid Foroutan',
  'Donder Jonker',
  'Blitzen Claus',
];

console.log(sortReindeer(array));
