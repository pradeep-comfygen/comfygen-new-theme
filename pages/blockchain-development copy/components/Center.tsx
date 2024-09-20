import React from 'react';
import JSON_DATA from "../json/blockchain.json"
const CenteredParagraphWithLink = () => {
  return (
    <div>
      {JSON_DATA.data.map((item) => (
        <div key={item.id} style={{ textAlign: 'center' }}>
          <p>{item.text}</p>
          <a href={item.link.url}>{item.link.label}</a>
        </div>
      ))}
    </div>
  );
};

export default CenteredParagraphWithLink;
