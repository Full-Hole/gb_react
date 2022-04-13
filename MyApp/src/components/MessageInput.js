import { useRef, useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
//import { AUTHOR } from '../constant/common'
import { useSelector } from 'react-redux';


const MessageInput = (props) => {    
    const inputEl = useRef();
    const [message, setMessage] = useState([]);
    const { name } = useSelector((state) => state)
    const submitForm = (e) => {
        e.preventDefault();
        inputEl.current?.focus();

        if (message) {
            props.addMessage(props.chatId, { author: name, text: message });
            setMessage("");
        }
        else
            console.log("Empty message");
    }

    const handleMessageInput = (e) => {
        setMessage(e.target.value);
    }

    return (
        <Box
            component="form"
            sx={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                marginTop: 2
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-textarea"
                label="Сообщение"
                placeholder="Введите сообщение"
                multiline
                rows={2}
                onChange={handleMessageInput}
                value={message}
                autoFocus
                inputRef={inputEl}
            />
            <Button variant="contained" onClick={submitForm} endIcon={<SendIcon />}>
                Send
            </Button>
        </Box>

    )


}

export default MessageInput;