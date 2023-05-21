function memory() {
    let records = document.querySelectorAll('.record');
    let recordsArr = JSON.parse(localStorage.getItem('data-record-id')) ? JSON.parse(localStorage.getItem('data-record-id')) : [];
    records.forEach(record => {
        let recordId = record.getAttribute('data-record-id');
        recordsArr.forEach(id => {
            if (recordId == id) {
                record.classList.add('record-active');
                record.querySelector('.record__btn').style.display = 'none';
                record.querySelector('.record__btn-cansel').style.display = 'flex';
            }
        })
    });
    records.forEach(record => {
        record.querySelector('.record__btn').addEventListener('click', (e) => {
            record.classList.add('record-active');
            record.querySelector('.record__btn').style.display = 'none';
            record.querySelector('.record__btn-cansel').style.display = 'flex';
            recordsArr.push(e.target.getAttribute('data-record-id'));
            localStorage.setItem('data-record-id', JSON.stringify(recordsArr));
        });
        record.querySelector('.record__btn-cansel').addEventListener('click', (e) => {
            record.classList.remove('record-active');
            record.querySelector('.record__btn').style.display = 'flex';
            record.querySelector('.record__btn-cansel').style.display = 'none';
            let i = recordsArr.indexOf(e.target.getAttribute('data-record-id'));
            recordsArr = recordsArr.slice(0, i).concat(recordsArr.slice(i + 1));
            localStorage.setItem('data-record-id', JSON.stringify(recordsArr));
        });
    })
}
export default memory;