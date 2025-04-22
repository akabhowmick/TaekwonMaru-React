import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ClassInfo, MasterInfo } from "../../../types/interfaces";
import "./DisplayCard.css";
import { LazyLoadingImage } from "../LazyLoadingImages/LazyLoadingImages";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
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
  const [expanded, setExpanded] = React.useState(false);

  const getImageHeight = () => {
    if (displaying === "masters") {
      setImageHeight(425);
      if (window.innerWidth > 1800) {
        setImageHeight(500);
      } 
    } else {
      if (window.innerWidth > 1440) {
        setImageHeight(400);
      } else {
        setImageHeight(263);
      }
    }
  };

  React.useEffect(() => {
    getImageHeight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", getImageHeight);
    return () => window.removeEventListener("resize", getImageHeight);
  });

  const [imageHeight, setImageHeight] = React.useState(0);

  // const imageHeight = displaying === "masters" ? 425 : 263;
  const subheader = displaying === "masters" ? "TaekwonMaru Staff" : "Taekwonmaru Programs";
  const cardDetails = displaying === "masters" ? "Staff Experience: " : "Class Description:";

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
      <LazyLoadingImage height={imageHeight} src={image} alt="class-image" id="card-image" />
      <CardContent className="card-content-div">
        <Typography variant="body1">{subtitle}</Typography>
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
          <Typography paragraph>{cardDetails}</Typography>
          {details.map((sentence, index) => {
            return (
              <div key={index}>
                <Typography paragraph>{sentence}</Typography>
              </div>
            );
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
};
