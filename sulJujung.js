/*
*made by williameom
*/

const sulJujungBangyee = (bottles/*int*/, type/*string*/) => {
    for(i=bottles; i>=0; i--) {
        if(i != 0){
            left = `${type} Left: ${i} Bottles`;
            console.log(left);
            console.log(`Drank 1 ${type}`);
        } else if(i == 0) {
            console.log(`No ${type} Left.`);
        }
    }
};

sulJujungBangyee(99, "beer");