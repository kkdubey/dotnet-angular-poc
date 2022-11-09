import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageModel } from '../models/language-model';
import { LanguageService } from '../services/language-service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  private name: string = "";
  public language: LanguageModel = { name: "", description: "", languageType: "" };

  constructor(private activatedroute: ActivatedRoute, private languageService: LanguageService, private router: Router) {
    this.name = activatedroute.snapshot.params.name;
  }

  ngOnInit(): void {
    if (this.name != undefined && this.name != "") {
      this.languageService.getLanguage(this.name).subscribe(result => {
        this.language = result;
      },
        error => console.error(error));
    }
  }

  public cancel() {
    this.router.navigateByUrl("/");
  }
  submitted = false;

  onSubmit() {
    this.submitted = true;
    if (this.name != undefined && this.name != "") {
      this.updateLanguage();
    } else {
      this.createLanguage();
    }
  }

  private createLanguage() {
    this.languageService.createLanguage(this.language).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl("/");
    },
      error => console.error(error));
  }

  private updateLanguage() {
    this.languageService.updateLanguage(this.language).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl("/");
    },
      error => console.error(error));
  }

  public isNameReadonly(): boolean {
    return this.name != undefined && this.name != "";
  }
}
