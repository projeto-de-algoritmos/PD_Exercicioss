import lengthOfLIS from "./maiorSubsequenciaCrescente";

const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
console.log("Maior subsequência crescente do array nums1 é:", lengthOfLIS(nums1)); // Saída: 4

const nums2 = [0, 1, 0, 3, 2, 3];
console.log("Maior subsequência crescente do array nums2 é:", lengthOfLIS(nums2)); // Saída: 4

const nums3 = [7, 7, 7, 7, 7, 7, 7];
console.log("Maior subsequência crescente do array nums3 é:", lengthOfLIS(nums3)); // Saída: 1