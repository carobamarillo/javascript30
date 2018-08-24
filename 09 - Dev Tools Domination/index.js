
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');
// Interpolated
console.log('Hello I am %s string', 'f**')
// Styled
console.log('%c I am a styled text', 'color: #333; background: #efefef; font-size: 14px')
// warning!
console.warn('OH NOOO');
// Error :|
console.error('OH NOO RUN');
// Info
console.info('Hey!!')
// Testing
console.assert(1 === 2, 'That is wrong!')
// clearing
//console.clear();
//Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();
// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`)
})
// counting
console.count('Caro');
console.count('Caro');
console.count('Caro');
console.count('Caro');
console.count('Caro');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

  //table
  console.table(dogs)