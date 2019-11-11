function firstRecurring(arr){

  let map = {};

  for(let i=0; i<arr.length; i++){
    if(map[arr[i]]) return arr[i]
    else map[arr[i]] = true;
  }
  return undefined;
}

function firstRecurring2(arr){

  let count = []

  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      if(count.includes(arr[j])){
        break;
      }
      else {
        count.push(arr[j])
      }
      if(arr[i] === arr[j]) {
        return arr[i]
      }
    }
    count = []
  }

  return undefined;
}

console.log(firstRecurring2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurring2([2,1,1,2,3,5,1,2,4]));
console.log(firstRecurring2([2,1,0,7,3,1,6,2,4]));
console.log(firstRecurring2([2,3,4,5]));