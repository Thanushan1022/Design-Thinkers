import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import TermsAndConditions from './pages/TermsAndConditions';
import FAQ from './pages/FAQ';
import Root from './Root';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'terms', Component: TermsAndConditions },
      { path: 'faq', Component: FAQ },
      { path: '*', Component: Home }, // 404 fallback to home
    ],
  },
]);