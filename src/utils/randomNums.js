export const randomNums = (range, limit) => {
    const result = [];
    while (result.length < limit) {
      const random = Math.floor(Math.random() * range);
      if (result.indexOf(random) === -1) {
        result.push(random);
      }
    }
    return result;
  
}
