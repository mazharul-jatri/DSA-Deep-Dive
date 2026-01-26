function lengthOfLastWord(s: string): number {

    const parsedString = s.trim().split(' ')

    const lastString = parsedString[parsedString.length - 1]

    return lastString.length;
}

console.log(lengthOfLastWord('lu'))