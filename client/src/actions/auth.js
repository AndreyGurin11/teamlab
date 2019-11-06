import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

// Register User
export const register = ({
  name,
  email,
  password,
  repassword
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password, repassword });

  try {
    const res = await axios.post("/api/users", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL
    });
  }
};