import Parse from "parse";

// auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.username);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  return user
    .signUp()
    .then((newUserSaved) => {
      createProfile(newUserSaved,newUser.username);
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

export const createProfile = async ( user, username ) => {
  const Profile = Parse.Object.extend("profile");
  const profile = new Profile();

  profile.set("user", user);
  profile.set("username", username);

  const result = await profile.save();

  return {
      id: result.id,
      username: username,
      userId: result.get("user").id
  };
};


// auth login component
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("password", currUser.password);
  user.set("username", currUser.username);

  return user
    .logIn(user.username, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// auth logout component
export const logoutUser = () => {
  return Parse.User.logOut()
    .then(() => {
      console.log("User logged out successfully.");
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// checks if user is authenticated
export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};
