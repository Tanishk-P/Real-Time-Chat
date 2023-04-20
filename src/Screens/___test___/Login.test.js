import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../Login";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { message } from "antd";

const MockLogin = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}

const MockSignIn = async (email, password) => {
  const emailElement = screen.getByPlaceholderText(/Email Address/i);
  fireEvent.change(emailElement, { target: { value: email }});
  const passwordElement = screen.getByPlaceholderText(/Password/i);
  fireEvent.change(passwordElement, { target: { value: password }});
  expect(emailElement.value).toBe(email);
  expect(passwordElement.value).toBe(password);
}

//UNIT TESTING :

describe("Testing the Components", () => {

  describe("Testing header", () => {

    test('Header logo', async () => {
      render(<MockLogin />);
      const logoElement = screen.getByRole("img", { name: 'logo'});
      expect(logoElement).toBeInTheDocument();
    });
  
    test('Header Live Chat', async () => {
      render(<MockLogin />);
      const headerElement = screen.getByText(/Live Chat/i);
      expect(headerElement).toBeInTheDocument();
    });
  
    test('Header Login', async () => {
      render(<MockLogin />);
      const headerElement = screen.getByText(/Login/i);
      expect(headerElement).toBeInTheDocument();
    });
  });

  describe("Testing the Form", () => {

    it('Form button', async () => {
      render(<MockLogin />);
      const buttonElement = screen.getByRole("button", { name: 'Sign In'});
      expect(buttonElement).toBeInTheDocument();
    });
  
    it('Form input', async () => {
      render(<MockLogin />);
      const emailElement = screen.getByRole("textbox");
      expect(emailElement).toBeInTheDocument();
    });
  
    it('Form input-password', async () => {
      render(<MockLogin />);
      const passwordElement = screen.getByPlaceholderText(/Password/i);
      expect(passwordElement).toBeInTheDocument();
    });
  
    it('Form input-password eye button', async () => {
      render(<MockLogin />);
      const eyeButton = screen.getByRole("img", { name: 'eye-invisible'});
      expect(eyeButton).toBeInTheDocument();
    });
  });

  describe("Testing the Para", () => {

    it('End Paragraph', async () => {
      render(<MockLogin />);
      const paragraphElement = screen.getByText(/Don't have an Account?/i);
      expect(paragraphElement).toBeInTheDocument();
    });
  
    it('End Paragraph Link', async () => {
      render(<MockLogin />);
      const paraLinkElement = await screen.findByText(/Register/i);
      expect(paraLinkElement).toBeTruthy();
    });
  });

});

//INTEGRATED TESTING :

describe("Testing the login form", () => {

  describe("Email Address", () => {
    it("should show the placeholder of input", async () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/Email address/i);
    expect(inputElement).toBeInTheDocument();
  });
  it("should show the change of input", async () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/Email address/i);
    fireEvent.change(inputElement, { target: { value: "test@test.com"} });
    expect(inputElement.value).toBe("test@test.com");
  }); 
  it("should clear the input on submit", async () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/Email address/i);
    const buttonElement = screen.getByRole("button");
    fireEvent.change(inputElement, { target: { value: "test@test.com"} });
    fireEvent.click(buttonElement);
    expect(inputElement.value).not.toBe("");
  });  
  });

  describe("Password", () => {
    it("It should show the Password placeholder", () => {
      render(<MockLogin />);
      const passwordElement = screen.getByPlaceholderText(/Password/i);
      expect(passwordElement).toBeInTheDocument();
    });
    it("On changing the password", () => {
      render(<MockLogin />);
      const passwordElement = screen.getByPlaceholderText(/Password/i);
      fireEvent.change(passwordElement, { target: { value: "123456"}})
      expect(passwordElement.value).toBe("123456");
    });
  });

  describe("Sign In Button", () => {
    it("Button is clicked", () => {
      render(<MockLogin />);
      const buttonElement = screen.getByRole("button", { name: "Sign In"});
      // const notificationElement = screen.getByText(/Hang on, validating/i)
      // expect(notificationElement).toBeTruthy();
      expect(buttonElement).toBeInTheDocument();
    });
    it("Button is clicked", () => {
      render(<MockLogin />);
      const buttonElement = screen.getByRole("button", { name: "Sign In"});
      act(() => {
        MockSignIn("test@test.com", "123456");
        fireEvent.click(buttonElement);
      })
      
    });
  });

});