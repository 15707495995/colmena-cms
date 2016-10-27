import {Injectable} from '@angular/core';
import {DomainApi} from '../shared/sdk/services';
import {Domain} from '../shared/sdk/models';

@Injectable()
export class DomainsService {

  constructor(private domainApi: DomainApi) {}

  public icon = 'icon-globe';
  public title = 'Domains';

  public fields = [
    'id',
    'name',
  ]

  public formConfig = {
    fields: [
      {name: 'id', label: 'ID', type: 'text', placeholder: 'ID'},
      {name: 'name', label: 'Name', type: 'text', placeholder: 'Name'},
    ]
  };

  public tableConfig = {
    class: 'table table-bordered table-striped table-condensed',
    columns: [
      {field: 'id', label: 'ID', link: './'},
    ],
    rowButtons: [
      {class: 'btn btn-sm btn-outline-primary', icon: 'fa fa-fw fa-pencil', link: 'edit'},
      {class: 'btn btn-sm btn-outline-danger', icon: 'fa fa-fw fa-trash', click: (item) => this.deleteItem(item.id)},
    ]
  };

  private item: Domain = new Domain();
  private items: Domain[];

  deleteItem(id) {
    return this.domainApi.deleteById(id).subscribe(
      () => this.getItems(),
      err => console.error(err)
    )
  }

  getItem(id) {
    if (id) {
      return this.domainApi.findById(id).subscribe(res => this.item = res);
    } else {
      this.newItem()
    }
  }

  getItems() {
    return this.domainApi.find().subscribe(res => (this.items = res));
  }

  newItem() {
    this.item = new Domain();
  }

  upsertItem(successCb, errorCb): void {
    this.domainApi.upsert(this.item).subscribe(successCb, errorCb)
  }

}
