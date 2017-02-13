/*global concatenatedString, describe, interpolatedString, it, myString */

it('strings defines `greeting`', function() {
  AssertionError: '' == 'Hello, everybody!'
+ expected - actual
+Hello, everybody!

var greeting = "Hello, everybody!";
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in `greetSpecialGuest`', function() {
  expect(greetSpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
