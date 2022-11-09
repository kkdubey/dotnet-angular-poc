//import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';
//import { LanguageModel } from '../models/language-model';
//@Injectable({
//  providedIn: 'root'
//})
//export class LanguageService {
//  private baseurl: string = "https://localhost:7245/"
//  constructor(private http: HttpClient) { }
//  getLanguages(): Observable<LanguageModel[]> {
//    return this.http.get<LanguageModel[]>(this.baseurl + 'api/language');
//  }
//  //getLanguage(name: string): Observable<LanguageModel> {
//  //  return this.http.get<LanguageModel>(this.baseurl + `api/language/${name}`);
//  //}
//  //updateLanguages(languageModel: LanguageModel) {
//  //  this.http.post(this.baseurl + 'api/language', languageModel);
//  //}
//  //deleteLanguages(name: string) {
//  //  this.http.delete(this.baseurl + `api/language${name}`);
//  //}
//}
//# sourceMappingURL=language-service.js.map