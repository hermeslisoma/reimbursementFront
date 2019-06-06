

export interface IStoreState{
  loginState:ILoginState,
  usersListState:IUserListItem[],
  reimbursementsListState   : IReimbursement[],
  messageState:IMessageState
}
export interface IMessageState{
  message:Object;
}

export interface ILoginState{
    rol:number,
    userId: number,
    token:string,
    isAuthenticated:Boolean,
    user:Object,
    response?:{
      message?:string
    }
}

export interface IUserListItem{
  id: number, // primary key
  userName: string,// not null, unique
  firstName: string, // not null
  lastName:string,
  email: string, // not null
  role: {
    id:number,
    role:string
  }
}
export interface IReimbursement{
  reimbursement_id: number,
  author_name: string,
  author_id: number,          
  amount: number,    
  submitted_date: string,
  resolve_date:string,
  description: string,
  resolver_name: string,
  resolver_id: number,
  status_id: number,
  status: string,
  type_id: number,
  type:string
}