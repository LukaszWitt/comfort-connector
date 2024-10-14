import Head from "next/head";
import { Box } from '@mui/material';
import Nav from "@/layout/Nav";
import Content from "@/layout/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Komfort w zasięgu ręki</title> {/* Tutaj ustawiasz tytuł strony */}
        <meta name="description" content="Usługi elektryczne, instalacje smart-home, pomiary i certyfikaty energetyczne. Wysoka jakość, mobilność, elastyczność" /> {/* Opcjonalnie, dodaj meta description */}
      </Head>
      <Box
        className="App"
        sx={{
          minHeight: '100svh',
          // minWidth: '100vw',
          width: '100%',
          backgroundColor: "#031B31",
        }}
      >
        <Nav />
        <Content />
      </Box>
    </>
  );
}
