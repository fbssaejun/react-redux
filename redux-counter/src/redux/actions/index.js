// ACTIONS
export const increment = () => {
  return {
    type: 'Increment',
    payload: {
      // Add as much as you want
      letter: 'D'
    }
  }
}

export const decrement = () => {
  return {
    type: 'Decrement'
  }
}

export const reset = () => {
  return {
    type: 'Reset'
  }
}
