function countingDojoWay() {
    for (var i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            if (i % 10 === 0) {
                console.log('Coding Dojo');
            } else {
                console.log('Coding');
            }
        } else {
            console.log(i);
        }
    }
}

countingDojoWay();