function closure(value1, value2) {
    var setA = value1;
    var serB = value2;
    var setC = setA.merge(setB);
}

closure([2, 3, 4, 5], [2, 4]);