function printAndCount() {
    var sum = 0;
    for (var i = 512; i < 4096; i++) {
        if (i % 5 === 0) {
            sum ++;
            console.log(i);
        }
    }
    console.log('Total: ' + sum);
}

printAndCount();