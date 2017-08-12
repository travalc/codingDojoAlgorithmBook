function multiplesOf3ButNotAll() {
    for (var i = -300; i <= 3; i += 3) {
        if (i !== -6 && i !== -3) {
            console.log(i);
        }
    }
}

multiplesOf3ButNotAll();