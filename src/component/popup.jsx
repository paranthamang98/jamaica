import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
  // import {yupResolver} from "@hookform/resolvers/yup"
  import * as yup from "yup"

export const Login = () => {
  const form = useForm({
    defaultValues:{
      modileNumder:""},
      mode:"all",
      
    
  });
  const { register, control , handleSubmit, formState}  = form;
  const { errors} = formState;
  const onSubmit = data =>{
    console.log("form in submite" ,data,errors.username?.message)
  }
  return (
    <>
      <div
        className="modal fade"
        id="login"
        tabindex="-1"
        aria-labelledby="loginLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content popup_over">
            <div className="popup_close">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="login_main" onSubmit={handleSubmit(onSubmit)}  noValidate>
              <div className="form_section">
                <h1 className="login_header">Login in to Jamaica Craft</h1>
                <p className="login_details">
                  Please enter your credentials to proceed
                </p>
                <div className="input_form ">
                  <label htmlFor="phone">Mobile Number</label>
                  <input
                    className="form-control"
                    type="number"
                    id="phone"
                    required
                  
                    {...register("modileNumder" ,{
                      required: {
                        value:true,
                        message: "user is required"}
                    })}
                  />
                  {errors.modileNumder?.message && <p className="erroe_msg">{errors.modileNumder?.message}</p>}
                </div>
            
                <div className="btn_section">
                  <button
                    className="yellow_btn w-100"
                    // data-bs-toggle="modal"
                    // data-bs-target="#verification"
                    // data-bs-dismiss="modal"
                    // aria-label="Close"
                    type="submite"
                  >
                    Continue
                  </button>
                </div>
                <p className="login_other">Or Login With</p>
                <div className="social_icon">
                  <div className="iconsection">
                    <img src="./assets/images/searchgoogle.svg" alt="" />
                  </div>
                  <div className="iconsection">
                    <img src="./assets/images/facebook.svg" alt="" />
                  </div>
                </div>

                <p
                  data-bs-toggle="modal"
                  data-bs-target="#registration"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="signup"
                >
                  New to Jamaica Craft?
                  <span className="yellow_text">Register</span>
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
        className="modal fade"
        id="verification"
        tabindex="-1"
        aria-labelledby="verificationLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content popup_over">
            <div className="">
              <h1 className="login_header">Verification Code</h1>
              <p className="login_details">
                6 Digit Verification Code Sent to 96584 854615
                <img src="./assets/images/edit yello.svg" alt="" />
              </p>
              <div className="form_otp_sec">
                <form action="#">
                  <div className="input_form otp_part">
                    <input className="otp_section" type="text" />
                    <input className="otp_section" type="text" disabled />
                    <input className="otp_section" type="text" disabled />
                    <input className="otp_section" type="text" disabled />
                    <input className="otp_section" type="text" disabled />
                    <input className="otp_section" type="text" disabled />
                  </div>
                </form>
                <span>00:30</span>
              </div>
              <a href="./signup.html">
                <p className="signup">
                  Didn’t receive the code?
                  <span className="yellow_text">Re-send</span>
                </p>
              </a>
              <div className="done_btn">
                <button
                  className="yellow_btn w-100"
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
        className="modal fade"
        id="account"
        tabindex="-1"
        aria-labelledby="accountLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content popup_over popup_bg">
            <div className="popup_close">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="corr_icon">
              <img src="./assets/images/tick_icon.svg" alt="" />
            </div>
            <div className="popup_content">
              <h4>Account Register Successfully</h4>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris.
              </p>
            </div>
            <div className="done_btn">
              <button
                className="yellow_btn w-100"
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
        className="modal fade"
        id="registration"
        tabindex="-1"
        aria-labelledby="registrationLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content popup_over">
            <div className="popup_close">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="login_main">
              <div className="form_section">
                <h1 className="login_header">Register to Jamaica Craft</h1>
                <p className="login_details">
                  Please enter the details to get registered
                </p>
                <div className="input_form">
                  <label>First Name</label>
                  <input type="text" required />
                </div>
                <div className="input_form">
                  <label>Last Name</label>
                  <input type="text" required />
                </div>
                <div className="input_form">
                  <label>Date of Birt</label>
                  <input type="date" required />
                </div>
                <div className="input_form flag_section">
                  <label for="">Mobile No</label>
                  <input
                    className="form-control"
                    type="number"
                    id="phone"
                    value=""
                    onkeydown="return event.keyCode !== 69"
                    required
                  />
                </div>
                <div className="input_form">
                  <label>Email</label>
                  <input type="text" required />
                </div>
                <div className="input_form input_checkbox">
                  <div>
                    <p className="">
                      <input type="checkbox" name="size" id="condition" />
                      <label for="condition">
                        I agree with
                        <span className="yellow_text">Terms & Conditions</span>
                      </label>
                    </p>
                  </div>
                </div>
                <div className="btn_section">
                  <button
                    className="yellow_btn w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#verification"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Continue
                  </button>
                </div>

                <p className="signup"data-bs-toggle="modal" data-bs-target="#login"data-bs-dismiss="modal"aria-label="Close">New to Jamaica Craft? <span className="yellow_text">Login</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
