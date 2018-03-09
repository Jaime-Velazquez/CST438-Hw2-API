import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable()
export class ImageapiService {

  constructor( protected httpClient: HttpClient) { }
  

  getGettyImages(){
      const httpOptions = {
          headers: new HttpHeaders ({
              'Content-Type': 'application/json',
              'Api-Key': environment.gettyKey
          })
      }
      const gettyUrl = 'https://api.gettyimages.com/v3/search/images?phrase=kittens';
      return this.httpClient.get(gettyUrl, httpOptions);
  }
  
 getGiffyImage() {
    const giffyUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + environment.gifyKey + '&tag=bichon&rating=G';
    return this.httpClient.get(giffyUrl);
 }
 
  getWordnikWord(){
    const wordnikUrl = 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=' + environment.wordnikKey;

    return this.httpClient.get(wordnikUrl);
  }
}
