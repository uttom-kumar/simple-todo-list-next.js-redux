'use client'
import "./globals.css";
import {Provider} from "react-redux";
import store from "@/redux/store/store";
import { Toaster } from 'react-hot-toast';
import AppNavbar from "@/component/header/AppNavbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Provider store={store}>
            <Toaster />
            <AppNavbar />
            {children}
        </Provider>
      </body>
    </html>
  );
}
