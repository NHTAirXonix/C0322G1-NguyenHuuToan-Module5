import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {Word} from "../model/word";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number | any;
  word: any;

    constructor(private dictionaryService: DictionaryService,
                private activatedRoute: ActivatedRoute
                ) {
      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        // @ts-ignore
        this.id = +paramMap.get('id');
        this.word = this.getWord(this.id);
      });
    }

  getWord(id: number): Word {
    return this.dictionaryService.findById(id);
  }

  ngOnInit(): void {

  }


}
