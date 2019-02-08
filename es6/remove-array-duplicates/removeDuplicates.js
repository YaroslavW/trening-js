const removeDuplicates = (array) => {
    return [...new Set(array)]
};

arr1=[1,2,3,2,2,2,4,5,6,4,4,4,1,1,2,2,6];

const ans = removeDuplicates(arr1);

console.log(ans); 
// [ 1, 2, 3, 4, 5, 6 ]