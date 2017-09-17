import { person } from './person';

console.log(person.firstName+" "+person.lastName);

let userName: String = 'How are you';
userName="I am good";

let userid = (a:string,b:number): string =>  a+b;

userid("1234",3);

//let target: HTMLElement = document.getElementById('target');
//target.onclick = (event: MouseEvent) => event.button;

let thing: string | number | string[] | boolen;

let returnSomething = (someThing: string | number | string[] | boolean) =>
     someThing;

