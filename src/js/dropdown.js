class Dropdown {
    constructor(selector, arr, placeholder, id) {
        this.selector = document.querySelector(selector);
        this.arr = arr;
        this.placeholder = placeholder;
        this.id = id;
        this.build();
    }
    build() {
        let dropdown = document.createElement('div');
        dropdown.classList.add('dropdown-list');
        dropdown.id = this.id;
        dropdown.innerHTML = `<div class="filter__item dropdown-list__active">
        <div class="dropdown-list__text" data-value>${this.placeholder}</div>
        <div class="dropdown-list__arrow"><img src="images/arrow.svg" alt="" class="dropdown-list__svg"></div>
    </div>`
        let options = document.createElement('div');
        options.classList.add('dropdown-list__options');
        this.arr.forEach(element => {
            let option = `<div class="dropdown-list__option" data-option="${element}">${element}</div>`;
            options.innerHTML = options.innerHTML + option;
        });
        dropdown.appendChild(options);
        let ddText = dropdown.querySelector('.dropdown-list__text');
        dropdown.querySelectorAll('.dropdown-list__option').forEach(option => {
            option.addEventListener('click', (e) => {
                if (ddText.innerHTML == this.placeholder) {
                    ddText.innerHTML = '';
                }
                if (!e.target.classList.contains('dropdown-list__option-active')) {
                    ddText.innerHTML = ddText.innerHTML + e.target.innerHTML + ' ';
                    e.target.classList.add('dropdown-list__option-active');
                } else {
                    ddText.innerHTML = ddText.innerHTML.replace(new RegExp(`${e.target.innerHTML} `, 'g'), '');
                    e.target.classList.remove('dropdown-list__option-active');
                }
            });
        });
        dropdown.querySelector('.filter__item').addEventListener('click', (e) => {
            dropdown.classList.toggle('dropdown-list-active');
        });
        document.addEventListener('click', function (event) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('dropdown-list-active');
            }
        });
        this.selector.appendChild(dropdown);
    }
}
let btnFilter = document.createElement('div');
btnFilter.id = 'filter-btn';
btnFilter.classList.add('btn');
btnFilter.innerHTML = 'Search';
const arrGenre = ['Rock', 'Rap', 'Pop', 'Classic'];
const arrDecade = ['1950-60 рр.', '1960-70 рр.', '1970-80 рр.', '1980-90 рр.', '1990-00 рр.', '2000-10 рр.', '2010-20 рр.', '2020-30 рр.'];
const arrCountry = ['Ukraine', 'UK', 'USA'];
const genre = new Dropdown('.filter', arrGenre, 'Genre', 'ganre');
const decade = new Dropdown('.filter', arrDecade, 'Decade', 'decade');
const country = new Dropdown('.filter', arrCountry, 'Country', 'country');
document.querySelector('.filter').append(btnFilter);