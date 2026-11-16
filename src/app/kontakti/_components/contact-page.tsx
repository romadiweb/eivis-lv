import Image from "next/image";
import { pageContent } from "@/lib/page-content";
import paperPlane from "../../../../public/contact-paper-plane.png";
import clipboard from "../../../../public/contact-clipboard.png";
import chatBubbles from "../../../../public/contact-chat-bubbles.png";
import handshake from "../../../../public/contact-handshake.png";
import "./contact-page.css";

export function ContactPage() {
  return (
    <main className="contact-page__page">
      <section className="contact-page__hero" aria-labelledby="contact-title">
        <span className="contact-page__label">{pageContent.kontakti.title}</span>
        <h1 id="contact-title">Labākie risinājumi<br />sākas ar sarunu.</h1>
        <p>Pastāstiet par savas organizācijas vajadzībām. Kopā noskaidrosim, kā EIVIS var vienkāršot ikdienas darbu un savienot svarīgākos procesus.</p>
        <div className="contact-page__actions">
          <a href="#contact-form" className="contact-page__primary">Pieteikt demonstrāciju</a>
          <a href="#contact-form" className="contact-page__secondary">Nosūtīt ziņu</a>
        </div>
      </section>
      <section id="contact-form" className="contact-page__form-section" aria-labelledby="contact-form-title">
        <form className="contact-page__form" aria-labelledby="contact-form-title">
          <h2 id="contact-form-title">Par ko vēlaties sazināties?</h2>
          <label className="contact-page__full-field">
            Saziņas tēma
            <select name="topic" defaultValue="" required>
              <option value="" disabled>Izvēlieties tēmu</option>
              <option value="demo">Demonstrācija</option>
              <option value="platform">Jautājums par EIVIS</option>
              <option value="other">Cits jautājums</option>
            </select>
          </label>
          <label>Vārds<input name="firstName" autoComplete="given-name" required /></label>
          <label>Uzvārds<input name="lastName" autoComplete="family-name" required /></label>
          <label>E-pasts<input name="email" type="email" autoComplete="email" required /></label>
          <label>Organizācija<input name="organization" autoComplete="organization" /></label>
          <label className="contact-page__full-field">
            Ziņojums
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit" className="contact-page__primary" disabled>Nosūtīt pieprasījumu</button>
          <p className="contact-page__full-field contact-page__form-note">Pieprasījumu nosūtīšana pašlaik nav pieejama.</p>
        </form>
      </section>
      <section className="contact-page__next" aria-labelledby="contact-next-title">
        <h2 id="contact-next-title">Kas notiek tālāk?</h2>
        <ol className="contact-page__next-steps">
          <li>
            <Image className="contact-page__step-icon" src={paperPlane} alt="" width={210} height={140} />
            <h3>Pieprasījums</h3>
            <p>Pastāstiet par savas organizācijas vajadzībām.</p>
          </li>
          <li>
            <Image className="contact-page__step-icon" src={clipboard} alt="" width={210} height={140} />
            <h3>Iespēju izvērtēšana</h3>
            <p>Izvērtēsim jūsu ieceri un noskaidrosim, kuri EIVIS moduļi var palīdzēt.</p>
          </li>
          <li>
            <Image className="contact-page__step-icon" src={chatBubbles} alt="" width={210} height={140} />
            <h3>Saruna</h3>
            <p>Pārrunāsim iespējas un atbildēsim uz jūsu jautājumiem.</p>
          </li>
          <li>
            <Image className="contact-page__step-icon" src={handshake} alt="" width={210} height={140} />
            <h3>Nākamais solis</h3>
            <p>Kopā vienosimies par piemērotāko nākamo soli.</p>
          </li>
        </ol>
      </section>
    </main>
  );
}
