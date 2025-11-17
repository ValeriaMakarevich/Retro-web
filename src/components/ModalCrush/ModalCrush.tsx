import { useEffect, useState } from "react";
import styles from "./ModalCrush.module.css";

type ModalCrushProps = {
  crush: boolean;
  setCrush: (value: boolean) => void; 
  era?: { error?: string }; 
};

export default function ModalCrush({ crush, setCrush, era }: ModalCrushProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (crush) {
      const scrollY = window.scrollY;

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";

        window.scrollTo(0, scrollY);
      };
    }
  }, [crush]);

  const useTypewriter = (text: string, speed: number = 40) => {
    useEffect(() => {
      setDisplayText("");
      setIsTypingComplete(false);

      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayText((prev) => prev + text.charAt(index));
          index++;
        } else {
          setIsTypingComplete(true);
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }, [text, speed]);
  };

  useTypewriter(era?.error || "", 60);

  return (
    <>
      (
      <div className={styles.crushContainer}>
        <button className={styles.close} onClick={() => setCrush(false)}>
          <img src="/close-icon.svg" alt="" />
        </button>
        <div className={styles.terminal}>
          <span className={styles.terminalText}>{displayText}</span>
          {!isTypingComplete && <span className={styles.cursor}>|</span>}
        </div>
      </div>
      )
    </>
  );
}