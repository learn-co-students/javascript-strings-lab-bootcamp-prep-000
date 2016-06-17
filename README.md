JavaScript Strings Lab
---

Welcome to another JavaScript lab!

![lab](http://i.giphy.com/NETCsDYm0fL44.gif)

## Objectives

1. Manipulate strings by hand in JavaScript
2. Practice interpolating with template literals

## Introduction

In this lab, we're going to work with strings. Remember, strings in JavaScript are wrapped in single or double quotes, or in back ticks.

When we wrap strings in single or double quotes, we can join them together using the `+` operator:

``` javascript
"Hello, " + "world!" // "Hello, world!"
```

This is called _concatenation_.

Similarly, when we wrap strings in back ticks, we can use placeholders (`${}`) and insert variables or evaluated JavaScript directly:

``` javascript
var thing = 'world'

`Hello, ${thing}! High ${3 + 2}!` // "Hello, world! High 5!"
```

This is called _interpolation_.

## Lab

You'll find a file called `strings.js` in this directory. Your mission, should you choose to accept it, is to get its tests (in `tests/strings-test.js`) to pass.

You can run the tests using the `learn` command in your terminal or the Learn IDE. Give that a go now.

![waiting](http://i.giphy.com/9c830567WqLCw.gif)

All three tests have failed! This is okay, and it's expected — you haven't written any code yet, after all.

In `strings.js`, you'll see four lines of code:

``` javascript
var myString = "";

var concatenatedString = "" + "";

var animal = 'cat';

var interpolatedString = `${animal}`;
```

Each line has a test associated with it. When the tests fail, they show us what the _expected_ value is — your job is to make that expectation a reality by modifying the code provided.

When you first run `learn`, you should see something like this:

![test fail](https://curriculum-content.s3.amazonaws.com/skills-based-js/javascript-strings-lab/javascript-strings-lab-test.png)

Let's walk through that first error together. First, we see the test title:

``` bash
1) strings defines `myString`:
```

The title tells us what the test expects our code to do. In this case, "strings" refers to the file that we've been working in, `strings.js` — it's common to refer to name files by what they contain, and makes reasoning about their names super easy.

Continuing on with the test output, we can now make better sense of the next few lines:

``` bash
AssertionError: '' == 'Hello, world!'
+ expected - actual

+Hello, world!
```

This is a lot to take in, so we'll go through it slowly.

What could `AssertionError` mean? Well, it probably means that our test _asserted_ (or expected) that something would be true, and that that thing wasn't true.

What is that thing? The test expected the empty string, `''`, to be equal to (remember `==`?) the string `'Hello, world!'` — but, of course, these strings are not equal.

`+ expected - actual` is a key for reading the statements below it. `+ expected` tells us that the expected output shows up in that yellowish green; `- actual` tells us what actually happened.

But reading on, we only see `+Hello, world!` — what's going on? Why isn't there any `- actual` output? Well, there _was_ no actual output — it's just an empty string! That must be the problem!

Next, the title tells us that `strings.js` "defines `myString`." Let's look in `strings.js` — sure enough, we see, at the top of the file, `myString = "";`. Seems like a reasonable place to start.

What if, instead of assigning `""` to `myString`, we assign `"Hello, world!"`, like the test expects. Go ahead and change that line in `strings.js` so it reads

``` javascript
myString = "Hello, world!";
```

and rerun your tests. You should see

![first test passes!](https://curriculum-content.s3.amazonaws.com/skills-based-js/javascript-strings-lab/javascript-strings-lab-test-pass.png)

Nice! You got the first test to pass.

Now use the skills that you learned above to read through the rest of the test output and fix those errors, too!

**NOTE**: Because we're dealing with some low-level language features, you might spot some easy ways to "cheat" on this lab, or this lab might seem frustratingly easy. We've given you some starter code to point you in the right direction — try to solve the lab as intended! You can then compare your solution with ours (found in the `solution` branch of this repository).

When your tests are passing, submit your answer with `learn submit` or else create a pull request (use Learn submit if "pull request" sounds a bit terrifying).

Good luck!
