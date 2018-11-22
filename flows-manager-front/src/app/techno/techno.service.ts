import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TechnoService {
  private tehnosUrl = environment.APIEndpoint + '/api/v1.0/technos';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getTechnos (): Observable<Techno[]> {
    return this.http.get<Techno[]>(this.technosUrl)
  }
}
