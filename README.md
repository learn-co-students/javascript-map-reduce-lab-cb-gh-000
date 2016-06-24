JavaScript Map-Reduce Lab
---

## Objectives

1. Practice using `reduce()` on real data
2. Practice using `map()` on real data
3. Practice using `map()` and `reduce()` together

## Introduction

- We're going to work with data from the GitHub API here — specifically, issues by repository
- So frame the narrative in that way, and give students some insight into how GitHub _really_ looks
- Introduce students to `map()` and `reduce()` on the array prototype :P

## Implementation

- First practice on chunks of the data:
  - Get the sum of an array of integers using `reduce()`
  - Transform data using `map()`
- Then work with the real data
  - Break the problem down so that students can clearly see individual steps
  - But be sure that there's some challenge for the students as well
- I've set up issues.js, and index.html for your use (as well as the test file)
- Students should have to display the data in a table
  - Issue totals
  - Maybe word counts as a stretch goal (using issue.body)

## Resources

- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
