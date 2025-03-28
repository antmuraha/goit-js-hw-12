(function () {
  const categories = document.querySelector('#categories');
  const categoryCount = categories?.querySelectorAll('li.item').length;
  console.log(`Number of categories: ${categoryCount}`);
  categories?.childNodes.forEach(item => {
    if (item.nodeName === 'LI') {
      const title = item.querySelector('h2').textContent;
      const countOfItems = item.querySelectorAll('li').length;
      console.log(`Category: ${title}`);
      console.log(`Elements: ${countOfItems}`);
    }
  });
})();
