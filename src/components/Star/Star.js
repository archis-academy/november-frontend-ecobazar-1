// global değişken gradId için gerekli
let counter = 0;

// add star to card start
function addStarToCard(rate) {

    const starArr = [];

    for (let i = 1; i <= 5; ++i) {
        counter++;

        // fractional fill (kısmi doluluk) - yıldızların doluluk oranını hesaplar.
        const percentage = Math.min(Math.max(rate - (i - 1), 0), 1) * 100;

        // yıldızları svg formatında render ediyoruz. linearGradient özelliği doğru çalışması için linearGradient id' si benzersiz olmalı!
        const gradId = `grad${counter}`;

        const star = `<svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stop-color="#FF8A00"/>
                                <stop offset="${percentage}%" stop-color="#FF8A00"/>
                                <stop offset="${percentage}%" stop-color="#fff"/>
                                <stop offset="100%" stop-color="#fff"/>
                            </linearGradient>
                        </defs>
                        <path d="M9.24494 0.255066L11.8641 5.89498L18.0374 6.64316L13.4829 10.877L14.679 16.9793L9.24494 13.9561L3.8109 16.9793L5.00697 10.877L0.452479 6.64316L6.62573 5.89498L9.24494 0.255066Z" fill="url(#${gradId})"/>
                    </svg>`

        starArr.push(star);
    }

    return starArr.join("");
}

export { addStarToCard }