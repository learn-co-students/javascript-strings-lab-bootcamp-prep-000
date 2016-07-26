/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  assert.equal(greeting, "Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  assert.equal(greetSpecialGuest, "Hello, " + specialGuest + "!")
})

it('interpolates a string in `conversation`', function() {
  assert.equal(conversation, `Let's talk about ${topic}.`)
})
