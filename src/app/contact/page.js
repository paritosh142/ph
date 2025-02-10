import Button from '../../components/Button';
export default function ContactForm() {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-3xl font-bold mb-8">Let's Create Something Amazing</h3>
        <form className="space-y-6">
          <div className="relative">
            <input 
              type="text" 
              id="name" 
              className="w-full p-3 border rounded-lg peer focus:border-blue-500 focus:outline-none" 
              placeholder=" "
            />
            <label 
              htmlFor="name" 
              className="absolute left-3 top-3 text-gray-500 transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:top-3"
            >
              Full Name
            </label>
          </div>
          {/* Add email, message fields similarly */}
          <Button className="w-full">Send Message</Button>
        </form>
      </div>
    );
  }
  