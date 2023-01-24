export const addToGarageListener = () => {
  const toGarageButton = document.querySelector('#garage-menu') as HTMLButtonElement;
  toGarageButton.addEventListener('click', () => {
    const garageView = document.querySelector('.garage-view') as HTMLDivElement;
    const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
    const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

    garageView.classList.remove('hide');
    garageContainer.classList.remove('hide');
    winnersContainer.classList.add('hide');
  });
};

export const addToWinnersListener = () => {
  const toWinnersButton = document.querySelector('#winners-menu') as HTMLButtonElement;
  toWinnersButton.addEventListener('click', () => {
    const garageView = document.querySelector('.garage-view') as HTMLDivElement;
    const garageContainer = document.querySelector('.garage-container') as HTMLDivElement;
    const winnersContainer = document.querySelector('.winners-container') as HTMLDivElement;

    garageView.classList.add('hide');
    garageContainer.classList.add('hide');
    winnersContainer.classList.remove('hide');
  });
};