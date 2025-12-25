import React, { useReducer } from "react";

// Initial State
const initialState = {
  step: 1,
  isSubmitted: false,
  formValues: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
};

// Reducer
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.field]: action.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

// Component
export default function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, formValues, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div>
        <h2>Form Submitted Successfully!</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      {/* -------- Progress Indicator -------- */}
      <h2>Step {step} / 3</h2>

      {/* ---------- Step 1 ---------- */}
      {step === 1 && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <br />
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {/* ---------- Step 2 ---------- */}
      {step === 2 && (
        <>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <br />
          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
          <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </>
      )}

      {/* ---------- Step 3 ---------- */}
      {step === 3 && (
        <>
          <h3>Review Details</h3>
          <p><strong>Name:</strong> {formValues.name}</p>
          <p><strong>Email:</strong> {formValues.email}</p>
          <p><strong>Username:</strong> {formValues.username}</p>

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            Back
          </button>
          <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}
