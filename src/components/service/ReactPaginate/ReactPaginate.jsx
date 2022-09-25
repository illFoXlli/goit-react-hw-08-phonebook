import Pagination from 'tui-pagination';

export const ReactPaginate = () => {
  // const pageMenu = function (total) {
  const container = document.getElementById('6969');
  const options = {
    totalItems: 16, // сколько станиц на листе
    itemsPerPage: 1000, // сколько всего страниц
    visiblePages: 5, // сколько отображать
    page: 1, // текущая сттаница
    centerAlign: true,
  };

  const pagin = new Pagination(container, options);

  return pagin;
  // };
};
