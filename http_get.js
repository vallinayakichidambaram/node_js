const { get } = require('https')

//Request function - used for both sending and receiving data
//get is only for getting the data
const req = get('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Data Chunk ${chunk}`)
  })

  res.on('end', () => {
    console.log(`No more data`)
  })
});

