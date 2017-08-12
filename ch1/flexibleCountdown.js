function flexibleCountdown(low, high, mult) {
    for (var i = high; i >= low; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}

flexibleCountdown(4,16,4);