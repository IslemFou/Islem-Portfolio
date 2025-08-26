import ContactForm from "../components/ContactForm";
function Contact() {
    return (
        <section id="contact" className="p-6">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold mb-6">Contactez-moi</h1>
                <ContactForm />
            </div>
            <p>Email : islem@example.com</p>
            <p>GitHub : <a href="https://github.com/tonprofil" className="text-blue-500">mon GitHub</a></p>
            <p>LinkedIn : <a href="https://linkedin.com/in/tonprofil" className="text-blue-500">mon LinkedIn</a></p>
        </section>
    );
}

export default Contact;
