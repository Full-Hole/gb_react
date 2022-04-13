import { useCallback, useState} from 'react';
import { Button, TextField } from '@mui/material';
import { changeVisible, updateName} from '../store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
const Profile = () => {
    
    const { showName, name } = useSelector((state) => state)
    const dispatch = useDispatch();
    const [userName, setUserName] = useState(name);
    //const [, setDummy] = useState();

    const setShowName = useCallback(() => {
        dispatch(changeVisible);
    }, [dispatch]);

    const saveName = useCallback(() => {    
        dispatch(updateName(userName));
    }, [dispatch, userName]);

    // const saveName =() => {
    //     console.log('nen');
    // }

    const handleNameInput = (e) => {
        setUserName(e.target.value);
       
    }


    return (<div>
        <h1>Profile</h1>
        <button onClick={setShowName}>Show Name</button>
        <blockquote>{showName && <h3>{name}</h3>}</blockquote>
       
        <br/>
        <TextField id="outlined-basic" label="Имя" variant="outlined" onChange={handleNameInput}
                value={userName}/>
                <br/>
        <Button variant="contained" onClick={saveName}>
                Сохранить
            </Button>
    </div>
    )
};
export default Profile;