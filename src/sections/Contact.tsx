import Form from "@/ui/Form";
import SecTitle from "@/ui/SecTitle"

function Contact() {
  return (
    <section className="bg-black flex flex-col justify-center items-center py-20">
      <div className="container">
        <SecTitle
          title="Get In Touch"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <Form />
      </div>
    </section>
  );
}

export default Contact
