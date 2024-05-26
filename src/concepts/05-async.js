import { heroes } from '../data/Heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  console.log('asyncComponent');

  const id = '5d86371f1efebc31def272e2';

  findHero(id)
    .then((name) => (element.innerHTML = name))
    .catch((error) => (element.innerHTML = error));
};

// async() -> tranforma la función en una promesa
/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) throw `Hero with id ${id} not found`;

  return hero?.name;
};
