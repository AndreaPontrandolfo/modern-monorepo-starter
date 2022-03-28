import { cloneDeep } from "lodash";

/**
 * Immutable version of Array.splice() method.
 */
export const insertItemAtIndex = (
  list: any[],
  index: number,
  itemToInsert: any
): any[] => {
  const clonedList = cloneDeep(list);
  clonedList.splice(index, 0, itemToInsert);
  return clonedList;
};
