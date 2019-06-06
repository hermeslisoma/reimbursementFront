export interface Reimbursement{
    reimbursement_id : number;
    author_name? :string;
    author_id? : number;
    amount :string;
    submitted_date :string;
    resolve_date? :string;
    description : string;
    resolver_name? : string;
    resolver_id? : number;
    status_id : number;
    status? : string;
    type_id : number;
    type? : string;
}
export interface createReimbursement{
    amount :string;
    description : string;
    type_id : number;
}
