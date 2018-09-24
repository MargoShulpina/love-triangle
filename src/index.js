/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
for(n = 0; n<preferences.length; n++){
    let a = preferences[n];
    let b = preferences[(a-1)];
    let c = preferences[(b-1)];
    if(c == (n+1) && a != b){
        count++
    }
}
return count/3
}


