/*  Remove Duplicate
Question: How would you remove duplicate members from an array?
Answer: will start a while looping and keep an object/ associated array.
If i find an element for the first time i will set its value as true
(that will tell me element added once.).
if i find a element in the exists object, i will not insert it into the return array. */

function removeDuplicate(arr){
  var exists ={},
  outArr = [],
  elm;

  for(var i=0; i<arr.length; i++){
    elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
    }
  }
  return outArr;

}
removeDuplicate([1,2,6,8,9,2,4,5,3,6,3]);
