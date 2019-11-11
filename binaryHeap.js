const BinaryHeap = () => {

  let array = [];

  const insert = (value) => {
    if(!array.length){
      array.push(value)
    }
    else{
      array.push(value)
      let i = array.length - 1;
      while(i>0){
        let parent = i%2===0 ? (i/2)-1 : Math.floor(i/2);
        if(array[i] > array[parent]){
          let tmp = array[i];
          array[i] = array[parent];
          array[parent] = tmp;
          i = parent;
        }
        else{
          break;
        }
      }
    }
  }

  const insertBulk = (arg) => {

    arg.forEach(value => {
      if(!array.length){
        array.push(value)
      }
      else{
        array.push(value)
        let i = array.length - 1;
        while(i>0){
          let parent = i%2===0 ? (i/2)-1 : Math.floor(i/2);
          if(array[i] > array[parent]){
            let tmp = array[i];
            array[i] = array[parent];
            array[parent] = tmp;
            i = parent;
          }
          else{
            break;
          }
        }
      }
    })

  }

  const extractMax = () => {

  }

  const print = () => {
    let res = ''
    array.forEach(el => {
      res = res.concat(el + ' ')
    })

    console.log(res);
  }

  return {
    insert,
    extractMax,
    print,
    insertBulk
  }
}

let bh = BinaryHeap();
bh.insertBulk([4,10,14,12,13])

bh.print()