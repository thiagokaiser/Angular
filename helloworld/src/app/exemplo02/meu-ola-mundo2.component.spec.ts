import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuOlaMundo2Component } from './meu-ola-mundo2.component';

describe('MeuOlaMundo2Component', () => {
  let component: MeuOlaMundo2Component;
  let fixture: ComponentFixture<MeuOlaMundo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuOlaMundo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuOlaMundo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
