'use client';

import { ReactNode } from 'react';
import { trackEvent } from '@/app/utils/analytics';

interface PhoneLinkProps {
  phoneNumber: string;
  children: ReactNode;
  className?: string;
  eventLabel?: string;
  displayNumber?: string;
}

export default function PhoneLink({
  phoneNumber,
  children,
  className = '',
  eventLabel = 'header',
  displayNumber
}: PhoneLinkProps) {
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const telLink = `tel:${cleanNumber}`;

  const handleClick = () => {
    trackEvent({
      action: 'click',
      category: 'Phone',
      label: eventLabel,
      value: displayNumber || phoneNumber
    });
  };

  return (
    <a
      href={telLink}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}