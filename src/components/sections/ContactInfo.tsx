'use client';

import React from 'react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-heading font-bold text-white mb-8">Contact Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Address Column */}
        <div>
          <h4 className="text-lg font-medium text-white mb-2">Address</h4>
          <p className="text-gray-300">
            123 Innovation Street<br />
            Bangalore, Karnataka 560001<br />
            India
          </p>
        </div>

        {/* Contact Column */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Phone</h4>
            <p className="text-gray-300">
              <a href="tel:+919876543210" className="hover:text-white transition-colors">
                +91 98765 43210
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Email</h4>
            <p className="text-gray-300">
              <a href="mailto:hello@blackmirage.com" className="hover:text-white transition-colors">
                hello@blackmirage.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="h-[300px] rounded-lg overflow-hidden mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0199037275567!2d77.5936947!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnMzcuMyJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
