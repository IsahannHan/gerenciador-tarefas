export class Recipe {
  id: string;
  image: string | ArrayBuffer | null;
  name: string;
  ingredients: string;
  instructions: string;
  tags: string;

  constructor(
    id: string,
    image: string,
    name: string,
    ingredients: string,
    instructions: string,
    tags: string
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tags = tags;
  }
}
