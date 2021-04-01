import {BackendService} from "../../shared/card.service";
import {Card} from "../../shared/cards";
import {Table} from "../../shared/table";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // @ts-ignore
  table: Card[];
  updateEvent = new EventEmitter<Card[]>();
  form: FormGroup;
  card: Card;

  constructor(
    private service: BackendService,
    private modalService: NgbModal,
    private config: NgbModalConfig,
    private fb: FormBuilder,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.form = this.fb.group(
      {
        frontControl: ['', Validators.required],
        backControl: ['', Validators.required],
        nameControl: ['', Validators.required],
        noteControl: ['', Validators.required],
      })
  }

  ngOnInit(): void {
    this.getTable();
  }

  onSubmit(): void {
    const values = this.form.value;
    this.card.front = values.frontControl;
    this.card.back = values.backControl;
    this.card.setname = values.nameControl;
    this.card.notes = values.noteControl;
    this.service.updateCard(this.card.id,this.card);
  }


  getTable():void {
    this.service.getAllCard().subscribe((res) =>
    {
      this.table = res;
    })
  }
  deleteOne(id: number){
    console.log("Test");
    this.service.deleteCard(id).subscribe(() =>
    {
       this.getTable();
    })
  }

  updateOne(id:number, content: any){
    console.log("update succesfully");
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).
    result.then(() => {
      console.log(content)
    },)
    this.service.getCardById(id).subscribe(card =>
    {
      this.card = card
      this.form.patchValue({
        frontControl: card.front,
        backControl: card.back,
        nameControl: card.setname,
        noteControl: card.notes
      });
    })

  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).
    result.then((result) => {},)
    this.form.patchValue({
      frontControl: '',
      backControl: '',
      nameControl: '',
      noteControl: ''
    });
  }

  onCreate(){
    this.modalService.dismissAll();
  }

  onSave(){
    const values = this.form.value;
    this.card.front = values.frontControl;
    this.card.back = values.backControl;
    this.card.setname = values.nameControl;
    this.card.notes = values.noteControl;
    this.service.updateCard(this.card.id,this.card).subscribe(() =>
    {
      console.log(this.card);
      this.getTable();
    });
    this.modalService.dismissAll();
  }




}
