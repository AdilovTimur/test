  const dropBtn = document.querySelector('.selected-option');
  const options = document.querySelector('.options');
  const optionsclick = document.querySelectorAll('.options li');
  const selecteda = document.querySelector('.selected-option a');


  const sliderbar = document.getElementById('share_sliderbar');
  const barberbar = document.getElementById('barber_sliderbar');
  let stepshare = 0,
      stepbarber = 0;
  
  dropBtn.addEventListener('click', () => {
    options.classList.toggle('open');
    dropBtn.classList.toggle('open');
  });
  
  optionsclick.forEach(function(option) {
    option.addEventListener('click', function() {
       //console.log(selecteda.textContent);
       selecteda.textContent = this.dataset.value;
      });
  });

function shareright() {
  //console.log(sliderbar)
  stepshare += -442;
   if (stepshare < -1768 )  {
    stepshare = 0;
  }
  sliderbar.style.left = stepshare + 'px';

}

function shareleft() {
  stepshare += 442;
  if (stepshare > 0)  {
    stepshare = -1768;
  }
  sliderbar.style.left = stepshare + 'px';
}

// слайдер блока барбер

function barberright() {
  stepbarber += -442;
   if (stepbarber < -1768 )  {
    stepbarber = 0;
  }
  barberbar.style.left = stepbarber + 'px';
}

function barberleft() {
  stepbarber += 442;
  if (stepbarber > 0)  {
    stepbarber = -1768;
  }
  barberbar.style.left = stepbarber + 'px';
}