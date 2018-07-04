export const INCREMENT_EXPERIENCE = 'INCREMENT_EXPERIENCE';
export const incrementExperience = (amount) => {
  return {
    type : INCREMENT_EXPERIENCE,
    amount
  };
}; 

export const INCREMENT_LEVEL = 'INCREMENT_LEVEL';
export const incrementLevel = level => {
  return {
    type : INCREMENT_LEVEL,
    level
  };
};

 