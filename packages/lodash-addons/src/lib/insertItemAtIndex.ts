import { cloneDeep } from 'lodash';

/**
 * Immutable version of Array.splice() method.
 * @param {Array} list
 * @param {Number} index
 * @param {any} itemToInsert
 * @returns {Array}
 */
export const insertItemAtIndex = (list, index, itemToInsert) => {
  const clonedList = cloneDeep(list);
  clonedList.splice(index, 0, itemToInsert);
  return clonedList;
};
