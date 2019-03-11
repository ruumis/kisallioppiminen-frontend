import { User } from "../../types/InitialState";
import {ThunkDispatch, ThunkAction } from 'redux-thunk'
import { AnyAction } from "redux";
import userService from "../../services/userService";

export class Action extends String {}

export const CHANGE_PAGE: Action = 'CHANGE_PAGE'

export const FETCH_USER: Action = 'FETCH_USER'

export const SET_USER: Action = 'SET_USER'

export const changePage = (page: string) => ({ type: CHANGE_PAGE, data: page })

export const fetchUser = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => userService.login().then(user => {
    dispatch(setUser(user))
  })
}

export const setUser = (user: User) => ({type: SET_USER, user})