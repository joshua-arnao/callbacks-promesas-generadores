import { heroes } from '../data/Heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async (element) => {
  console.log('asyncAwaitComponent');
  const id = '5d86371f1efebc31def272e2';
  const id2 = '5d86371f2343e37870b91ef1';

  try {
    const { name: name1 } = await findHero(id);
    const hero2 = await findHero(id2);
    element.innerHTML = `${name1} / ${hero2.name}`;
  } catch (error) {
    element.innerHTML = error;
  }
};

const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) throw `Hero with id ${id} not found`;

  return hero;
};
