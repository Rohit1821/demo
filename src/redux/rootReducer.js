import {combineReducers} from 'redux'
import UserForm from './Expense/reducer'
export default combineReducers({
    getData:UserForm,
})