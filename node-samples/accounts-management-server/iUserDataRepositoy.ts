import {User} from './userModel'
export interface IUserDataRepository{

    getAllUsers():User[];
    addNewUser(user:User):void;
    updateUser(user:User):void;
    deleteUser(user:User):void

}