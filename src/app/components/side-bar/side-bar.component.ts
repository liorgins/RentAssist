import { AfterContentInit, AfterViewInit, Component, Directive, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements AfterContentInit {

  @Input() isOpen!: boolean;
  @Output() itemClicked = new EventEmitter();



  constructor(private elem: ElementRef){}

  onItemClicked(e: any) {
    this.itemClicked.emit('clicked')
  }

  ngAfterContentInit(): void {
    let item = this.elem.nativeElement as HTMLElement;
    item.querySelectorAll('.menu-item').forEach(element => {
      element.addEventListener('click', () => this.itemClicked.emit('clicked'))
    });
  }
  

}
