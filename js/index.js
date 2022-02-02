const input = document.querySelector('.how');
const btn = document.querySelector('.btnGen');

btn.addEventListener('click', () => {
    alert('Do you really want to generate ' + input.value + " picture line ?")
    const container = document.querySelector('.container')
    const unsplashURL = 'https://source.unsplash.com/random/'

    const rows = input.value
    const img = document.createElement('img')

    for(let i = 0; i < rows * 3; i++) {
        const img = document.createElement('img')
        img.src = `${unsplashURL}${getRandomSize()}`
        container.appendChild(img)

        const modalContainer = document.querySelector('.modal-container')
        const modalTrigger = document.querySelectorAll('.modal-trigger')
        const closeModal = document.querySelector('.close-modal')
        const imgModal = document.querySelector('.img-modal')
        imgModal.src = img.src
        img.addEventListener('click', () => {
            modalContainer.style.display = 'block';
        })

        closeModal.addEventListener('click', () => {
            modalContainer.style.display = 'none';
        })

}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}
})







