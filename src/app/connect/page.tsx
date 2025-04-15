import ContactForm from '@/components/forms/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';

export const metadata = {
  title: 'Connect With Us | Black Mirage',
  description: 'Get in touch with Black Mirage. We\'d love to hear from you and discuss how we can help bring your digital vision to life.',
};

export default function ConnectPage() {
  return (
    <main className="bg-black min-h-screen">
      <section className="min-h-screen flex items-center py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              Let&apos;s Create Something Amazing Together
            </h1>
            <p className="text-xl text-gray-300">
              Have a project in mind? We&apos;d love to hear about it. Drop us a line and let&apos;s start a conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 max-w-7xl mx-auto">
            {/* Left Column - Contact Form */}
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl">
              <ContactForm />
            </div>

            {/* Divider */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-[80%] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

            {/* Right Column - Contact Info & Map */}
            <div className="space-y-12">
              <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
