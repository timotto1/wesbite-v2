"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

type ContactPanelContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const ContactPanelContext = createContext<ContactPanelContextValue | null>(null);

export function ContactPanelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);
  return (
    <ContactPanelContext.Provider value={value}>
      {children}
    </ContactPanelContext.Provider>
  );
}

/**
 * Returns the panel controls when inside a `ContactPanelProvider`, or `null`
 * when outside (so consumers like `CTAButton` can fall back to a normal
 * link navigation).
 */
export function useContactPanel(): ContactPanelContextValue | null {
  return useContext(ContactPanelContext);
}
