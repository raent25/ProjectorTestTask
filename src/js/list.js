function record() {
    class MenuBlock {
        constructor(arr, parent) {
            this.id = arr.id;
            this.img = arr.img;
            this.song = arr.song;
            this.artist = arr.artist;
            this.year = arr.year;
            this.style = arr.style;
            this.country = arr.country;
            this.parent = document.querySelector(parent);
            this.buildBlock();
        }
        buildBlock() {
            let record = `<div class="record" data-record-id="${this.id}">
            <div class="record-desc">
            <div class="record-desc__btnLike" data-record-id="${this.id}"><img src="images/heartdark.svg" class="heartdark" alt=""><img src="images/heartdarkActive.svg" class="heartdarkActive" alt=""></div>
            <img src="${this.img}" alt="" class="record-desc__img">
            <p class="record-desc__songName">${this.song}</p>
            <p class="record-desc__artist">${this.artist}</p>
            <p class="record-desc__desc">Year:<span class="record-desc__descValue record-desc__year">${this.year}</span></p>
            <p class="record-desc__desc">Style:<span class="record-desc__descValue record-desc__style">${this.style}</span></p>
            <p class="record-desc__desc">Country:<span class="record-desc__descValue record-desc__country">${this.country}</span></p>
        </div>
            <div class="btn record__btn" data-record-id="${this.id}">Add<object class="record__plus" data="images/plus.svg" type="image/svg+xml"></object></div>
            <div class="btn record__btn-cansel" data-record-id="${this.id}">Cansel</div>
        </div>`;
            this.parent.innerHTML = this.parent.innerHTML + record;

            //record-active
        }
    }
    let arrRecords = {
        "records": [{
                "id": 0,
                "img": "images/0.jpg",
                "song": "Wild Dances",
                "artist": "Ruslana",
                "year": 2004,
                "style": "Folk",
                "country": "Ukraine"
            },
            {
                "id": 1,
                "img": "images/1.jpg",
                "song": "Let There Be Rock",
                "artist": "AC/DC",
                "year": 1990,
                "style": "Rock",
                "country": "USA"
            },
            {
                "id": 2,
                "img": "images/2.jpg",
                "song": "Toxicity",
                "artist": "System Of A Down",
                "year": 1997,
                "style": "Rock",
                "country": "USA"
            },
            {
                "id": 3,
                "img": "images/3.jpg",
                "song": "Shakira",
                "artist": "Shakira",
                "year": 2014,
                "style": "Pop",
                "country": "USA"
            },
            {
                "id": 4,
                "img": "images/4.jpg",
                "song": "Yesterday",
                "artist": "The Beatles",
                "year": 1966,
                "style": "Rock",
                "country": "UK"
            },
            {
                "id": 5,
                "img": "images/5.jpg",
                "song": "Sonata No. 1, In G Minor",
                "artist": "Joseph Szigeti, Bach*",
                "year": 1931,
                "style": "Classic",
                "country": "USA"
            },
            {
                "id": 6,
                "img": "images/6.jpg",
                "song": "Deutschland",
                "artist": "Rammstein",
                "year": 2019,
                "style": "Rock",
                "country": "Germany"
            },
            {
                "id": 7,
                "img": "images/7.jpg",
                "song": "The Fame",
                "artist": "Lady Gaga",
                "year": 2008,
                "style": "Pop",
                "country": "UK"
            }, {
                "id": 8,
                "img": "images/8.jpg",
                "song": "My Name Is",
                "artist": "Eminem",
                "year": 1999,
                "style": "Hip Hop",
                "country": "UK"
            }
        ]
    }
    const record = document.querySelector('.records');
    record.innerHTML = '';
    document.querySelector('.records').innerHTML = '';

    let recordsLength = arrRecords.records.length;
    let recordsInOnePage = 6;
    const urlParams = new URLSearchParams(window.location.search);
    let paginationElem = '';
    let paginationwholePart = Math.floor(recordsLength / recordsInOnePage) + 1;
    let paginationRemainder = recordsLength % recordsInOnePage;
    if (paginationwholePart != 0) {
        if (paginationRemainder != 0) {
            paginationwholePart = paginationwholePart + 1;
        }
        for (let i = 1; i < paginationwholePart; i++) {
            paginationElem = paginationElem + `<a class="pagination-number" href='?page=${i}' data-pagination='${i}'>${i}</a>`
        }
        document.querySelector('.pagination').innerHTML = paginationElem;
    }
    let paginationNumber = document.querySelectorAll('.pagination-number');

    if (urlParams.has('page')) {
        let paramValue = urlParams.get('page');
        let recordStart = recordsInOnePage * (paramValue - 1);
        let paginationPage = recordsInOnePage + recordStart;
        arrRecords.records.forEach((obj, i) => {
            if (i >= recordStart && i < paginationPage) {
                new MenuBlock(obj, '.records');
            }
        });
        paginationNumber.forEach(item => {
            item.classList.remove('pagination-active');
            if (item.getAttribute('data-pagination') == paramValue) {
                if (!item.classList.contains('pagination-active')) {
                    item.classList.add('pagination-active');
                }
            }
        })
    } else {
        arrRecords.records.forEach((obj, i) => {
            if (i < recordsInOnePage) {
                new MenuBlock(obj, '.records');
            }
        });
    }
    document.querySelectorAll('.record-desc__btnLike').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('record-active');
        });
    });
}
export default record;