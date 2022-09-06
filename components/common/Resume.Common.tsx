import { Typography, Chip, Stack, List, ListItem } from "@mui/material";
import { FC } from "react";

interface ITitleProps {
  text: string;
  mention?: string;
  size: "lg" | "md";
  pt?: number;
}

export const Title: FC<ITitleProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: typeof props.pt === "number" ? `${props.pt * 8}px` : 0,
      }}
    >
      <Typography
        variant={props.size === "lg" ? "h5" : "body1"}
        fontWeight={900}
        letterSpacing={1}
        component="h5"
        lineHeight="1"
        color="var(--midnight-blue)"
        sx={{
          borderBottom:
            props.size === "lg" ? "2px solid var(--midnight-blue)" : "none",
          width: "fit-content",
        }}
      >
        {props.text}
      </Typography>
      {props.mention && (
        <Typography pl={1} fontSize="12px" fontWeight="bold">
          {props.mention}
        </Typography>
      )}
    </div>
  );
};

interface ICaptionProps {
  text: string;
  mention?: string;
  color: string;
  pt?: number;
  py?: number;
  pb?: number;
}
export const Caption: FC<ICaptionProps> = (props) => (
  <Typography
    variant="caption"
    fontWeight={400}
    component="p"
    lineHeight="1"
    fontSize="14px"
    color={props.color}
    sx={{
      py: typeof props.py === "number" ? `${props.py * 8}px` : 2,
      pr: 4,
      pt: typeof props.pt === "number" ? `${props.pt * 8}px` : 2,
      pb: typeof props.pb === "number" ? `${props.pb * 8}px` : 2,
    }}
  >
    {props.text}
  </Typography>
);

interface IBadgesProps {
  badges: { id: string; title: string }[];
}
export const Badges: FC<IBadgesProps> = (props) => {
  return (
    <Stack direction="row" spacing={0} py={2} flexWrap="wrap">
      {props.badges.map((badge) => (
        <Chip
          label={badge.title}
          key={badge.id}
          color="primary"
          variant="filled"
          size="small"
          sx={{ fontSize: "12px", my: 2 / 8, mr: 2 / 8, borderRadius: 2.5 }}
        />
      ))}
    </Stack>
  );
};

interface IUnorderedListProps {
  items: {id: string, title: string}[];
}
export const UnorderedList: FC<IUnorderedListProps> = (props) => {
  return (
    <List disablePadding sx={{ mt: 2, listStyle: "circle" }}>
      {props.items.map((item, index) => (
        <ListItem key={item.id} sx={{ margin: 0 }} disablePadding>
          <Caption
            pt={3 / 8}
            pb={props.items.length - 1 !== index ? 0 : 2}
            text={`- ${item.title}`}
            color="var(--dark-grey-caption)"
          />
        </ListItem>
      ))}
    </List>
  );
};
