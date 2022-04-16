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
            return state
        default:
            return state;
    }
}

export default chatsReducer;