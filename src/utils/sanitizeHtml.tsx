// sanitizeHtml.ts,It's Done
import DOMPurify from './dompurify';

export default function sanitizeHtml(htmlContent: string) {
  return DOMPurify.sanitize(htmlContent, {
    FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed'],
    FORBID_ATTR: ['style', 'onerror', 'onclick', 'onload', 'onmouseover'],
    ALLOWED_TAGS: [
      'b', 'i', 'strong', 'em', 'a', 'p', 'ul', 'ol', 'li', 'br', 'span',
    ],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
}

export function sanitizeToTextOnly(htmlContent: string) {
  return DOMPurify.sanitize(htmlContent, { ALLOWED_TAGS: [] });
}


