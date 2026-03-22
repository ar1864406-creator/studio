'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import React from 'react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <span className="text-primary text-sm uppercase tracking-[0.4em] font-bold mb-4 block">Get In Touch</span>
              <h2 className="font-headline text-5xl md:text-7xl font-bold mb-8">Contact to Order</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                Interested in a private viewing or custom tailoring? Visit our flagship atelier or reach out to our team directly.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { Icon: MapPin, label: 'Our Flagship', val: '128 Fashion Ave, Milan, IT 20121' },
                { Icon: Phone, label: 'Phone Inquiry', val: '+39 02 123 4567' },
                { Icon: Mail, label: 'Email Support', val: 'atelier@ysoutfitters.com' }
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl flex items-center gap-6 group hover:border-primary/50 transition-all">
                  <div className="w-12 h-12 glass-primary flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                    <item.Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-bold text-sm tracking-wide">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Button
                asChild
                className="bg-primary/20 backdrop-blur-xl border border-white/10 text-white hover:bg-primary/40 rounded-full px-12 py-8 text-lg uppercase tracking-[0.2em] w-full sm:w-auto"
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp Concierge
                </a>
              </Button>
            </div>
          </div>

          <div className="glass p-8 lg:p-16 rounded-[3rem] border-white/10 relative">
            <h3 className="font-headline text-3xl font-bold mb-10">Send an Inquiry</h3>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground pl-2">Full Name</label>
                  <Input placeholder="John Doe" className="glass bg-transparent border-white/10 rounded-2xl h-14 focus:ring-primary focus:border-primary px-6" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground pl-2">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="glass bg-transparent border-white/10 rounded-2xl h-14 focus:ring-primary focus:border-primary px-6" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground pl-2">Preferred Look / Item</label>
                <Input placeholder="e.g. Metropolitan Midnight Blazer" className="glass bg-transparent border-white/10 rounded-2xl h-14 focus:ring-primary focus:border-primary px-6" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground pl-2">Message</label>
                <Textarea placeholder="Share your preferences..." className="glass bg-transparent border-white/10 rounded-3xl min-h-[150px] focus:ring-primary focus:border-primary p-6" />
              </div>
              <Button className="w-full bg-primary/40 hover:bg-primary/60 text-white rounded-full py-8 text-base uppercase tracking-[0.3em] font-bold border border-white/10">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
