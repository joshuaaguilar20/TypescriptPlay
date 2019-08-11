/* Type Annotations With Functions */


const add = (a:number,b:number): number => {
return a + b + a + a 
};



const logger = (message:string): void => {
    console.log(message)
};



const throwError = (message:string): never => {
throw new Error(message);
};


const forecast = {
    date: new Date(),
    weather: 'sunny'
};


const logWeather = (forecast:{date:Date, weather:string}): void => {
    console.log(forecast.date);

};

/* es2016 */

const LogWeatherDesturcture = ({date, weather }: {date: Date, weather: String}): void => {

}






