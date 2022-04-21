/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)) 
*/
const findMedianSortedArrays = (nums1, nums2) =>{
	let mergedArr = [];
	while (nums1.length > 0 && nums2.length > 0) {
		if (nums1[0] < nums2[0]) {
			mergedArr.push(...nums1.splice(0, 1));
		} else {
			mergedArr.push(...nums2.splice(0, 1));
		}
	}
	while (nums1.length > 0) {
		mergedArr.push(...nums1.splice(0, 1));
	}
	while (nums2.length > 0) {
		mergedArr.push(...nums2.splice(0, 1));
	}
	let len = mergedArr.length;
	let idx = Math.floor(len / 2);
	if (len % 2 === 0) {
		return (mergedArr[idx] + mergedArr[idx - 1]) / 2;
	}
	return mergedArr[idx];
};
