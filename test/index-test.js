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
var greeting = "Hello, everybody!";
var specialGuest = "Neil deGrasse Tyson!";
var specialGuest = "Neil deGrasse Tyson!";
`Hello, ${specialGuest}!`
var specialGuest = "Neil deGrasse Tyson!"
var greetSpecialGuest = "" + specialGuest + "!";
var greeting = "";
var specialGuest = "Neil deGrasse Tyson"
var greetSpecialGuest = "" + specialGuest + "!";
var greeting = "Hello, everybody!";
var greetSpecialGuest = (`Hello, ${specialGuest}!`)
conversation = (`Let's talk about ${topic}!`)
