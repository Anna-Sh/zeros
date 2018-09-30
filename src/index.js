module.exports = function getZerosCount(number) {

    let zeros = 0;

    for (let mult = 5; mult <= number; mult *= 5) {
        zeros += Math.floor(number / mult);
    }

    return zeros;
};


