import "./login.css";
import { useEffect, useRef } from "react";
import { useState } from "react";

const Login = () => {
  const focusFunction = (cl) => {
    const inputscontainer = document.querySelector(
      `.input${cl != "" ? "." + cl : ""}`
    );
    inputscontainer.classList.remove("removeAfteranimation");
    inputscontainer.classList.add("Afteranimation");
  };

  const blurFunction = (cl) => {
    const inputscontainer = document.querySelector(
      `.input${cl != "" ? "." + cl : ""}`
    );
    if (inputscontainer.querySelector("input").value == "") {
      inputscontainer.classList.remove("Afteranimation");
      inputscontainer.classList.add("removeAfteranimation");
    }
    if (cl === "") {
      setErrors({ ...errors, email: false });
    } else {
      setErrors({ ...errors, password: false });
    }
  };

  const focusFunctionForget = () => {
    emailForgetContainer.current.classList.remove("removeAfteranimation");
    emailForgetContainer.current.classList.add("Afteranimation");
  };

  const blurFunctionForget = () => {
    if (emailForget.current.value == "") {
      emailForgetContainer.current.classList.remove("Afteranimation");
      emailForgetContainer.current.classList.add("removeAfteranimation");
    }
    setErrors({ ...errors, emailForget: false });
  };

  const [showPassword, setShowPassword] = useState(false);
  const showPassCheckbox = useRef(null);
  const [errors, setErrors] = useState({});
  const email = useRef(null);
  const password = useRef(null);
  const emailForget = useRef(null);
  const emailForgetContainer = useRef(null);
  const loginContainer = useRef(null);
  const forgetContainer = useRef(null);
  const sendRecoverContainer = useRef(null);

  const showUpgradedToast = (
    message = "Sample Message",
    toastType = "info"
  ) => {
    const icon = {
      success: '<i class="bi bi-check-circle"></i>',
      danger: '<i class="bi bi-bug"></i>',
      warning: '<i class="bi bi-exclamation-circle"></i>',
      info: '<i class="bi bi-info-circle"></i>',
    };

    if (!Object.keys(icon).includes(toastType)) toastType = "info";

    let box = document.createElement("div");
    box.classList.add("better-toast", `better-toast-${toastType}`);
    box.innerHTML = ` <div class="better-toast-content-wrapper">
                      <div class="better-toast-icon">
                      ${icon[toastType]}
                      </div>
                      <div class="better-toast-message">${message}</div>
                      <div class="better-toast-progress"></div>
                      </div>`;

    let toastAlready = document.body.querySelector(".better-toast");
    if (toastAlready) {
      toastAlready.remove();
    }

    document.body.appendChild(box);

    setTimeout(() => {
      box.remove();
    }, 5000);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const signin = async () => {
    const newErrors = {};
    if (!validateEmail(email.current.value.trim())) {
      newErrors.email = true;
    }
    if (!password.current.value.trim()) {
      newErrors.password = true;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    showUpgradedToast("Checking, please Wait...");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/organisateurs/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.current.value.trim(),
            password: password.current.value.trim(),
          }),
        }
      );
      if (response.ok) {
        try {
          const data = await response.json();
          if (data != null) {
            localStorage.setItem("access_token", data.access_token);
            setTimeout(() => {
              showUpgradedToast("Done, Redirecting...", "success");
            }, 2000);
            setTimeout(() => {
              window.location.href = "./";
            }, 4000);
          }
        } catch (error) {
          setErrors({ email: true, password: true });
        }
      }
    } catch (error) {
      console.log(error);
      setErrors({ signin: true });
      showUpgradedToast("Error, Please Try again", "danger");
    }
  };

  const changeDisplay = async (number) => {
    if (number == 1) {
      loginContainer.current.classList.remove("disappear");
      forgetContainer.current.classList.add("disappear");
      sendRecoverContainer.current.classList.add("disappear");
    }
    if (number == 2) {
      loginContainer.current.classList.add("disappear");
      forgetContainer.current.classList.remove("disappear");
      sendRecoverContainer.current.classList.add("disappear");
    }
    if (number == 3) {
      loginContainer.current.classList.add("disappear");
      forgetContainer.current.classList.add("disappear");
      sendRecoverContainer.current.classList.remove("disappear");
    }
  };

  const nextForget = async () => {
    const newErrors = {};
    if (!validateEmail(emailForget.current.value.trim())) {
      newErrors.emailForget = true;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    showUpgradedToast("Checking, Please wait...");
    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/organisateurs/byemail/${emailForget.current.value.trim()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.text();
        if (data == "false") {
          setTimeout(() => {
            showUpgradedToast("Email not Valid", "warning");
            setErrors({ emailForget: true });
          }, 3000);
        } else {
          setTimeout(() => {
            showUpgradedToast("Done", "success");
            changeDisplay(3);
          }, 2000);
        }
      }
    } catch (error) {
      console.log(error);
      showUpgradedToast("Error", "danger");
    }
  };

  const sendRecover = async (type) => {
    if (type === "email") {
      showUpgradedToast("Sending Via Email, Please wait...");
      try {
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL
          }/organisateurs/recoverpassviaemail/${emailForget.current.value.trim()}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const verify = await response.text();
          if (verify == "true") {
            showUpgradedToast("Done, Check your Email", "success");
          } else {
            showUpgradedToast("Error", "danger");
          }
        }
      } catch (error) {
        console.log(error);

        showUpgradedToast("Error, please try again", "danger");
      }
    }
  };

  const inputClicked = (ref) => {
    ref.current.focus();
  };

  return (
    <div id="login-container">
      <div className="content-container">
        <div className="login-content" ref={loginContainer}>
          <div className="title">Login</div>
          <div className="inputs">
            <div className="input">
              <div
                onClick={() => {
                  inputClicked(email);
                }}
              >
                <input
                  type="text"
                  onFocus={() => focusFunction("")}
                  onBlur={() => blurFunction("")}
                  ref={email}
                />
              </div>
              {errors.email ? <div className="error">Invalid Email</div> : ""}
            </div>
            <div className="input password">
              <div
                onClick={() => {
                  inputClicked(password);
                }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  onFocus={() => focusFunction("password")}
                  onBlur={() => blurFunction("password")}
                  ref={password}
                />
              </div>
              {errors.password ? (
                <div className="error">Invalid Password</div>
              ) : (
                ""
              )}
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  ref={showPassCheckbox}
                  onClick={() => {
                    setShowPassword(showPassCheckbox.current.checked);
                  }}
                />
                <div className="checkmark"></div>
                Show Password
              </label>
            </div>
          </div>
          <div className="login">
            <button onClick={() => signin()}>Sign in</button>
            {errors.signin ? (
              <div className="error">Error, Please Try again.</div>
            ) : (
              ""
            )}
            <div className="forget-password" onClick={() => changeDisplay(2)}>
              Forget Password?
            </div>
          </div>
        </div>
        <div
          className="forget-password-content disappear"
          ref={forgetContainer}
        >
          <div className="title">Forget Password</div>
          <div className="inputs">
            <div className="text">Enter Your Email:</div>
            <div className="input" ref={emailForgetContainer}>
              <input
                type="text"
                onFocus={() => focusFunctionForget()}
                onBlur={() => blurFunctionForget()}
                ref={emailForget}
              />
              {errors.emailForget ? (
                <div className="error">Invalid Email</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="login">
            <button onClick={() => nextForget()}>Next</button>
            {errors.signin ? (
              <div className="error">Error, Please Try again.</div>
            ) : (
              ""
            )}
            <div className="forget-password" onClick={() => changeDisplay(1)}>
              Go Back
            </div>
          </div>
        </div>
        <div
          className="send-recover-content disappear"
          ref={sendRecoverContainer}
        >
          <div className="title">Send Recovery</div>
          <div className="cards">
            <div
              className="card"
              onClick={() => {
                sendRecover("email");
              }}
            >
              <div className="text">Via Email</div>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
          <div className="login">
            <div className="forget-password" onClick={() => changeDisplay(2)}>
              Go Back
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
