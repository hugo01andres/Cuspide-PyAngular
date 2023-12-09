import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly LoginURL = environment.apiUrl + '/auth/login';

  constructor(private http: HttpClient, private cookie : CookieService) { }

  sendCredentials(username: string, password: string) {
    return this.http.post(this.LoginURL, { username, password });
  }
}
