(function () {
  const categories = document.querySelector('#categories');
  const countOfCategories = categories?.querySelectorAll('h2').length;
  console.log(`Number of categories: ${countOfCategories}`);
  categories?.childNodes.forEach(item => {
    if (item.nodeName === 'LI') {
      const title = item.querySelector('h2').textContent;
      const countOfItems = item.querySelectorAll('ul>li').length;
      console.log(`Category: ${title}`);
      console.log(`Elements: ${countOfItems}`);
    }
  });
})();
