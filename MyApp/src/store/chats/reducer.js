import { ADD_CHAT, DEL_CHAT } from "./action";

const initialState = {
    chatList:[]
};
/**
 * 
 * chatItem = {id: strind, name: string} 
 * 
     const chatList = [
        {
            id: 'some',
            name: 'string'
        }
    ]
*/

const chatsReducer = (state = initialState,action) =>{
    switch (action.type) {
        case ADD_CHAT:            
            return {
                 ...state,
                  chatList: [
                      ...state.chatList,
                    {
                        id: `id${state.chatList.length}`,
                        name: action.payload
                    }
                ]
            };
        case DEL_CHAT:
            //console.log(state);            
            //let newState = state.chatList.filter(chat => chat.id = action.payload);
            //console.log(newState);
            return {...state,
                chatList: [...state.chatList.filter(chat => chat.id !== action.payload)]
            }
        default:
            return state;
    }
}

export default chatsReducer;