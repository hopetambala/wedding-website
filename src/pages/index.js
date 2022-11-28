import "../css/_main.css";
import React from "react";
import { Section } from "../components/section/section";
import { SectionDivider } from "../components/section/section-divider/section-divider";
import { Grid } from "../components/grid/grid";
import { GridItem } from "../components/grid/grid-item/grid-item";
import { Image } from "../components/image/image";

import bonfire from "../assets/icons/bon-fire.png";
import wedding from "../assets/icons/wedding-couple.png";
import dancing from '../assets/icons/dancing.png'

export default function Home() {
  return (
    <div>
      <h1>Hope and Carly</h1>
      <Section title="Welcome">
        <Grid position="right">
        <GridItem>
          <p>Excited for some beach vibes?</p>
          <p>
            Welcome to Hope and Carly's wedding website. We created this website
            (from scratch!) to share all of the important details leading up to
            the big day. Let's have some fun!
          </p>
          <p>
            You'll also find bits about our love story, our amazing wedding party,
            and deets on our registry.
          </p>
          <p>Don&rsquo;t forget to RSVP!</p>
        </GridItem>
        <GridItem>
          <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" width="500"styles={{width:'100%',maxWidth:'660px',overflow:'hidden',background:'transparent'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/hip-picks-ii/pl.u-6mo4ayyIZ4r1MJ"></iframe>
        </GridItem>
        </Grid>
      </Section>
      <SectionDivider />
      <Section title="Details" isAltBG>
        <Grid position="center" spacing="medium">
          <div>
            <Image alt="Bonfire Pic" source={bonfire} size="m" />
            <h3>Friday, August 12, 2023</h3>
            <strong>Little Beach Hang</strong>
            <p>7:00 pm @ Beach</p>
            <p>
              <em>Address</em>
            </p>
            <p>
              Join us for a beach hang
            </p>
            <em>Attire: Casual</em>
          </div>
          <div>
            <Image alt="Wedding Couple" source={wedding} size="m" />
            <h3>Saturday, August 12, 2023</h3>
            <strong>Ceremony</strong>
            <p>5:00 pm @ Corona del Mar Community Church</p>
            <p>
              <em>611 Heliotrope Ave, Corona Del Mar, CA 92625</em>
            </p>
            <p>
              Join us on Sunday for a buffet brunch in the barn before everyone
              goes their own way.
            </p>
            <em>Attire: Dressy</em>
          </div>
           <div>
            <Image alt="Reception Dancing" source={dancing} size="m" />
            <h3>Saturday, August 12, 2023</h3>
            <strong>Reception!</strong>
            <p>6:00pm @ Orange County Museum of Art</p>
            <p>
              <em>3333 Avenue of the Arts, Costa Mesa, CA 92626</em>
            </p>
            <p>
              DESCRIPTION DESCRIPTION DESCRIPTION
            </p>
            <em>Attire: Dressy (Get ready to dance!)</em>
          </div>
        </Grid>
      </Section>
      <SectionDivider isTop />
      <Section title="Getting Here">
        <p>Zzip zip zipz izp</p>
      </Section>
      <Section title="Lodging">
        <p>Zzip zip zipz izp</p>
      </Section>
      <SectionDivider />
      <Section title="Things To Do" isAltBG>
        <p>Zzip zip zipz izp</p>
      </Section>
      <SectionDivider isTop />
      <Section title="Love Story">
        <p>Zzip zip zipz izp</p>
      </Section>
      <Section title="Wedding Party">
        <p>Zzip zip zipz izp</p>
      </Section>
      <Section title="Fun Little Game!">
        <p>Zzip zip zipz izp</p>
      </Section>
      <Section title="Registry">
        <a
          href="https://withjoy.com/hope-and-carly/registry"
          target="_blank"
          rel="noreferrer"
        >
          Registry
        </a>
      </Section>
    </div>
  );
}
