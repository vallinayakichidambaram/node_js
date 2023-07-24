const { request } = require('https')
//import only the necessary functionality
const req = request('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Data Chunk ${chunk}`)
  })

  res.on('end', () => {
    console.log(`No more data`)
  })
});

req.end();