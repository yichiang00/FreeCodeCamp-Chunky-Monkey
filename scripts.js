
function chunkArrayInGroups(arr, size) {
  var result=[];
  var mystr=arr;
  var times=Math.ceil(arr.length/size);
  for (var i = 0; i < times; i++) {
    if(arr.length>size)
    {

      result.push(mystr.splice(0,size));
    }else {
      result.push(mystr);
    }
  }

  // Break it up.
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
