import { Injectable } from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {

  wordList: Word[] = [{id: 1,word: 'car',mean: 'o to'},
    {id: 2,word: 'cat',mean: 'con meo'},
    {id: 3,word: 'dog',mean: 'con cho'}
 ]


  constructor() { }

  getAll() {
    return this.wordList;
  }

  findById(id: number) {
    return this.wordList.find(word => word.id === id);
  }
}
