'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_QUANTITY = 4;

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var setupPlayer = document.querySelector('.setup-player');
var coatColorInput = setupPlayer.querySelector('input[name = coat-color]');
var eyesColorInput = setupPlayer.querySelector('input[name = eyes-color');
var fireballColorInput = setupPlayer.querySelector('input[name = fireball-color');

var setupWizard = setupPlayer.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');

var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;

  return wizardElement;
};

var generateWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARD_QUANTITY; i++) {
    wizards.push(
        {
          name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
          coat: getRandomElement(WIZARD_COATS),
          eyes: getRandomElement(WIZARD_EYES)
        }
    );
  }
  return wizards;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
  setup.querySelector('.setup-similar').classList.remove('hidden');
};

var wizards = generateWizards();
renderWizards();

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupUserName.addEventListener('focus', function () {
  document.removeEventListener('keydown', onPopupEscPress);
});

setupUserName.addEventListener('blur', function () {
  document.addEventListener('keydown', onPopupEscPress);
});

wizardCoat.addEventListener('click', function () {
  coatColorInput.value = getRandomElement(WIZARD_COATS);
  wizardCoat.style.fill = coatColorInput.value;
});

wizardEyes.addEventListener('click', function () {
  eyesColorInput.value = getRandomElement(WIZARD_EYES);
  wizardEyes.style.fill = eyesColorInput.value;
});

setupFireballWrap.addEventListener('click', function () {
  fireballColorInput.value = getRandomElement(FIREBALL);
  setupFireballWrap.style.background = fireballColorInput.value;
});
