const nums = [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1];
console.log(nums[1], nums[12]);

function twoSum(nums: number[], target: number): number[] {
	// Create mapping of numbers-> indices
	const indexMap = new Map<number, number>();
	for (let i = 0; i <= nums.length; i += 1) {
		if (indexMap.has(nums[i])) {
			// Check if the two indices add up to the target, otherwise ignore
			const val = indexMap.get(nums[i]);

			if (val !== undefined && nums[i] + nums[val] === target) {
				return [val, i];
			}
		}
		indexMap.set(nums[i], i);
	}

	// loop through a second time
	for (let i = 0; i <= nums.length; i += 1) {
		const needed = target - nums[i];
		const index = indexMap.get(needed);
		if (index !== undefined && index !== i) {
			return [i, index];
		}
	}
	throw new Error("No two sum solution");
}

console.log(twoSum(nums, 11)); // [5, 11]
console.log(twoSum([3, 3], 6)); // [5, 10]
