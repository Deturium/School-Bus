// ADD_NOTIFICATION payloads

export const networkErr = {
  title: 'Network Error',
  description: "Please check your network.",
  type: "ERROR",
  survivalTime: 10
}


export const logInErr = {
  title: 'Log In Fail',
  description: 'Please check your username and password and retry.',
  type: "ERROR",
  survivalTime: 5
}

export const updateInfoErr = {
  title: 'Update Fail',
  description: 'Please check and try again.',
  type: "ERROR",
  survivalTime: 7
}


export const unLogInErr = {
  title: 'Un LogIn',
  description: 'Please Log In first.',
  type: "HINT",
  survivalTime: 10
}

export const submitFlagErr = {
  title: 'Submit Fail',
  description: 'Please check your flag and retry.',
  type: "ERROR",
  survivalTime: 7
}
