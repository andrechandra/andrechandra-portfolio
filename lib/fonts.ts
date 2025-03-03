import { Geist, Geist_Mono, Roboto_Mono } from 'next/font/google';
import Alliance from 'next/font/local';

const fontAlliance = Alliance({
  src: [
    { path: '../public/fonts/alliance-no-2.otf', weight: '400', style: 'normal' }
  ],
  variable: '--font-alliance',
});

const fontGeist = Geist({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-geist',
});

const fontGeistMono = Geist_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-geist_mono',
});

const fontRobotoMono = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-roboto_mono',
})

export const fonts = [
  fontAlliance.variable,
  fontGeist.variable,
  fontGeistMono.variable,
  fontRobotoMono.variable
];
