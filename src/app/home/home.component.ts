import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {

  @Input() parentData: string;
  @Output() childData = new EventEmitter<string>();
  @ViewChild('viewContents', {static: true}) 
    viewChildVariable: ElementRef;

  constructor() {
    // console.log('constructor is called');
  }

  ngOnInit() {
    // console.log('ngOnInit is executed');
    console.log(this.viewChildVariable.nativeElement.innerText);
    this.childData.emit('Welcome to Pune');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    // console.log('ngOnChanges method executed');
  }

  ngDoCheck() {
    // console.log('ngDoCheck method is called');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit is called');
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked is called');
  }

  ngAfterViewInit() {
    console.log(this.viewChildVariable.nativeElement.innerText);

    // console.log('ngAfterViewInit is called');
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked is called');
  }
}
