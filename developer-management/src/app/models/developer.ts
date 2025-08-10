export interface Developer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string | null;
  position: string;
  photo: string;
  remote: boolean | null;
}
