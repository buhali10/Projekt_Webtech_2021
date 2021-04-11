import {BackendService} from "../../shared/card.service";
import {Card} from "../../shared/cards";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Component, OnInit, EventEmitter, AfterViewInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  table: Card[];
  updateEvent = new EventEmitter<Card[]>();
  form: FormGroup;
  card: Card;
  dataSource:  MatTableDataSource<Card>;
  searchString ="";
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.getTable();
  }

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

    this.card = { id: 0, front: '', back: '', setname: '', notes: ''};
  }

  ngOnInit(): void {
    this.getTable();
  }

  getTable():void {
    this.service.getAllCard().subscribe((res) =>
    {
      this.table = res;
      this.table = this.table.filter(card => card.front.includes(this.searchString) || card.back.includes(this.searchString)
        || card.setname.includes(this.searchString) || card.notes.includes(this.searchString));

    })
  }

  deleteOne(id: number, content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.service.getCardById(id).subscribe(card =>
    {
      this.card = card
    });
  }

  updateOne(id:number, content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
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
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    this.form.patchValue({
      frontControl: '',
      backControl: '',
      nameControl: '',
      noteControl: ''
    });
  }

  //change frontend when on create
  onCreate(){
    const values = this.form.value;
    this.card.front = values.frontControl;
    this.card.back = values.backControl;
    this.card.setname = values.nameControl;
    this.card.notes = values.noteControl;
    this.service.create(this.card).subscribe( () => this.getTable());
    this.modalService.dismissAll();
  }

  //change frontend when on save
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

  onDelete(id: number){
    console.log(this.card)
    this.service.deleteCard(id).subscribe(() => this.getTable());
    this.modalService.dismissAll();
  }

  applyFilter(event: any) {
    this.searchString = event.target.value;
    this.getTable()
  }

}
