/*global concatenatedString, describe, interpolatedString, it, myString */

const assert = require('assert')
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('strings', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'strings.js'), 'utf-8')
  })

  it('defines `greeting`', () => {
    assert.equal(greeting, "Hello, everybody!")
  })

  it('concatenates strings to greet a special guest in `greetSpecialGuest`', () => {
    assert.equal(greetSpecialGuest, "Hello, " + specialGuest + "!")
  })

  it('interpolates a string in `conversation`', () => {
    assert.equal(conversation, `Let's talk about ${topic}.`)
  })
})
