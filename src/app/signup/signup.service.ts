import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class SignupService {

  private apiUrl = 'https://localhost:7010/api/Authentication'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  signup(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}
