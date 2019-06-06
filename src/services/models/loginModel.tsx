export interface LoginUser {
    token:string,
    user:User 
    };
export interface User {
    id: number,
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    role: Role
} ; 
export interface Role{ 
        id: number,
        role: string
};
