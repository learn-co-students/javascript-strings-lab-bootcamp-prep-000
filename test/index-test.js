/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
var greeting = "Hello, everybody!"
var greetSpecialGuest = "Neil deGrasse Tyson"
var greetSpecialGuest = "Neil deGrasee Tyson!"
var greetSpecialGuest = 'Hello, Neil deGrasse Tyson!'
var conversation = 'Let\'s talk about space.'
