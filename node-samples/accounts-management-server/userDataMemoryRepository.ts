import {User} from './userModel'
import {IUserDataRepository} from './iUserDataRepositoy'
export class UserDataMemoryRepository implements IUserDataRepository{

    users:User[];
    constructor(){

        this.users=new Array();
        this.users.push(new User("Tom","tom@123","tom@pic.com"));
        this.users.push(new User("Hary","hary@123","hary@pic.com"));
        this.users.push(new User("Jack","jack@123","jack@pic.com"));
        this.users.push(new User("James","james@123","james@pic.com"));
        this.users.push(new User("Jiny","jiny@123","jiny@pic.com"));
    }

    getAllUsers():User[]{
        return this.users;
    }

    addNewUser(user:User):void{
        this.users.push(user);
    }
    updateUser(user:User):void{
        //
    }
    deleteUser(user:User):void {
        //delete
    }




}