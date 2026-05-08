import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 text-white flex flex-col items-center justify-center p-8 text-center z-[9999]"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md space-y-6"
                    >
                        <div className="flex justify-center">
                            <AlertTriangle size={64} className="text-red-400" />
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
                            <p className="text-gray-300 text-lg">
                                We encountered an unexpected error. Don't worry - your work is safe!
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => window.location.reload()}
                                className="flex items-center gap-2 px-6 py-3 bg-argyle-purple hover:bg-purple-600 rounded-lg font-medium transition-colors"
                            >
                                <RefreshCw size={18} />
                                Try Again
                            </button>
                            <a
                                href="/"
                                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
                            >
                                <Home size={18} />
                                Go Home
                            </a>
                        </div>

                        {process.env.NODE_ENV === 'development' && (
                            <details className="mt-8 text-left">
                                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">
                                    Developer Details
                                </summary>
                                <pre className="mt-2 text-xs bg-black/50 p-4 rounded overflow-auto max-h-32">
                                    {this.state.error && this.state.error.toString()}
                                    {this.state.errorInfo && '\n\n' + this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}
                    </motion.div>
                </motion.div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;






