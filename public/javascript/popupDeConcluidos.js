
function mostarPopup() {
  const contenerPopup = document.querySelector('.contener__popup');
  contenerPopup.style.visibility = 'visible';
}

function fecharPopup() {
  const contnerPopup = document.querySelector('.contener__popup');

  const popupClose = document.querySelector('.popup__close');
  popupClose.addEventListener('click', function() {
    const contenerPopup = document.querySelector('.contener__popup');
    contenerPopup.style.visibility = 'hidden';
  });

  contnerPopup.addEventListener('click', function() {
    const contenerPopup = document.querySelector('.contener__popup');
    contenerPopup.style.visibility = 'hidden';
  });
} fecharPopup();
