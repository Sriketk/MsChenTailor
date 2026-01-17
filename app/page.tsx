"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import GoogleReview from "@/components/ui/custom/google-review";
import MasonryGrid from "@/components/ui/custom/masonry-grid";
import RedditReview from "@/components/ui/custom/reddit-review";
import TikTokEmbed from "@/components/ui/custom/tiktok-embed";
import YelpReview from "@/components/ui/custom/yelp-review";
import { Separator } from "@/components/ui/separator";

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
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.2 });
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  });
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 });

  return (
    <div className="relative z-10 min-h-screen">
      <NoiseOverlay />
      {/* Header */}
      <motion.header
        animate={{ opacity: 1, y: 0 }}
        className="py-3 md:py-4"
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="mx-auto max-w-6xl">
          <h1 className="text-center font-semibold text-2xl tracking-tight sm:text-3xl md:text-4xl">
            Ms. Chen Expert Tailoring
          </h1>
        </div>
      </motion.header>
      {/* Hero Section */}
      <section
        className="flex min-h-screen flex-col items-center justify-center pt-0 pb-8 sm:pb-12 md:pb-12"
        ref={heroRef}
      >
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Image Section */}
            <motion.div
              animate={
                heroInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              className="-mt-4 w-full max-w-xl sm:-mt-2 sm:max-w-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
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
            </motion.div>

            {/* Content Section */}
            <motion.div
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              className="flex w-full max-w-3xl flex-col items-center space-y-4 text-left sm:space-y-6 md:space-y-8"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
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
              <motion.div
                animate={
                  heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                className="w-full space-y-3"
                initial={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <div className="flex w-full flex-col items-center justify-between gap-2 sm:flex-row sm:gap-4">
                  <p className="text-base text-foreground sm:text-lg">
                    88 E Broadway, Basement Level B42, New York, NY 10002
                  </p>
                  <p className="text-base text-foreground sm:text-lg">
                    (917) 330-1538
                  </p>
                </div>
                <div className="w-full space-y-1 text-center text-base text-foreground sm:text-left sm:text-lg">
                  <p>Sunday: 9:30 AM - 5 PM</p>
                  <p>Monday: 11 AM - 5 PM</p>
                  <p>Tuesday - Saturday: 9:30 AM - 7 PM</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Gallery Section */}
      <section className="px-4 py-16 md:px-8" ref={galleryRef}>
        <div className="mx-auto max-w-6xl">
          <motion.div
            animate={
              galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            className="mb-12 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="font-bold text-4xl">Gallery</h2>
            <Link
              className="inline-flex items-center text-foreground transition-colors hover:text-foreground/80"
              href="/gallery"
            >
              <ArrowRight className="size-6" />
            </Link>
          </motion.div>
          <MasonryGrid
            className="columns-1 gap-4 sm:columns-2 md:columns-3"
            gap="1rem"
            items={[
              "bday.jpg",
              "black.jpg",
              "blue.jpg",
              "cheetah.jpg",
              "fringe.jpg",
              "green.jpg",
              "red.jpg",
              "redfull.jpg",
              "silk.jpg",
              "suit.jpg",
              "unnamed.jpg",
            ]}
            renderItem={(imageName) => (
              <Card className="overflow-hidden rounded-none p-0">
                <div className="relative w-full">
                  <Image
                    alt={`Ms. Chen's tailoring work - ${imageName.replace(".jpg", "")}`}
                    className="h-auto w-full object-cover"
                    height={800}
                    src={`/work/${imageName}`}
                    width={600}
                  />
                </div>
              </Card>
            )}
          />
        </div>
      </section>

      <Separator />

      {/* About Section */}
      <section className="px-4 py-16 md:px-8" ref={aboutRef}>
        <div className="mx-auto max-w-6xl">
          <motion.h2
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="mb-6 text-center font-bold text-3xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            About Ms. Chen
          </motion.h2>
          <motion.div
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="space-y-6 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="my-6 flex flex-col gap-6 md:flex-row md:items-start">
              <motion.div
                animate={
                  aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                className="relative w-full shrink-0 overflow-hidden md:w-auto md:max-w-xs"
                initial={{ opacity: 0, x: -20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <Image
                  alt="Ms. Chen's tailoring shop"
                  className="h-auto w-full object-cover"
                  height={600}
                  src="/chen/about/cream.jpg"
                  width={300}
                />
              </motion.div>
              <motion.div
                animate={
                  aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                className="flex-1 space-y-4"
                initial={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <p>
                  Meet Ms. Chen Expert Tailoring, one of the few businesses
                  remaining in East Broadway Mall.
                </p>
                <p>
                  Growing up in Fujian Lianjiang, Ms. Chen didn&apos;t have a
                  lot of opportunities. She could either become a hairdresser or
                  a seamstress. She was interested in cutting hair, but
                  unfortunately, a major illness left her disabled and made it
                  very difficult to use small haircutting tools.
                </p>
                <p>
                  As she was always interested in fashion, she taught herself
                  how to sew at 13. She started by helping her neighbors sew
                  simple garments, then apprenticed at a local shop before
                  saving up enough money to open her small business. Sewing
                  brought her a lot of satisfaction. She was skilled at her
                  craft, and people from neighboring regions would visit her
                  shop to get their clothes made and altered.
                </p>
                <p>
                  In 1993, Ms. Chen&apos;s husband came to the U.S. in search of
                  better economic opportunities. She tried for ten years before
                  successfully reuniting with her husband in 2003. After
                  arriving, she settled in Flushing and got into the beauty
                  industry doing at-home facials. However, she yearned to open a
                  small business again someday. Unfortunately, no storefronts
                  were available in Chinatown, so she worked as a seamstress at
                  another clothing store in the meantime. In 2004, she opened
                  her first shop outside East Broadway Mall. She chose that
                  location as it was convenient and attracted a lot of foot
                  traffic. In 2006, she moved her business inside the mall, and
                  she&apos;s been there ever since.
                </p>
              </motion.div>
            </div>
            <p>
              Sixteen years later, Ms. Chen continues to sew and mend clothes
              for her customers in the basement of East Broadway Mall. She has a
              diverse clientele and has even altered clothes for fashion
              designers and models. During the COVID-19 pandemic, she was closed
              for a year and a half. Loyal customers kept ringing her phone, so
              she finally reopened her business in July 2021.
            </p>
            <p>
              Ms. Chen prides herself on her craftsmanship and expertise.
              Whether it&apos;s a pair of blue jeans or a fancy evening gown,
              she will always help you alter your clothes until you&apos;re
              satisfied. Visit her in person or give her a call at 917-330-1538
              if you need her expert tailoring services!
            </p>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Testimonials Section */}
      <section className="px-4 py-16 md:px-8" ref={testimonialsRef}>
        <div className="mx-auto max-w-6xl">
          <motion.h2
            animate={
              testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            className="mb-12 text-center font-bold text-4xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            What Our Clients Say
          </motion.h2>
          <MasonryGrid
            className="columns-1 gap-6 sm:columns-2 lg:columns-3"
            gap="1.5rem"
            items={[
              {
                type: "google",
                name: "Joy Yu",
                stars: 5,
                date: "a year ago",
                description:
                  "A few weeks ago, I brought four pairs of pants here to have the lengths altered. Ms. Chen told me it would take almost a month as she was quite busy. I just picked them up today, and every pair fits perfectly! She did an incredibly professional job. Highly recommend.",
                href: "https://www.google.com/maps/place/Ms.+Chen+Expert+Tailoring",
              },
              {
                type: "google",
                name: "Andrew JK",
                stars: 5,
                date: "a month ago",
                description:
                  "I came to see Ms Chen to adjust three linen shirts and she was wonderful. She took the time to make the proper adjustments, even staying late to make some final tweaks. The price was also very reasonable. She was very nice and kind. I will definitely use her again next time I need alterations. Definitely recommend!",
                href: "https://share.google/UMfdwjwwWvcvuah94",
              },
              {
                type: "google",
                name: "Ana Titla",
                stars: 5,
                date: "5 months ago",
                description:
                  "Best tailor in NYC. I come here whenever I need to alter my pants especially when they are a blind stitch, Ms. Chen does a very very good job. This is my second time bringing in my pants and she does a good job for a great price. Please make sure you are reviewing her, and not the other shop. She works really hard and has many loyal customers and it shows how good she is. I highly recommend.",
                href: "https://share.google/nSirn1IcISJwaICqp",
              },
              {
                type: "google",
                name: "EFC EFC",
                stars: 5,
                date: "5 months ago",
                description:
                  "If you are seeking exceptional tailoring services in NYC look no further than Ms. Chen, she is a miracle worker! We were in a dire straits situation with a bridesmaid dress and Ms. Chen worked her magic. (Due to a mix-up the dress that arrived was 2 sizes too small and it would take 8 weeks for a new dress to arrive.) She was able to (discretely) add 6 inches!! to the sides by cutting fabric from the ample skirt section of the dress. The end result was amazing. Unless you had a magnifying glass, you could not tell the dress was altered at all. While she did request a couple of weeks to fix (due to high demand) the dress was ready on the promised date and the cost was more than reasonable. We are eternally grateful to Ms. Chen and her wonderful tailoring skills! I would highly recommend her for your tailoring needs. Added plus -- we discovered some cool little restaurants in surrounding area!",
                href: "https://share.google/jbfDpM8m6FIfpKG2l",
              },
              {
                type: "google",
                name: "JL",
                stars: 5,
                date: "a year ago",
                description:
                  "Ms. Chen turned around a dress alteration (3 sizes too big) for me in 4 days despite being super busy. Her work is beautiful—she's clearly very good at her craft! If you're expecting a spick-and-span corporate-feeling customer service experience, this might not be the place for you; but if you don't mind getting to know a sweet and slightly chaotic auntie who takes a lot of pride in her work and isn't afraid to set boundaries with customers, come visit Ms. Chen ❤️",
                href: "https://share.google/kJBnSC3VigK3rZGKp",
              },
              {
                type: "google",
                name: "Albert Chang",
                stars: 5,
                date: "a month ago",
                description:
                  "Best tailor in NYC! Incredibly detailed work for my pants that other places said wasn't possible and fair prices. The owner is also super friendly Make sure to go to the right location, right under the stairs and take a left!",
                href: "https://www.google.com/maps/place/Ms.+Chen+Expert+Tailoring",
              },
              {
                type: "google",
                name: "Rachel Kalt",
                stars: 5,
                date: "2 years ago",
                description:
                  "I was only back in NY for a month and had 3 vintage items and a suit that I needed to be tailored in order to wear them. I had an upcoming event in California and wanted to wear these pieces. I took a risk and brought all four items to the tailor at once because I didn't have time to test a piece first. My risk more than paid off — Ms. Chen is a GENIUS!! I couldn't be happier with everything. She worked on a pair of vintage fringe pants, a silk dress with a complicated tear, a velour floor length dress, and a suit. Despite our language barrier, she took everything in, shortened everything, and repaired it all to PERFECTION ✨. Good tailoring, that doesn't cost a fortune, is hard to come by in NY and Ms. Chen is as good as they get. I will exclusively be bringing all my items that need tailoring to her ❤️",
                href: "https://share.google/1TPWMMJfx3nPPVRf7",
              },
              {
                type: "google",
                name: "Liz F",
                stars: 5,
                date: "2 years ago",
                description:
                  "Amazing experience! I had a dress and jacket that I didn't feel good in, but absolutely loved. Ms.Chen did excellent work taking them in and I'm so happy to be able to wear these clothes!!! Friendly and affordable. I caught her at a busy time, but turn around was very reasonable. I already have other projects in mind. No I can't read or speak Chinese, but we pantomimed and texted just fine!",
                href: "https://share.google/7AqBrwrrSyuKMtEWh",
              },
              {
                type: "google",
                name: "Ginger Chan",
                stars: 5,
                date: "a year ago",
                description:
                  "Ms. Chen goes above and beyond. I originally only came in for a hem and she offered to take in the waist of my dress for free! She is a master seamstress and her work is better than any large department store's tailoring department. Ms. Chen knows what she's doing and she definitely didn't disappoint.",
                href: "https://share.google/IE5dbEtEv2bRx9lFX",
              },
              {
                type: "google",
                name: "Samantha Pauline",
                stars: 5,
                date: "9 months ago",
                description:
                  "I've brought around 10 pieces to Ms Chen over the past six months and I plan to bring my entire closet in at some point. She really understands how clothing should fit. If she's overloaded you might have to wait a bit, but it's worth it. I don't know what I'll do if she retires. Note: make sure to photograph the clothing you leave with her and text her the picture and her quote; it's also a good idea to text or call the day before you're supposed to come for pick up.",
                href: "https://share.google/XZv2wIHTpHiwOOWcm",
              },
              {
                type: "yelp",
                name: "Lilly D.",
                stars: 5,
                date: "Jul 20, 2023",
                location: "New York, NY",
                description:
                  "Ms. Chen is sweet, fast and accommodating. Her prices are extremely reasonable. Mall sadly a bit run down but don't let that dissuade you from finding Ms. Chen! Go down the stairs and make a left and another left, under the stairs and she will be there on her sewing machine! Thank you Ms. Chen!",
                href: "https://www.yelp.com",
              },
              {
                type: "reddit",
                author: "miffy_the_destroyer",
                date: "2y ago",
                description:
                  "Ms Chen in Chinatown is a TAILORING GENIUS and has very low prices! You can check out her Yelp / Google reviews. She's going to be on vacation 5/7 - 5/24, so don't expect fast turn around time while she's away tho.",
                href: "https://www.reddit.com",
                upvotes: 2,
              },
              {
                type: "tiktok",
                username: "internetelena",
                caption: "I will miss her dearly 🥺...",
                likes: 5535,
                views: 69_400,
                href: "https://www.tiktok.com/@internetelena",
                videoUrl:
                  "https://www.tiktok.com/@internetelena/video/7495874007649094958",
              },
              {
                type: "tiktok",
                username: "vivecachow",
                caption: "",
                likes: 0,
                views: 0,
                href: "https://www.tiktok.com/@vivecachow",
                videoUrl:
                  "https://www.tiktok.com/@vivecachow/video/7414903891814403370",
              },
              {
                type: "tiktok",
                username: "emilybian_",
                caption: "",
                likes: 0,
                views: 0,
                href: "https://www.tiktok.com/@emilybian_",
                videoUrl:
                  "https://www.tiktok.com/@emilybian_/video/7333001509438786859",
              },
            ]}
            renderItem={(review) => (
              <Card className="mb-6 break-inside-avoid overflow-hidden rounded-none p-0">
                <CardContent className="pt-6">
                  {review.type === "google" && (
                    <GoogleReview
                      date={(review as { date: string }).date}
                      description={
                        (review as { description: string }).description
                      }
                      href={(review as { href?: string }).href}
                      name={(review as { name: string }).name}
                      stars={(review as { stars: number }).stars}
                    />
                  )}
                  {review.type === "yelp" && (
                    <YelpReview
                      date={(review as { date: string }).date}
                      description={
                        (review as { description: string }).description
                      }
                      href={(review as { href?: string }).href}
                      location={(review as { location?: string }).location}
                      name={(review as { name: string }).name}
                      stars={(review as { stars: number }).stars}
                    />
                  )}
                  {review.type === "reddit" && (
                    <RedditReview
                      author={(review as { author: string }).author}
                      date={(review as { date: string }).date}
                      description={
                        (review as { description: string }).description
                      }
                      href={(review as { href?: string }).href}
                      upvotes={(review as { upvotes?: number }).upvotes}
                    />
                  )}
                  {review.type === "tiktok" && review.videoUrl && (
                    <TikTokEmbed
                      href={(review as { href?: string }).href}
                      videoUrl={review.videoUrl}
                    />
                  )}
                </CardContent>
              </Card>
            )}
          />
        </div>
      </section>

      <Separator />

      {/* Contact Section */}
      <section className="px-4 py-16 md:px-8" ref={contactRef}>
        <div className="mx-auto max-w-6xl">
          <motion.h2
            animate={
              contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            className="mb-12 text-center font-bold text-4xl"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            Contact Us
          </motion.h2>
          <motion.div
            animate={
              contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            className="grid gap-8 md:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-semibold text-lg">Store Location</h3>
                <p className="text-muted-foreground">
                  88 E Broadway
                  <br />
                  Basement Level B42
                  <br />
                  New York, NY 10002
                </p>
                <p className="mt-2 font-bold text-foreground">
                  Take 2 lefts once you get to the bottom of the stairs!
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-lg">Phone</h3>
                <a
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  href="tel:+19173301538"
                >
                  (917) 330-1538
                </a>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-lg">Hours</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Sunday: 9:30 AM - 5 PM</p>
                  <p>Monday: 11 AM - 5 PM</p>
                  <p>Tuesday - Saturday: 9:30 AM - 7 PM</p>
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden">
              <iframe
                allowFullScreen
                className="h-full min-h-[400px] w-full rounded-lg"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=88+E+Broadway,+New+York,+NY+10002&output=embed"
                style={{ border: 0 }}
                title="Ms. Chen Expert Tailoring Location"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="border-t py-8 text-center text-muted-foreground text-sm"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        whileInView={{ opacity: 1 }}
      >
        <p>
          © {new Date().getFullYear()} Ms. Chen Expert Tailoring. All rights
          reserved.
        </p>
      </motion.footer>
    </div>
  );
}
