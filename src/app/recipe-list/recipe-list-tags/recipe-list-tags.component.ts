import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-list-tags',
  templateUrl: './recipe-list-tags.component.html',
  styleUrls: ['./recipe-list-tags.component.sass'],
})
export class RecipeListTagsComponent implements OnInit {
  @Input()
  tags: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
