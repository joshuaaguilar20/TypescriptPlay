

const carMakers:string[] = ["ford", "toyota", "chevy"];


/* Help with inference when extracting values */
const car1 = carMakers[0];
carMakers.push('hello');


carMakers.map((car:string): string => {
    return car.strike();
})


const importantDates: (Date | string)[] = [new Date()];









