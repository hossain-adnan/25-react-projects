import { useState } from 'react'
import './App.css'
import Accordion from './Components/Accordion/accordion'
import RandomColor from './Components/random_color_generator';
import StarRating from './Components/star-rating';
import ImageSlider from './Components/image-slider';
import LoadMore from './Components/load-more';
import menus from './Components/tree-view/data';
import Treeview from './Components/tree-view/index';
import QRcodeGenerator from './Components/qr-code-generator';
import SetLightOrDarkTheme from './Components/light-dark-theme'
import ScrollIndicator from './Components/scroll-indicator';

function App() {

  return (
    <>
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <StarRating /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
      /> */}
      {/* <LoadMore/> */}
      {/* <Treeview menus={menus}/> */}
      {/* <QRcodeGenerator/> */}
      {/* <SetLightOrDarkTheme/> */}
      <ScrollIndicator/>
    </>
  );
}

export default App
