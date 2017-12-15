
;(function () {

const newsTitle = Array.from(document.getElementsByClassName('js-news-title'))
const content = Array.from(document.getElementsByClassName('js-news-content'))

newsTitle.forEach((node, i) => {
  node.addEventListener('click', () => {
    content[i].style.display = content[i].style.display !== 'none'
        ? 'none'
        : ''
  })
})

})();
