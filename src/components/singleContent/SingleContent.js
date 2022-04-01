import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../../config/Config";
import ContentModal from "../contentModal/ContentModal";
import "./SingleContent.css";

const SingleContent = ({ id, poster, title, date, media_type, vote_avg }) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_avg}
        color={vote_avg > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt="poster"
      />
      <b className="title">{title}</b>
      <div className="subTitle">
        <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
        <span>{date}</span>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
