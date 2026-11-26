"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 rounded-xl glass-card text-center"
          >
            <div className="text-red-500 mb-2">⚠️</div>
            <p style={{ color: "var(--text-primary)" }} className="font-medium">
              Something went wrong
            </p>
            <p style={{ color: "var(--text-muted)" }} className="text-sm mt-1">
              Please try refreshing the page or contact support if the problem
              persists.
            </p>
          </motion.div>
        )
      );
    }

    return this.props.children;
  }
}
