import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box } from '@mui/material';
import Nav from "@/layout/Nav";
import Content from "@/layout/Content";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box className="App" sx={{
      minHeight: '100svh',
      minWidth: '100vw',
      backgroundColor: "#031B31",
  }}>
    <Nav/>
    <Content />
  </Box>
  );
}
