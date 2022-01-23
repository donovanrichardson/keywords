import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Text } from './entity/text';

@Injectable({
  providedIn: 'root' //TODO what does this mean
})
export class TextService {

  constructor(private httpClient: HttpClient) { }

  getTexts(): Text[]{
    return [];
  }

  getText(id: string): Text{
    return null as any;
  }

  addText(): Text{
    return null as any;
  }

}
