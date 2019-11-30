const fetch = require('node-fetch');

async function test() {
  const x =  await fetch('https://ip-ranges.amazonaws.com/ip-ranges.json')
  return x;
    // .then(function(d) {
    //   let json = d.json();
    //   return json;
    // })
}

const gen = test()
