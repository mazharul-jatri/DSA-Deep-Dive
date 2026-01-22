function romanToInt(s: string): number {
    const ROMAN_MAP: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    s = s.toUpperCase()
    let resultNum = 0;

    if (s.length === 0) {
        throw new Error('Empty arguments passed')
    }

    const parsedRStringArr: string[] = s.split('');

    for (let i = 0; i < parsedRStringArr.length; i++) {
        let currentItem = parsedRStringArr[i]
        let nextItem = null;
        if (i !== parsedRStringArr.length - 1) {
            nextItem = parsedRStringArr[i + 1]
        }
        if (ROMAN_MAP[currentItem] >= ROMAN_MAP[nextItem] || !nextItem) {
            resultNum += ROMAN_MAP[currentItem]
        } else {
            resultNum -= ROMAN_MAP[currentItem]
        }
        console.log(ROMAN_MAP[currentItem], ROMAN_MAP[nextItem])
    }

    return resultNum;

}


