import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const Login = () => {
  const form = useForm();
  const { register, control , handleSubmit, formState}  = form;
  const { errors} = formState;
  const onSubmit = data =>{
    console.log("form in submite" ,data)
  }
  return (
    <>
      <div
        class="modal fade"
        id="login"
        tabindex="-1"
        aria-labelledby="loginLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content popup_over">
            <div class="popup_close">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form class="login_main" onSubmit={handleSubmit(onSubmit)}  noValidate>
              <div class="form_section">
                <h1 class="login_header">Login in to Jamaica Craft</h1>
                <p class="login_details">
                  Please enter your credentials to proceed
                </p>
                <div class="input_form flag_section">
                  <label htmlFor="phone2">Mobile Number</label>
                  <input
                    class="form-control"
                    type="number"
                    id="phone2"
                    required
                  
                    {...register("username" ,{
                      required: {
                        value:true,
                        message: "user is required"}
                    })}
                  />
                  {errors.username?.message && <p>{errors.username?.message}</p>}
                </div>
                <div class="input_form flag_section">
                  <label htmlFor="email">Email Number</label>
                  <input
                    class="form-control"
                    type="email"
                    id="email"
                    required
            
                    {...register("email" ,{
                    pattern: {
                      value:
                      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                      message:"invalid email format"
                    }
                    })}
                  />
                  {errors.email?.message && <p>{errors.email?.message}</p>}
                </div>
                <div class="btn_section">
                  <button
                    class="yellow_btn w-100"
                    // data-bs-toggle="modal"
                    // data-bs-target="#verification"
                    // data-bs-dismiss="modal"
                    // aria-label="Close"
                    type="submite"
                  >
                    Continue
                  </button>
                </div>
                <p class="login_other">Or Login With</p>
                <div class="social_icon">
                  <div class="iconsection">
                    <img src="./assets/images/searchgoogle.svg" alt="" />
                  </div>
                  <div class="iconsection">
                    <img src="./assets/images/facebook.svg" alt="" />
                  </div>
                </div>

                <p
                  data-bs-toggle="modal"
                  data-bs-target="#registration"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  class="signup"
                >
                  New to Jamaica Craft?{" "}
                  <span class="yellow_text">Register</span>
                </p>
              </div>
            </form>
            <DevTool control={control} />
          </div>
        </div>
      </div>
    </>
  );
};
export const Verification = () => {
  return (
    <>
      <div
        class="modal fade"
        id="verification"
        tabindex="-1"
        aria-labelledby="verificationLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content popup_over">
            <div class="">
              <h1 class="login_header">Verification Code</h1>
              <p class="login_details">
                6 Digit Verification Code Sent to 96584 854615
                <img src="./assets/images/edit yello.svg" alt="" />
              </p>
              <div class="form_otp_sec">
                <form action="#">
                  <div class="input_form otp_part">
                    <input class="otp_section" type="text" />
                    <input class="otp_section" type="text" disabled />
                    <input class="otp_section" type="text" disabled />
                    <input class="otp_section" type="text" disabled />
                    <input class="otp_section" type="text" disabled />
                    <input class="otp_section" type="text" disabled />
                  </div>
                </form>
                <span>00:30</span>
              </div>
              <a href="./signup.html">
                <p class="signup">
                  Didn’t receive the code?
                  <span class="yellow_text">Re-send</span>
                </p>
              </a>
              <div class="done_btn">
                <button
                  class="yellow_btn w-100"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  data-bs-toggle="modal"
                  data-bs-target="#account"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const Successfully = () => {
  return (
    <>
      <div
        class="modal fade"
        id="account"
        tabindex="-1"
        aria-labelledby="accountLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content popup_over popup_bg">
            <div class="popup_close">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="corr_icon">
              <img src="./assets/images/tick_icon.svg" alt="" />
            </div>
            <div class="popup_content">
              <h4>Account Register Successfully</h4>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris.
              </p>
            </div>
            <div class="done_btn">
              <button
                class="yellow_btn w-100"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Registration = () => {
  return (
    <>
      <div
        class="modal fade"
        id="registration"
        tabindex="-1"
        aria-labelledby="registrationLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content popup_over">
            <div class="popup_close">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="login_main">
              <div class="form_section">
                <h1 class="login_header">Register to Jamaica Craft</h1>
                <p class="login_details">
                  Please enter the details to get registered
                </p>
                <div class="input_form">
                  <label>First Name</label>
                  <input type="text" required />
                </div>
                <div class="input_form">
                  <label>Last Name</label>
                  <input type="text" required />
                </div>
                <div class="input_form">
                  <label>Date of Birt</label>
                  <input type="date" required />
                </div>
                <div class="input_form flag_section">
                  <label for="">Mobile No</label>
                  <input
                    class="form-control"
                    type="number"
                    id="phone"
                    value=""
                    onkeydown="return event.keyCode !== 69"
                    required
                  />
                </div>
                <div class="input_form">
                  <label>Email</label>
                  <input type="text" required />
                </div>
                <div class="input_form input_checkbox">
                  <div>
                    <p class="">
                      <input type="checkbox" name="size" id="condition" />
                      <label for="condition">
                        I agree with
                        <span class="yellow_text">Terms & Conditions</span>
                      </label>
                    </p>
                  </div>
                </div>
                <div class="btn_section">
                  <button
                    class="yellow_btn w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#verification"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Continue
                  </button>
                </div>

                <p
                  class="signup"
                  data-bs-toggle="modal"
                  data-bs-target="#login"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  New to Jamaica Craft? <span class="yellow_text">Login</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
