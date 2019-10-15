var nums = [2, 7, 11, 15];
var target = 13;

var twoSum = function(nums, target) {
  var numset = {};
  var res = [];
  for (var i = 0; i < nums.length; i++) {
    if (numset[target - nums[i]] != undefined) {
      res.push(numset[target - nums[i]]);
      res.push(i);
      console.log(res);
      return res;
    } else {
      numset[nums[i]] = i;
    }
  }
};

twoSum(nums, target);
