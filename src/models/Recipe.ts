export interface Recipe {
  id: number,
  image: string;
  name: string;
  ingredients?: string;
  instructions?: string;
  tags: string[];
}
