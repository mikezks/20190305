import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  AfterContentInit,
  ContentChildren,
  QueryList
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabbed-pane',
  templateUrl: './tabbed-pane.component.html',
  styleUrls: ['./tabbed-pane.component.css']
})
export class TabbedPaneComponent implements OnInit, OnDestroy, AfterContentInit {
  @Input() activeId: number;
  @Output() activeIdChange = new EventEmitter<number>();
  
  currentTab: TabComponent;

  @ContentChildren(TabComponent)
  tabList: QueryList<TabComponent>;

  get tabs() {
    if (!this.tabList) return [];

    return this.tabList.toArray();
  }

  get currentTitle() {
    return this.tabs
      .find(tab => tab.id === this.activeId)
      .title;
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.activate();
  }

  activate() {
    this.tabList.forEach(
      tab => tab.active = tab.id === this.activeId
    );
  }

  jump(id: number) {
    this.activeId = id;
    this.activate();
    this.activeIdChange.emit(id);
  }

  expand() {
    for (let tab of this.tabs) {
      tab.active = true;
    }
  }

  collapse() {
    this.activate();
  }

  ngOnDestroy() {
    
  }
}
