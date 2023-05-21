export class Dropdown {
    constructor(selector, arr, placeholder, id) {
        this.selector = document.querySelector(selector);
        this.arr = arr;
        this.placeholder = placeholder;
        this.id = id;
    }
    createList() {
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
        return dropdown;
    }
    addEvents(dropdown) {
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
                if (ddText.innerHTML == '') {
                    ddText.innerHTML = this.placeholder;
                }
            });
        });
        dropdown.querySelector('.filter__item').addEventListener('click', (e) => {
            dropdown.classList.toggle('dropdown-list-active');
            if (ddText.innerHTML == '') {
                ddText.innerHTML = this.placeholder;
            }
        });
        document.addEventListener('click', function (event) {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('dropdown-list-active');
            }
            if (ddText.innerHTML == '') {
                ddText.innerHTML = this.placeholder;
            }
        });
        return dropdown
    }
    build() {
        let dropdown = this.addEvents(this.createList());
        this.selector.appendChild(dropdown);
    }
}

export class SingleDropdown extends Dropdown {
    constructor(selector, arr, placeholder, id) {
        super(selector, arr, placeholder, id);
    }
    createList() {
        return super.createList();
    }
    addEvents(dropdown) {
        let ddText = dropdown.querySelector('.dropdown-list__text');
        dropdown.querySelectorAll('.dropdown-list__option').forEach(option => {
            option.addEventListener('click', (e) => {
                if (!e.target.classList.contains('dropdown-list__option-active')) {
                    dropdown.querySelectorAll('.dropdown-list__option').forEach(item => {
                        item.classList.remove('dropdown-list__option-active');
                    });
                    e.target.classList.add('dropdown-list__option-active');
                    ddText.innerHTML = e.target.innerHTML;
                } else {
                    e.target.classList.remove('dropdown-list__option-active');
                    ddText.innerHTML = this.placeholder;
                }
                dropdown.classList.remove('dropdown-list-active');
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
        return dropdown
    }
    build() {
        let dropdown = this.addEvents(this.createList());
        this.selector.appendChild(dropdown);
    }
}

const inputArtist = document.querySelector('#artist');
inputArtist.addEventListener('input', function () {
    let inputText = this.value;
    let inputLength = inputText.length;
    let maxLength = 10;
    let alertToInput = document.querySelector('.alertToInput');
    if (inputLength > maxLength) {
        alertToInput.innerHTML = `Exceeded character limit. Maximum length is ${maxLength} characters.`;
    } else {
        alertToInput.innerHTML = '';
    }
});