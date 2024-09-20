import router from 'next/router';
import React, { Component } from 'react';
import JSON_DATA from "./json/country.json";
import ReCAPTCHA from 'react-google-recaptcha';
import LazyLoad from 'react-lazy-load';

class ContactFrom extends Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: "idle",
      fieldsContactUs: {
        "mobNo": ""
      },
      errorsContactUs: {},
      submitted: false,
      stdCode: '',
      errorMessage: '',
      recaptchaToken: null
    }
  }
  componentDidMount() {
  }

  inputChange = (e) => {
    console.log('e________________________', e.target.value, e.target.name);
    e.preventDefault();
    let { name, value } = e.target;

    // if (name === "mobNo") {
    //   if (!/^[0-9\s]*$/.test(value)) {
    //     let errorsContactUs = this.state.errorsContactUs;
    //     errorsContactUs[name] = "Please enter a valid number.";
    //     this.setState({ errorsContactUs });
    //     return; // Stop processing further
    //   }
    // }
    let fieldsContactUs = this.state.fieldsContactUs;
    // let errorsContactUs = this.state.errorsContactUs;
    fieldsContactUs[name] = value;
    // errorsContactUs[name] = "";
    this.setState({ fieldsContactUs });
  }

  createContactUs = (e) => {
    e.preventDefault();

    console.log("this.state.fieldsContactUs ", this.state.fieldsContactUs);
    if (this.handleValidationContactUs()) {
      let data = {
        name: this.state.fieldsContactUs.name,
        email: this.state.fieldsContactUs.email,
        mobNo: this.state.fieldsContactUs.mobNo,
        subject: this.state.fieldsContactUs.subject + ' CONTACT BY |' + window.location.href,
        msg: this.state.fieldsContactUs.msg,
        stdCode: this.state.stdCode,
        // recaptchaToken: this.state.recaptchaToken,
      }

      this.setState({ submitted: true })

      console.log('data_____________data', data);
      let header = new Headers({
        'Content-Type': 'application/json',
      });
      const requestOptions = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
      }


      return (
        fetch(`https://www.comfygen.com/api/v1/createContactUs1111`, requestOptions)
          .then((res) => res.json())
          .then((data) => {
            if (data && data.code == 0) {
              this.setState({ submitted: true, successMessage: "Submitted Successfully!" });
              setTimeout(() => {
                this.setState({ successMessage: "" });
              }, 5000);
              this.setState({ fieldsContactUs: {} });
              this.setState({ submitted: false });
            } else {

              this.setState({ submitted: false, errorMessage: data.message });
              setTimeout(() => {
                this.setState({ errorMessage: "" });
              }, 5000);
            }
          })
      );
    }
  }

  handleValidationContactUs = () => {
    event.preventDefault();
    let fieldsContactUs = this.state.fieldsContactUs;
    let errorsContactUs = {};
    let formIsValid = true;

    //name
    if (!fieldsContactUs["name"]) {
      formIsValid = false;
      errorsContactUs["name"] = "Please enter Name!";
    }
    //email
    if (!fieldsContactUs["email"]) {
      formIsValid = false;
      errorsContactUs["email"] = "Please enter Email!";
    }
    if (typeof fieldsContactUs["email"] !== "undefined" && fieldsContactUs["email"] !== "") {
      let lastAtPos = fieldsContactUs["email"].lastIndexOf('@');
      let lastDotPos = fieldsContactUs["email"].lastIndexOf('.');
      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fieldsContactUs["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fieldsContactUs["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errorsContactUs["email"] = "Enter valid email!";
      }
    }
    //mobNo
    // if (!fieldsContactUs["mobNo"]) {
    //   formIsValid = false;
    //   errorsContactUs["mobNo"] = "Please enter Mobile No.!";
    // }
    if (!fieldsContactUs["mobNo"] || !/^\d{10,15}$/.test(fieldsContactUs["mobNo"])) {
      formIsValid = false;
      errorsContactUs["mobNo"] = "Please enter a valid 10 to 15 digit Mobile No.!";
    }
    //subject
    if (!fieldsContactUs["subject"]) {
      formIsValid = false;
      errorsContactUs["subject"] = "Please enter Comment!";
    }

    // stdCode
    if (!this.state.stdCode) {
      formIsValid = false;
      errorsContactUs["stdCode"] = "Please select Std Code!";
    }

    //msg
    if (!fieldsContactUs["msg"]) {
      formIsValid = false;
      errorsContactUs["msg"] = "Please select Message!";
    }
    this.setState({ errorsContactUs: errorsContactUs });
    return formIsValid;
  }
  onClickHandler = () => {
    this.setState({ isLoading: "loading" });
    setTimeout(() => {
      // setState('success');
      this.setState({ isLoading: "success" });
    }, 2000);
  };

  handleCountryChange = (event) => {
    let fieldsContactUs = this.state.fieldsContactUs;
    // let errorsContactUs = this.state.errorsContactUs;
    // fieldsContactUs[name] = value;
    // errorsContactUs[name] = "";

    // this.state.fieldsContactUs["mobNo"]
    let errorsContactUs = {};
    if (event.target.value != "SELECTED") {

      this.setState({ stdCode: event.target.value });
      fieldsContactUs["mobNo"] = event.target.value + " ";
      this.setState({ fieldsContactUs });

      errorsContactUs["stdCode"] = "";
      this.setState({ errorsContactUs: errorsContactUs });
    } else {
      errorsContactUs["stdCode"] = "Please select Std Code!";
      this.setState({ errorsContactUs: errorsContactUs });
    }
  };


  handleRecaptchaChange = (token) => {
    this.setState({ recaptchaToken: token });
  };

  render() {
    const { submitted } = this.state;
    return (
      <form onSubmit={this.handleValidationContactUs} className="bg-white rounded-xl  lg:p-8 md:p-6 p-4  space-y-4 text-left   md:w-[65%] w-full">

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <input type="text" onChange={this.inputChange} name="name"
              value={this.state.fieldsContactUs["name"] ? this.state.fieldsContactUs["name"] : ''}
              placeholder="Name"
              className={this.state.errorsContactUs["name"] ? "focus:outline-none border border-red-500  p-2 w-full focus:ring-1 rounded font-light focus:font-normal" : "focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 rounded font-light focus:font-normal"} />
            {this.state.errorsContactUs["name"] ?
              <div className="invalid-feedback  text-red-500 text-sm font-light">
                {this.state.errorsContactUs["name"]}
              </div>
              : null}
          </div>
          <div>
            <input type="text" onChange={this.inputChange} name="email"
              value={this.state.fieldsContactUs["email"] ? this.state.fieldsContactUs["email"] : ''}
              placeholder={this.state.errorsContactUs["email"] ? "Enter Email" : "Email"}
              className={this.state.errorsContactUs["email"] ? "focus:outline-none bg-[#F7F7F7] border border-red-500  p-2 w-full focus:ring-1 rounded font-light focus:font-normal" : "focus:outline-none bg-[#F7F7F7] border p-2 w-full focus:ring-1 rounded font-light focus:font-normal"}
            />
            {this.state.errorsContactUs["email"] ?
              <div className="invalid-feedback  text-red-500 text-sm font-light">
                {this.state.errorsContactUs["email"]}
              </div>
              : null}
          </div>
          <div>
            <label className='hidden' htmlFor="stdCode">Code:</label>
            <LazyLoad height={10} offset={100}>
              <div className={`flex focus:outline-none bg-[#F7F7F7] border w-full focus:ring-1 rounded font-light focus:font-normal ${this.state.errorsContactUs["mobNo"] ? "border border-red-500" : "border"} `}>
                <select
                  id="stdCode"
                  name="stdCode"
                  aria-label="stdCode"
                  value={this.state.stdCode}
                  onChange={this.handleCountryChange}
                  className="focus:outline-none bg-[#F7F7F7] p-2 rounded-l font-light focus:font-normal w-28"
                >
                  <option value="SELECTED" selected >Select</option>
                  {JSON_DATA.Country.map((country) => (
                    <option key={country.stdCode} value={country.stdCode}>
                      {country.flag} {country.name}
                    </option>
                  ))}
                </select>
                <input type="text" onChange={this.inputChange} name="mobNo"
                  value={this.state.fieldsContactUs["mobNo"] ? this.state.fieldsContactUs["mobNo"] : ''}
                  placeholder="Enter whatsapp Number"
                  className="focus:outline-none bg-[#F7F7F7] p-2 rounded-r font-light focus:font-normal w-full" />
              </div>
            </LazyLoad>
            <div className="flex space-x-2">
              {this.state.errorsContactUs["stdCode"] ? (
                <div className="invalid-feedback  text-red-500 text-sm font-light">
                  {this.state.errorsContactUs["stdCode"]}
                </div>
              ) : null}
              {this.state.errorsContactUs["mobNo"] ? (
                <div className="invalid-feedback  text-red-500 text-sm font-light">
                  {this.state.errorsContactUs["mobNo"]}
                </div>
              ) : null}

            </div>

          </div>
          <div className="md:mt-0 mt-8">
            <input onChange={this.inputChange} name="subject"
              value={this.state.fieldsContactUs["subject"] ? this.state.fieldsContactUs["subject"] : ''}
              placeholder="Subject "
              className={this.state.errorsContactUs["subject"] ? "focus:outline-none focus:ring-1 w-full border border-red-500 p-2 rounded resize-none font-light focus:font-normal" : "focus:outline-none bg-[#F7F7F7] focus:ring-1 w-full border p-2 rounded resize-none font-light focus:font-normal"}></input>
          </div>
          <div className="md:col-span-2">
            <textarea onChange={this.inputChange} name="msg"
              value={this.state.fieldsContactUs["msg"] ? this.state.fieldsContactUs["msg"] : ''}
              cols={18} rows={4} placeholder="Message "
              className={this.state.errorsContactUs["msg"] ? "focus:outline-none focus:ring-1 w-full border border-red-500 p-2 rounded resize-none font-light focus:font-normal" : "focus:outline-none bg-[#F7F7F7] focus:ring-1 w-full border p-2 rounded resize-none font-light focus:font-normal"}></textarea>
          </div>
        </div>
        {
          this.state.errorMessage != '' ? (
            <div className="invalid-feedback  text-red-500 text-sm font-light">
              {this.state.errorMessage}
            </div>
          ) : null
        }

        {/* <LazyLoad height={70} offset={100}>
          <ReCAPTCHA
            sitekey="6LcXQKkpAAAAAOlsNqjoC8kx9To5Xt_RTIapQ0i0"
            onChange={this.handleRecaptchaChange}
          />
        </LazyLoad> */}

        <div className="flex justify-start pt-2 2xl:pt-4">
          {submitted ?
            <button
              type="button"
              className=" text-white bg-green-600 px-8 py-3 text-lg rounded-full justify-center items-center space-x-1 w-fit overflow-hidden relative inline-flex group   cursor-pointer"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-72 group-hover:h-72 opacity-10 origin-center"></span>
              Summited Succesfully !
            </button>
            :
            <button
              type="button"
              onClick={this.createContactUs}
              className=" text-white bg-blue-600 px-8 py-3 text-lg rounded-full justify-center items-center space-x-1 w-fit overflow-hidden relative inline-flex group cursor-pointer"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-60 group-hover:h-60 opacity-10 origin-center"></span>
              Book Free Demo Call
            </button>
          }
        </div>

        {this.state.successMessage &&
          // <div className="popup success fixed flex justify-center items-center z-50">
          //   {this.state.successMessage}
          // </div>

          <div className="fixed top-0 z-50 left-0 flex items-center justify-center w-full h-screen rounded-lg shadow-lg bg-black/30 px-4">
            <div className="md:w-[500px] md:h-auto w-auto h-[300px] space-y-1 2xl:space-y-3 bg-white rounded-2xl ">
              <div className="py-6 bg-[#B427A6] text-center">
                <div className="flex items-center justify-center py-6">
                  <img
                    className="rounded-lg"
                    src="/img/thank-you-envelope.webp"
                    alt="Thank you"
                    width={256}
                    height={256}
                  />
                </div>
                <div className='space-y-4'>
                  <h2 className='text-white text-5xl font-bold'>Thank You</h2>
                  <p className='text-white text-lg capitalize font-semibold'>for contacting us, we will reply promptly once your message is received.</p>
                </div>
              </div>
            </div>
          </div>
        }
        {this.state.errorMessage &&
          <div className="popup error">
            {this.state.errorMessage}
          </div>
        }
      </form>
    );
  }
}
export default ContactFrom;