import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

export function Modal({ children, title }: ModalProps) {
  return (
    <>
      <div className={styles.modal} />
      <div className={styles.text}>
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
}
