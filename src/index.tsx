import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { View } from "./view/components/View";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <View />
  </React.StrictMode>
);

