let users = [];
let id = 0;

export default class userModel{
    constructor(id,name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password
    }

    static newUser(newobject){
        const user = new userModel(id + 1, newobject.name, newobject.email, newobject.password);
        users.push(user);
    }

    static userCred(object){
        const user = users.find( (u)=> { return u.email == object.email && u.password == object.password });
        return user
    }

    static checkEmail(email){
        const status = users.find( (u)=> { return u.email == email})
        return status
    }

    static getUsers(){
        return users;
    }

}
