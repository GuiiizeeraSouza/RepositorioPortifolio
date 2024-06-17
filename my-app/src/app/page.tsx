import Image from "next/image";
import Initial from "./pages/initial/page";
import Skils from "./pages/skils/page";
import About from "./pages/about/page";
import Form from "./pages/Forms/page";
import Anchor from "./components/Anchor/page";
import { useRef } from "react";



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" id="main">
      <Anchor></Anchor>
      <Initial></Initial>
      <Skils></Skils>
      <About></About>
      <Form></Form>
    </main>
  );
}
