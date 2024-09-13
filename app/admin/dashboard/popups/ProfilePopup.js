import { useRef, useState } from "react";
import "./popups.css";

const ProfilePopup = ({ data, showUpgradedToast, fetchProfiles }) => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const popupcontent = useRef(null);
  const [isEdit, setisEdit] = useState(false);

  const closePopupHandler = () => {
    setisEdit(false);
    document
      .querySelector(".manageProfile-popup")
      .classList.remove("show-popup");
  };

  const editState = () => {
    setisEdit(true);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const saveProfile = async () => {
    if (nameRef.current.value.trim() === "") {
      showUpgradedToast("Error! Please enter a valid Name.", "danger");
      return;
    }
    if (phoneRef.current.value.trim() === "") {
      showUpgradedToast("Error! Please enter a valid Phone.", "danger");
      return;
    }
    if (
      emailRef.current.value.trim() === "" ||
      !validateEmail(emailRef.current.value.trim())
    ) {
      showUpgradedToast("Error! Please enter a valid Email.", "danger");
      return;
    }
    showUpgradedToast("Saving, please wait...");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/organisateurs/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            access_token: `${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({
            nom_prenom: nameRef.current.value.trim(),
            telephone: phoneRef.current.value.trim(),
            email: emailRef.current.value.trim(),
          }),
        }
      );

      if (response.ok) {
        const testdata = await response.json();
        if (testdata == null) {
          if (showUpgradedToast) {
            showUpgradedToast("Error, Data did not change.", "warning");
          }
        } else {
          showUpgradedToast("Done!", "success");
          data.telephone = testdata.telephone;
          data.nom_prenom = testdata.nom_prenom;
          data.email = testdata.email;
          data.role = testdata.role;

          if (fetchProfiles) {
            fetchProfiles();
          }
          window.location.reload();
        }
        setisEdit(false);
      }
    } catch (error) {
      showUpgradedToast("Error! Please try again.", "danger");

      console.log(error);
    }
  };

  const validateNumberInput = (price) => {
    const input = price.current;
    let value = input.value;

    const regex = /^[0-9]+\.?[0-9]*$/;

    if (!regex.test(value)) {
      input.value = value.slice(0, -1);
    }
  };

  const fetchAccounts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/organisateurs`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            access_token: `${localStorage.getItem("access_token")}`,
          },
        }
      );
      if (response.ok) {
        const testData = await response.json();
        if (testData != null) {
          return testData.filter((account) => account.role === "admin").length;
        } else {
          return null;
        }
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);

      return null;
    }
  };

  const deleteFunction = async () => {
    const checkLength = await fetchAccounts();
    if (checkLength == 1) {
      showUpgradedToast(
        "Only This account is Available, Can't Delete it!",
        "warning"
      );
      return;
    }
    if (checkLength === null) {
      showUpgradedToast(
        "Error, check Console for more details and try again later...",
        "warning"
      );
      return;
    }
    showUpgradedToast("Deleting it, Please wait...");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/organisateurs/${data.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            access_token: `${localStorage.getItem("access_token")}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data != null) {
          showUpgradedToast("Done!", "success");
          localStorage.removeItem("access_token");
          setTimeout(() => {
            window.location.href = "/admin/login";
          }, 1000);
          closePopupHandler();
        } else {
          showUpgradedToast("Error in the Database, Try again later", "danger");
        }
      } else {
        showUpgradedToast("Error! Please try again.", "danger");
      }
    } catch (error) {
      showUpgradedToast("Error! Please try again.", "danger");

      console.log(error);
    }
  };

  const sendRecover = async () => {
      showUpgradedToast("Sending Request To Email, Please wait...");
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/organisateurs/recoverpassviaemail/${data.email}`,
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
  };

  if (data != null) {
    return (
      <div className="manageProfile-popup manage-popup popup-container">
        <div className="popup-content" ref={popupcontent}>
          <div className="close">
            <i className="bi bi-x-lg" onClick={() => closePopupHandler()}></i>
          </div>
          <table>
            <tbody>
              <tr>
                <td className="bolder">Profile ID</td>
                <td>{data.id || ""}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="bolder">Name</td>
                <td>
                  {isEdit ? (
                    <>
                      <input
                        type="text"
                        defaultValue={data.nom_prenom || ""}
                        ref={nameRef}
                      />
                    </>
                  ) : (
                    data.nom_prenom || ""
                  )}
                  {isEdit ? (
                    ""
                  ) : (
                    <i
                      className="bi bi-pencil"
                      onClick={() => {
                        editState();
                      }}
                    ></i>
                  )}
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="bolder">Phone</td>
                <td>
                  {isEdit ? (
                    <>
                      <input
                        type="text"
                        defaultValue={data.telephone || ""}
                        ref={phoneRef}
                        onInput={() => {
                          validateNumberInput(phoneRef);
                        }}
                      />
                    </>
                  ) : (
                    data.telephone || ""
                  )}
                  {isEdit ? (
                    ""
                  ) : (
                    <i
                      className="bi bi-pencil"
                      onClick={() => {
                        editState();
                      }}
                    ></i>
                  )}
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="bolder">Email</td>
                <td>
                  {isEdit ? (
                    <>
                      <input
                        type="text"
                        defaultValue={data.email || ""}
                        ref={emailRef}
                      />
                    </>
                  ) : (
                    data.email || ""
                  )}
                  {isEdit ? (
                    ""
                  ) : (
                    <i
                      className="bi bi-pencil"
                      onClick={() => {
                        editState();
                      }}
                    ></i>
                  )}
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="bolder">Role</td>
                <td>{data.role || ""}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className="bolder">Password</td>
                <td>
                  <div
                    className="see-more"
                    style={{
                      backgroundColor: "white",
                      marginTop: "0",
                      padding: "0",
                    }}
                    onClick={() => {sendRecover()}}
                  >
                    Change{" "}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          {isEdit ? (
            <div className="td-button">
              <button
                onClick={() => {
                  saveProfile();
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  setisEdit(false);
                }}
              >
                Cancel
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="delete">
            <div className="text">
              Do you want to delete it? After you press the button there's no
              going Back!
            </div>
            <div className="button">
              <button
                onClick={() => {
                  deleteFunction();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfilePopup;
