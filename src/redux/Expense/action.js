import * as types from "./actionType";
import API from "../../Utils/endpoints";
export function dataForm() {
  return {
    type: types.GET_DETAILS,
  };
}

export function dataFormSucess(payload) {
  return {
    type: types.GET_DETAILS_SUCCESS,
    payload,
  };
}

export function dataFormFailed(payload) {
  return {
    type: types.GET_DETAILS_FAILED,
    payload,
  };
}

export const getFormData = (payload) => async (dispatch, getState, api) => {
  dispatch(dataForm());
  try {
    const response = await api.get(API.getFormDataAPi);
    console.log("checking the response", response);
    if (response.status === 200) {
      dispatch(dataFormSucess(response.data));
    }
  } catch (error) {
    dispatch(dataFormFailed());
  }
};
