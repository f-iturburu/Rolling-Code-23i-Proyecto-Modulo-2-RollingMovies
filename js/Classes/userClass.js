
class User {

    constructor(userName,email,password,role,id) {
        
        this.email = email;

        this.password = password;

        this.userName = userName;

        this.role = role;   

        this.id = id;

        this.favoritesMovies = [];
    }

   
}

export {User}