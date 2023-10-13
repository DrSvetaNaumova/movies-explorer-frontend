import React from 'react';
import './InfotoolTip.css';

function Infotooltip({ infotoolTipData, setInfotoolTipData }) {
  return (
    <section
      className={`infotool ${infotoolTipData ? 'infotool_opened' : ''}`}
      onClick={() => setInfotoolTipData(null)}
    >
      <div
        className="infotool__container"
        onClick={(evt) => evt.stopPropagation()}
      >
        <div
          className={
            infotoolTipData &&
            (infotoolTipData.state === 'success'
              ? 'infotool__resultIcon_type_success'
              : 'infotool__resultIcon_type_failure')
          }
        ></div>
        <h2 className="infotool__heading">
          {infotoolTipData && infotoolTipData.message}
        </h2>
        <button
          className="infotool__close-button"
          type="button"
          onClick={() => setInfotoolTipData(null)}
        ></button>
      </div>
    </section>
  );
}

export default Infotooltip;
