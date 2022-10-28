export interface Recipe {
  image: string;
  name: string;
  tags: Tag[];
}

export interface Tag {
  name: string,
  color: string,
  backgroundColor: string
}

