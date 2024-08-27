let num: number = 200;

function divi(num: number): void {
    let i:number;
    for(i = 1; i <= num; i++) {
        if (0 == i % 3) {
            console.log("divisivel por 3")
        } else if (0 == i % 5) {
            console.log("divisivel por 5")
        } else if (0 == i % 2) {
            console.log("divisivel por 3 e 5")
        } else {
            console.log(i)
        }
    }
}

divi(num)