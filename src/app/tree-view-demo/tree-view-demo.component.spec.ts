import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeViewDemoComponent } from './tree-view-demo.component';

describe('TreeViewDemoComponent', () => {
  let component: TreeViewDemoComponent;
  let fixture: ComponentFixture<TreeViewDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeViewDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeViewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
