'use strict';

(function () {
  const WIZARDS_DATA = {
    names: [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`],
    surnames: [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`],
    coatColors: [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`],
    eyesColors: [`black`, `red`, `blue`, `yellow`, `green`]
  };

  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const SETUP_TOP = `80px`;
  const SETUP_LEFT = `50%`;

  const wizardUserName = document.querySelector(`.setup-user-name`);

  const setup = document.querySelector(`.setup`);
  const setupOpenButton = document.querySelector(`.setup-open`);
  const setupCloseButton = setup.querySelector(`.setup-close`);

  wizardUserName.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Escape`) {
      evt.stopPropagation();

      wizardUserName.blur();
    }
  });

  const popupClosePressESC = function (evt) {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      closePopup();
    }
  };

  const popupClosePressEnter = function (evt) {
    if (evt.key === `Enter`) {
      evt.preventDefault();

      closePopup();
    }
  };

  const openPopup = function () {
    setup.style.top = SETUP_TOP;
    setup.style.left = SETUP_LEFT;

    setup.classList.remove(`hidden`);

    document.addEventListener(`keydown`, popupClosePressESC);
    setupCloseButton.addEventListener(`keydown`, popupClosePressEnter);
  };

  const closePopup = function () {
    setup.classList.add(`hidden`);

    document.removeEventListener(`keydown`, popupClosePressESC);
    setupCloseButton.removeEventListener(`keydown`, popupClosePressEnter);
  };

  setupOpenButton.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpenButton.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      openPopup();
    }
  });

  setupCloseButton.addEventListener(`click`, function () {
    closePopup();
  });

  /* Wizard Appearance */

  const setupWizardAppearance = document.querySelector(`.setup-wizard-appearance`);
  const setupWizard = setupWizardAppearance.querySelector(`.setup-wizard`);

  const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
  const wizardCoatColorInput = setupWizardAppearance.querySelector(`[name=coat-color]`);

  const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
  const wizardEyesColorInput = setupWizardAppearance.querySelector(`[name=eyes-color]`);


  wizardCoat.addEventListener(`click`, function () {
    let randColor = window.util.getRandElement(WIZARDS_DATA.coatColors);

    wizardCoat.style.fill = randColor;
    wizardCoatColorInput.value = randColor;
  });


  wizardEyes.addEventListener(`click`, function () {
    let randColor = window.util.getRandElement(WIZARDS_DATA.eyesColors);

    wizardEyes.style.fill = randColor;
    wizardEyesColorInput.value = randColor;
  });

  const wizardFireballWrap = document.querySelector(`.setup-fireball-wrap`);
  const wizardFireballColorInput = wizardFireballWrap.querySelector(`[name=fireball-color]`);

  wizardFireballWrap.addEventListener(`click`, function () {
    let randColor = window.util.getRandElement(FIREBALL_COLORS);

    wizardFireballWrap.style.backgroundColor = randColor;
    wizardFireballColorInput.value = randColor;
  });

  window.dialog = {
    setup, closePopup
  };
})();
