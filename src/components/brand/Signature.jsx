import React from 'react';
import './Brand.css';

/**
 * Homemade Apple el yazısı wordmark. Nokta turuncu, geri kalan koyu lacivert.
 * size: 'sm' | 'md' | 'lg'
 */
export default function Signature({ size = 'md', text = 'Ömer Ç', className = '', ...rest }) {
  return (
    <span className={`brand-signature brand-signature--${size} ${className}`.trim()} {...rest}>
      {text}
      <span className="brand-signature__dot">.</span>
    </span>
  );
}
