import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListTagsComponent } from './recipe-list-tags.component';

describe('RecipeListTagsComponent', () => {
  let component: RecipeListTagsComponent;
  let fixture: ComponentFixture<RecipeListTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeListTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeListTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
