import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Argyle-themed Skeleton Loader with purple/blue gradient
export const SkeletonLoader = ({
  width = '100%',
  height = '1rem',
  className = '',
  rounded = true,
  lines = 1
}) => {
  const skeletonVariants = {
    animate: {
      background: [
        'linear-gradient(90deg, rgba(168, 85, 247, 0.1) 25%, rgba(59, 130, 246, 0.2) 50%, rgba(168, 85, 247, 0.1) 75%)',
        'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 25%, rgba(168, 85, 247, 0.2) 50%, rgba(59, 130, 246, 0.1) 75%)'
      ],
      backgroundSize: ['200% 100%', '200% 100%'],
      backgroundPosition: ['-200% 0', '200% 0']
    }
  };

  if (lines > 1) {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <motion.div
            key={i}
            className={`bg-gradient-to-r from-purple-500/10 via-blue-500/15 to-purple-500/10 ${rounded ? 'rounded-lg' : ''}`}
            style={{ width: i === lines - 1 ? '70%' : width, height }}
            variants={skeletonVariants}
            animate="animate"
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`bg-gradient-to-r from-purple-500/10 via-blue-500/15 to-purple-500/10 ${rounded ? 'rounded-lg' : ''} ${className}`}
      style={{ width, height }}
      variants={skeletonVariants}
      animate="animate"
      transition={{
        duration: 1.5,
        repeat: Infinity
      }}
    />
  );
};

// Progressive Image Loading with blur effect
export const ProgressiveImage = ({
  src,
  alt,
  className = '',
  placeholderClassName = '',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton placeholder */}
      {!loaded && !error && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/25 to-purple-500/20 ${placeholderClassName}`}
          initial={{ opacity: 0.5 }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            background: [
              'linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.25))',
              'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.25))'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center">
          <div className="text-red-400 text-sm font-medium">Image unavailable</div>
        </div>
      )}

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
        initial={{ filter: 'blur(10px)' }}
        animate={loaded ? { filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.3 }}
        {...props}
      />
    </div>
  );
};

// Staggered content reveal for lists
export const StaggeredReveal = ({
  children,
  staggerDelay = 0.1,
  className = ''
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
              filter: 'blur(4px)'
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: {
                duration: 0.6,
                ease: 'easeOut'
              }
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Loading spinner with Argyle colors (CSS animations for guaranteed performance)
export const ArgyleSpinner = ({
  size = 'w-8 h-8',
  className = ''
}) => {
  return (
    <div className={`relative ${size} ${className}`}>
      {/* Outer ring - slow rotation */}
      <div
        className="absolute inset-0 rounded-full border-4 border-purple-500/20 animate-spin"
        style={{ animationDuration: '2s' }}
      />
      {/* Middle ring - medium rotation */}
      <div
        className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"
        style={{ animationDuration: '1.5s' }}
      />
      {/* Inner ring - fast reverse rotation */}
      <div
        className="absolute inset-2 rounded-full border-2 border-transparent border-t-purple-400 animate-spin"
        style={{
          animationDirection: 'reverse',
          animationDuration: '1s'
        }}
      />
    </div>
  );
};

// Card skeleton for staff cards and similar components
export const CardSkeleton = ({
  className = '',
  showAvatar = true,
  lines = 3
}) => {
  return (
    <motion.div
      className={`p-6 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/5 ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Avatar skeleton */}
      {showAvatar && (
        <div className="flex justify-center mb-4">
          <SkeletonLoader
            width="80px"
            height="80px"
            rounded={false}
            className="rounded-full"
          />
        </div>
      )}

      {/* Content skeletons */}
      <div className="space-y-3">
        <SkeletonLoader width="70%" height="1.25rem" className="mx-auto" />
        <SkeletonLoader width="90%" height="1rem" lines={lines} />
      </div>
    </motion.div>
  );
};

// Lazy loading animation wrapper for viewport reveals
export const LazyLoad = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  once = true,
  animationType = 'fadeUp'
}) => {
  const [ref, inView] = useInView({
    threshold,
    rootMargin,
    triggerOnce: once
  });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: 'easeOut' }
      }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' }
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: 'easeOut' }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: 'easeOut' }
      }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
      }
    },
    bounceIn: {
      hidden: { opacity: 0, scale: 0.3 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.68, -0.55, 0.265, 1.55]
        }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations[animationType] || animations.fadeUp}
    >
      {children}
    </motion.div>
  );
};

// Progress bar component
export const ProgressBar = ({
  progress = 0,
  className = '',
  showPercentage = false,
  color = 'from-purple-500 to-blue-500',
  height = 'h-2',
  animated = true
}) => {
  return (
    <div className={`w-full ${height} bg-white/10 rounded-full overflow-hidden ${className}`}>
      <motion.div
        className={`h-full bg-gradient-to-r ${color} rounded-full`}
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(progress, 100)}%` }}
        transition={{
          duration: animated ? 0.8 : 0,
          ease: 'easeOut'
        }}
      />
      {showPercentage && (
        <div className="text-xs text-white/80 mt-1 text-center">
          {Math.round(progress)}%
        </div>
      )}
    </div>
  );
};

// Enhanced loading states with multiple variants
export const LoadingState = ({
  type = 'spinner',
  message = '',
  className = '',
  size = 'medium'
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  if (type === 'dots') {
    return (
      <div className={`flex items-center space-x-1 ${className}`}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-purple-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
        {message && <span className="ml-3 text-white/70">{message}</span>}
      </div>
    );
  }

  if (type === 'pulse') {
    return (
      <div className={`flex items-center space-x-3 ${className}`}>
        <motion.div
          className={`${sizeClasses[size]} bg-gradient-to-r from-purple-500 to-blue-500 rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        {message && <span className="text-white/70">{message}</span>}
      </div>
    );
  }

  // Default spinner
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <ArgyleSpinner size={sizeClasses[size]} />
      {message && <span className="text-white/70">{message}</span>}
    </div>
  );
};

// Page loading overlay
export const PageLoader = ({
  isLoading = false,
  message = "Loading Argyle excellence...",
  className = ''
}) => {
  if (!isLoading) return null;

  return (
    <motion.div
      className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center space-y-6">
        <ArgyleSpinner size="w-16 h-16" />
        <motion.p
          className="text-white/80 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {message}
        </motion.p>
        <motion.div
          className="w-48 h-1 bg-white/10 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

