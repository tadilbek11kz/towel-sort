
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
    return []
  }
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    if (i % 2 === 0) {
      for (let j = 0; j < element.length; j++) {
        arr.push(element[j]);
      }
    } else {
      for (let j = element.length - 1; j >= 0; j--) {
        arr.push(element[j]);
      }
    }

  }
  return arr;
}
