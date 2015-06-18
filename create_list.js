// Recursive function that produces a JavaScript list (nested objects).

function arrayToList (ary) {
  var list;
  function createList(ary, count) {
    console.log(count);
    if (count == ary.length - 1) 
      return list;
    else {
      count ++;
      list = {value: ary[count], rest: createList(ary, count)};
      return list;
    };
  };
  var count = -1;
  return createList(ary, count); 
};
