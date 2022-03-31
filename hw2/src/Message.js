const Message =({data})=>{
    return (
    <div className="message-wrapper">
        <div className="message-author">{data.author}</div>
        <div className="message-text">{data.text}</div>
    </div>
    )
}

export default Message;
