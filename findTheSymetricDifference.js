function symTwoArgs(arr1, arr2) {
  const res = {};

  const obj1 = {};
  const obj2 = {};

  arr1.forEach(el => {
    obj1[el] = true;
  })
  arr2.forEach(el => {
    obj2[el] = true;
  })

  arr1.forEach(el => {
    if(!obj2[el]){
      res[el] = el;
    }
  })

  arr2.forEach(el => {
    if(!obj1[el]){
      res[el] = el;
    }
  })
  return Object.values(res);
}

function sym(){
  const args = [...arguments];

  if(args.length > 2){
    return sym(symTwoArgs(arguments[0], arguments[1]), ...args.slice(2))
  }

  return symTwoArgs(arguments[0], arguments[1]);
}

// console.log(symTwoArgs([1, 2, 3], [5, 2, 1, 4]));

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));