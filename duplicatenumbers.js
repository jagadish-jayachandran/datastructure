function duplicateArray(nums) {
    console.log(nums);
    var len = nums.length;
    if (len == 0) {
        return 0;
    }
    var newarray = [];
    nums.forEach(element => {
        var fn = element;
        for (let i = 1; i < nums.length; i++) {
            const nextnumber = nums[i];
            if (fn === nextnumber) {
                newarray.push(fn);
                fn = nums[i + 1];
            }
        }
    });
    return newarray;
}
duplicateArray([12, 32, 42, 2, 32]);

Answer: [32]