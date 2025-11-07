---
layout: page
title: contact
permalink: /contact/
nav: true
nav_order: 5
---

Have a question or want to get in touch? Please fill out the form below, and I'll get back to you as soon as I can.

<form action="https://formspree.io/f/mpwovedq" method="POST">
  <div class="form-group">
    <label>
      Your email:
      <input type="email" name="email" class="form-control" required>
    </label>
  </div>
  <div class="form-group">
    <label>
      Your message:
      <textarea name="message" class="form-control" rows="5" required pattern=".*\S.*" title="Please enter a message. This field cannot be empty or just spaces."></textarea>
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Send</button>
</form>
