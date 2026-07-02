import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/70 bg-card p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand" />
        <h3 className="font-display text-xl font-semibold">Message received</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          Thanks for reaching out — your message is in our queue. A real person
          from our team will reply within one business day.
        </p>
        <Button variant="outline" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" required placeholder="Jane Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" type="email" required placeholder="jane@company.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" placeholder="Acme Inc." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="size">Team size</Label>
          <Select>
            <SelectTrigger id="size">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1 – 10</SelectItem>
              <SelectItem value="11-50">11 – 50</SelectItem>
              <SelectItem value="51-200">51 – 200</SelectItem>
              <SelectItem value="200+">200+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Label htmlFor="topic">How can we help?</Label>
        <Select>
          <SelectTrigger id="topic">
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sales">Talk to sales</SelectItem>
            <SelectItem value="support">Product support</SelectItem>
            <SelectItem value="partner">Partnerships</SelectItem>
            <SelectItem value="press">Press inquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4 space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" required rows={5} placeholder="Tell us about your team, the tools you use, and the workflow you'd most like to fix." />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Send message
      </Button>
    </form>
  );
}
