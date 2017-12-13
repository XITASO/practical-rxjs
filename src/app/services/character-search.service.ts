import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

import { SearchResult } from '../models/search-result';
import { Character } from '../models/character';

@Injectable()
export class CharacterSearchService {

  private readonly apiBasePath = 'https://swapi.co/api';

  public constructor(
    private readonly httpClient: HttpClient
  ) {}

  public getCharactersByName(name: string): Observable<Character[]> {
    // https://swapi.co/api/people/?search=...
    const url = `${this.apiBasePath}/people/?search=${name}`;

    /*
     * API returns:
     * {
     *   "count": ...,
     *   "next": "https://swapi.co/api/people/?page=...",
     *   "previous": null,
     *   "results": [...]
     * }
     */
    return this.httpClient.get<SearchResult>(url)
      .map(r => r.results);
  }

}
