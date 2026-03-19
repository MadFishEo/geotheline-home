import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ko', 'en', 'zh', 'ja', 'th'],
  defaultLocale: 'ko',
  localePrefix: 'as-needed',
});
