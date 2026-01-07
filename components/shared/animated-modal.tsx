"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/components/icons";

interface AnimatedModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AnimatedModalContext = createContext<AnimatedModalContextType | undefined>(undefined);

export const AnimatedModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedModalContext.Provider value={{ open, setOpen }}>
      {children}
    </AnimatedModalContext.Provider>
  );
};

export const useAnimatedModal = () => {
  const context = useContext(AnimatedModalContext);
  if (!context) {
    throw new Error("useAnimatedModal must be used within a AnimatedModalProvider");
  }
  return context;
};

export function AnimatedModal({ children }: { children: ReactNode }) {
  return <AnimatedModalProvider>{children}</AnimatedModalProvider>;
}

export const AnimatedModalTrigger = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { setOpen } = useAnimatedModal();
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-foreground text-center relative overflow-hidden",
        className
      )}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  );
};

export const AnimatedModalBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const { open, setOpen } = useAnimatedModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const modalRef = useRef<HTMLDivElement>(null);
  useOutsideClick(modalRef, () => setOpen(false));

  // Don't render anything on the server
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            backdropFilter: "blur(10px)",
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
            pointerEvents: "none",
            transition: { duration: 0.3 },
          }}
          className="fixed perspective-midrange transform-3d inset-0 h-full w-full flex items-center justify-center z-50"
        >
          <Overlay />

          <motion.div
            ref={modalRef}
            className={cn(
              "min-h-[50%] max-h-[90%] md:max-w-[40%] bg-sidebar border border-sidebar-border md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden",
              className
            )}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateX: 40,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotateX: 10,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
          >
            <CloseButton />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export const AnimatedModalContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col flex-1 p-8 md:p-10", className)}>
      {children}
    </div>
  );
};

export const AnimatedModalFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex justify-end p-4 bg-sidebar", className)}>
      {children}
    </div>
  );
};

const Overlay = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(10px)",
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
        pointerEvents: "none",
      }}
      className={cn("fixed inset-0 h-full w-full bg-black/50 z-50", className)}
    ></motion.div>
  );
};

const CloseButton = () => {
  const { setOpen } = useAnimatedModal();
  return (
    <button
      onClick={() => setOpen(false)}
      className="absolute top-4 right-4 group cursor-pointer"
    >
      <CloseIcon className="size-4 text-foreground group-hover:scale-125 group-hover:rotate-3 transition duration-200" />
    </button>
  );
};

// Hook to detect clicks outside of a component.
// Add it in a separate file, I've added here for simplicity
export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: any) => {
      // DO NOTHING if the element being clicked is the target element or their children
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
