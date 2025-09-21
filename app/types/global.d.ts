export {};

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config',
      eventNameOrId: string,
      parameters?: {
        value?: number | string;
        event_label?: string;
        event_category?: string;
        non_interaction?: boolean;
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
    dataLayer?: any[];
  }
}