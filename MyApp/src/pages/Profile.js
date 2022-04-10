import { useCallback, } from 'react';

import { changeVisible } from '../store/profile/actions';
import {useDispatch, useSelector} from 'react-redux';
const Profile = () => {
    const {showName, name} = useSelector((state) => state)
    const dispatch = useDispatch();
    //const [, setDummy] = useState();

    const setShowName = useCallback(()=>{
        dispatch(changeVisible); 
        //setDummy({});
    }, [dispatch]);

    
    return (<div>
        <h1>Profile</h1>
        <button onClick={setShowName}>Show Name</button>
        <blockquote>{showName && <h3>{name}</h3>}</blockquote>
        </div>
    )
};
export default Profile;