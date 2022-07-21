
import * as UserActionsCreators from './user'
import * as PhotoActionsCreators from './photo'

export const ActionsCreators = {
  ...UserActionsCreators,
  ...PhotoActionsCreators
}