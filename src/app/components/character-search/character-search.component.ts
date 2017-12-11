import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

import { Character } from '../../models/character';
import { CharacterSearchService } from '../../services/character-search.service';


@Component({
  templateUrl: 'character-search.component.html',
  styleUrls: ['character-search.component.scss']
})
export class CharacterSearchComponent implements OnInit {

  public characterForm: FormControl;
  public characters: Observable<Character[]>;

  public constructor(
    private readonly characterSearchService: CharacterSearchService
  ) {}

  public ngOnInit(): void {
    this.characterForm = new FormControl();

    this.characters = this.characterForm.valueChanges
      .switchMap(this.getCharactersByNameAsync.bind(this));
  }

  public resetAutocomplete(): void {
    this.characterForm.reset();
  }

  public displayCharacter(character: Character): string {
    return character ? character.name : '';
  }

  private getCharactersByNameAsync(name: string): Observable<Character[]> {
    return this.characterSearchService.getCharactersByName(name);
  }

}
