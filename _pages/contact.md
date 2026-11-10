---
layout: page
title: contact
permalink: /contact/
nav: true
nav_order: 5
---

<!-- TODO(tanmay): add your office/building and postal address below, so the
     block is complete enough to paste into a grant application. -->

**Tanmay Agrawal**<br>
Postdoctoral Research Fellow<br>
Department of Earth Sciences, University of Oxford

Email: <a href="mailto:{{ site.data.socials.email | encode_email }}">iitanmay [at] proton [dot] me</a>

<!-- The href is percent-encoded by `encode_email` (jekyll-email-protect) so the
     address is not sitting in the source as plain text; the visible label is the
     human-readable form rather than the encoded one. -->

I am always glad to hear from people working on buoyant plumes, air curtains,
stratified flows or related problems — whether that is a possible collaboration,
a question about one of the papers, or a student looking for a project.

You can email me directly, or use the form below.

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
