export interface IPost {
  _id: string;
  title: string;
  slug?: string;
  content?: string;
  image: string;
  category?: string;
  excerpt: string;
  author?: string;
  createdAt?: string;
}
