import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SquadMember } from '../models/squad-member';

@Injectable()
export class SquaddataService {
 URL: string;
  constructor(protected httpClient: HttpClient) {
      console.log('squad data service is working');
      this.URL = 'https://jsonplaceholder.typicode.com/users';
      
  }
    getSquad() {
        return this.httpClient.get<Array<SquadMember>>(this.URL);
    }
}
