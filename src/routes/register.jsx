import { Form } from "react-router-dom";

export default function Register() {
 

  return (
    <div>
      <Form method="post">
      <div class="form-FirstName">
    <label for="FirstName">Enter your first name: </label>
    <input type="text" name="FirstName" id="FirstName" required />
    </div>
    <div class="form-LastName">
    <label for="Lastname">Enter your last name: </label>
    <input type="text" name="LastName" id="LastName" required />

  </div>
  <div class="form-email">
  <label for="email">Enter your email: </label>
  <input type="email" name="email" id="email" required />
  </div>
  <div class="form-password">
  <label for="password">Enter your password: </label>
  <input type="password" name="password" id="password" required />
  </div>

  <div class="form-submit">
    <input type="submit" value="Submit register" />
  </div>
    </Form>
   </div>
  );
}