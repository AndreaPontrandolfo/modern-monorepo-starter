import { pipe, values, flatten, length } from 'ramda';

export const getTotalOfValues = pipe(values, flatten, length);
