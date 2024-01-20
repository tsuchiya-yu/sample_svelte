export interface UserSns {
    id: number;
    x: string;
    facebook: string;
    instagram: string;
  }
  
export interface UserProfile {
    id: number;
    shopMstCode: string;
    catchphrase: string;
    introduction: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    userImageFile: string;
    userSns: UserSns;
    userProfile: UserProfile;
}

export interface SiteUpdate {
    id: number;
    title: string;
    description: string;
    publishedAt: string;
    updatedAt: string;
}

export interface ShopMst {
    code: string;
    name: string;
}