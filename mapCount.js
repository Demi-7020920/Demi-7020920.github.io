function mapCount(someMap) {
  // someMap.has(key) returns true/false.
  let result = 0;
  for(let key of ["a","b","c"]){
    if(someMap.has(key)) result ++;
  }
  return result;
}