import "../css/_main.css";
import React from "react";
import { Section } from "../components/section/section";
import { SectionDivider } from "../components/section/section-divider/section-divider";
import { Grid } from "../components/grid/grid";
import { GridItem } from "../components/grid/grid-item/grid-item";
import { Image } from "../components/image/image";

import bonfire from "../assets/icons/bon-fire.png";
import wedding from "../assets/icons/wedding-couple.png";
import dancing from "../assets/icons/dancing.png";
import lovestory from "../assets/photos/love-story.png";

import * as styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Section title="landing" isNoTitle className={styles.landing}>
        <div className={styles.landingText}>
          <h1>Hope</h1>
          <h1>& Carly</h1>
          <h2>RSVP</h2>
        </div>
      </Section>
      <Section title="Welcome" className={styles.welcome}>
        <Grid>
          <GridItem>
            <p>Excited for some beach vibes?</p>
            <p>
              Welcome to Hope and Carly's wedding website. We created this
              website (from scratch!) to share all of the important details
              leading up to the big day. Let's have some fun!
            </p>
            <p>
              You'll also find bits about our love story, our amazing wedding
              party, and deets on our registry.
            </p>
            <p>Don&rsquo;t forget to RSVP!</p>
          </GridItem>
          <GridItem>
            <iframe
              title="our music playlist"
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameborder="0"
              height="450"
              width="100%"
              overflow="hidden"
              background="transparent"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/playlist/future-funk/pl.b218d054b8294ba98c637326cefe7f0a"
            ></iframe>
          </GridItem>
        </Grid>
      </Section>

      <SectionDivider />

      <Section title="Details" isAltBG className={styles.details}>
        <Grid position="center">
          {/* <GridItem>
            <Image alt="Bonfire Pic" source={bonfire} size="m" />
            <h3>Friday, August 12, 2023</h3>
            <strong>Little Beach Hang</strong>
            <p>7:00 pm @ Beach</p>
            <p>
              <em>Address</em>
            </p>
            <p>Join us for a beach hang</p>
            <em>Attire: Casual</em>
          </GridItem> */}

          <GridItem>
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
          </GridItem>

          <GridItem>
            <Image alt="Reception Dancing" source={dancing} size="m" />
            <h3>Saturday, August 12, 2023</h3>
            <strong>Reception!</strong>
            <p>6:00pm @ Orange County Museum of Art</p>
            <p>
              <em>3333 Avenue of the Arts, Costa Mesa, CA 92626</em>
            </p>
            <p>DESCRIPTION DESCRIPTION DESCRIPTION</p>
            <em>Attire: Dressy (Get ready to dance!)</em>
          </GridItem>
        </Grid>
      </Section>

      <SectionDivider isTop />

      <Section title="Getting Here">
        <p>
          Ready for some beach vibes? Orange County, California is home to some
          of California’s most beautiful beaches, and we hope that you will take
          some time to explore a place that holds great meaning to both of us!
        </p>
        <Grid>
          <GridItem>
            <h3>Flying</h3>
            <p>
              If you will be flying to Orange County for our wedding, please
              consider the following options:
            </p>
            <p>
              The closest airport to our wedding ceremony and reception is John
              Wayne International Airport (SNA), which is just 2.5 miles (10
              minutes) from our reception venue. Although it is a smaller
              airport, there are regular flights to SNA from many major
              metropolitan cities, including Chicago, Houston, and New York.
            </p>
            <p>
              Long Beach Airport (LGB) is 20 miles (30 minutes depending on
              traffic) from our reception venue. Although LGB is a smaller
              airport, non-stop flights, particularly on Southwest, are
              available to/from some cities.
            </p>
            <p>
              Los Angeles International Airport (LAX) is 40 miles (45
              minutes-1.5 hours depending on traffic) from our reception venue.
              LAX is a large international hub with many affordable flights from
              all major airlines. Los Angeles is also a fun and exciting city if
              you would like to extend your travel plans! To get to Orange
              County from LAX, consider any of the following options: 1) Rent a
              car 2) take an Uber/Lyft ($60-70 one-way), or 3) take the FlyAway
              bus from LAX to Union Station and connect to either the Metrolink
              or Surfliner trains which both make stops in Orange County.
            </p>
            <p>
              San Diego International Airport (SAN) is 86 miles (1.5 hours) from
              our reception venue. Although this is a bit farther than the other
              options, if you are interested in exploring San Diego while out on
              the west coast, this could be a great option!
            </p>
            <h3>Getting around while you're here</h3>
            <p>
              Please note that there is very limited public transportation in
              Orange County. Depending on your plans, you may want to consider
              renting a car. Uber/Lyft is also readily available, which may be a
              good option for those guests who will only be in town for a short
              visit.
            </p>
          </GridItem>
          <GridItem>
            <Image alt="Bonfire Pic" source={bonfire} size="l" />
          </GridItem>
        </Grid>
      </Section>

      <Section title="Lodging">
        <p>
          Here are some options of places to stay nearby. We recommend booking
          early - the hotels will be very busy in August and accomodations can
          book up months in advance.
        </p>
        <p>
          The first options (Costa Messa Mariott) has a room block for our
          wedding and the second option (Avenue of Arts) has a 15% discount.
          Both are within walking distance from OCMA, the instructions for
          booking each are in the description.
        </p>
        <Grid>
          <GridItem>
            <div>
              <h3>Costa Mesa Marriott</h3>
              <p>
                <em>500 Anton Blvd, Costa Mesa, CA 92626</em>
              </p>
              <p>(714) 957-1100</p>
              <a
                href="https://www.marriott.com/en-us/hotels/snawi-the-westin-south-coast-plaza-costa-mesa/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                target="_blank"
                rel="noreferrer"
              >
                Website ($199 stay per night, $20 parking per night)
              </a>
            </div>
          </GridItem>
          <GridItem>
            <div>
              <h3>Avenue of the Arts Costa Mesa</h3>
              <p>
                <em>3350 Avenue of the Arts, Costa Mesa, CA 92626</em>
              </p>
              <p>(714) 751-5100</p>
              <a
                href="https://marriott.com/reservation/availability.mi?propertyCode=CSMTX&cc=K6Y"
                target="_blank"
                rel="noreferrer"
              >
                Website (15% off Standard and Deluxe guest room rates, free
                parking per night)
              </a>
            </div>
          </GridItem>
        </Grid>
      </Section>

      <SectionDivider />

      <Section title="Things To Do" isAltBG>
        <h3>Newport Beach</h3>
        <p>
          You have to go to the beach while you're here! We're definitely not
          beach experts of the area, but we enjoy hitting up the Newport Beach.
          Going to Balboa Island and exploring the shops could be a fun way to
          spend some time with friends. The boardwalk which is about 3 miles is
          a delightful experience as well!
        </p>

        <h3>Los Angeles</h3>
        <p>I legit know nothing about L.A. Womp!</p>
      </Section>

      <SectionDivider isTop />

      <Section title="Love Story">
        <Grid>
          <GridItem>
            <h3>As told by him...</h3>
            <p>
              Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
            </p>
            <h3>As told by her...</h3>
            <p>
              Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
            </p>
          </GridItem>
          <GridItem>
            <Image alt="Love" source={lovestory} borderRadius="" />
          </GridItem>
        </Grid>
      </Section>

      <Section title="Wedding Party">
        <p>Zzip zip zipz izp</p>
      </Section>

      <Section title="Fun Little Game!">
        <p>Zzip zip zipz izp</p>
      </Section>

      <SectionDivider />

      <Section title="Registry" isAltBG>
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
