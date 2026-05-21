/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, ExternalLink } from 'lucide-react';

const REVIEWS = [
  { author: 'J Qazi', body: 'It all started back in 2023 when I first visited Prestige Detailing and met Ayman. The work was absolutely extraordinary — every panel treated with the kind of care you only see from true craftsmen.' },
  { author: 'Ahmad Alshamsi', body: 'I had a great experience at Prestige Auto dealing with Mr. Ayman and his team. They were professional, attentive, and delivered excellent detailing results. I highly recommend them to anyone looking for high-quality car detailing services.' },
  { author: 'Adel Al Shishani', body: 'This is the place to go if you want to have one of the best car care services in Dubai. Not only is there work immaculate but the owner is a great person and will always give solid and honest advice.' },
  { author: 'Zaid Hamidi', body: "After nearly a month in the garage for a full restoration, I was ready to replace my car's entire interior—until Prestige Detailing worked their magic! The results were unbelievable; the interior looks brand new. Highly recommended!" },
  { author: 'Osama Kandil', body: 'I had a great experience at prestige auto dealing with Mr Ayman. He and his team paid great attention to detail and were very meticulous with their work. The process was very smooth and transparent, and I was consistently updated.' },
  { author: 'Mohannad elumatec', body: "Guys, if you wish to have your car taking care of, only prestige. If you throw tailor, Artist, scientist, and chemist in a mixer you get Ayman. Prestige is a 5 star hotel for your car staycation." },
  { author: 'Jasim Mohamed Rabeek', body: 'I recently got ceramic coating done at Prestige Detailing, and I must say—they did an amazing job! The coating quality is very, very good, and the shine and protection on my car are clearly visible.' },
  { author: 'Paul Lompas', body: 'Best car wash and detailing in Dubai. The owner, Aiman is a real petrolhead and most friendly person I have ever met! Guys at prestige have an eye for quality and attention to details. Forget about swirls and marks on windows after wash! Guys will make your car shine!' },
  { author: 'Amin Alkhadra', body: "I recently brought my BMW to Prestige Car Detailing and I couldn't be happier with the results. The team did an outstanding job on the full interior dry clean — the cabin looks and smells brand new." },
  { author: 'Mirza Hatk', body: "Went there with a huge dent in the driver's door. Done in one day, they even noticed a couple of other ones on the rear door, fixed them. Car looks almost like new, no paint, no traces. Top quality, fast service." },
  { author: 'Samer Abdel Malak', body: 'One of the best treatments you can give to your car (and from personal experience, they always give you more than what they promise ✨).' },
  { author: 'Ali D', body: 'Outstanding job by Ayman. Got my car detailed, ceramic coated and added PPF on the front end. Excellent work with attention to details! Well done team.' },
  { author: 'Assyl', body: "Fairly priced, excellent quality, and very honest people. I'm extremely happy with the ceramic coating they did." },
  { author: 'MrTheSof', body: 'I got my car back yesterday evening and what an amazing work Prestige detailing has done (and was not the first time). They are extremely professional and the quality of work they offer and deliver is outstanding.' },
  { author: 'Paul Cheung', body: "Now the car's previously been ceramic coated by Prestige Detailing, but now, for preserving the bodywork for the long-term, I did the whole PPF package! The car is next level WOW! Looks amazing and has the benefit of self-healing PPF." },
  { author: 'Naazia Kardamey', body: 'Prestige Car Detailing is by far thee best detailing place. The quality of products and Services they offer are unique and definitely value for money. A shout out to Ayman and his team.' },
  { author: 'RISHI GUPTA', body: 'I recently had the pleasure of experiencing the full range of services at Prestige Detailing, including car polish, detailing, and ceramic coating. Under the expert guidance of Mr. Aymen, my car has never looked better.' },
  { author: 'Zaid Rayyan', body: 'The exceptional service I received for my flooded car, swiftly restored to brand new, was truly extraordinary. I was ecstatic upon seeing my car, brought back to an even better state than before. Under the skilled leadership of Mr. Ayman.' },
  { author: 'Colin Linklater', body: 'Very impressed. We run a garage and We have run 6 cars through Ayman and the team so far. Outstanding service and every car is stunning. Not just normal detailing but heavy paint correction also. You will not be disappointed.' },
  { author: 'Ahmed Taha', body: "I honestly can't recommend any place better than this. You will get the best service for a fraction of the price that other places charge. Mr Ayman is not only professional but genuinely cares about every car he works on." },
  { author: 'Fernanda Amaral', body: 'Fantastic service! As a woman we always get a bit uncomfortable when we have to take our car for service but my experience in Prestige was completely different. Very honest and transparent from start to finish.' },
  { author: 'M Irv51', body: 'Superb service from Ayman and his team of detailers. Really good customer care before and after they carried out the ceramic paint protection on my car. They take care of the car as if its their own! Thoroughly recommended.' },
  { author: 'Jad Bsaibes', body: 'Ayman and the team at Prestige Detailing completed a fantastic paint restoration on my tired sun scorched Defender. The paint correction has brought the car back to beyond a showroom finish. Highly recommend.' },
  { author: 'Pieter Ferreira', body: "I cannot recommend these guys enough. Brilliant service, great communication and reasonable prices. Mr. Ayman proved the exception when it comes to honesty. Friendly, honest and professional." },
  { author: 'Rami Yousef', body: 'The experience was very comfortable, informative and honest, the service is 5 star and they refused to give me anything less than perfect.' },
  { author: 'bader alhunaity', body: 'The best detailing shop to ever exist in the UAE. They did a great job on my B5 Blue Challenger, completely transforming the way it looked. The only detailing shop I would trust with my cars.' },
  { author: 'Sair Riaz', body: "Got my car PPF and tinting done by Prestige Detailing, and I couldn't be happier. The staff were extremely knowledgeable and took the time to clearly explain every step of the process." },
  { author: 'Charles Allainmat', body: 'Perfect experience at Prestige Detailing! They saved the paint of my John Cooper Works which the roof and body had been damaged by the rain and cement stains. The whole car now looks as if it was out from the showroom.' },
  { author: 'laurent EDERY', body: 'What an experience! They are deeply into details, and so nice and reasonable! I would recommend 100 times! More than happy with the polishing, detailing and ceramic coating they did on my car.' },
  { author: 'Nick Faulkner', body: 'I dropped my car off to have the exterior paint correction performed. The car was in pretty bad shape — swirl marks everywhere! It came back almost looking brand new! Very happy with the results.' },
  { author: 'Ahmad Marei', body: 'The services provided by Prestige Detailing is beyond expectations. A very dedicated team with great management and customer service, honestly very professional and on spot work. I highly recommend them.' },
  { author: 'Ahmed Ghazi', body: 'Been a regular at Prestige since 2020. The attention to details and quality is unmatched. The inspection of the car condition before the job and transformation of the condition is mind blowing. All supervised by the owner himself.' },
  { author: 'Elias Odeh', body: 'Super professional and pays attention to detail. Probably the best detailers in Dubai with top notch products backed by the company that provides them.' },
  { author: 'David DC', body: 'Excellent customer service and unusually high attention to detail. Ayman, the owner, is passionate about what he does and this is reflected in the quality of the work.' },
  { author: 'Katia Berrabah', body: 'Just got my Toyota Tundra back perfectly cleaned! Mr Ayman, thank you so so much for all the help you provided. My car had some mechanical issues and you took care of it as if it was your own.' },
  { author: 'Janti Kinji', body: 'Its the right place for automotive detailing, service is up to perfection and the place feels like home. Warm welcoming staff. Highly recommend.' },
  { author: 'Mohammad Kalbouneh', body: 'My place to go to when its about shining my car. Went back like new. Five stars isn\'t enough to rate.' },
  { author: 'Anthony Wood', body: 'A great job by Aiman and team, took my Wrangler JLU in for ceramic coating, detailing and window tint. The work exceeded my expectation and was top top quality. In addition the work plan and updates were first class.' },
];

function ReviewCard({ author, body }: { author: string; body: string; key?: any }) {
  return (
    <div
      style={{
        width: '320px',
        flexShrink: 0,
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-rule)',
        background: 'var(--color-paper)',
        padding: '1.5rem',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1.25rem',
        position: 'relative',
      }}
    >
      {/* Dynamic double-bezel accent block */}
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '1.5rem',
        color: 'var(--color-accent)',
        opacity: 0.15,
        lineHeight: 1,
        position: 'absolute',
        top: '1rem',
        left: '1rem',
      }}>“</span>

      {/* Body */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        fontWeight: 350,
        lineHeight: 1.6,
        color: 'var(--color-ink-2)',
        margin: 0,
        fontStyle: 'italic',
        position: 'relative',
        zIndex: 1,
      }}>
        {body}
      </p>

      {/* Author Name */}
      <div style={{ borderTop: '1px solid var(--color-rule)', paddingTop: '0.75rem', display: 'flex', alignItems: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--color-accent)',
          margin: 0,
        }}>
          — {author}
        </p>
      </div>
    </div>
  );
}

export default function Reviews() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      style={{
        position: 'relative',
        padding: 'var(--space-4xl) 0',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-rule)',
        background: 'var(--color-paper-2)',
      }}
    >
      {/* Bloom */}
      <div style={{
        position: 'absolute', top: '20%', right: '5%',
        width: '28rem', height: '28rem',
        background: 'var(--color-bloom-1)',
        borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 var(--space-lg)', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end',
          justifyContent: 'space-between', gap: 'var(--space-lg)',
          marginBottom: 'var(--space-3xl)',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-accent)',
              marginBottom: 'var(--space-sm)',
            }}>
              Client testimonials
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-s)',
              fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.06,
              textTransform: 'uppercase', color: 'var(--color-ink)', margin: 0,
            }}>
              What our clients say
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginTop: 'var(--space-md)' }}>
              <div style={{ display: 'flex', gap: '0.2rem' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} style={{ width: '0.875rem', height: '0.875rem', fill: 'var(--color-accent)', color: 'var(--color-accent)' }} />
                ))}
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-muted)',
              }}>
                4.9 · 100+ verified reviews on Google
              </span>
            </div>
          </div>

          <a
            href="https://g.co/kgs/prestigedetailingdubai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              padding: '0.625rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-rule)',
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--color-ink-2)', textDecoration: 'none',
              transition: `border-color var(--dur-micro) var(--ease-out), color var(--dur-micro) var(--ease-out)`,
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-accent)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-ink)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-rule)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-ink-2)';
            }}
          >
            All reviews on Google
            <ExternalLink style={{ width: '0.75rem', height: '0.75rem' }} />
          </a>
        </div>
      </div>

      {/* Marquee — full bleed, edge to edge */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '8rem', zIndex: 10,
          background: 'linear-gradient(to right, var(--color-paper-2), transparent)',
          pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '8rem', zIndex: 10,
          background: 'linear-gradient(to left, var(--color-paper-2), transparent)',
          pointerEvents: 'none',
        }} />

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            width: 'max-content',
            animation: 'marquee-scroll 90s linear infinite',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running'; }}
        >
          {doubled.map((r, i) => (
            <ReviewCard key={i} author={r.author} body={r.body} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        maxWidth: '72rem', margin: '0 auto', padding: '0 var(--space-lg)',
        marginTop: 'var(--space-2xl)',
        display: 'flex', justifyContent: 'center',
      }}>
        <a
          href="https://wa.me/971555096234"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.75rem 2rem',
            borderRadius: 'var(--radius-full)',
            background: 'var(--color-accent)',
            border: 'none',
            color: 'var(--color-paper)',
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            boxShadow: 'var(--shadow-glow)',
            transition: 'background 350ms cubic-bezier(0.32,0.72,0,1), transform 350ms cubic-bezier(0.32,0.72,0,1)',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(90% 0.170 88)';
            (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent)';
            (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
          }}
        >
          Book Your Session
        </a>
      </div>

    </section>
  );
}
