import React, { useEffect, useState } from 'react';

interface SVGIconProps {
  className?: string;
  src: string;
}

const SVGIcon = ({ className, src }: SVGIconProps) => {
  const [svgMarkup, setSVGMarkup] = useState('');

  useEffect(() => {
    const fetchSVGMarkup = async () => {
      const response = await fetch(src);
      const svg = await response.text();

      setSVGMarkup(svg);
    };

    fetchSVGMarkup();
  }, []);

  // eslint-disable-next-line react/no-danger
  return <div className={className} dangerouslySetInnerHTML={{ __html: svgMarkup }} />;
};

export default SVGIcon;
