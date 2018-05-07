import { combineReducers } from 'redux'
import MembersReducer from './reducer-members'
import ActiveMember from './reducer-member-selected'
import CountriesReducer from './reducer-countries'
import GithubReducer from './reducer-github'
import UserGithub from './reducer-github-selected'

export default combineReducers({
  members: MembersReducer,
  activeMember: ActiveMember,
  countries: CountriesReducer,
  githubs: GithubReducer,
  userGithub: UserGithub,
  
})