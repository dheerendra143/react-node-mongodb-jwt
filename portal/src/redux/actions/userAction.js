const signInAction = (payload) => {
  return {
    type: "signIn",
    payload
  }
}

const signOutAction = (payload) => {
  return {
    type: "signOut",
    payload
  }
}

export { signInAction, signOutAction };