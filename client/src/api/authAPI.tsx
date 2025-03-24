import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route

  try{

    //Send a Post REquest to the server
    const response = await fetch('auth/login', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    //errror handling

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.log('Error from user login: ', error);  // Log any errors that occur during fetch
    return Promise.reject('Could not fetch user info');  // Return a rejected promise with an error message
  } 
}



export { login };
