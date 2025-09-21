interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: string | number;
  [key: string]: any;
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID!, {
      page_path: url,
    });
  }
};

export const trackEvent = ({ action, category, label, value, ...otherParams }: EventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...otherParams,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics Event]', {
      action,
      category,
      label,
      value,
      ...otherParams
    });
  }
};

export const trackPhoneClick = (location: string, phoneNumber: string) => {
  trackEvent({
    action: 'phone_click',
    category: 'Contact',
    label: location,
    value: phoneNumber,
  });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent({
    action: 'form_submit',
    category: 'Form',
    label: formName,
  });
};

export const trackOutboundLink = (url: string) => {
  trackEvent({
    action: 'click',
    category: 'Outbound',
    label: url,
  });
};