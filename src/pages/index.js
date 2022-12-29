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
import beach from "../assets/photos/things-to-do/beach.gif";
import uber from "../assets/photos/things-to-do/uber.gif";
import flying from "../assets/photos/things-to-do/flying.gif";
import traffic from "../assets/photos/things-to-do/traffic.gif";

// import lovestory from "../assets/photos/love-story.png";

import * as styles from "./index.module.css";

export default function Home() {
  return (
    <div>
      <Section title="landing" isNoTitle className={styles.landing}>
        <div className={styles.landingText}>
          <h1>Hope</h1>
          <h1>& Carly</h1>
          {/* <h2>RSVP</h2> */}
        </div>
      </Section>
      <Section title="Welcome">
        <Grid>
          <GridItem>
            <p>Excited for some beach vibes?</p>
            <p>
              Welcome to our wedding website! We&rsquo;ve created this website
              (from scratch!) to share everything you need to know leading up to
              our wedding day. Please continue to check our website for the most
              up-to-date information.
            </p>
            <p>
              Thank you for your love, encouragement, and support. We
              can&rsquo;t wait to celebrate with our friends and family as we
              enter this next chapter!
            </p>

            <em>Love, Hope &amp; Carly</em>
            {/* <p>
              You'll also find bits about our love story, our amazing wedding
              party, and deets on our registry.
            </p> */}
            {/* <p>Don&rsquo;t forget to RSVP!</p> */}
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
          <GridItem>
            <Image alt="Wedding Couple" source={wedding} size="ml" />
            <h3>Saturday, August 12, 2023</h3>
            <strong>Ceremony</strong>
            <p>4:30 pm @ Corona del Mar Community Church</p>
            <p>611 Heliotrope Ave, Corona Del Mar, CA 92625</p>
            <p>
              We are honored to have friends and family witness our exchange of
              vows as we officially become husband and wife!
            </p>
            <em>Attire: Cocktail</em>
          </GridItem>

          <GridItem>
            <Image alt="Reception Dancing" source={dancing} size="ml" />
            <h3>Saturday, August 12, 2023</h3>
            <strong>Reception!</strong>
            <p>6:00pm @ Orange County Museum of Art</p>
            <p>3333 Avenue of the Arts, Costa Mesa, CA 92626</p>
            <p>
              Join us for dinner, drinks, and dancing among the art galleries of
              OCMA! Our reception will be both indoors and outdoors, so please
              dress accordingly.
            </p>
            <em>Attire: Cocktail (Get ready to dance!)</em>
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
        <h3>Flying</h3>
        <Grid>
          <GridItem>
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
          </GridItem>
          <GridItem>
            <Image alt="Bonfire Pic" source={flying} size="xl" isCentered />
          </GridItem>
        </Grid>
        <h3>Getting around while you're here</h3>

        <Grid>
          <GridItem>
            <p>
              Please note that there is very limited public transportation in
              Orange County. Depending on your plans, you may want to consider
              renting a car. Uber/Lyft is also readily available, which may be a
              good option for those guests who will only be in town for a short
              visit.
            </p>
          </GridItem>
          <GridItem>
            <Image alt="Uber Pic" source={uber} size="l" isCentered />
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
                Website link for $199 stay per night and $20 parking per night
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
                Website link link for a 15% off Standard and Deluxe guest room
                rates and free parking per night
              </a>
            </div>
          </GridItem>
        </Grid>
      </Section>

      <SectionDivider />

      <Section title="Things To Do" isAltBG>
        <h3>Check out the beach!</h3>
        <Grid>
          <GridItem>
            <p>
              Orange County is home to some of California’s most beautiful
              beaches. Although you really can’t go wrong, we recommend Newport
              Beach Municipal Beach, Aliso Beach, Crystal Cove State Park, and
              Huntington City Beach.
            </p>
                    <h4>Balboa Island</h4>
            <p>
              Drive or take the ferry to Balboa Island for a classic boardwalk
              experience, where you can rent bikes and ride the ferris wheel in
              the Balboa Fun Zone, and be sure to try a frozen banana (”There’s
              always money in the banana stand!”).
            </p>
          </GridItem>
          <GridItem>
            <Image alt="Bonfire Pic" source={beach} size="xl" isCentered />
          </GridItem>
        </Grid>
        <h3>Los Angeles</h3>
        <Grid>
          <GridItem>
            <Image alt="Traffic Pic" source={traffic} size="xl" />
          </GridItem>
          <GridItem>
            <p>I legit know nothing about L.A. Womp!</p>
          </GridItem>
        </Grid>
      </Section>

      {/* <SectionDivider isTop /> */}

      {/* <Section title="Love Story">
        <Grid>
          <GridItem>
            <h3>As told by him...</h3>
            <p>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum
            </p>
            <h3>As told by her...</h3>
            <p>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum
            </p>
          </GridItem>
          <GridItem>
            <Image alt="Love" source={lovestory} borderRadius="" />
          </GridItem>
        </Grid>
      </Section> */}

      {/* <Section title="Wedding Party">
        <p>Zzip zip zipz izp</p>
      </Section> */}

      {/* <Section title="Fun Little Game!">
        <p>Zzip zip zipz izp</p>
      </Section> */}

      <SectionDivider isTop />

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
