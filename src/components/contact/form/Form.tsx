import React from "react";
import { useForm, useWatch } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting },
  } = useForm({ mode: "onTouched" });

  // const [isSuccess, setIsSuccess] = useState(false);
  // const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data: any, e: any) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          // setIsSuccess(true);
          // setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          // setIsSuccess(false);
          // setMessage(json.message);
        }
      })
      .catch((error) => {
        // setIsSuccess(false);
        // setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <>
      <div className="cont-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="hidden"
            value="7b62b99b-0275-4eeb-9e16-b311e7d827c2"
            {...register("access_key")}
          />
          <input
            type="hidden"
            value={`${userName} sent a message`}
            {...register("subject")}
          />
          <input type="hidden" {...register("from_name")} />
          <input
            type="checkbox"
            id=""
            className="hidden"
            {...register("botcheck")}
          ></input>
          <div className="cont-form__form">
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="false"
              className="cont-form__name"
              {...register("name", {
                required: "Full name is required",
                maxLength: 90,
              })}
            />

            <input
              id="email"
              type="email"
              placeholder="Email Address"
              // name="email"
              autoComplete="false"
              className="cont-form__email"
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
            />
            <textarea
              // name="message"
              placeholder="Your Message"
              className="cont-form__message"
              {...register("message", { required: "Enter yopur Message" })}
            />
          </div>
          <button type="submit" className="cont-form__submit-btn">
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
