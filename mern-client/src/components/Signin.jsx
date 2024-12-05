// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contects/AuthProvider';

// const SignIn = () => {
//     const { signInWithEmailAndPassword, signUpWithGmail } = useContext(AuthContext); // Get authentication functions from context
//     const [error, setError] = useState('');

//     const location = useLocation();
//     const navigate = useNavigate();

//     const from = location.state?.from?.pathname || '/';

//     const handleSignIn = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signInWithEmailAndPassword(email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 alert("Logged in successfully!");
//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 const errorMessage = error.message;
//                 setError(errorMessage);
//             });
//     };

//     const handleGoogleSignIn = () => {
//         signUpWithGmail()
//             .then((result) => {
//                 alert("Logged in with Google successfully!");
//                 navigate(from, { replace: true });
//             })
//             .catch((error) => {
//                 setError(error.message);
//             });
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//             <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//                 <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//                     <div className="max-w-md mx-auto">
//                         <div>
//                             <h1 className="text-2xl font-semibold">Sign In</h1>
//                         </div>
//                         <div className="divide-y divide-gray-200">
//                             <form onSubmit={handleSignIn} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                                 <div className="relative">
//                                     <input
//                                         id="email"
//                                         name="email"
//                                         type="text"
//                                         className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                                         placeholder="Email address"
//                                         required
//                                     />
//                                 </div>
//                                 <div className="relative">
//                                     <input
//                                         id="password"
//                                         name="password"
//                                         type="password"
//                                         className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                                         placeholder="Password"
//                                         required
//                                     />
//                                 </div>
//                                 <p>
//                                     Don't have an account? <Link to="/signup" className="text-blue-600 underline">Sign Up</Link>
//                                 </p>
//                                 <div className="relative">
//                                     <button className="bg-blue-500 text-white rounded-md px-2 py-1">Sign In</button>
//                                 </div>
//                                 <div className="relative mt-4 text-center">
//                                     <button
//                                         onClick={handleGoogleSignIn}
//                                         className="bg-red-500 text-white rounded-md px-2 py-1"
//                                         type="button"
//                                     >
//                                         Sign In with Google
//                                     </button>
//                                 </div>
//                                 {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignIn;


// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contects/AuthProvider';

// const SignIn = () => {
//     const { signInWithEmailAndPassword, signUpWithGmail } = useContext(AuthContext);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const location = useLocation();
//     const navigate = useNavigate();
//     const from = location.state?.from?.pathname || '/';

//     const handleSignIn = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         if (!email || !password) {
//             setError('Please enter both email and password.');
//             return;
//         }

//         setError('');
//         setLoading(true);
//         signInWithEmailAndPassword(email, password)
//             .then((userCredential) => {
//                 setLoading(false);
//                 alert('Logged in successfully!');
//                 navigate('/');
//             })
//             .catch((error) => {
//                 setLoading(false);
//                 setError('Invalid email or password. Please try again.');
//             });
//     };

//     const handleGoogleSignIn = () => {
//         setLoading(true);
//         signUpWithGmail()
//             .then(() => {
//                 setLoading(false);
//                 alert('Logged in with Google successfully!');
//                 navigate('/');
//             })
//             .catch((error) => {
//                 setLoading(false);
//                 setError('Failed to sign in with Google. Please try again.');
//             });
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//             <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//                 <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//                     <div className="max-w-md mx-auto">
//                         <div>
//                             <h1 className="text-2xl font-semibold">Sign In</h1>
//                         </div>
//                         <div className="divide-y divide-gray-200">
//                             <form onSubmit={handleSignIn} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                                 <div className="relative">
//                                     <input
//                                         id="email"
//                                         name="email"
//                                         type="email"
//                                         required
//                                         className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
//                                         placeholder="Email address"
//                                     />
//                                 </div>
//                                 <div className="relative">
//                                     <input
//                                         id="password"
//                                         name="password"
//                                         type="password"
//                                         required
//                                         className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
//                                         placeholder="Password"
//                                     />
//                                 </div>
//                                 {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//                                 <p>
//                                     Don't have an account?{' '}
//                                     <Link to="/signup" className="text-blue-600 underline">
//                                         Sign Up
//                                     </Link>
//                                 </p>
//                                 <div className="relative">
//                                     <button
//                                         disabled={loading}
//                                         className="bg-blue-500 text-white rounded-md px-4 py-2 w-full"
//                                     >
//                                         {loading ? 'Signing in...' : 'Sign In'}
//                                     </button>
//                                 </div>
//                                 <div className="relative mt-4 text-center">
//                                     <button
//                                         onClick={handleGoogleSignIn}
//                                         className="bg-red-500 text-white rounded-md px-4 py-2"
//                                         disabled={loading}
//                                     >
//                                         {loading ? 'Signing in...' : 'Sign In with Google'}
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignIn;


import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';

const SignIn = () => {
    const { signInUser, signUpWithGoogle } = useContext(AuthContext); // Updated to match your AuthProvider
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // Handle email and password sign-in
    const handleSignIn = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        try {
            setLoading(true);
            setError('');
            await signInUser(email, password); // Using the function from AuthProvider
            alert('Logged in successfully!');
            navigate(from, { replace: true });
        } catch (error) {
            console.error('Sign-in error:', error);
            setError('Invalid email or password. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Handle Google sign-in
    const handleGoogleSignIn = async () => {
        try {
            setLoading(true);
            setError('');
            await signUpWithGoogle(); // Using the function from AuthProvider
            alert('Logged in with Google successfully!');
            navigate(from, { replace: true });
        } catch (error) {
            console.error('Google sign-in error:', error);
            setError('Failed to sign in with Google. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Sign In</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form
                                onSubmit={handleSignIn}
                                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                            >
                                <div className="relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                        placeholder="Password"
                                    />
                                </div>
                                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                                <p>
                                    Don't have an account?{' '}
                                    <Link to="/signup" className="text-blue-600 underline">
                                        Sign Up
                                    </Link>
                                </p>
                                <div className="relative">
                                    <button
                                        disabled={loading}
                                        className="bg-blue-500 text-white rounded-md px-4 py-2 w-full"
                                    >
                                        {loading ? 'Signing in...' : 'Sign In'}
                                    </button>
                                </div>
                                <div className="relative mt-4 text-center">
                                    <button
                                        onClick={handleGoogleSignIn}
                                        className="bg-red-500 text-white rounded-md px-4 py-2"
                                        disabled={loading}
                                    >
                                        {loading ? 'Signing in...' : 'Sign In with Google'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
