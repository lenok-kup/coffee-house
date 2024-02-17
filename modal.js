const productBlocks = document.querySelectorAll('.offers__item'),
  modalBackground = document.querySelector('.modal__background'),
  modalContainer = document.querySelector('.modal__container'),
  closeBtn = document.querySelector('.modal-block__btn');


let modalImg = document.querySelector('.modal__img'),
  modalTitle = document.querySelector('.modal__title'),
  modalSubtitle = document.querySelector('.modal__subtitle'),
  modalPrice = document.querySelector('.block__price'),
  addInputs = document.querySelectorAll('.list__inp'),
  addLabels = document.querySelectorAll('.addition-list__option'),
  sizeLabels = document.querySelectorAll('.size-list__option'),
  sizeInputs = document.querySelectorAll('.size-list__inp'),
  chosenProduct,
  selectedSize = 0.00,
  addPrice,
  price;


let array = `[
    {
      "name": "Irish coffee",
      "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      "price": "7.00",
      "image": "coffee-1.png",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Kahlua coffee",
      "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      "price": "7.00",
      "image": "coffee-2.png",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Honey raf",
      "description": "Espresso with frothed milk, cream and aromatic honey",
      "price": "5.50",
      "image": "coffee-3.png",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Ice cappuccino",
      "description": "Cappuccino with soft thick foam in summer version with ice",
      "price": "5.00",
      "image": "coffee-4.png",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Espresso",
      "description": "Classic black coffee",
      "price": "4.50",
      "image": "coffee-5.png",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Latte",
      "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
      "price": "5.50",
      "image": "coffee-6.png",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Latte macchiato",
      "description": "Espresso with frothed milk and chocolate",
      "price": "5.50",
      "image": "coffee-7.png",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Coffee with cognac",
      "description": "Fragrant black coffee with cognac and whipped cream",
      "price": "6.50",
      "image": "coffee-8.png",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Cinnamon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Moroccan",
      "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      "price": "4.50",
      "image": "tea-1.png",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Ginger",
      "description": "Original black tea with fresh ginger, lemon and honey",
      "price": "5.00",
      "image": "tea-2.png",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Cranberry",
      "description": "Invigorating black tea with cranberry and honey",
      "price": "5.00",
      "image": "tea-3.png",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Sea buckthorn",
      "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      "price": "5.50",
      "image": "tea-4.png",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "add-price": "0.00"
        },
        "m": {
          "size": "300 ml",
          "add-price": "0.50"
        },
        "l": {
          "size": "400 ml",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "add-price": "0.50"
        },
        {
          "name": "Lemon",
          "add-price": "0.50"
        },
        {
          "name": "Syrup",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Marble cheesecake",
      "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      "price": "3.50",
      "image": "dessert-1.png",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Red velvet",
      "description": "Layer cake with cream cheese frosting",
      "price": "4.00",
      "image": "dessert-2.png",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Cheesecakes",
      "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      "price": "4.50",
      "image": "dessert-3.png",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Creme brulee",
      "description": "Delicate creamy dessert in a caramel basket with wild berries",
      "price": "4.00",
      "image": "dessert-4.png",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Pancakes",
      "description": "Tender pancakes with strawberry jam and fresh strawberries",
      "price": "4.50",
      "image": "dessert-5.png",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Honey cake",
      "description": "Classic honey cake with delicate custard",
      "price": "4.50",
      "image": "dessert-6.png",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Chocolate cake",
      "description": "Cake with hot chocolate filling and nuts with dried apricots",
      "price": "5.50",
      "image": "dessert-7.png",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    },
  
    {
      "name": "Black forest",
      "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      "price": "6.50",
      "image": "dessert-8.png",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "add-price": "0.00"
        },
        "m": {
          "size": "100 g",
          "add-price": "0.50"
        },
        "l": {
          "size": "200 g",
          "add-price": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "add-price": "0.50"
        },
        {
          "name": "Nuts",
          "add-price": "0.50"
        },
        {
          "name": "Jam",
          "add-price": "0.50"
        }
      ]
    }
]`;

let products = JSON.parse(array);

productBlocks.forEach((block, index) => {
  let productObj = products[index];
  let productNames = document.querySelectorAll('.item-content__name');
  let productPrices = document.querySelectorAll('.item-content__price');
  let productDescriptions = document.querySelectorAll('.item-content__description');
  productNames[index].innerHTML = productObj.name;
  productPrices[index].innerHTML = `$${productObj.price}`;
  productDescriptions[index].innerHTML = productObj.description;

  block.addEventListener('click', function () {
    chosenProduct = products[index];
    price = chosenProduct.price;
    addPrice = chosenProduct.additives[0]['add-price'];

    showModal();
    displayProductInfo();
  });
});

function showModal() {
  modalBackground.classList.toggle('modal--visible');
  body.classList.toggle('body--static');
}

closeBtn.addEventListener('click', closeModal);
modalBackground.addEventListener('click', closeModal);

function closeModal(e) {
  if ((e.target == modalBackground || e.target == closeBtn) && modalBackground.classList.contains('modal--visible')) {
    modalBackground.classList.toggle('modal--visible');
    body.classList.toggle('body--static');
    resetData(sizeLabels);
    resetData(addLabels);
    resetData(addInputs);
    resetData(sizeInputs);
  }
  else {
    return;
  }
}

function displayProductInfo() {
  sizeInputs.forEach((inp) => {
    if (inp.checked && inp.id === 's') {
      inp.nextElementSibling.classList.add('option--choose');
    }
  })

  modalImg.src = chosenProduct.image;
  modalTitle.textContent = chosenProduct.name;
  modalSubtitle.textContent = chosenProduct.description;
  modalPrice.textContent = `$${price}`;

  for (let i = 0; i < addLabels.length; i++) {
    addLabels[i].innerHTML = `<span class='addition-list__icon'>` + (i + 1) + `</span>` + chosenProduct.additives[i].name;

    let sizeLabel = sizeLabels[i];
    let cupSize = sizeLabel.getAttribute('for');

    sizeLabel.innerHTML = `<span class='size-list__icon'>` + cupSize + `</span>` + chosenProduct.sizes[cupSize].size;
  }
}

sizeInputs.forEach(function (inp) {
  inp.addEventListener('click', calculatePrice);
});

addInputs.forEach((inp) => {
  inp.addEventListener('click', calculatePrice);
});


function calculatePrice() {
  sizeInputs.forEach((inp) => {
    if (inp.checked) {
      selectedSize = chosenProduct.sizes[inp.id]['add-price'];
    }
  })
  
  const selectedAdditives = Array.from(addInputs).filter(input => input.checked);
  let newAddPrice = selectedAdditives.length * 0.5;

  const total = (parseFloat(price) + parseFloat(selectedSize) + newAddPrice).toFixed(2);
  modalPrice.textContent = `$${total}`;

  switchOptionBackground(sizeLabels);
  switchOptionBackground(addLabels);

}

function switchOptionBackground(arr) {
  arr.forEach((label) => {

    if (label.previousElementSibling.checked) {
      label.classList.add('option--choose');
    }
    else {
      label.classList.remove('option--choose');
    }
  })
}

function resetData(arr) {
  arr.forEach((el) => {
    el.checked = false;
    el.classList.remove('option--choose');
    if (el.id === 's') {
      el.checked = true;
    }
    selectedSize = 0.00;
  })
}