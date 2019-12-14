function reverseString(string) {
    var arr = string.toString(10).replace(/\D/g, '_').split('');
    var leng = arr.length;
    var newarr = [];
    for (let i = leng; i >= 0; i--) {
        const val = arr[i];
        newarr.push(val);
    }
    return newarr.toString();
}