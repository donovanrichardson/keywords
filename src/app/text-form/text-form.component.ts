import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DateTime} from 'luxon'
import { Text } from '../entity/text';

import { TextService } from '../text.service';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.css']
})
export class TextFormComponent implements OnInit {



  constructor(private textService:TextService) { }

  refresh(): void{
    this.textService.getTexts().subscribe(res =>{
      this.texts = res;
      console.log(this.texts)
      console.log('refreshing')
    })
  }

  ngOnInit(): void {

    this.refresh();
  }

  // @ViewChild('textForm', {static: false}) textForm!: NgForm;
  //https://stackoverflow.com/questions/62989255/uncaught-in-promise-error-export-of-name-ngform-not-found
  //https://stackoverflow.com/a/66179216/9608521
  model : string = "Hello Gurlies"

  texts : Text[] = []

  onSubmit() {
    let payload: Text;
    payload = {
      content:this.model,
      timestamp: new Date().toISOString()
    };
    console.log("submitting", payload)
    let submitted = this.textService.addText(payload).subscribe(()=>{
      console.log(submitted, "submitted")
      this.refresh();
    }

    )
    

  }

}
