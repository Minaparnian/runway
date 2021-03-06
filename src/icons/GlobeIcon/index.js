import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';

function GlobeIcon({ height, width, className }) {
  const pathId = generate();
  const maskId = generate();

  return (
    <svg
      width={width}
      height={height}
      className={className}
      focusable="false"
      viewBox="0 0 24 24"
    >
      <defs>
        <path
          id={pathId}
          d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm6.528 6.567a3.98 3.98 0 0 1-2.893 1.206c-1.006.025-.503.579-.327 1.107.177.528.075.78 1.333 1.12 1.258.34-.218 1.696-.942 2.426-.725.73-.062 1.855-.439 2.157-.376.302-1.184.36-1.26 1.417-.075 1.056-.678 1.333-1.333 1.333-.653 0-1.484-2.038-1.333-2.668.151-.629.136-1.123-.292-1.375-.427-.252-.6-.456-.941-1.39-.413-1.13-1.284-.227-2.24-.202-.955.025-1.843-2.117-.51-3.98 1.333-1.86 2.85-1.464 3.983-.709 1.132.755 2.667.236 2.667-1.676 0-1.438-2-.616-2-2 0-.952.742-1.3 1.937-1.779a8.696 8.696 0 0 1 5.487 3.98c-.266.298-.548.662-.897 1.032z"
        />
      </defs>
      <g fillRule="evenodd" transform="translate(2 2)">
        <mask id={maskId} fill="#fff">
          <use xlinkHref={`#${pathId}`} />
        </mask>
        <g mask={`url(#${maskId})`}>
          <path d="M-2-2h24v24H-2z" />
        </g>
      </g>
    </svg>
  );
}

GlobeIcon.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string
};

GlobeIcon.defaultProps = {
  height: '24',
  width: '24',
  className: ''
};

export default GlobeIcon;
