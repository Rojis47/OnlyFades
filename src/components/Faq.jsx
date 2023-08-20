const faqs = [
  {
    id: 1,
    question: 'Do you accept walk-ins or is it appointment-only?',
    answer:
      'Yes, we do accept walk-ins, but booking an appointment ensures you get the time slot you prefer.',
  },
  {
    id: 2,
    question: 'How long does a typical haircut or fade take?',
    answer:
      'A standard haircut usually takes around 30-45 minutes, but it might vary based on the complexity of the style.',
  },
  {
    id: 3,
    question:
      'What hair products do you use and are they available for purchase?',
    answer:
      'We only use premium quality products for all our services. Yes, they are available for purchase in-store so you can maintain that fresh look at home.',
  },
  {
    id: 4,
    question: 'Can I choose my barber?',
    answer:
      "Absolutely! When booking, you can select your preferred barber. If you're unsure, our team is here to guide you to the barber that fits your style.",
  },
  {
    id: 5,
    question: "What's your cancellation policy?",
    answer:
      'If you need to cancel, we ask that you do so at least 24 hours in advance. This gives us a chance to accommodate other clients.',
  },
];

function Faq() {
  return (
    <div className="bg-gray-900">
      <div className="px-6 py-16 mx-auto max-w-7xl sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
          Frequently asked questions
        </h2>
        <p className="max-w-2xl mt-6 text-base leading-7 text-gray-300">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our support team by{' '}
          <a
            href="#"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            sending us an email
          </a>{' '}
          and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-white">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Faq;
