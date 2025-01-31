export type setLoadingType = React.Dispatch<React.SetStateAction<boolean>>
export type authDataType = {
    username:string,
    password:string,
    confirmPassword?:string,
}
export type userType = {
    id: string;
    img: string;
    isOnline: boolean;
    username: string;
    email: string;
    bio?: string;
    creationTime?: string;
    lastSeen?: string;
}
export interface Story {
  author: string;
  id: number;
  caption: string;
  image?: string;
  likes?:number;
  created_at?: string;
  updated_at?: string;
  tags?:string;
}

