import './app.css'
// @ts-ignore
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

import { appWindow } from "@tauri-apps/api/window";
  document
    .getElementById("titlebar-minimize")
    .addEventListener("click", () => appWindow.minimize());
  document
    .getElementById("titlebar-close")
    .addEventListener("click", () => appWindow.close());

export default app
