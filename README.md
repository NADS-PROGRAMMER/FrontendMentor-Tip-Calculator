# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](https://github.com/NADS-PROGRAMMER/FrontendMentor-Tip-Calculator/blob/master/public/Tip%20Calculator.png)

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/tip-calculator-with-reactjs-and-tailwind-css-Y4v7kAUDD)
- Live Site URL: [Live Site](https://adriandev-tip-calculator.netlify.app/)

## My process

Since I am using React, I am able to organize components to it. First, I created the Textfields such as the input field for the Bill and the Number Of People. After that, as you can notice, in the TIP PERCENT section there's a repeated button. So I made that as a component as well. and lastly the Reset button.

For the TipCalculator which is the container of all the components, I used the flex layout to it and set it to column, and for the larger screen size I set it to flex as well but it is in row direction.

For the select tip % section, you will notice that in mobile view, it is in grid layout with two columns and for the larger screen size, it is in three columns.

### Built with

- Semantic HTML5 markup
- TailwindCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learn how to organize components in React. I also know how to customize the tailwind.config file. As doing projects before, I always learn how to make it responsive and to make sure that the elements are properly aligned in respective screen sizes.

### Continued development

I am planning to refactor some of my components and putting some comments to it.

### Useful resources

- [Tailwind Documentation](https://tailwindcss.com/docs/guides/create-react-app) - This help to me to setup the TailwindCSS to a CRA project.

## Author

- Website - [Adrian Nads Marcelo](https://marcelo-portfolio.netlify.app/)
- Frontend Mentor - [@NADS-PROGRAMMER](https://www.frontendmentor.io/profile/NADS-PROGRAMMER)
- Twitter - [@NadsMarcelo](https://twitter.com/NadsMarcelo)

If you have questions you can DM me at Twitter.
