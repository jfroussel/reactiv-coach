import { combineReducers } from 'redux'
import MembersReducer from './reducer-members'
import ActiveMember from './reducer-member-selected'
import CountriesReducer from './reducer-countries'

export default combineReducers({
  members: MembersReducer,
  activeMember: ActiveMember,
  countries: CountriesReducer,
 
})