# Frontend Mentor - REST Countries API with color theme switcher

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Notes](#notes)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

The challenge was to integrate with the [REST Countries API](https://restcountries.eu) to pull country data and display it like in the designs.

You could use any JavaScript framework/library on the front-end such as [React](https://reactjs.org) or [Vue](https://vuejs.org). 

Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshots

Dark Mode:

<img src="https://user-images.githubusercontent.com/71760740/119536569-22f75f00-bd81-11eb-8654-b6b6695ce6bd.png" width="500px"/>

Light Mode:

<img src="https://user-images.githubusercontent.com/71760740/119536705-49b59580-bd81-11eb-8042-d141f95b8b21.png" width="500px"/>

Show page:

<img src="https://user-images.githubusercontent.com/71760740/119536823-6356dd00-bd81-11eb-8348-c80f16bc15ac.png" width="500px"/>

Responsive:


<img src="https://user-images.githubusercontent.com/71760740/119536787-5cc86580-bd81-11eb-9656-98cf7c0fbcfb.png" width="300px" />

### My Process

## Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [REST Countries API](https://restcountries.eu/)
- FontAwesome
- Google Fonts

## Notes

- I practised using asynchronous fetch requests (instead of axios), with useState and UseEffect hooks to fetch data on each country.
- I also used Link, useParams, Router and Route from react-router-dom for the first time
- I used a toggled class 'light-theme' for the light/dark mode features. This is toggled when the user clicks the moon in the top right corner
- The search bar enables the user to search for countries
- I still need to implement the filter feature
- The user can also remove a country by clicking the 'remove country' button. This deletes the numericCode which is used as a key on each of the articles

### Continued Development

- I am excited to integrate this with a Rails application I have been building to plan post-covid holidays. I already have the Rails scaffolding, and will use my new understanding of React to build the components
- I want to explore the possibilities offered by light/dark mode a little further, perhaps on my portfolio website
- I am going to read up about react-router-dom and implement it on my next React project
- I also want to create custom hooks for my next React project

### Useful Resources

- [This YouTube tutorial was incredible helpful] (https://www.youtube.com/watch?v=vwZtmHSa9OY&t=677s)

## Author

- Website - [Eliza Plowden Portfolio](https://www.notion.so/Eliza-Plowden-Portfolio-a02d17c5c5384dfdb9f9441b67119010)
- LinkedIn - [Eliza Plowden] (https://www.linkedin.com/in/eliza-plowden)
- Twitter - [@elizacodes](https://www.twitter.com/elizacodes)

