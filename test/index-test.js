/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`${topic}`)
})
