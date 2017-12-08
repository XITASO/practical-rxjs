import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: 'character-search.component.html',
  styleUrls: ['character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

  public characterForm: FormControl;

  public ngOnInit(): void {
    this.characterForm = new FormControl();
  }

}
