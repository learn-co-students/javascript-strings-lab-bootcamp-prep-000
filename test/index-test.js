/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function(topic) {
  expect(greeting).toEqual("Hello, everyone!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function(topic) {
  expect(greetSpecialGuest).toEqual(`Hello, {Neil deGrasee Tyson}!`)
})

it('interpolates a string in `conversation`', function(topic) {
  expect(conversation).toEqual(`Let's talk about {conversation}.`)
})
