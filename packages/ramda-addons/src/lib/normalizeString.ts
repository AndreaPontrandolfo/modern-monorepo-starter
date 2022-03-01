import { pipe, toLower, trim } from 'ramda';

export const normalizeString = pipe(toLower, trim);
