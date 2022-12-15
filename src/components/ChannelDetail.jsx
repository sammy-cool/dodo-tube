import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./fileImport";
import { fetchDataFromAPI } from "../utils/fetchDataFromAPI";

const ChannelDetail = () => {
  const [channelProfile, setChannelProfile] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchDataFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelProfile(data?.items[0])
    );

    fetchDataFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: "rgb(238,174,202)",
            background:
              "-moz-radial-gradient(circle, rgba(238,174,202,1) 16%, rgba(7,36,71,1) 100%)",
            background:
              "-webkit-radial-gradient(circle, rgba(238,174,202,1) 16%, rgba(7,36,71,1) 100%)",
            background:
              "radial-gradient(circle, rgba(238,174,202,1) 16%, rgba(7,36,71,1) 100%)",
            filter:
              "progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeaeca',endColorstr='#072447',GradientType=1)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelProfileDetail={channelProfile} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2" >
          <Box sx={{ mr: { sm: '100px' }}} />
          <Videos videos={videos} />   
      </Box>
    </Box>
  );
};

export default ChannelDetail;
