import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault()
    // TODO: wire up to real form submission (e.g. EmailJS, Formspree, or backend API)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-emerald-50">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-emerald-600 text-sm tracking-widest uppercase">Get in Touch</span>
        <h2 className="text-4xl font-semibold text-stone-800 mt-2 mb-4">
          Begin Your Healing Journey
        </h2>
        <p className="text-stone-500 mb-12">
          Reach out to schedule a free 15-minute discovery call, or book your first session directly.
        </p>

        {submitted ? (
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-emerald-100">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Thank you!</h3>
            <p className="text-stone-500">We'll be in touch within one business day.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-10 shadow-sm border border-stone-100 text-left flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-stone-600 mb-1" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-600 mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-stone-600 mb-1" htmlFor="service">
                Service of Interest
              </label>
              <select
                id="service"
                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-emerald-500 transition-colors bg-white"
              >
                <option value="">Select a service...</option>
                <option>Herbal Medicine</option>
                <option>Acupuncture</option>
                <option>Therapeutic Massage</option>
                <option>Mind-Body Therapy</option>
                <option>Nutritional Counseling</option>
                <option>Flower Essence Therapy</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-stone-600 mb-1" htmlFor="message">
                Tell us about your goals
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Share what's brought you here and what you hope to achieve..."
                className="w-full border border-stone-200 rounded-lg px-4 py-2.5 text-sm text-stone-700 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="self-center bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
