'use strict';

(function () {
  var WIZARD_COATS = ['rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];
  var WIZARD_EYES = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
  var FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setupPlayer = document.querySelector('.setup-player');
  var coatColorInput = setupPlayer.querySelector('input[name = coat-color]');
  var eyesColorInput = setupPlayer.querySelector('input[name = eyes-color');
  var fireballColorInput = setupPlayer.querySelector('input[name = fireball-color');

  var setupWizard = setupPlayer.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  var getRandomElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  wizardCoat.addEventListener('click', function () {
    coatColorInput.value = getRandomElement(WIZARD_COATS);
    wizardCoat.style.fill = coatColorInput.value;
    wizard.onCoatChange(coatColorInput.value);
  });

  wizardEyes.addEventListener('click', function () {
    eyesColorInput.value = getRandomElement(WIZARD_EYES);
    wizardEyes.style.fill = eyesColorInput.value;
    wizard.onEyesChange(eyesColorInput.value);
  });

  setupFireballWrap.addEventListener('click', function () {
    fireballColorInput.value = getRandomElement(FIREBALL);
    setupFireballWrap.style.background = fireballColorInput.value;
  });

  return window.wizard = wizard;
})();
