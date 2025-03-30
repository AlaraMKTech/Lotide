# Lotide

A mini clone of the  [Lodash](https://lodash.com) library, built to demonstrate my Javascript Skills. 

## Purpose

**_NOTE: This library was created primarily for educational purposes. It is not intended for use in production environments. If you’re looking for production-ready utilities, please consider using Lodash.

This project was built as part of my learning journey at Lighthouse Labs, and it showcases my ability to create modular, reusable functions in JavaScript.

## Installation

To get started, you can easily install Lotide via npm.

`npm install @heidimaria/lotide`

## Usage

Once installed, you can import the library and use its functions in your project.

`const _ = require('@heidimaria/lotide');`

## Example Usage
Here’s a simple example of how to use the tail function from Lotide:

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

Lotide includes a number of useful utility functions. Below is a list of the currently implemented functions:

assertArraysEqual: Compares two arrays and checks if they are equal.

assertEqual: Compares two primitive values and checks if they are equal.

assertObjectsEqual: Compares two objects and checks if they are equal.

countLetters: Counts the number of times each character appears in a string.

countOnly: Counts specific items in an array.

eqArrays: Checks if two arrays are equal.

eqObjects: Checks if two objects are equal.

findKey: Finds the first key in an object that satisfies a condition.

findKeyByValue: Finds a key in an object based on its associated value.

flatten: Flattens a nested array into a single array.

head: Returns the first element of an array.

letterPositions: Returns the positions of each letter in a string.

map: Creates a new array by applying a function to each element in an array.

middle: Returns the middle element(s) of an array.

tail: Returns all elements of an array except for the first one.

takeUntil: Returns a slice of an array, stopping at the first element that satisfies a condition.

without: Returns a new array excluding specified elements.