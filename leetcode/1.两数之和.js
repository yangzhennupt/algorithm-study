/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  /**
   * 可以利用map，每次循环时判断需要的结果在不在map里面（值为key,value为index），如果在的话，输出map的值
   * 
   */
  const map = {};
  for(let i=0;i<nums.length;i++) {
    const result = target - nums[i];
    if(map[result]===undefined) {
      map[nums[i]] = i
    } else {
      return [map[result],i]
    }
  }
};
/*
  暴力法： 双重循环对比法：第一重循环得到需要的值,然后第二个循环去查找这个值，注意索引的起始应为i+1;
  避免重复利用元素


  var twoSum = function(nums, target) {
  if(nums.length<2)  return -1;
  for(let i=0;i<nums.length;i++) {
    const result = target-nums[i]
    for(let j=i+1;j<nums.length;j++) {
      if(nums[j]===result) return [i,j]
    }
  }
}; */

