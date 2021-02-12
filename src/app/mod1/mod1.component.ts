import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component
  implements OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {
  logs: string[] = [];
  name:string = '';
  showChild:boolean = true;
  constructor() {
    this.name = "Lena";
    setTimeout(() => {this.updateName()}, 5000); //сигнатура стрелочной функции
    setTimeout(() => {this.hideChild()}, 10000)
  }
  ngAfterContentChecked(): void {
     console.log('app-mod1', 'ngAfterContentChecked', this.logs);
  }
  ngAfterViewInit(): void {
     console.log('app-mod1', 'ngAfterViewInit', this.logs);
  }
  ngAfterViewChecked(): void {
     console.log('app-mod1', 'ngAfterViewChecked', this.logs);
  }
  ngOnDestroy(): void {
     console.log('app-mod1', 'ngOnDestroy', this.logs);
  }
  ngAfterContentInit(): void {
     console.log('app-mod1', 'ngAfterContentInit', this.logs);
  }
  ngDoCheck(): void {
     console.log('app-mod1', 'ngDoCheck', this.logs);
  }
  ngOnInit(): void {
    console.log('app-mod1', 'ngOnInit', this.logs);
  }
  public ngOnChanges(changes: SimpleChanges): void {
    console.log('app-mod1', 'ngOnChanges', this.logs, changes);
  }

  onLog(data:string): void {
    this.logs.push(data);
  }

  updateName(): void {
    this.name = "Sasha";
  }

  hideChild(): void {
    this.showChild = false;
    this.onLog("onDestroy");
    
  }
  // ngOnInit(): void {
  // }
}
