class Person {
    constructor(id, name){
        this.ID = id;
        this.Name = name;
    }

    getDetails = () =>{
        return ` ***Person Detail***
            ID: ${this.ID}
            Name: ${this.Name}
        `
    }
}

export default Person;