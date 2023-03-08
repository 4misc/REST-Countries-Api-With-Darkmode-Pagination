import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";
import { Form } from "./components/Modal/Form";


export function Layout() {
  return (
    <>
      <Header />
      {/* <Modal title={"Hello world"}>
        <Form />
      </Modal> */}
      <Outlet />
    </>
  );
}
