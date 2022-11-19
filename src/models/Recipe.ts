export class Recipe {
  id: number;
  image: string | ArrayBuffer | null;
  name: string;
  ingredients: string;
  instructions: string;
  tags: string;

  constructor(
    id: number,
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
