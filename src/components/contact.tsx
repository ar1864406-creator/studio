'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-bold mb-4 block">Get In Touch</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold mb-6">Contact to Order</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Interested in a private viewing or custom tailoring? Visit our flagship atelier or reach out to our team directly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Our Flagship</p>
                  <p className="font-bold">128 Fashion Ave, Milan, IT 20121</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone Inquiry</p>
                  <p className="font-bold">+39 02 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email Support</p>
                  <p className="font-bold">atelier@ysoutfitters.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-8 text-lg uppercase tracking-[0.2em] w-full sm:w-auto"
              >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp Concierge
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-background p-8 lg:p-12 border border-border shadow-2xl relative">
            <h3 className="font-headline text-2xl font-bold mb-8">Send an Inquiry</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <Input placeholder="John Doe" className="bg-card border-border rounded-none focus:ring-primary focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-card border-border rounded-none focus:ring-primary focus:border-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Preferred Look / Item</label>
                <Input placeholder="e.g. Metropolitan Midnight Blazer" className="bg-card border-border rounded-none focus:ring-primary focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea placeholder="Share your preferences..." className="bg-card border-border rounded-none min-h-[150px] focus:ring-primary focus:border-primary" />
              </div>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-none py-6 uppercase tracking-widest">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
