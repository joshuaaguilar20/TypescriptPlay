const profile = {
    name: 'alex',
    age: 20,
    setAge(age: number): void{
        this.age = age;
    },
    coords: {
        lat: 0,
        lng:15
    }
};

/* If you use desturction must use object with property in type annoatations */
const { age }: {age: number } = profile



const {
    coords: {lat, lng}
}: {coords: {lat:number; lng: number}} = profile


