# Retail Clone Project

By: Anthony and Kevin

## Overview

This a paired programming project using a MERN (MongoDB, Express.js, React.js, and Node.js) stack as well as Material-UI for building the UI.

The idea is to create a clone of a generic online retail website with various features:

- Login system (admin/customer)
- Inventory tracker
- etc.

## Front-end Process

- 4/26/2019:

  - Created the concept for the project and split the initial front-end and back-end set-up.

- 4/27/2019:

  - Used `create-react-app` for the starting boilerplate.
  - Removed some of the generic boilerplate files (such as the `logo.svg`)
  - Added `/actions` and `/reducers` folders for future Redux uses
  - Added `/components` folder to store future components
  - Added `@material-ui/core` and `@material-ui/icons` packages to build UI
    _Note: I chose the SVG icons for better performance as recommended by the official documentation_
  - Added the `Roboto` CDN from Google fonts into the `index.html` file
  - Added `/components/navbar` and started to build initial navigation bar

- 4/28/2019

  - Built a basic navigation bar in regular HTML, which will later be converted into Material-UI components
  - Added `/component/banner` and created a basic banner image placeholder and lorem ipsum description text
  - Added `/component/main-container` to hold the main content
  - Added `/component/card` and to hold various reusable cards to use throughout the website

- 4/29/2019

  - Added `/card/product` and `/card/offer` for generic products and offers that a retailer might have
  - Added `/component/footer` with basic information

- 4/30/2019

  - Added `/card/popular-items` for a list of popular items
  - First version of the front page completed (DESKTOP)
    - Used basic HTML and CSS (flexbox) to create a desktop layout
    - Still need to write breakpoints for mobile
