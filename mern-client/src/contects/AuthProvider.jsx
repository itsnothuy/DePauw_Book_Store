// import React, { createContext, useState, useEffect } from 'react';
// import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
// import app from "../firebase/firebase.config";

// // Create Auth Context
// export const AuthContext = createContext();

// // Initialize Firebase Auth
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Create user with email and password
//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     // Sign in with Google
//     // const signUpWithGmail = () => {
//     //     const provider = new GoogleAuthProvider();
//     //     setLoading(true);
//     //     return signInWithPopup(auth, provider);
//     // };

//     const authInfo = {
//       createUser
//     }
    

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;



import React, { createContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase.config';

// Named export for AuthContext
export const AuthContext = createContext();

// Named export for AuthProvider
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(getAuth(app), email, password);
    };

    const signUpWithGmail = () => {
        const provider = new GoogleAuthProvider();
        setLoading(true);
        return signInWithPopup(getAuth(app), provider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(app), (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = { user, createUser, signUpWithGmail, loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;