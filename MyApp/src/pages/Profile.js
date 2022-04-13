import { useCallback, useState} from 'react';
import { Button, TextField } from '@mui/material';
import { changeVisible, changeCheckbox } from '../store/profile/actions';
import { useDispatch, useSelector } from 'react-redux';
const Profile = () => {
    const [userName, setUserName] = useState('');
    const { showName, name, checkboxState } = useSelector((state) => state)
    const dispatch = useDispatch();
    //const [, setDummy] = useState();

    const setShowName = useCallback(() => {
        dispatch(changeVisible);
    }, [dispatch]);

    const setCheckbox = useCallback(() => {
        dispatch(changeCheckbox);
    }, [dispatch]);

    const saveName =() => {
        console.log('nen');
    }

    const handleNameInput = (e) => {
        setUserName(userName);
    }


    return (<div>
        <h1>Profile</h1>
        <button onClick={setShowName}>Show Name</button>
        <blockquote>{showName && <h3>{name}</h3>}</blockquote>
        <p>Checkbox</p>
        
        <input type='checkbox' checked={checkboxState} onChange={setCheckbox} />
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