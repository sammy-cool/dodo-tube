import { Box, Stack } from "@mui/material";

import { VideoCard, ChannelCard } from "./fileImport";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelProfileDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
