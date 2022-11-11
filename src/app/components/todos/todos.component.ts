import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { Category } from './../../models/Category';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!:Todo[];
  inputTodo:string = "";
  createdDate:Date = new Date();
  testinput:boolean = false;
  categories!:Category[];
  categoryStudy:boolean=false;
  categoryWork:boolean=false;
  categoryHobby:boolean=false;
  categoryPersonal:boolean=false;

  constructor() { }

  ngOnInit(): void { 
    this.todos = [
      // {
      //   content: "First todo",
      //   completed: false,
      //   date:this.createdDate.toString()
      // },
      // {
      //   content: 'Example Todo',
      //   completed: false,
      //   date:this.createdDate.toDateString(),
      //   todoCategory: [] 
      // }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
        return v;
      }
      return;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    if (this.inputTodo !== "") {
      this.categories = [];
      this.addCategory();
      this.todos.push({
        content: this.inputTodo,
        completed: false,
        date: this.createdDate.toDateString(),
        todoCategory: this.categories
      });
      this.inputTodo = "";
    }
  }

  addCategory () {
    if (this.categoryStudy==true){
      this.categories.push({
        name: "study",
        img: "/assets/image/book.png"
      });
      this.categoryStudy = false;
    }
    if (this.categoryWork==true){
      this.categories.push({
        name: "work",
        img: "/assets/image/hackercat.png"
      });
      this.categoryWork = false;
    }
    if (this.categoryHobby==true){
      this.categories.push({
        name: "hobby",
        img: "/assets/image/music.png"
      });
      this.categoryHobby = false;
    }
    if (this.categoryPersonal==true){
      this.categories.push({
        name: "personal",
        img: "/assets/image/person.png"
      });
      this.categoryPersonal = false;
    }
    console.log(this.categories);
  }
}
