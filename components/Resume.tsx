import React from "react";
import { Grid, Typography } from "@mui/material";
import { Badges, Caption, Title, UnorderedList } from "./common/Resume.Common";

// icons
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TerminalIcon from "@mui/icons-material/Terminal";

const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, iste nobis magnam sequi aliquid labore alias excepturi impedit harum cumque, necessitatibus, id aut blanditiis libero quibusdam dolores! Facere, nemo quasi.";

const Resume = () => {
  return (
    <Grid container spacing={2} px={1} py={2}>
      <Grid item xs={6}>
        <Grid item>
          <Title size="lg" text="Story Book" />
          <Caption color="var(--dark-grey-caption)" text={TEXT} />
        </Grid>
        <Grid item>
          <Title size="lg" text="Recent Experiences" />
          <Title size="md" pt={2} text="React Developer" />
          <Caption
            pt={2 / 8}
            pb={0}
            color="var(--dark-grey-caption)"
            text={"mei li bo si - full time"}
          />
          <Caption
            pt={2 / 8}
            pb={0}
            color="var(--prog-bar-light-blue)"
            text={"Jul 2020 - Sep 2020"}
          />
          <Caption
            pt={2 / 8}
            pb={0}
            color="var(--grayish-blue)"
            text={"Shanghai, China"}
          />
          <Caption pt={6 / 8} color="var(--dark-grey-caption)" text={TEXT} />
        </Grid>
        <Grid item>
          <Title size="lg" text="Education" />
          <Title size="md" pt={2} text="Sharif University of Technology" />
          <Caption
            pt={2 / 8}
            pb={0}
            color="var(--dark-grey-caption)"
            text={"Bachelor's degree - Material Science and Engineering"}
          />
          <Caption
            pt={2 / 8}
            pb={0}
            color="var(--prog-bar-light-blue)"
            text={"2019 - 2020"}
          />
          <Caption
            pt={2 / 8}
            pb={0}
            color="var(--grayish-blue)"
            text={"Tehran, Iran"}
          />
          <Caption pt={6 / 8} color="var(--dark-grey-caption)" text={TEXT} />
          <Title size="md" pt={2} text="Babol Noshirvani University of Technology" />
          <Caption
            pt={2 / 8}
            pb={0}
            color="var(--dark-grey-caption)"
            text={"Bachelor's degree - Computer Software Engineering"}
          />
          <Caption
            pt={2 / 8}
            pb={0}
            color="var(--prog-bar-light-blue)"
            text={"2020 - 2023"}
          />
          <Caption
            pt={2 / 8}
            pb={0}
            color="var(--grayish-blue)"
            text={"Babol, Iran"}
          />
          <Caption pt={6 / 8} color="var(--dark-grey-caption)" text={TEXT} />
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid item>
          <Title size="lg" text="Technical Skills" mention="(in order)" />
          <Title size="md" pt={2} text="Software Engineering" />
          <Caption pt={1} color="var(--dark-grey-caption)" text={TEXT} />
          <Title size="md" text="Client" mention="(proficient)" />
          <Caption pt={1} color="var(--dark-grey-caption)" text={TEXT} />
          <Title size="md" text="Industry" />
          <Caption pt={1} color="var(--dark-grey-caption)" text={TEXT} />
          <Title size="md" text="Server" mention="(familiar)" />
          <Caption pt={1} color="var(--dark-grey-caption)" text={TEXT} />
        </Grid>
        <Grid item>
          <Title size="lg" text="Soft Skills" />
          <Badges
            badges={[
              "problem-solving",
              "self-motivated",
              "responsibility",
              "confidence",
              "communication",
              "hard-working",
              "teamwork",
              "passionate to learn",
            ]}
          />
        </Grid>
        <Grid item>
          <Title size="lg" text="Books and Courses" />
          <UnorderedList
            items={[
              "sdkjfhksdgbkfdhgisdf sdkfjd , skfdh k",
              "sdjfj , ksdf kjhksd , sdkf k",
              "skjbfjdksf",
            ]}
          />
        </Grid>
        <Grid item>
          <Title size="lg" text="Interests" />
          <Grid container spacing={2} px={0} py={0}>
            <Grid item display="flex" alignItems="center" xs={6}>
              <YouTubeIcon fontSize="large" sx={{ pr: 1 }} />
              <Caption text="Youtube" color="var(--dark-grey-caption)" />
            </Grid>
            <Grid item display="flex" alignItems="center" xs={6}>
              <MusicNoteIcon fontSize="large" sx={{ pr: 1 }} />
              <Caption text="Music" color="var(--dark-grey-caption)" />
            </Grid>
            <Grid item display="flex" alignItems="center" xs={6}>
              <SportsEsportsIcon fontSize="large" sx={{ pr: 1 }} />
              <Caption text="Games" color="var(--dark-grey-caption)" />
            </Grid>
            <Grid item display="flex" alignItems="center" xs={6}>
              <TerminalIcon fontSize="large" sx={{ pr: 1 }} />
              <Caption text="Coding" color="var(--dark-grey-caption)" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Resume;
