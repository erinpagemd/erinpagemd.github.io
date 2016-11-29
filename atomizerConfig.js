const vars = require('./src/client/css/css-variables');
const squish = require('object-squish');

const navGap = '2.5em';

module.exports = {
  cssDest: './src/client/css/_atomic.scss',
  options: {
  },
  configs: {
    breakPoints: {
      vsm: '@media(min-width: 32em)',
      sm: '@media(min-width: 45em)',
      heroLg: '@media(min-width: 56em)',
      videoMd: '@media(min-width: 75em)',
      videoLg: '@media(min-width: 100em)'
    },
    custom: Object.assign(
      {
        inherit: 'inherit',
        'Cnt(title)': 'attr(title)',

        'Anim(notifyNumber)': 'scaleNotification .5s cubic-bezier(0.17, 0.89, 0.32, 1.49) forwards',
        notifyShadow: `0 ${vars.notifyBorder} 1px rgba(17, 17, 17, 0.75)`,

        headerBoxShadow: '0 1px 1px rgba(17, 17, 17, 0.15)',

        navItemPadding: '1.125em',
        navIconOpacity: '0.5',
        navIconWidth: '1.25em',
        navFontSize: '0.875em',
        navTextShadow: '0 1px 1px rgba(17, 17, 17, 0.175)',
        navBtnRight: `-${navGap}`,
        'Animn(navBtnLeft)': 'navBtnShiftLeft',
        'Animn(navBtnRight)': 'navBtnShiftRight',
        smallNav: `calc(100% - ${navGap})`,
        smallContent: `calc(-100% + ${navGap})`,
        bigOpenNav: '12.5rem',
        bigClosedNav: '3.35rem',

        homeHeroBlur: 'url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAAYACoDASIAAhEBAxEB/8QAaQABAQEBAAAAAAAAAAAAAAAAAAMCBAEAAgMBAAAAAAAAAAAAAAAAAAECAwUGEAACAgEDAgcAAAAAAAAAAAABAgARIVESAzFB8GGBoTITMxEBAAICAwAAAAAAAAAAAAAAAAFBEQIxUfH/2gAMAwEAAhEDEQA/AONmCi2wJNsLcPkU0m3NijRI9JtOf116Ty10LNiocACiKPfWU4uTnCl0K/Wppk6E33uZ5DvDEe8KW2w/zqrAFYExtOk2SigAUT4zM7xA6XZ+Mjax3nRRMvyE4CBB55MRBCMeuc9ZUfmRERQt24hKqMREZv/Z)',

        'Animn(titleProgress)': 'title-progress',
        titleBoxShadow: '0 0 3px rgba(0, 0, 0, 0.3)',
        titleBoxShadowInset: 'inset 0 0 3px rgba(0, 0, 0, 0.3)',
        titleWidth: '31.25em',

        titleBarBtnWidth: `${1.125 + 0.625}em`, //Icon width plus gutter 2
        titleBarIconWidth: '1.125em',

        toolbarSubMenuCntBG: 'radial-gradient(ellipse at center, rgba(17,17,17,0.1) 0%, rgba(255,255,255,0) 70%)',
        toolBarSubMenuActiveWidth: `calc(100% - ${vars.gutter2})`,
        toolBarSubMenuArrowRightOffset: '3.5em',

        libraryBtnShadow: '0 0 5px rgba(17,17,17,.3)',
        libraryBtnLabelSpan: `calc(-100% - ${vars.gutter4})`,
        libraryOverShadow: 'inset 0 -5px 15px rgba(17,17,17,.2)',
        libraryCoverShadow: '0 0 5px rgba(17,17,17,.4), 0 10px 30px rgba(17,17,17,.1)',
        libraryTitleBGShadow: 'inset 0 0 20px rgba(17,17,17,.9)',
        smallLibraryTitleBGHeight: `calc(100% - 50px - ${vars.gutter2} - ${vars.mobileHitBox})`
      },
      squish(vars, { seperator: '' })
    ),
    classNames: [],
  },
};
