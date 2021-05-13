import React ,{useContext , useState ,useEffect}from 'react';
import {auth} from '../firebase';
import {db} from '../firebase'
const AuthContext = React.createContext();

export const useAuth =()=>{
return useContext(AuthContext)
}


 export const Authprovider = ({children}) => {
    const [currentUser,setCurrentUser]=useState();
    const [loading,setLoading] =useState(true)
    const [userInfo,setUserInfo]=useState(null)
    const signup =(email,password,name,mobNo)=>{
       return auth.createUserWithEmailAndPassword(email,password)
       .then(user=>{
          db.users.doc(email).set({
               name:name,
               mobNo:mobNo,
               userId:user.user.uid
           })
       });
    }
    
    const login =(email,password)=>{
        return auth.signInWithEmailAndPassword(email,password);
    }
    const logout =()=>{
        return auth.signOut();
    }
    const resetPassword =(email)=>{
        return auth.sendPasswordResetEmail(email);
    }
    const updateEmail =(email)=>{
        return currentUser.updateEmail(email);
        
    }
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            if(user){
            const data= db.users.doc(user.email).get().then(doc=>{
                // console.log(db.formatedDoc(doc))
                setUserInfo(db.formatedDoc(doc))
             })
             console.log(userInfo)
            }
            setLoading(false)
        });

        return unsubscribe;
    },[currentUser]);


    const value = {
        currentUser,
        userInfo,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading&&children}
        </AuthContext.Provider>
    )
}

