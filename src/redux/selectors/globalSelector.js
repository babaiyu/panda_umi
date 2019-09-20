import { createSelector } from 'reselect'

const global = state => state.global.payload
export const globalSelector = createSelector(global, item => { return item })