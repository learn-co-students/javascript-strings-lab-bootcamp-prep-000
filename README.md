# JavaScript Strings Lab

Welcome to another JavaScript lab!

![lab](http://i.giphy.com/NETCsDYm0fL44.gif)

## Objectives

In this lab, we're going to work with strings. Remember, strings in JavaScript are wrapped in single or double quotes, or in back ticks.

By the end of this lab, you'll have learned how to do the following:

1. Manipulate strings by hand in JavaScript
2. Practice interpolating with template literals

## Introduction

Imagine we're planning a birthday party for Bill Nye. There are going to be a lot of people there, so we're going to use JavaScript to help us keep everything straight.

First, we need to practice greeting everyone. (I don't know about you, but I sometimes get nervous and say the dumbest things — but we don't want to embarrass ourselves in front of Bill Nye!)

One might think that we could just type

``` javascript
Hello, everybody!
```

in our browser's console and be done with it. Give it a try.

You should see something like

``` shell
Uncaught ReferenceError: Hello is not defined(…)
```

Well, that won't work. (This is why we practice!) In order to greet our guests, we need to tell JavaScript that we're using a **string**. A string is a collection of characters (letters, numbers, and symbols) wrapped in single or double quotes (or, as we'll see, in back ticks). So to greet everyone, we can write,

``` javascript
'Hello, everybody!'
```

or

``` javascript
"Hello, everybody!"
```

They're the same in this case.

What if we want to say hi to a special guest, like Neil deGrasse Tyson? When we wrap strings in single or double quotes, we can join them together using the `+` operator:

``` javascript
var specialGuest = "Neil deGrasse Tyson"
"Hello, " + specialGuest + "!" // "Hello, Neil deGrasse Tyson!"
```

This is called _concatenation_. Notice that `specialGuest` is _also_ a string!

**TOP TIP**: Your console might be getting a little full at this point. If at any point you'd like to clear it out and start fresh, you can either click the button in the top left corner of the console — in Chrome, it looks like this:

![clear console](https://curriculum-content.s3.amazonaws.com/skills-based-js/clear_console.png)

Alternatively, you can press `ctrl + L` or `command + K`. As long as you don't refresh the page, anything you've declared will stick around for you to reference — you'll just get a nice blank slate on which to code.

When we wrap strings in back ticks, we can use placeholders (`${}`) and insert variables or evaluated JavaScript directly:

``` javascript
var specialGuest = "Neil deGrasse Tyson"

`Hello, ${specialGuest}! High ${3 + 2}!` // "Hello, Neil deGrasse Tyson! High 5!"
```

This is called _interpolation_.

## Lab

You'll find a file called `strings.js` in this directory. Your mission, should you choose to accept it, is to get its tests (in `tests/strings-test.js`) to pass.

You can run the tests using the `learn` command in your terminal or the Learn IDE. Give that a go now.

![waiting](http://i.giphy.com/9c830567WqLCw.gif)

All three tests have failed! This is okay, and it's expected — you haven't written any code yet, after all.

In `strings.js`, you'll see four lines of code:

``` javascript
var greeting = "!";

var specialGuest = "Neil deGrasse Tyson"

var greetSpecialGuest = "" + specialGuest + "!";

var topic = "space";

var conversation = `${topic}`;
```

Each line has a test associated with it. When the tests fail, they show us what the _expected_ value is — your job is to make that expectation a reality by modifying the code provided.

When you first run `learn`, you should see something like this:

![test fail](https://curriculum-content.s3.amazonaws.com/skills-based-js/javascript-strings-lab/javascript-strings-lab-test.png)

Let's walk through that first error together. First, we see the test title:

``` bash
1) strings defines `greeting`:
```

The title tells us what the test expects our code to do. In this case, "strings" refers to the file that we've been working in, `strings.js` — it's common to refer to name files by what they contain, and makes reasoning about their names super easy.

Continuing on with the test output, we can now make better sense of the next few lines:

``` bash
AssertionError: '' == 'Hello, everybody!'
+ expected - actual

+Hello, everybody!
```

This is a lot to take in, so we'll go through it slowly.

What could `AssertionError` mean? Well, it probably means that our test _asserted_ (or expected) that something would be true, and that that thing wasn't true.

What is that thing? The test expected the empty string, `''`, to be equal to the string `'Hello, everybody!'` — but, of course, these strings are not equal.

`+ expected - actual` is a key for reading the statements below it. `+ expected` tells us that the expected output shows up in that yellowish green; `- actual` tells us what actually happened.

But reading on, we only see `+Hello, everybody!` — what's going on? Why isn't there any `- actual` output? Well, there _was_ no actual output — it's just an empty string! That must be the problem!

Next, the title tells us that `strings.js` "defines `greeting`." Let's look in `strings.js` — sure enough, we see, at the top of the file, `var greeting = "";`. Seems like a reasonable place to start.

What if, instead of assigning `""` to `greeting`, we assign `"Hello, everybody!"`, like the test expects. Go ahead and change that line in `strings.js` so it reads

``` javascript
var greeting = "Hello, everybody!";
```

and rerun your tests. You should see

![first test passes!](https://curriculum-content.s3.amazonaws.com/skills-based-js/javascript-strings-lab/javascript-strings-lab-test-pass.png)

Nice! You got the first test to pass.

Now use the skills that you learned above to read through the rest of the test output and fix those errors, too!

**NOTE**: Because we're dealing with some low-level language features, you might spot some easy ways to "cheat" on this lab, or this lab might seem frustratingly easy. We've given you some starter code to point you in the right direction — try to solve the lab as intended! You can then compare your solution with ours (found in the `solution` branch of this repository).

When your tests are passing, submit your answer with `learn submit` or else create a pull request (use Learn submit if "pull request" sounds a bit terrifying).

Good luck!

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-strings-lab'>JavaScript Strings Lab</a> on Learn.co and start learning to code for free.</p>
