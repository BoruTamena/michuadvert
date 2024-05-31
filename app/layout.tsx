import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { theme } from "@/themes";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";


export const metadata: Metadata = {
  title: "Michu-Advert",
  description: "michu advert , printing ,banner ,logo ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme/>
            
            <Nav/>
            
                 {children}
          
            {/* <br/> <br/>
            <br/> <br/> */}
            <Footer/>
          </ThemeProvider>
          
        </AppRouterCacheProvider>
        
        </body>
    </html>
  );
}
