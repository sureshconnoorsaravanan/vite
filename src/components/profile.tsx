import React, { useEffect, useState } from 'react';
import { auth } from './firebase'; // Make sure to import your Firebase auth instance
import { db } from './firebase'; // Ensure you have initialized Firestore
import { doc, getDoc } from 'firebase/firestore';

interface UserDetails {
  fName: string;
  lName: string;
  email: string;
  // Add other fields as needed
}

const MyComponent: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  
  const FetchData = async (userUid: string) => {
    try {
      const docRef = doc(db, "Users", userUid);
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
    // Listen to auth state changes and fetch user data
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is logged in:", user);
        FetchData(user.uid); // Call FetchData with the user UID
      } else {
        console.log("No user is logged in.");
        setUserDetails(null); // Clear user details when no user is logged in
      }
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, []);

  // Render the component
  return (
    <div>
      {userDetails ? (
        <div>
          <h1>Welcome, {userDetails.fName} {userDetails.lName}</h1>
          <p>Email: {userDetails.email}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default MyComponent;
