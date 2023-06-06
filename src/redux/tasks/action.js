export const CHANGE = 'CHANGE';
// More...

export const increment = amount => {
  return {
    type: CHANGE,
    payload: amount,
  };
};

// More...