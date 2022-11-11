import { Category } from './Category';
export class Todo {
    content:string|undefined;
    completed:boolean|undefined;
    date:string|undefined;
    todoCategory:Category[]|undefined;
}