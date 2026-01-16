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
      {/* Hero Section */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-shrink-0">
            <div className="relative size-64 overflow-hidden rounded-2xl md:size-80">
              <Image
                alt="Ms. Chen, Expert Tailor"
                className="object-cover"
                fill
                priority
                src="/chen_profile.jpg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="mb-2 font-bold text-5xl tracking-tight md:text-7xl">
              Ms. Chen
            </h1>
            <h2 className="mb-6 font-medium text-3xl text-muted-foreground md:text-4xl">
              Expert Tailor
            </h2>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl">
              Crafting perfection with precision, one stitch at a time. Your
              trusted partner for expert tailoring services.
            </p>
            <Button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
            >
              Get in Touch
            </Button>
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
          © {new Date().getFullYear()} Ms. Chen Expert Tailor. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
