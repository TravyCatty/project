const hideBtn = document.querySelector('.btn-later')
const saleBlock = document.querySelector('.sales')

hideBtn.addEventListener('click', () => {
    saleBlock.classList.add('hide-left')
  
    setTimeout(function(){
        saleBlock.classList = 'none'
    }, 200)
  
  })