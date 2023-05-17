const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status:${res.status}`);
    }
    return await res.json();
};

function record(){
    const record = document.querySelector('.records');
    record.innerHTML = '';
    getResource('http://localhost:3000/records')
    .then(data => {
        data.forEach(obj =>{
            new MenuBlock(obj, '.records');
        });
    });
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
            let record = `<div class="record">
            <div class="record-desc">
            <div class="record-desc__btnLike"></div>
            <img src="${this.img}" alt="" class="record-desc__img">
            <p class="record-desc__songName">${this.song}</p>
            <p class="record-desc__artist">${this.artist}</p>
            <p class="record-desc__desc">Year:<span class="record-desc__descValue record-desc__year">${this.year}</span></p>
            <p class="record-desc__desc">Style:<span class="record-desc__descValue record-desc__style">${this.style}</span></p>
            <p class="record-desc__desc">Country:<span class="record-desc__descValue record-desc__country">${this.country}</span></p>
        </div>
            <div class="btn record__btn" id="recordID-${this.id}">Add<object class="record__plus" data="images/plus.svg" type="image/svg+xml"></object></div>
        </div>`;
            this.parent.innerHTML = this.parent.innerHTML + record;
        }
    }

}
export default record;