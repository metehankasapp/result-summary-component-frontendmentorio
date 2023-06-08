const data = [{
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg",
        "id": "first"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg",
        "id": "second"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg",
        "id": "third"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg",
        "id": "fourth"
    }
]




var htmlCreated = '';
var scorePoint = 0;

data.forEach((item) => {
    scorePoint += item.score;
    htmlCreated += `<div class="card-item ${item.id}">
                        <div class="card-item-content">
                            <div class="card-item-img">
                                <img src="${item.icon}" alt="">
                            </div>
                            <span class="card-item-title">
                                ${item.category}
                            </span>
                            </div>
                            <div class="card-item-score">
                            ${item.score} <span>/ 100</span>
                        </div>
                    </div>`
})

console.log(htmlCreated);

document.querySelector('.card-items').innerHTML = htmlCreated;
document.querySelector('.result h1').innerHTML = Number(scorePoint / data.length).toFixed(0);