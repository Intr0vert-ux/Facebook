import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyUserOTP, resetUserState } from "../features/users/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [activeInput, setActiveInput] = useState(0);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [resendTimer, setResendTimer] = useState(300); // 5 minutes
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const timerRef = useRef(null); // Ref to hold the interval

  const { user, userLoading, userMessage, userError, userSuccess } =
    useSelector((state) => state.auth);

  useEffect(() => {
    // If a timer already exists, don't create a new one
    if (timerRef.current) {
      return;
    }

    timerRef.current = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (activeInput >= 0 && activeInput < 6) {
      inputRefs.current[activeInput]?.focus();
    }
  }, [activeInput]);

  useEffect(() => {
    if (userError) {
      toast.error(userMessage || "OTP verification failed");
      dispatch(resetUserState());
    }
    if (userSuccess) {
      toast.success("OTP Verified!");
      dispatch(resetUserState());
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, [userError, userSuccess]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) {
        setActiveInput(index + 1);
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0) {
        setActiveInput(index - 1);
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      setActiveInput(index - 1);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").trim();
    if (/^[0-9]{6}$/.test(pasteData)) {
      const pasteArray = pasteData.split("");
      setOtp(pasteArray.slice(0, 6));
      setActiveInput(5);
    }
  };

  const handleVerify = () => {
    const enteredOTP = otp.join("");
    if (enteredOTP.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }
    if (!user?._id) {
      toast.error("User ID not found. Please register again.");
      return;
    }

    dispatch(verifyUserOTP({ otp: enteredOTP, id: user._id }));
  };

  const handleResendOtp = () => {
    setIsResendDisabled(true);
    setResendTimer(300); // Reset timer to 5 minutes
    setOtp(["", "", "", "", "", ""]);
    setActiveInput(0);
    toast.success("OTP resent successfully (mocked)");

    // Clear the existing interval if any, then start a new one
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Enter confirmation code
          </h1>
          <p className="text-gray-600 text-sm">
            We sent a code to your mobile/email
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleVerify();
          }}
        >
          <div className="flex justify-between mb-6 space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                onFocus={() => setActiveInput(index)}
                className="w-10 h-12 text-xl text-center border rounded focus:outline-none focus:border-blue-500"
                inputMode="numeric"
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={otp.join("").length !== 6 || userLoading}
            className={`w-full py-2 px-4 rounded-md font-medium text-white transition duration-200 ${
              otp.join("").length === 6
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-blue-300 cursor-not-allowed"
            } ${userLoading ? "opacity-80" : ""}`}
          >
            {userLoading ? "Verifying..." : "Continue"}
          </button>
        </form>

        <div className="border-t border-gray-200 mt-6 pt-4 text-center">
          <button
            onClick={handleResendOtp}
            disabled={isResendDisabled}
            className={`text-sm font-medium ${
              isResendDisabled
                ? "text-gray-400 cursor-not-allowed"
                : "text-blue-500 hover:text-blue-600"
            }`}
          >
            Didn't receive a code?{" "}
            {isResendDisabled && `Resend in ${resendTimer}s`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
