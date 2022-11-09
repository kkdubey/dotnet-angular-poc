import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LanguageModel } from '../models/language-model';
import { LanguageService } from '../services/language-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public languages: LanguageModel[] = [];

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.loadLanguages();
  }

  loadLanguages() {
    this.languageService.getLanguages().subscribe(result => {
      this.languages = result;
      console.log(result);
    }, error => console.error(error));
  }

  deleteLanguage(name: string) {
    this.languageService.deleteLanguages(name).subscribe(result => {
      this.loadLanguages();
      console.log(result);
    }, error => console.error(error));
  }
}
