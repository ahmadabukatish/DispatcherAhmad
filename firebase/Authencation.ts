import auth from '@react-native-firebase/auth';
class Authencation
{
    constructor(){

    }
    /**
     * name
     */
    public registerNewEmail(email:string,password:string) {
        auth().createUserWithEmailAndPassword('test.test.com','PassowrdAdmin111')
        .then(() => {
            console.log('User created & signed in!');
        })   
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') 
                console.log('That email address is already in use!');
            if (error.code === 'auth/invalid-email') 
                console.log('That email address is invalid!');
            console.error(error);
        });
        
    }
}
export {Authencation};