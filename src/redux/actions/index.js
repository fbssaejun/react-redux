// ACTIONS
export const increment = (number) => {
  return {
    type: 'Increment',
    payload: {
      number: number,
      letter: 'D'
    }
  }
}

export const decrement = () => {
  return {
    type: 'Decrement'
  }
}
