import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClassInfo, MasterInfo } from "../../../types/interfaces";
import "./DisplayCard.css";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const DisplayCard = ({
  content,
  displaying,
}: {
  content: ClassInfo | MasterInfo;
  displaying: string;
}) => {
  const { title, subtitle, details, image } = content;

  const imageHeight = displaying === "masters" ? "425" : "263";
  const subheader = displaying === "masters" ? "TaekwonMaru Staff" : "Taekwonmaru Programs";

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        backgroundColor: "var(--dark-red)",
        color: "white",
        ":hover": {
          boxShadow: 20,
        },
      }}
    >
      <CardHeader className="card-header" title={title} subheader={subheader} />
      <CardMedia
        height={imageHeight}
        component="img"
        image={image}
        alt="class-image"
        id="card-image"
      />
      <CardContent className="card-content-div">
        <Typography variant="body2">{subtitle}</Typography>
        <ExpandMore
          id="expand-btn"
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Class Description:</Typography>
          {details.map((sentence) => {
            return <Typography paragraph>{sentence}</Typography>;
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
};
