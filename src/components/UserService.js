export class UserService{
    static userId = -1;

    static setUserId(id){
        this.userId = id;
    }

    static getUserId(){
        return this.userId;
    }
}

