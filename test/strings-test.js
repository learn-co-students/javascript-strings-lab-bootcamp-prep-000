/*global concatenatedString, describe, interpolatedString, it, myString */

const assert = require('assert')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('strings', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'strings.js'), 'utf-8')
  })

  it('defines `myString`', () => {
    assert.equal(myString, "Hello, world!")
  })

  it('concatenates two strings', () => {
    assert.equal(concatenatedString, "A whole is the sum of its parts.")
  })

  it('interpolates a string', () => {
    assert.equal(interpolatedString, `I would really like a ${animal}.`)
  })
})
