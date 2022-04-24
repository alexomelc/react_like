import { fetchOrders } from './api';
import './app.css';

export function render() {
  const app = document.createElement('div');
  app.style.display = 'flex';
  app.style.flexDirection = 'column';
  app.className = 'app';

  const header = document.createElement('div');
  header.className = 'header';
  app.appendChild(header);

  const headingWrapper = document.createElement('div');
  headingWrapper.style.display = 'flex';
  header.appendChild(headingWrapper);

  const heading = document.createElement('div');
  heading.className = 'title';
  heading.dataset.testid = 'title';
  heading.textContent = 'Glorders';
  headingWrapper.appendChild(heading);

  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.src = './assets/logo.svg';
  headingWrapper.appendChild(logo);

  const reloadButton = document.createElement('div');
  reloadButton.textContent = 'Reload';
  reloadButton.className = 'reload-button';
  reloadButton.addEventListener('click', () => {
    // main.appendChild(loading);
    renderList();
  });
  header.appendChild(reloadButton);

  const main = document.createElement('div');
  main.className = 'main';
  app.appendChild(main);


  const renderList = () => {

      const loading = document.createElement('div');
      loading.className = 'loading';
      loading.textContent = 'Loading...';
      main.appendChild(loading);
      main.querySelectorAll('.list-item').forEach((item) => item.remove());
      fetchOrders().then((orders) => {
      main.removeChild(loading);

      orders.forEach((order) => {
        const listItem = document.createElement('div');
        listItem.style.backgroundColor = '#fafafa';
        listItem.className = 'list-item';
        main.appendChild(listItem);

        const itemTitleWrapper = document.createElement('div');
        listItem.appendChild(itemTitleWrapper);

        const title = document.createElement('div');
        title.className = 'list-item-title';
        title.textContent = order.name;
        itemTitleWrapper.appendChild(title);

        const place = document.createElement('div');
        place.className = 'list-item-place';
        place.textContent = order.city;
        itemTitleWrapper.appendChild(place);

        const price = document.createElement('div');
        price.className = 'list-item-price';
        price.textContent = `${order.price}€`;
        listItem.appendChild(price);
      });
    });



  }

  renderList();

  return app;
}
