import PropTypes from "prop-types";
import React, { memo } from "react";
import { TitleWrapper } from "./style";

const SectionTitle = memo((props) => {
  const { title, subtitle } = props;

  return (
    <TitleWrapper>
      <h2 className="title">{title}</h2>
      <span className="subtitle">{subtitle && subtitle}</span>
    </TitleWrapper>
  );
});

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
