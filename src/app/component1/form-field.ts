export interface FormFileds{
    data:FormFiledsJSON[];

}
export interface FormFiledsJSON{
    name:string;
    label:string;
    value:string;
    type:string;
    validators:validatorJSON;
    option:OptionJSON[];
}
interface validatorJSON{
    required?:boolean;
    email?:boolean;
    minLength?:boolean;
    maxLength?:boolean;
    pattern?:string;
}
interface OptionJSON{
    label:string;
    value:string;
}
