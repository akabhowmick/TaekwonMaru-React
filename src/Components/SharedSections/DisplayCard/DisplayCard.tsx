import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
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
      if (window.innerWidth > 1800) {
        setImageHeight(600);
      } else if (window.innerWidth > 1400) {
        setImageHeight(520);
      } else {
        setImageHeight(425);
      }
    } else {
      if (window.innerWidth > 1800) {
        setImageHeight(500);
      } else if (window.innerWidth > 1400) {
        setImageHeight(400);
      } else {
        setImageHeight(463);
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
      <CardHeader className="card-header text-2xl xl:text-3xl" title={title} />
      <LazyLoadingImage height={imageHeight} src={image} alt="class-image" id="card-image" />
      <CardContent className="card-content-div">
        <h3 className="text-2xl">{subtitle}</h3>
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
          <h4 className="text-3xl pb-2">{cardDetails}</h4>
          {details.map((sentence, index) => {
            return (
              <div key={index}>
                <p className="text-xl 2xl:text-2xl font-medium py-2">{sentence}</p>
              </div>
            );
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
};
