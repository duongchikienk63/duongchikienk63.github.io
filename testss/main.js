function fill(start, end) {
    if (start < end) {
      if (arr[start] != arr[j]) {
        if(j < end) {
            j += 1;
        }
      } else {
        arr.splice(j, 1);
      }
      fill(start, end);
    }
    return arr;
  }
  
  const arr = ["a", "b", "c", "c", "a", "b", "c"];

  let j = 1;

  fill(0, arr.length)