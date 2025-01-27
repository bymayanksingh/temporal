export interface Project {
  id: number;
  category: string;
  title: string;
  image: string;
  year?: string;
  client?: string;
  role?: string;
  description?: string;
  images?: string[];
}