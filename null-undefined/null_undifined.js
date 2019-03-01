// ===> For Null
const isNull = (val) => !val && typeof val === 'object';

isNull(null);  // true


// ===> For undefined
const isUndefined = (value) => typeof value === 'undefined';

isUndefined(undefined);  // true