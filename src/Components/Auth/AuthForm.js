import React from "react";
import styles from './auth.module.css'; 

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      {!isLogin ? 
      <div className={styles.PlaceLeft}> 
        <div className={styles.LatoFontHeader+" "+styles.PlaceLeft}><p>Sign Up Form</p></div>
          <div className={"form-group"+styles.PlaceLeft}>
            <label>First Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="first-name-input"
              value={user.firstName}
              onChange={onChange}
              name="firstName"
              placeholder="first name"
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="last-name-input"
              value={user.lastName}
              onChange={onChange}
              name="lastName"
              required
            />

          <div className={"form-group"+" "+styles.PlaceLeft}>
            <label>Email</label>
            <br />
            <input
              type="email"
              className="form-control"
              id="email-input"
              value={user.email}
              onChange={onChange}
              name="email"
              required
            />
          </div>

          </div>{" "}
          </div> : <></>}          
          <div className={"form-group"+" "+ styles.PlaceLeft}>
            <label>Username</label>
            <br />
            <input
              type="text"
              className="form-control"
              id="username-input"
              value={user.username}
              onChange={onChange}
              name="username"
              required
            />
          <div>
          <div className="form-group">
            <label>Password</label>
            <br />
            <input
              type="password"
              className="form-control"
              id="password-input"
              value={user.password}
              onChange={onChange}
              name="password"
              min="0"
              required
            />
          </div>
          </div>{" "}
          <div className={"form-group"+" "+styles.PlaceLeft}>
            <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
              Submit
            </button>
          </div>
      </div>
    </form>
  );
};

export default AuthForm;