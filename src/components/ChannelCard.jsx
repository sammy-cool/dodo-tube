import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constant";

const ChannelCard = ({ channelProfileDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link
        to={
          channelProfileDetail?.id?.channelId
            ? `/channel/${channelProfileDetail?.id?.channelId}`
            : `/channel/${channelProfileDetail?.id}`
        }
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#FFF",
          }}
        >
          <CardMedia
            image={
              channelProfileDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelProfileDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              mb: 2,
              border: "3px solid orange",
            }}
          />
          <Typography variant="h6">
            {channelProfileDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelProfileDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelProfileDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
