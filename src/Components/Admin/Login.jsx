import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLogInAuthMutation } from "../../features/api/apiSlice";
import { useNavigate } from "react-router-dom";
import { Alert, IconButton, Collapse } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("User")) {
      return navigate("/admin");
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const { email, password } = account;

  const valid = email && password ? true : false;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const {
    register,
    formState: { errors },
    handleSubmit: login,
  } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault();
    let results = await loginAuth(account);
    if (results.data) {
      // console.log(results.data.user);
      localStorage.setItem("User", JSON.stringify(results.data.user));
      navigate("/admin");
    }
    if (results.error) {
      console.log(results.error);
      setErrorMessage(results.error.data.msg);
      setOpen(true);
    }
  };

  const [loginAuth] = useLogInAuthMutation();

  return (
    <form
      className="flex flex-col w-screen h-screen gap-3 items-center justify-center"
      onSubmit={valid ? onSubmit : login(onSubmit)}
    >
      <Collapse className="w-5/6 sm:w-1/3" in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                setErrorMessage("");
              }}
            >
              <HighlightOffIcon />
            </IconButton>
          }
          sx={{ mb: 2, width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Collapse>

      <input
        className={`border ${
          errors.mail ? "border-red-600" : "border-theme"
        } rounded-lg w-5/6 sm:w-1/3 p-4`}
        {...register("mail", { required: "Email Address is required" })}
        value={email}
        name="email"
        onChange={handleChange}
        aria-invalid={errors.mail ? "true" : "false"}
        placeholder="Email"
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}

      <div className="relative  w-5/6 sm:w-1/3">
        <input
          type={showPassword ? "text" : "password"}
          className={`border ${
            errors.password ? "border-red-600" : "border-theme"
          } rounded-lg w-full p-4`}
          {...register("password", { required: true })}
          value={password}
          name="password"
          onChange={handleChange}
          aria-invalid={errors.password ? "true" : "false"}
          placeholder="Password"
        />
        <button
          type="button"
          className="absolute cursor-pointer text-sm opacity-70 top-0 right-2 h-full flex items-center"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {errors.password?.type === "required" && (
        <p role="alert">Enter Password</p>
      )}

      <input
        className="border border-theme hover:bg-theme hover:text-white rounded-lg w-5/6 sm:w-1/3 p-4"
        type="submit"
      />
    </form>
  );
}
