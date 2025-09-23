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