import React, { useEffect, useState } from 'react';
import { auth } from './firebase'; // Make sure to import your Firebase auth instance
import { db } from './firebase'; // Ensure you have initialized Firestore
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  // Add other fields as needed
}

const MyComponent: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const navigate = useNavigate();

  const FetchData = async (userUid: string) => {
    try {
      const docRef = doc(db, "Users id", userUid);
       // Create the document reference
       console.log("getDoc(docRef):",getDoc(docRef));

      const docSnap = await getDoc(docRef); // Get the document snapshot
      console.log("docSnap:", docSnap);

      if (docSnap?.exists()) {
        setUserDetails(docSnap?.data() as UserDetails); // Safely cast to UserDetails
        console.log("user details:", docSnap?.data());
      } else {
        console.log("No user data found.");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is logged in:", user);
        FetchData(user?.uid); // Call FetchData with the user UID
      } else {
        console.log("No user is logged in.");
        setUserDetails(null); // Clear user details when no user is logged in
      }
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

 async function logout(){
    try {
      await auth.signOut()

      navigate('/login')
      console.log('user is logged out successfully:', );

    } catch (error) {
      console.error("Error  user data:", error);
    }
  }
  // Render the component
  return (
    <div>
      {userDetails ? (
        <div>
          <h1>Welcome {userDetails.firstName}  to Comcast</h1>
          <p>Name: {userDetails.firstName} {userDetails.lastName}</p>
          <p>Email: {userDetails.email}</p>

          <button onClick={()=>{logout()}}>Logout</button>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default MyComponent;
