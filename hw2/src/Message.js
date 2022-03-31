const Message =({data})=>{
    return (
    <div className="message-wrapper">
        <div>{data.author}</div>
        <div>{data.text}</div>
    </div>
    )
}

export default Message;
