import * as types from './actionType'
const initialState={
    getUserData:null,
    isDataGet:false
}

function UserForm(state=initialState,action){
    switch(action.type){
        case types.GET_DETAILS:
            return{
                ...state,
                isDataGet:false,
                getUserData:null
            }
            case types.GET_DETAILS_SUCCESS:
                return{
                    ...state,
                    isDataGet:true,
                    getUserData:action.payload
                }
                case types.GET_DETAILS_FAILED:
                    return{
                        ...state,
                        isDataGet:false,
                        getUserData:action.payload
                    }

                    default:
                        return{
                            ...state
                        }
    }
}

export default UserForm;