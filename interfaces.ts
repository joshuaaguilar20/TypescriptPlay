interface Vehicle {
    name:string;
    year: Date;
    broken: boolean;
    summery():string;
};

const oldCivic = {
    name: `civic`,
    year: new Date,
    broken: false,
    summery():string{
        return `Name: ${this.name}`
    }
};

const test = (obj:Vehicle) : void=>{
   return  console.log(obj.summery())
} 


test(oldCivic);


