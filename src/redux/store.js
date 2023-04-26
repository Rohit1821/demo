import { applyMiddleware,compose,createStore } from "redux";
import reducer from './rootReducer'
import thunk from'redux-thunk'
import API from '../Utils/endpoints'
import axios from 'axios'
const axiosInstance= axios.create({
    baseURL:API.baseUrl
});

const enhancer =compose(applyMiddleware(thunk.withExtraArgument(axiosInstance)))

const store=createStore(reducer,enhancer)

export default store