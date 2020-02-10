const testNum = [1,2,3,4];

function sumFor(nums){
  let total = 0;
  for(let i = 0; i <nums.length+1;i++){
    total += i;
  }
  return total;
}

console.log(sumFor(testNum));

function sumWhile(nums){
  let total = 0;
  let i = 0;
  while ( i <nums.length){
    total += nums[i];
    i++;
  }
  return total;
}
console.log(sumWhile(testNum));

//Credited to Philip Johnson
function sumRecursion(nums) {
  if(nums.length === 0){
    return 0;
  } else {
    return nums[0] + sumRecursion(nums.slice(1,nums.length));
  }
}
console.log(sumRecursion(testNum));

//Credited to Philip Johnson
function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo,num){ return memo + num; },0);
}
console.log(sumTheSimpleWay(testNum));