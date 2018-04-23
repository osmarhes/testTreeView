import { Component, OnInit, Input } from '@angular/core';
import { Itens } from './itens';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() public itens: Array<Itens>;
  @Input() public data1: Promise<any>;
  @Input() public linha: number = 0;

  constructor() { }

  ngOnInit() {
    if (this.data1) {
      this.data1.then((data) => {
        let itensTemp: Array<Itens> = new Array<Itens>();
        for (let i = 0; i < data.length; i++) {
          let nodeSubItem: Array<Itens> = new Array<Itens>();
          for(let j = 0; j < data[i].subItens[0].subItens.length; j++){
            nodeSubItem.push(new Itens(data[i].subItens[0].subItens[j].description, [], this.getItens(data[i].subItens[0].subItens[j].subItens)));
          }
          let subItem = new Itens(data[i].subItens[0].description, nodeSubItem, []);
          let item = new Itens(data[i].description, [subItem], []);
          itensTemp.push(item);
        }
        this.itens = itensTemp;
      });
    }

  }

  getItens(data: any){
    let itensTemp: Array<Itens> = new Array<Itens>();
    for (let i = 0; i < data.length; i++) {
      itensTemp.push(new Itens(data[i].description, [], []));
    }
    
    return itensTemp;
  }

}
