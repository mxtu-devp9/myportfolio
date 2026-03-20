import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { portfolioData } from '../mock/portfolioData';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        'service_7gcv04n',       // ← replace with your EmailJS Service ID
        'template_2j1xmqf',      // ← replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'mitenmistry09@gmail.com',
        },
        'lTvxkygHtOLeiuOun'        // ← replace with your EmailJS Public Key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">{contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">{contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">{contact.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => window.open(contact.social.github, '_blank')}
                    className="p-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                  >
                    <Github size={20} />
                  </button>
                  <button
                    onClick={() => window.open(contact.social.linkedin, '_blank')}
                    className="p-3 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            {/* Success Message */}
            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <p className="text-green-400 font-medium">✅ Message sent successfully!</p>
                <p className="text-green-400/70 text-sm mt-1">I will get back to you soon.</p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-red-400 font-medium">❌ Failed to send message.</p>
                <p className="text-red-400/70 text-sm mt-1">Please try again or email me directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={18} />
                <span>{isSending ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;