const modalMenu = document.querySelector('.modal-menu'),
    burgerIcon = document.querySelector('.header__burger-menu'),
    body = document.body,
    burgerMenuItems = document.querySelectorAll('.modal-menu__item'),
    radioOptions = document.querySelectorAll('.offers__radio-option'),
    optionBoxes = document.querySelectorAll('.offers__box'),
    refreshButtons = document.querySelectorAll('.box__btn-refresh');

burgerIcon.addEventListener('click', showBurgerMenu);

document.addEventListener('DOMContentLoaded', function () {
    let anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            showBurgerMenu();
            setTimeout(function () {
                window.location.href = anchor.getAttribute('href');
            }, 500);
        });
    });
});

radioOptions.forEach((option) => {
    option.addEventListener('click', showLabelOption);
});

refreshButtons.forEach((refreshBtn) => {
    refreshBtn.addEventListener('click', () => {
        refreshBtn.firstElementChild.classList.add('rotate-icon');
        refreshBtn.firstElementChild.style.transform = 'rotate(720deg)';

        setTimeout(function () {
            refreshBtn.firstElementChild.classList.remove('rotate-icon');
            refreshBtn.firstElementChild.style.transform = 'rotate(0deg)';
            const block = refreshBtn.closest('.offers__box');
            const blockItems = block.querySelectorAll('.offers__item');
            blockItems.forEach((blockItem) => {
                if (blockItem.classList.contains('coffee-option--hidden')) {
                    blockItem.classList.toggle('coffee-option--hidden');
                    refreshBtn.classList.add('coffee-option--hidden');
                }
            });
        }, 1000);
    });
});


function showBurgerMenu() {
    modalMenu.classList.toggle('modal-menu--hidden');
    burgerIcon.classList.toggle('active');
    body.classList.toggle('body--static');
}

function showLabelOption() {
    let assnRadioId = this.getAttribute('for');
    let assnRadio = document.querySelector(`#${assnRadioId}`);
    let assnOptionBox = `${assnRadio.value}-box`;

    optionBoxes.forEach((box) => {
        if (box.id === assnOptionBox) {
            box.classList.remove('el--hidden');
        }
        else {
            box.classList.add('el--hidden');
        }

        radioOptions.forEach((option) => {
            if (option.getAttribute('for') === assnRadioId) {
                this.classList.add('item__btn--choose');
            }
            else {
                option.classList.remove('item__btn--choose');
            }
        });
    });
};


