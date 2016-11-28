const cloudscraper = require('cloudscraper')

cloudscraper.get('http://kissanime.com', function(err, res, body) {
  console.log('--------------')
  console.log('ERROR')
  console.log('--------------')
  console.log(err)

  console.log('')
  console.log('--------------')
  console.log('BODY')
  console.log('--------------')
  console.log(body)
})