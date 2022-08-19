  const items = document.querySelectorAll('.display-none-items');
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const animate = async (items) => {
    for (const item of items) {
      await delay(500);
      item.style.display = 'block';
    }
  };

  animate(items);