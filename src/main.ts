import { person } from './person';

console.log(person.firstName+" "+person.lastName);

let userName: String = 'How are you';
userName="I am good";

let userid = (a:string,b:number): string =>  a+b;

userid("1234",3);

//let target: HTMLElement = document.getElementById('target');
//target.onclick = (event: MouseEvent) => event.button;

//let thing: string | number | string[] | boolean;
type thing = string | number | string[] | boolean;

/*let returnSomething = (someThing: thing) => {
    if(typeof someThing === 'string' || typeof someThing === 'number' || typeof someThing === 'boolean') {
        console.log(someThing);
    }
    else if(someThing instanceof Array)
    {
        let joinedThings = "";
        someThing.forEach(f => joinedThings += `${f}`);
        console.log(joinedThings);
    }
}*/

/*type things = string | {name:string};

let returnThings  = (someThing: things) => {
   if(typeof someThing.name === 'string')
   {

   }

//console.log(returnSomething('coolGuy'));
//console.log(returnSomething(["1","2","3","4","5"]));
*/
type things= {name:string;} | {id:number;}

let returnThings = (someThing: things)
{
    if(typeof someThing.name === 'string')
    {
        return someThing.name;
    }
    else if(typeof someThing.id  === 'number')
    {
        return someThing.id;
    }
}

