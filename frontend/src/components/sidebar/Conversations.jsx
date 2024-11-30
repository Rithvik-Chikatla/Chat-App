import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  console.log('convo', conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation conversation={conversation}
        key = {conversation._id}
        emoji = {getRandomEmoji()}
        lastIdx = {idx === conversations.length - 1} />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations