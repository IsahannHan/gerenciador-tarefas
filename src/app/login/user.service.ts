import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:3000/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  constructor(private httpClient: HttpClient) {}

  findByLogin(login: string): Promise<User[]> {
    return lastValueFrom(
      this.httpClient.get<User[]>(`${this.baseUrl}?login=${login}`)
    );
  }
}
