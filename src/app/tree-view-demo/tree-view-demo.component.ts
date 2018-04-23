import { Component, OnInit } from '@angular/core';
import { Itens } from '../tree-view/itens';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-tree-view-demo',
  templateUrl: './tree-view-demo.component.html',
  styleUrls: ['./tree-view-demo.component.css']
})
export class TreeViewDemoComponent implements OnInit {

  directories: Array<Itens>;
  itens: Promise<any>;


  constructor(private httpService: HttpClient) {

  }

  ngOnInit() {
    this.loadDirectories();
    this.itens = this.loadObject();
  }

  loadDirectories() {

    const fall2014 = new Itens('Fall 2014', [], ['image1.jpg', 'image2.jpg', 'image3.jpg']);
    const summer2014 = new Itens('Summer 2014', [], ['image10.jpg', 'image20.jpg', 'image30.jpg']);
    const pics = new Itens('Pictures', [summer2014, fall2014], []);

    const music = new Itens('Music', [], ['song1.mp3', 'song2.mp3']);

    this.directories = [pics, music];

    //console.log(this.directories);
  }

  loadObject() {
    return new Promise(
      (resolve, reject) => {
        this.httpService.get('./assets/teste.json').subscribe(
          data => {
            resolve(data); // FILL THE ARRAY WITH DATA.
          },
          (err: HttpErrorResponse) => {
            console.log(err.message);
          }
        );
      });
  }
}
