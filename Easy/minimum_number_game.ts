const numberGame = function (nums: number[]): number[] {
    let numsLength = nums.length
    const resultArr = []

    if (numsLength === 0 || numsLength % 2 !== 0) {
        return resultArr;
    }

    let player1Pick: number, player2Pick: number, index: number = null

    for (let i = 0; i < numsLength; i+=2){
        player1Pick = Math.min(...nums)
        index = nums.indexOf(player1Pick)
        nums.splice(index, 1)


        player2Pick = Math.min(...nums)
        index = nums.indexOf(player2Pick)
        nums.splice(index, 1)

        resultArr.push(player2Pick)
        resultArr.push(player1Pick)
    }

    return resultArr;

}


console.log(numberGame([5,4,2,3,4,3]))