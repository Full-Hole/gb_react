import { Button, Box, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


const MessageInput = (props) => {

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
                onChange={props.onChange}
                value={props.value}
                autoFocus = {true}
            />
            <Button variant="contained" onClick={props.onClick} endIcon={<SendIcon />}>
                Send
            </Button>
        </Box>

    )


}

export default MessageInput;