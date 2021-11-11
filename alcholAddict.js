/*
*made by williameom
*/

const alcholAddict = (bottles, type, where, what) => {
    if(bottles == null) bottles = 99;
    if(type == null) type = "beer";
    if(where == null) where = "wall";
    if(what == null) what = "bottles";
    for(i=bottles; i>=0; i--) {
        if(i != 0) {
            asdf = i - 1;
            ln_1 = `${i} ${what} of ${type} on the ${where}, ${i} ${what} of ${type} on the ${where}`;
            ln_2 = `Take one down and pass it around, ${asdf} ${what} of ${type} on the ${where}`;
            console.log(ln_1);
            if(asdf != 0){
                console.log(ln_2);
                console.log("\n");
            }
        } else if(i == 0) {
            ln_3 = `Take it down and pass it around, no more ${type} of ${what} on the ${where}`;
            ln_4 = `No more ${what} of ${type} on the ${where}, no more ${what} of ${type} on the ${where}`;
            ln_5 = `Go to the store and buy some more, ${bottles} of ${type} on the ${where}`;
            console.log(ln_3);
            console.log("\n");
            console.log(ln_4);
            console.log(ln_5);
        }
    }
};

alcholAddict(99, "soju", "wall", "bottles");
