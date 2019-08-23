import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  public getDataFromRandomAPI() {
    return this.http.get(this.apiUrl);
  }
}
