/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `greeting`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})var greeting = "Hello, everybody!";
var specialGuest = "Neil deGrasse Tyson"
var greetSpecialGuest = "hello, " + specialGuest + "!";
var topic = "drinking at home";
var conversation = `Would you like to have a drink, ${specialGuest}!`
