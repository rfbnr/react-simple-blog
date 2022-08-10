import { useEffect } from "react";

function Contact() {
    useEffect(() => {
        document.title = "Contact";
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-desc">Kamu dapat menghubungiku dibawah</p>
            <ul>
                <li>Hp/Wa : 0815345564</li>
                <li>Email : qwert@gmail.com</li>
            </ul>
            <p className="section-desc">Atau mau stalking di sosmed??</p>
            <ul>
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                </li>
            </ul>
        </section>
    );
}

export default Contact;
