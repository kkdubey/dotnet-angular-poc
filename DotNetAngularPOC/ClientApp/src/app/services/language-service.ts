import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageModel } from '../models/language-model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private baseurl: string = "https://localhost:7245/"

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<LanguageModel[]> {
    return this.http.get<LanguageModel[]>(this.baseurl + 'api/language');
  }

  getLanguage(name: string): Observable<LanguageModel> {
    const url = this.baseurl + `api/language/${name}`;
    return this.http.get<LanguageModel>(url);
  }

  createLanguage(languageModel: LanguageModel) {
    return this.http.post(this.baseurl + 'api/language', languageModel);
  }


  updateLanguage(languageModel: LanguageModel) {
    return this.http.post(this.baseurl + 'api/language/UpdateLanguage', languageModel);
  }

  deleteLanguages(name: string) {
    return this.http.delete(this.baseurl + `api/language/${name}`);
  }
}


