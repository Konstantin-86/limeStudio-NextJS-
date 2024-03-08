"use client";
import styles from "./ButtonModal.module.scss";
import { useState } from "react";
import { Modal, ConfigProvider } from "antd";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function ButtonModal({ text }: { text: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={cormorant.className}>
      <button onClick={showModal} className={styles.button}>
        {text}
      </button>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "#8c8580",
            },
          },
        }}
      >
        <Modal
          className={styles.myModal}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          centered={true}
          footer={null}
          width="auto"
          style={{
            padding: "41px",
          }}
        >
          <div className={styles.modalInner}>
            <h3>Бесплатная консультация дизайнера!</h3>
            <p>При обращении через сайт</p>
            <form>
              <label htmlFor="name"></label>
              <input type="text" id="name" placeholder="Ваше имя" required />
              <label htmlFor="phone"></label>
              <input type="tel" id="phone" placeholder="Телефон" required />
              <button>Отправить</button>
            </form>
          </div>
        </Modal>
      </ConfigProvider>
      ;
    </div>
  );
}
