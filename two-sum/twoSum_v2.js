var nums = [2, 7, 11, 15];
var target = 13;

function twoSum(nums, target) {
  var numset = {};
  var res = [];
  for (var i = 0; i < nums.length; i++) {
    if (numset[target - nums[i]] != undefined) {
      res.push(numset[target - nums[i]]);
      res.push(i);
      return res;
    } else {
      numset[nums[i]] = i;
    }
  }
};

twoSum(nums, target);
