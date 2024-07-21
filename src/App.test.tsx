import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import { ThemeContext } from './components/contexts/ThemeContext';
import { LanguageContext } from './components/contexts/languageContext';
import { FetchedDataContext } from './components/contexts/FetchedDataContext';

describe('Testing App', () => {

  describe("Renders App in", () => {
    it('light theme', () => {
      const { getAllByTestId } = render(

          <LanguageContext.Provider value={["ar"]}>
              <FetchedDataContext.Provider value={[true, { timings: { Fajr: '05:00', Dhuhr: '12:00', Asr: '15:00', Maghrib: '18:00', Isha: '20:00' }, meta: {TimeZone : "Africa/Cairo"} }]}>
                  <ThemeContext.Provider value={[{ isDark: false }]}>
                      <App />
                  </ThemeContext.Provider>
              </FetchedDataContext.Provider>
          </LanguageContext.Provider>
      );
      expect(getAllByTestId('app')[0].classList).toContain('light')
  });
//   it('Dark theme', () => {
//       const { getAllByTestId } = render(

//           <LanguageContext.Provider value={["ar"]}>
//               <FetchedDataContext.Provider value={[true, { timings: { Fajr: '05:00', Dhuhr: '12:00', Asr: '15:00', Maghrib: '18:00', Isha: '20:00' }, meta: {TimeZone : "Africa/Cairo"} }]}>
//                   <ThemeContext.Provider value={[{ isDark: true }]}>
//                       <App />
//                   </ThemeContext.Provider>
//               </FetchedDataContext.Provider>
//           </LanguageContext.Provider>

//       );
//       // console.log(getAllByTestId('app').le)
//       expect(getAllByTestId('app')[0].classList).toContain('dark')
//   });
  })
})