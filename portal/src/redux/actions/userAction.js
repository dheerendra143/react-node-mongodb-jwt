const singInAction = (payload) => {
  return {
    type: "signIn",
    payload
  }
}

const singOutAction = (payload) => {
  return {
    type: "signOut",
    payload
  }
}

export { singInAction, singOutAction };