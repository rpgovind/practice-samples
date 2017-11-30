class Company {
    constructor(){
        this.employees = [];
    }

    addEmployees(...name){
        this.employees =  this.employees.concat(name);
    }

    //iterator
    //Symbol.iterator specifies default iterator of an object
    //for .. 0f is used iterate iterable object eg: ( Array, Map, Set, String, )
    *[Symbol.iterator] () {
        for(let e of this.employees){
            // console.log('e' , e);
            yield e;
        } 
    }

    *filter(predicate) {
        for (let e of  this.employees){
            if(predicate(e)){
                yield e;
            }
        }
    }

    
}

let company = new Company();
company.addEmployees('George', 'Harray', 'Joseph', "Jacob" , "Julie");
console .log('Iterating employee instance using generator...');

for (let employee of company){
    console.log(employee);
}

console .log('..After filter implementation....');

for ( let e of company.filter(emp=> emp.includes("J"))) {
    console.log(e);
}

//also an example of high order function

let take = function *( items , number) {
    let count =0;
    if(number <1) return;

    for (let e of items) {
        count++;
        yield  e;
        if (count  >= number) return;
    }
}
console .log('..After take implementation....');
//below can be considered as high order function example as well
for ( let e of  take( company.filter(emp=> emp.includes("J")),1)) {
    console.log(e);
}

let new_map = new Map ([ ['name' , 'John'], ['age', 35], ['weight',185]]);

for ( let [key, val] of new_map){
    console.log( key + ' -- '+ val);
}
console.log(new_map);