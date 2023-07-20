let viewBtn = document.querySelector('.see_btn');
let hideBtn = document.querySelector('.none_row');
let hideBtnM = document.querySelector('.none_row_m');
let hideVector = document.querySelector('.open_vector')

viewBtn.addEventListener('click', () => {
    hideBtn.classList.toggle('open_btn');
    hideBtnM.classList.toggle('open_btn');
    hideVector.classList.toggle('deg')
})