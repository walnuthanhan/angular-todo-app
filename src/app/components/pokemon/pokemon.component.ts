import { Component, OnInit } from '@angular/core';
import { max } from 'rxjs';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  title = "TechSpike: Angular Random Pokemon Image Generator"

  pokemon: Pokemon[] | undefined
  constructor() { }

  ngOnInit(): void {
    this.pokemon = [
      {
        imageURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      }
    ]
  }

  generateRandomPokemon(){
    this.pokemon?.splice(0);
    
    const randNum = this.getRandomInt(1,905);
    console.log(randNum)

    var num = null;

    if(randNum < 10){
      num = String("00" + randNum);
    } else if(randNum < 100){
      num = String("0" + randNum);
    }else{
      num = String(randNum);
    }

    const newURL = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + num +".png"
    
    console.log(newURL)
    this.pokemon?.push({
      imageURL: newURL
    })

  }

  getRandomInt(min: number, max: number) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

}

