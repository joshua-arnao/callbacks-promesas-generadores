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

  const renderTwoHeros = (hero, hero2) => {
    element.innerHTML = `
    <h2>${hero.name}</h2>
    <h2>${hero2.name}</h2>
    `;
  };
  const renderError = (error) => {
    element.innerHTML = `
    <h2>Error:</h2>
    <h3>${error}</h3>
    `;
  };

  const id = '5d86371f1efebc31def272e2';
  const id2 = '5d86371f2343e37870b91ef1';

  Promise.all([findHero(id), findHero(id2)])
    .then(([hero1, hero2]) => {
      renderTwoHeros(hero1, hero2);
    })
    .catch(renderError);

  //! Forma 2
  // let hero1;
  // findHero(id)
  //   .then((hero) => {
  //     hero1 = hero;

  //     return findHero(id2);
  //   })
  //   .then((hero2) => {
  //     renderTwoHeros(hero1, hero2);
  //   })
  //   .catch(renderError);

  //! Forma 1
  // findHero(id)
  //   .then(
  //     // (hero) => rederHero(hero)
  //     // rederHero
  //     (hero) => {
  //       // hero = hero;

  //       findHero(id2)
  //         .then((hero2) => {
  //           renderTwoHeros(hero, hero2);
  //         })
  //         .catch(renderError);
  //     }
  //   )
  //   .catch(
  //     // (error) => renderError(error)
  //     renderError
  //   );
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
