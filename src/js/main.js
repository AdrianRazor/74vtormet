let listItem = document.querySelectorAll('.table__item');
let tabBlock = document.querySelectorAll('.table__tab');
let nav = document.querySelector('.table__nav');
let arrow = document.querySelector('.table__arrow');

listItem.forEach(function (item) {
    item.addEventListener ('click', function () {
        for (let i = 0; i < listItem.length; i++) {
            listItem[i].classList.remove('table__item--active');
            listItem[i].classList.toggle('table__item--show');
            tabBlock[i].classList.remove('table__tab--active');
        };
        item.classList.add('table__item--active');
        arrow.classList.toggle('table__arrow--up');

        for (let j = 0; j < listItem.length; j++) {
            if (listItem[j].classList.contains('table__item--active')) {
                tabBlock[j].classList.add('table__tab--active');
            }
        };
    });
});