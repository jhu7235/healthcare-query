import React from 'react';

export default ({fullMessage, markAsRead}) => {
	// console.log(markAsRead)
	return (

    <div onClick={(messageData) => markAsRead(messageData.id)}>
        <h1>From: <span>{fullMessage.from.email}</span></h1>
        <h2>To: <span>{fullMessage.to.email}</span></h2>
        <h3>Subject: <span>{fullMessage.subject}</span></h3>
        <p>{fullMessage.body}</p>
    </div>
)};