import { heroes } from '../data/Heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
  console.log('promiseComponent');

  const rederHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderError = (error) => {
    element.innerHTML = `
    <h2>Error:</h2>
    <h3>${error}</h3>
    `;
  };

  const id = '5d86371f1efebc31def272e21';
  findHero(id)
    .then(
      // (hero) => rederHero(hero)
      rederHero
    )
    .catch(
      // (error) => renderError(error)
      renderError
    );
};

/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (hero) {
      resolve(hero);
      return;
    }

    reject(`Hero with id ${id} not found`);
  });
};
