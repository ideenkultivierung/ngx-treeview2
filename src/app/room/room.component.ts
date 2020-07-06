import { Component, OnInit } from '@angular/core';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';
import { RoomService } from './room.service';

@Component({
  selector: 'ngx-room',
  templateUrl: './room.component.html',
  providers: [
    RoomService
  ]
})
export class RoomComponent implements OnInit {
  items: TreeviewItem[];
  values: any[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: false,
    maxHeight: 500
  });

  constructor(
    private service: RoomService
  ) { }

  ngOnInit(): void {
    this.items = this.service.getRooms();
  }
}
