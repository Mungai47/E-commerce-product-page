# Frontend Mentor - E-commerce Product Page Solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Open a lightbox gallery by clicking on the large product image.
- Switch the large product image by clicking on the small thumbnail images.
- Add items to the cart.
- View the cart and remove items from it.

### Screenshot

![Screenshot](./images/Frontend%20Mentor%20_%20E-commerce%20product%20page.png)

### Links

- [Solution URL](https://github.com/Mungai47/E-commerce-product-page)
- [Live Site URL](https://mungai47.github.io/E-commerce-product-page/)

## My Process

### Built With

- HTML5
- CSS3
- JavaScript

### What I Learned

During this project, I learned how to implement interactive features such as incrementing and decrementing item counts. Here's a code snippet from the JavaScript part of the solution that demonstrates this:

```js
const minusButton = document.querySelector('.minus-btn');
const plusButton = document.querySelector('.plus-btn');
const itemCountInput = document.querySelector('.item-count');

minusButton.addEventListener('click', () => {
  const currentValue = parseInt(itemCountInput.value);
  if (currentValue > 0) {
    itemCountInput.value = currentValue - 1;
  }
});

plusButton.addEventListener('click', () => {
  const currentValue = parseInt(itemCountInput.value);
  itemCountInput.value = currentValue + 1;
});
```

### Continued Development

In future projects, I plan to further refine my CSS skills and explore more advanced JavaScript concepts to enhance user interactions and user experience.

### Acknowledgments

I'm grateful for the online resources and tutorials that helped me improve my coding skills and complete this project.

## Author

- GitHub - Joseph Mungai
- Twitter - @josephm08174507
