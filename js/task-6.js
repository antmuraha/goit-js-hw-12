function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

(function () {
  const boxesContainer = document.querySelector('#boxes');
  const input = document.querySelector('#controls>input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');

  createBtn?.addEventListener('click', () => {
    const amount = Number(input.value.trim());

    if (Number.isNaN(amount) || amount < 1 || amount > 100) {
      // alert('Please enter a number between 1 and 100');
      return;
    }
    destroyBoxes();
    createBoxes(amount);
    input.value = '';
  });

  destroyBtn?.addEventListener('click', destroyBoxes);

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function createBoxes(amount) {
    const boxes = [];

    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
    }

    boxesContainer.append(...boxes);
  }
})();
