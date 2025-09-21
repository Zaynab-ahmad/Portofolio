import Form from "@/ui/Form";
import SecTitle from "@/ui/SecTitle"

function Contact() {
  return (
    <section className="bg-white flex flex-col justify-center items-center py-20">
      <div className="container">
        <SecTitle
          title="Get In Touch"
          description="I'd love to hear from you! Whether you have a project idea, a question, or just want to say hello, feel free to reach out. Let's create something amazing together."
        />
        <Form />
      </div>
    </section>
  );
}

export default Contact
