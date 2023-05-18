import 'normalize.css';
import './styles/main.scss';
import record from './js/list';
import './js/dropdown';
document.querySelector('.header__back').addEventListener('click', ()=>{
    history.back();
});
window.addEventListener("DOMContentLoaded", () => {
    record();
});