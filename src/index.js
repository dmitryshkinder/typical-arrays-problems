
exports.min = function min (array) {
  let min = 99999;

  if(!array || array.length == 0){
    return 0;
  }else {
    array.forEach( item => {
        if(item < min){
          min = item;
        }
      });
    
      return min;
  }
}

exports.max = function max (array) {
  let max = 0;

  if(!array || array.length == 0){
    return 0;
    
  }else{
    array.forEach(item => {
        if(item > max){
          max = item;
        }
      });
    
      return max;
  }
}

exports.avg = function avg (array) {
  let sum = 0;

  if(!array || array.length == 0){
    return 0;

  }else{   
  array.forEach(item => {
    sum += item;
  });

  return sum / array.length;
  }
}
