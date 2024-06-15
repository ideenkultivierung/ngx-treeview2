import {Injectable} from '@angular/core';
import {DefaultTreeviewI18n, TreeviewItem, TreeviewSelection} from 'ngx-treeview2';

@Injectable()
export class DropdownTreeviewSelectI18n extends DefaultTreeviewI18n {
  private internalSelectedItem: TreeviewItem;

  set selectedItem(value: TreeviewItem) {
    this.internalSelectedItem = value;
  }

  get selectedItem(): TreeviewItem {
    return this.internalSelectedItem;
  }

  override getText(selection: TreeviewSelection): string {
    return this.internalSelectedItem ? this.internalSelectedItem.text : 'Please select';
  }
}
