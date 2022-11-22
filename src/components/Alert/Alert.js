import { useEffect, useState } from "react";
import "./Alert.css";

export default function Alert({ check, message }) {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(check);
  }, [check]);
  return (
    <>
      {modalOpen && (
        <div
          className={
            !(message === "login successfully")
              ? "alert-container"
              : "alert-container alert-container-successful"
          }
        >
          <p>
            <b>Message </b>
            {message}
          </p>
        </div>
      )}
    </>
  );
}
