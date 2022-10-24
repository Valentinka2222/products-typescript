import { createGlobalState } from 'react-hooks-global-state';
import { List, ProductInt } from './interfaces';

const { setGlobalState, useGlobalState } = createGlobalState({
  list: {
    product: [],
    favouriteList: [],
  } as Partial<List>,
});

export const setProducts = (obj: ProductInt) => {
  setGlobalState('list', (prev: any) => ({
    ...prev,
    product: obj,
  }));
};
export const setFavourite = (obj: ProductInt | undefined) => {
  setGlobalState('list', (prev: any) => ({
    ...prev,
    favouriteList: [obj, ...prev.favouriteList],
  }));
};
export { useGlobalState };
