import { Form } from "react-router-dom";

export default function Contact() {
 

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
  <div class="form-object">
  <label for="object">Enter the object: </label>
  <input type="object" name="object" id="object" required />
  </div>
  <div class="form-message">
  <label for="message">Enter your message: </label>
  <input type="message" name="message" id="message" required />
  </div>

  <div class="form-submit">
    <input type="submit" value="Submit Message" />
  </div>
    </Form>
   </div>
  );
}