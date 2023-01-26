export const getRandomFromZeroTo = (num) => Math.floor(Math.random() * num)

export const getRandomValueNotEqualToCurrentValue = (arrayOfValues = [], currentValue = '', keyToCompare = '') => {
    let suggestedValue = null;
    const valueGetter = (obj) => keyToCompare && obj ? obj[keyToCompare] : obj;
    while(true) {
      suggestedValue = arrayOfValues[getRandomFromZeroTo(arrayOfValues.length)];
      if(valueGetter(suggestedValue) !== valueGetter(currentValue)) {
        break;
      }
    }
    return suggestedValue;
}