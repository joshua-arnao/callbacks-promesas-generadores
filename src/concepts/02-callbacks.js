// Función que se recibe como argumento y se invoca dentro de otra función

import { heroes } from '../data/Heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  console.log('callbacksComponent');

  const id = '5d86371f1efebc31def272e21';
  const id2 = '5d86371f2343e37870b91ef1';

  findHeroe(id, (error, hero) => {
    if (error) {
      element.innerHTML = error;
      return;
    }

    findHeroe(id2, (error, hero2) => {
      if (error) {
        element.innerHTML = error;
        return;
      }

      element.innerHTML = `${hero?.name} / ${hero2?.name}`;
    });

    // element.innerHTML = hero?.name;
  });
};

/**
 *
 * @param {String} id
 * @param {(error: String|null, hero: Object)=> void} callback
 */
const findHeroe = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    callback(`Hero with id ${id} not found`);
    return; // undefined
  }

  callback(null, hero);
};
