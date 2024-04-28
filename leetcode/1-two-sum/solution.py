class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        i = 0
        while i < len(nums):
            try:
                if i == 0:
                    numsModified = nums[1:]
                elif i == len(nums)-1:
                    numsModified = nums[:len(nums)-2]
                else:
                    numsModified = nums[0:i]+nums[i+1:len(nums)]
                
                return [i, numsModified.index(target-nums[i])+1]
            except:
                pass
            i+=1