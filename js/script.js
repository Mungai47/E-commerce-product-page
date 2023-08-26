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
