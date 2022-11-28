import "../css/_main.css";
import React from "react";
import { Section } from "../components/section/section";
import { Grid } from "../components/grid/grid";
import { SectionDivider } from "../components/section/section-divider/section-divider";

export default function Home() {
  return (
    <div>
      <h1>Hope and Carly</h1>
      <Section title="Welcome">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          bibendum eros, ut ullamcorper felis. Cras at venenatis est. Fusce
          facilisis enim id porttitor elementum. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Praesent elementum scelerisque lectus,
          non auctor nunc consequat quis. Donec id nisl ut neque bibendum
          consectetur sit amet nec dolor. Vivamus consequat lacus est, in
          ullamcorper lorem rhoncus ac. Aliquam id rutrum est. Maecenas interdum
          tincidunt tincidunt. Sed semper ultrices tortor a commodo. Nunc
          sagittis lectus ut est tempus, id congue ex pharetra. Pellentesque
          maximus blandit turpis, quis rutrum velit volutpat sed. Cras sodales
          in nibh ut tempor. Proin id libero eu tellus cursus pellentesque vel
          quis turpis. Suspendisse dolor lectus, cursus sit amet augue vitae,
          pharetra sollicitudin nulla. Vivamus non felis id turpis varius varius
          a ut libero.
        </p>
        <p>
          Pellentesque at dolor nisi. Aenean nec dignissim mauris. Sed mauris
          ligula, varius finibus hendrerit sed, condimentum in lacus. Nam non
          blandit mauris. Sed fringilla ornare nisi a dignissim. In id diam et
          dolor scelerisque ornare. Etiam pretium aliquet sem, eget eleifend mi
          semper sed. Mauris congue vestibulum massa, et porta turpis pulvinar
          at. Sed hendrerit sem eget diam ultrices eleifend. Quisque nec
          placerat justo, id facilisis neque. Fusce viverra ligula in lorem
          sodales, ut tincidunt nisi maximus. Sed imperdiet nulla ac elit
          sagittis fermentum. Suspendisse potenti. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi
          porta blandit libero non vulputate. Praesent id lacinia ipsum, eget
          rhoncus dolor.
        </p>
        <p>
          Quisque vel eros non augue bibendum congue in rutrum augue. Nunc eu
          enim ut tellus feugiat volutpat eu consequat diam. Maecenas viverra
          aliquam lorem, in consectetur nunc ornare semper. Nullam tincidunt
          erat vel feugiat interdum. Proin imperdiet eget massa a sollicitudin.
          Curabitur fringilla posuere nisi, et varius tortor dapibus eget.
          Aenean eu laoreet ex. Fusce vehicula finibus orci, a porta magna
          feugiat sed.
        </p>
      </Section>
      <SectionDivider />
      <Section title="Details" isAltBG>
        <Grid position="left">
          <div>
            <p>Welcome Night!</p>
          </div>
          <div>
            <p>Ceremony</p>
          </div>
          <div>
            <p>Reception</p>
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
