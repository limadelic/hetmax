{ search } = require '../src/spiders/shopmania'

describe 'Shopmania Spider', ->

  it 'should fetch me stuff', (done) ->

    search '3TL941C', (e, results) ->
      p results
      done()
