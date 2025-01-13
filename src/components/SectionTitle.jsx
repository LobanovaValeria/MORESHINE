// @flow
import * as React from 'react';
import '../styles/components/sectionTitle.css';

export function SectionTitle({ title }) {
  return (
    <div className="title">
      <h2 className="title_text">{title}</h2>
    </div>
  );
}
