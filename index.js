// intercambio de valores para la galería de imágenes //

const mainOne = document.getElementById("mainOne");
const mainTwo = document.getElementById("mainTwo");
const mainThree = document.getElementById("mainThree");
const mainOneDetails = document.querySelectorAll(".mainOneDetails");
const mainTwoDetails = document.querySelectorAll(".mainTwoDetails");
const mainThreeDetails = document.querySelectorAll(".mainThreeDetails");

mainOneDetails.forEach(detail => {
    detail.addEventListener("click", function () {
        [mainOne.src, detail.src] = [detail.src, mainOne.src]
    })
})
mainTwoDetails.forEach(detail => {
    detail.addEventListener("click", function () {
        [mainTwo.src, detail.src] = [detail.src, mainTwo.src]
    })
})
mainThreeDetails.forEach(detail => {
    detail.addEventListener("click", function () {
        [mainThree.src, detail.src] = [detail.src, mainThree.src]
    })
})

// cuadros como objetos para calcular sobre sus valores //

class worksForSale {
    constructor(title, award, measures, weight, price, get) {
        this.title = title;
        this.award = award;
        this.measures = measures;
        this.weight = weight;
        this.price = price;
        this.get = get;
    }
}

const silent = new worksForSale("Silent", true, "30x40", 1, 100, document.getElementById("Silent"));
const fathom = new worksForSale("Fathom", false, "30x40", 1, 100, document.getElementById("Fathom"));
const drift = new worksForSale("Drift", false, "30x40", 1, 100, document.getElementById("Drift"));
const ember = new worksForSale("Ember", false, "80x100", 2.5, 250, document.getElementById("Ember"));
const veil = new worksForSale("Veil", true, "100x100", 4, 350, document.getElementById("Veil"));

const worksArray = [silent, fathom, drift, ember, veil];

worksArray.forEach(work => {
    work.get.addEventListener("click", function () {
        function estimate() {
            let estimatedValue;
            if (work.weight <= 1) {
                estimatedValue = work.price + ((work.price * 10) / 100);
            } else {
                estimatedValue = work.price + ((work.price * 30) / 100);
            };
            if (work.award) {
                estimatedValue = estimatedValue + 50;
            }
            return estimatedValue;
        }
        console.log(`"${work.title}" is valued at US$ ${estimate()}.`);
        alert(`"${work.title}" is valued at US$ ${estimate()}.`);
    })
})