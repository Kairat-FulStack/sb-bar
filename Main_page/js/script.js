let cart = {
  'sisle13': {
    "name": "Форель с булгуром",
    "price": "1000",
    "count": 0,
  },

  'afdgj213': {
    "name": "meal2",
    "price": "500",
    "count": 0,
  }
};

document.onclick = event => {
  if (event.target.classList.contains('plus')) {
    plusFunction(event.target.dataset.id);
  }
  if (event.target.classList.contains('minus')) {
    minusFunction(event.target.dataset.id);
  }
  const output = document.createElement('p').innerHTML = cart.sisle13.count
  const amont = document.querySelector('.amount')
  amont.innerHTML = ''
  amont.append(output)
}

// Уменьшение количества 
const plusFunction = id => {
  cart[id]['count']++;
  renderCart();
}

// Увеличение количчества 
const minusFunction = id => {
  if (cart[id]['count'] - 1 == 0) {
    // deleteFunction(id);
    return true;
  }
  cart[id]['count']--;
  renderCart();
}

// Удаление количества
const deleteFunction = id => {
  delete cart[id];
  renderCart();
}

const renderCart = () => {
  console.log(cart);
}
// !------------------------------------------------------------
// const render_detail = (count)=>{
 
// }
// render_detail()