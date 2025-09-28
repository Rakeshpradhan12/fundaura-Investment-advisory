import React from 'react';
import { SITE } from '../data/site';

export default function Contact(): JSX.Element {
  return (
    <section id="contact" className="section alt">
      <div className="container grid2 gap-24">
        <div className="card p-24">
          <h3>Request a Call Back</h3>
          <form name="contact" method="POST" data-netlify="true" className="grid gap-12 mt-12">
            <input type="hidden" name="form-name" value="contact" />
            <input required placeholder="Full Name" name="name" />
            <input required placeholder="Phone" name="phone" />
            <input required type="email" placeholder="Email" name="email" />
            <select name="service">
              <option>- Choose Our Services -</option>
              {SITE.services.map((s) => (
                <option key={s.code}>{s.name}</option>
              ))}
            </select>
            <textarea placeholder="Your message" rows={4} name="message"></textarea>
            <button className="btn" type="submit">Submit</button>
            <p className="hint">Submissions appear under Netlify → Forms if hosted there.</p>
          </form>
        </div>
        <div className="card p-24">
          <div className="stack gap-12">
            <div>
              <strong>Registered Address</strong>
              <div className="muted">{SITE.contact.address1}</div>
            </div>
            <div>
              <strong>Regional Office</strong>
              <div className="muted">{SITE.contact.address2}</div>
            </div>
            <div>
              <strong>Phone</strong>
              <div>
                <a href={`tel:${SITE.contact.phone}`}>{SITE.contact.phone}</a>
              </div>
            </div>
            <div>
              <strong>Email</strong>
              <div>
                <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
              </div>
            </div>
            {/* {SITE.sebi.show && (
              <>
                <div className="small muted">
                  {SITE.sebi.registrationLabel}: <strong>{SITE.sebi.registrationValue}</strong>
                </div>
                <div className="small muted">{SITE.sebi.complianceOfficer}</div>
              </>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
}