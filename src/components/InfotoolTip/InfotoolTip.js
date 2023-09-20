import React from 'react';
import './InfotoolTip.css';

function Infotooltip({ infotoolTipData }) {
  return (
    <section className={`infotool ${infotoolTipData ? 'infotool_opened' : ''}`}>
      <div className="infotool__container">
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
        <button className="infotool__close-button" type="button"></button>
      </div>
    </section>
  );
}

export default Infotooltip;
