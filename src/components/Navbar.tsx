import React ,{useState , useEffect}from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosNotifications ,IoIosLogIn} from 'react-icons/io';
import { IoPerson, IoEye, IoEyeOff } from 'react-icons/io5'; // Import Io icons
import { auth } from './firebase'; // Make sure to import your Firebase auth instance
import { db } from './firebase'; // Ensure you have initialized Firestore
import { doc, getDoc } from 'firebase/firestore';
import { FaShoppingCart } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const inStyle = {
  background: 'none',
  border: 'none',
};
interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  // Add other fields as needed
}
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLHeadingElement>) => {
    if (e.key === 'Enter') {
      navigate('/');
    }
  };

  return (
    <nav className="bg-info" aria-label="Main Navigation">
      <div className="py-2 d-flex align-items-center justify-content-between container">
        <div className="d-flex align-items-center">
          <h3
            className="mb-0 text-dark"
            style={{ cursor: 'pointer' }}
            aria-label="Go to Home Page"
            onClick={() => navigate('/')}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {t('app-title')}
          </h3>
        </div>
        <div>
          <button aria-label="View notifications" className="btn-icon" style={inStyle}>
            <IoIosNotifications color="white" size={25} className="me-2" />
          </button>
          <button aria-label="View shopping cart" className="btn-icon" style={inStyle}>
            <FaShoppingCart color="white" size={20} onClick={()=>{ navigate('/addtocart')}} />
          </button>
        { userDetails ?
       
       <button aria-label="View shopping cart" className="btn-icon" style={inStyle}>
       <p onClick={()=>{ navigate('/profile')}}> Hi..{userDetails?.firstName}</p>    
       </button>
    
    : 
       
       <button aria-label="View shopping cart" className="btn-icon" style={inStyle}>
            <IoPerson color="white" size={20} onClick={()=>{ navigate('/login')}}/>
          </button>}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
