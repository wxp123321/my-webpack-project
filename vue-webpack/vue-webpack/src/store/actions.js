import * as Types from './mutation-type'

export default {
  addTodo ({ commit }, todo) {
    commit(Types.ADDTODO, todo)
  },

  delTodo ({ commit }, todo) {
    commit(Types.DELTODO, todo)
  }
}
