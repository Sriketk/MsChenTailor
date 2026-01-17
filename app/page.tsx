"use client";

import { HeartIcon, ScissorsIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 274 274' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.7' numOctaves='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.5,
      }}
    />
  );
}

export default function Page() {
  return (
    <div className="relative z-10 min-h-screen">
      <NoiseOverlay />
      {/* Header */}
      <header className="py-3 md:py-4">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center font-semibold text-2xl tracking-tight sm:text-3xl md:text-4xl">
            Ms. Chen Expert Tailoring
          </h1>
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center pt-0 pb-8 sm:pb-12 md:pb-12">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Image Section */}
            <div className="-mt-4 w-full max-w-xl sm:-mt-2 sm:max-w-2xl">
              <div className="relative mx-auto w-full overflow-hidden shadow-2xl">
                <Image
                  alt="Ms. Chen, Expert Tailor"
                  className="h-auto w-full object-contain"
                  height={700}
                  priority
                  src="/chen_profile.jpg"
                  width={800}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex w-full max-w-3xl flex-col items-center space-y-4 text-left sm:space-y-6 md:space-y-8">
              {/* Brief Introduction */}
              <p className="w-full text-base text-foreground leading-relaxed sm:text-lg md:text-xl">
                Meet Ms. Chen Expert Tailoring, one of the few businesses
                remaining in East Broadway Mall. For over sixteen years, Ms.
                Chen has been providing expert tailoring services with pride in
                her craftsmanship and expertise. Whether it&apos;s a pair of
                blue jeans or a fancy evening gown, she will always help you
                alter your clothes until you&apos;re satisfied.
              </p>

              {/* Contact Information */}
              <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row sm:gap-4">
                <p className="text-base text-foreground sm:text-lg">
                  88 E Broadway, Basement Level B42, New York, NY 10002
                </p>
                <p className="text-base text-foreground sm:text-lg">
                  (917) 330-1538
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* About Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">About Ms. Chen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <p>
                With decades of experience in the art of tailoring, Ms. Chen
                brings unparalleled expertise and attention to detail to every
                garment. Her passion for craftsmanship and dedication to
                perfection has made her a trusted name in the community.
              </p>
              <p>
                Whether it&apos;s a simple alteration or a complete custom
                creation, Ms. Chen approaches each project with the same level
                of care and precision, ensuring that every piece fits perfectly
                and reflects the wearer&apos;s unique style.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Services Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-bold text-4xl">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <ScissorsIcon className="mb-2 size-8 text-primary" />
                <CardTitle>Alterations & Repairs</CardTitle>
                <CardDescription>
                  Expert alterations to ensure the perfect fit. From hemming to
                  taking in or letting out, we handle all your garment
                  adjustments with precision.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <SparklesIcon className="mb-2 size-8 text-primary" />
                <CardTitle>Custom Tailoring</CardTitle>
                <CardDescription>
                  Bespoke tailoring services for suits, dresses, and formal
                  wear. Create one-of-a-kind pieces tailored specifically to
                  your measurements and style preferences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <HeartIcon className="mb-2 size-8 text-primary" />
                <CardTitle>Bridal & Formal Wear</CardTitle>
                <CardDescription>
                  Specialized services for your most important occasions. From
                  wedding gowns to formal evening wear, we ensure you look
                  flawless on your special day.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Gallery Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-bold text-4xl">Our Work</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card className="overflow-hidden p-0" key={i}>
                <AspectRatio ratio={4 / 3}>
                  <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                    <span className="text-sm">Image {i}</span>
                  </div>
                </AspectRatio>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center font-bold text-4xl">
            What Our Clients Say
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardDescription className="mb-2 italic">
                  &quot;Ms. Chen transformed my wedding dress into a perfect
                  fit. Her attention to detail is unmatched, and I felt
                  absolutely beautiful on my special day.&quot;
                </CardDescription>
                <CardTitle className="text-base">— Sarah M.</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription className="mb-2 italic">
                  &quot;I&apos;ve been coming to Ms. Chen for years. She always
                  makes my suits fit perfectly. Professional, reliable, and
                  truly an expert in her craft.&quot;
                </CardDescription>
                <CardTitle className="text-base">— James T.</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardDescription className="mb-2 italic">
                  &quot;The custom tailoring service exceeded my expectations.
                  Ms. Chen took the time to understand exactly what I wanted,
                  and the result was perfect.&quot;
                </CardDescription>
                <CardTitle className="text-base">— Maria L.</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section className="px-4 py-16 md:px-8" id="contact">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center font-bold text-4xl">Get in Touch</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground text-sm">
                    123 Main Street
                    <br />
                    Your City, ST 12345
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground text-sm">
                    (555) 123-4567
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-muted-foreground text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="name">Name</FieldLabel>
                      <Input id="name" placeholder="Your name" required />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        placeholder="your.email@example.com"
                        required
                        type="email"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="phone">Phone</FieldLabel>
                      <Input
                        id="phone"
                        placeholder="(555) 123-4567"
                        type="tel"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your tailoring needs..."
                        rows={5}
                      />
                    </Field>
                    <Button className="w-full" type="submit">
                      Send Message
                    </Button>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-muted-foreground text-sm">
        <p>
          © {new Date().getFullYear()} Ms. Chen Expert Tailoring. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
