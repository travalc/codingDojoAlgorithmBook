function itsYourBday(x,y) {
    if (x === 9) {
        if (y === 7) {
            console.log('How did you know?');
        } else { 
            console.log('Just another day');
        }
    } else if (x === 7) {
        if (y === 9) {
            console.log('How did you know?');
        } else {
            console.log('Just another day');
        }
    } else {
        console.log('Just another day');
    }
}

itsYourBday(9, 7);
itsYourBday(7, 9);
itsYourBday(9, 3);
itsYourBday(7, 4);
itsYourBday(2,5);