import 'normalize.css';
import './styles/main.scss';
import record from './js/list';
import {
    Dropdown,
    SingleDropdown
} from './js/dropdown';
import memory from './js/memory';
document.querySelector('.header__back').addEventListener('click', () => {
    history.back();
});
window.addEventListener("DOMContentLoaded", () => {
    //Search
    let btnFilter = document.createElement('div');
    btnFilter.id = 'filter-btn';
    btnFilter.classList.add('btn');
    btnFilter.innerHTML = 'Search';
    const arrGenre = ['Rock', 'Hip Hop', 'Pop', 'Classic', 'Folk'];
    const arrDecade = ['1950-60 рр.', '1960-70 рр.', '1970-80 рр.', '1980-90 рр.', '1990-00 рр.', '2000-10 рр.', '2010-20 рр.', '2020-30 рр.'];
    const arrCountry = ['Ukraine', 'UK', 'USA', 'Germany'];
    const genre = new Dropdown('.filter', arrGenre, 'Genre', 'ganre').build();
    const decade = new SingleDropdown('.filter', arrDecade, 'Decade', 'decade').build();
    const country = new SingleDropdown('.filter', arrCountry, 'Country', 'country').build();
    document.querySelector('.filter').append(btnFilter);
    //Records
    record();
    memory();
});