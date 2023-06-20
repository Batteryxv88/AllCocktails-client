export type Ing = {
    name: string;
    vol: number | null;
    measure: string;
  };
  
  export type CommentType = {
    id: number;
    author: string;
    date: Date;
    comment: string;
    icon: string;
  };
  
  export type CocktalesArr = {
    name: string;
    id: string;
    _id?: string;
    season: string;
    src: string;
    src_sqv: string;
    clas: string;
    description: string;
    ingredients: Ing[];
    comment: CommentType[]
  };