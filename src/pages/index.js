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
      <h1>Hope and Carly</h1>
      <Section title="Welcome" className={styles.welcome}>
        <Grid position="right">
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
            <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" styles={{
                width: "100%",
                maxWidth: "660px",
                overflow: "hidden",
                background: "transparent",
              }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/hip-picks-ii/pl.u-6mo4ayyIZ4r1MJ"></iframe>
          </GridItem>
        </Grid>
      </Section>

      <SectionDivider />

      <Section title="Details" isAltBG className={styles.details}>
        <Grid position="center" spacing="large">
          <GridItem>
            <Image alt="Bonfire Pic" source={bonfire} size="m" />
            <h3>Friday, August 12, 2023</h3>
            <strong>Little Beach Hang</strong>
            <p>7:00 pm @ Beach</p>
            <p>
              <em>Address</em>
            </p>
            <p>Join us for a beach hang</p>
            <em>Attire: Casual</em>
          </GridItem>

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
        <Grid>
          <GridItem>
            <p>
              If you are traveling to the San Juan Islands from outside the
              Seattle area, you&rsquo;ll want to fly into the SeaTac (SEA) or
              Everett (PAE) airports. Paine Field in Everett is a smaller
              airport that allows you to skip Seattle traffic but has a limited
              number of incoming flights.
            </p>
            <p>
              Washington State Ferries This is the most affordable way to travel
              to the islands. Ferries to the San Juan Islands depart from
              Anacortes, which is about a 2 hour drive north of SeaTac airport.
              When you fly into the Seattle area, you can rent a car (from
              either airport) or take a shuttle north to Anacortes (from SeaTac
              airport only). When you are driving a car onto the ferry, you
              should arrive at least 45-60 minutes early in order to be fully
              checked in 30 minutes prior to sailing. If you miss the 30 minute
              cutoff, you will lose your reservation and be grouped in with the
              standby cars (aka you may wait for hours to get on/off island).
              Shuttle options include the Bellair Airporter Shuttle and the
              Island Airporter.
            </p>
            <h3>Driving</h3>
            <p>
              If you rent a car, you can drive onto the ferry or park at the
              Anacortes Ferry Terminal and walk on. If you plan on driving your
              car onto the ferry, reservations are HIGHLY recommended! You will
              need to make reservations for both your arrival and departure
              trips.
            </p>
            <p>
              Ferry reservations are released on the WSF website in three
              different waves: 30% when the schedule first opens, 30% two months
              prior to the departure date, and 30% two days prior to the
              departure date. The remaining 10% are saved for cars that
              haven&rsquo;t made reservations but these go quickly and
              it&rsquo;s best not to depend on them.
            </p>
            <p>
              There is no charge when booking a ferry reservation but you will
              be charged a &ldquo;no show&rdquo; fee of $19 if you book a
              reservation and then don&rsquo;t use it. You can cancel your
              reservation up until 5pm the day before your travel date without
              being charged the no show fee. More information on ferry
              schedules, reservations, and the cost of ferry tickets can be
              found here.
            </p>
            <h3>Flying</h3>
            <p>
              There are several regional airlines that fly from the Seattle area
              to the San Juan Islands. This is the fastest option for travel to
              the islands and the views are breathtaking! If you fly into SeaTac
              airport, you will be shuttled to Boeing Field for a land plane
              flight or Lake Union/Washington for a sea plane flight. Check out
              Kenmore Air, Friday Harbor Seaplanes, San Juan Airlines (the only
              option from Paine Field airport in Everett), Point to Point Air,
              or Westwind Aviation to book your flights.
            </p>
            <p>
              On-Island Transportation If you fly to the islands or choose to
              park your car at the Anacortes Ferry Terminal, there are several
              ways to get around the island. Check out the links below for more
              information (NOTE: there is NOT Uber or Lyft on the island, so you
              will have to use one of the alternative services instead.):
            </p>
          </GridItem>
          <GridItem>
            <Image alt="Bonfire Pic" source={bonfire} size="l" />
          </GridItem>
        </Grid>
      </Section>

      <Section title="Lodging">
        <p>
          Here are some options of places to stay nearby. We HIGHLY recommended
          booking as early as possible - the island will be very busy in June
          and accomodations can book up months in advance.
        </p>
        <p>
          The first two options (Zippy and Bippy) have room blocks for our
          wedding, the instructions for booking each are in the description.
        </p>
      </Section>

      <SectionDivider />

      <Section title="Things To Do" isAltBG>
        <h3>Seattle</h3>
        <p>
          For a true Meg and Katie experience, you would probably hit a brewery
          or two after walking around a park or going on a hike with Archie. A
          few of our favorite Seattle breweries are Fremont Brewing, Stoup, and
          Bale Breaker. We love walks around Green Lake and through the
          Arboretum. If you’re looking for more classic Seattle experiences,
          Pike Place Market and the Space Needle are must sees. Grab some
          oysters and champagne at Taylor Shellfish after exploring the Chihuly
          Glass Museum and walking around the Seattle Center. Some great hikes
          in the area are Twin Falls (3 miles), Rattlesnake Ledge (4 miles), and
          Snow Lake (7 miles).
        </p>

        <h3>San Juan Island</h3>
        <p>
          The San Juan Islands are choc full of nature-y activities. Whale
          watching is a must, and kayaking, boating, and hiking are all very
          popular on the islands. Friday Harbor is a picturesque small harbor
          town with dozens of shops and restaurants. Some of our favorites are
          Friday Harbor House Restaurant (if you're feeling fancy, and a great
          brunch), Duck Soup Inn for dinner, Downriggers for a good view and big
          deck, Madrona Bar and Grill (a good spot near Roche Harbor to see that
          part of the island), and of course San Juan Island Brewery for the
          best craft beer on the islands.
        </p>

        <p>
          For activities, we would highly recommend checking out Lime Kiln State
          Park and Deadman's Bay for an approachable and stunning nature park
          with some of the best views of the islands and a lovely lighthouse.
          Hiking trails from 0.5-5ish miles. Rent a boat or kayak from Crystal
          Seas Kayak Rentals or Friday Harbor Boat Rental. If you don't have a
          car and just want to explore the town, there are lots of cute artisan
          shops right along the water.
        </p>
      </Section>

      <SectionDivider isTop />

      <Section title="Love Story">
        <Grid spacing={"large"}>
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
            <Image alt="Love" source={lovestory} size="xl" borderRadius="" />
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
