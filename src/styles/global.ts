import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body,
  #root {
    margin: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    overflow: overlay;
  }

  @font-face {
    font-family: 'FiraCodeRetina';
    src: local('FiraCodeRetina'),
      url('fonts/FiraCode-Retina.otf') format('opentype');
  }

  @font-face {
    font-family: 'FiraSansItalic';
    src: local('FiraSansItalic'),
      url('fonts/FiraSans/FiraSans-Italic.ttf') format('opentype');
  }

  @font-face {
    font-family: 'FiraSansCondensed';
    src: local('FiraSansCondensed'),
      url('fonts/FiraSansCondensed/firasanscondensed-regular.otf') format('opentype');
  }

  @font-face {
    font-family: 'FiraSansCondensedMedium';
    src: local('FiraSansCondensedMedium'),
      url('fonts/FiraSansCondensed/firasanscondensed-medium.otf') format('opentype');
  }

@font-face {
  font-family: 'FiraSansCondensedItalic';
  src: local('FiraSansCondensedItalic'),
    url('fonts/FiraSansCondensed/firasanscondensed-italic.otf') format('opentype');
}

  @font-face {
    font-family: 'Rajdhani';
    src: local('Rajdhani'),
      url('fonts/Rajdhani/Rajdhani-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'RacingSansOne';
    src: local('RacingSansOne'),
      url('fonts/RacingSansOne/RacingSansOne-Regular.ttf') format('truetype');
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 4px; /* width of the entire scrollbar */
    margin-right: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #2f2f2f; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #444; /* color of the scroll thumb */
    border: 3px solid #444; /* roundness of the scroll thumb */
    border-radius: 20px; /* creates padding around scroll thumb */
  }

  input {
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    background-color: #1a1a1a;
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  button, label {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  button, button:hover, button:focus {
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    outline: none;
  }

  @keyframes blink {
    from,
    to {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes blink {
    from,
    to {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes blink {
    from,
    to {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-ms-keyframes blink {
    from,
    to {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes blink {
    from,
    to {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`
