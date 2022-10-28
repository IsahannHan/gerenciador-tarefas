import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/models/Recipe';

@Component({
  selector: 'app-recipe-list-tags',
  templateUrl: './recipe-list-tags.component.html',
  styleUrls: ['./recipe-list-tags.component.sass'],
})
export class RecipeListTagsComponent implements OnInit {
  @Input()
  tags: Tag[] = [];

  constructor() {}

  ngOnInit(): void {}
}
