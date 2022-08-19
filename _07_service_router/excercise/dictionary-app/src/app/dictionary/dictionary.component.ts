import { Component, OnInit } from '@angular/core';
import {Word} from "../model/word";
import {DictionaryServiceService} from "../service/dictionary-service.service";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  wordList: Word[] = [];

  constructor(private dictionaryService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.getAll()
  }


  private getAll() {
    this.wordList = this.dictionaryService.getAll();
  }
}
