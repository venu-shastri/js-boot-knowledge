import {User} from './userModel'
import {IUserDataRepository} from './iUserDataRepositoy'
export class AccountDataService{

    
    constructor(private repo:IUserDataRepository){

    

    }
    register(user:User):string{

        let message;
        try{
        this.repo.addNewUser(user);
        message="New User registered Succesfully";
        }
        catch(e){

            message="New User Registration UnSuccessfull";
        }
        return message;

    }

    validate(userName:string,password:string):boolean{
       let users:User[]= this.repo.getAllUsers();
       //
        return false;

    }
    changePassword(userName:string,oldPassword:string,newPassword:string):boolean{

        return false;
    }
    recoverPassword(email:string):string{

        return "Email Sent";
    }
    
}