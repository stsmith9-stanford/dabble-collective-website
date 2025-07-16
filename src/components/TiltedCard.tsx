'use client'

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface TiltedCardProps {
  imageSrc?: string
  altText?: string
  captionText?: string
  containerHeight?: string
  containerWidth?: string
  imageHeight?: string
  imageWidth?: string
  rotateAmplitude?: number
  scaleOnHover?: number
  showMobileWarning?: boolean
  showTooltip?: boolean
  displayOverlayContent?: boolean
  overlayContent?: React.ReactNode
  
  // Legacy props for backward compatibility
  number?: string
  title?: string
  description?: string
  bgColor?: string
}

const TiltedCard: React.FC<TiltedCardProps> = ({ 
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "350px",
  containerWidth = "100%",
  imageHeight = "350px",
  imageWidth = "100%",
  rotateAmplitude = 14,
  scaleOnHover = 1.1,
  showMobileWarning = true,
  showTooltip = true,
  displayOverlayContent = true,
  overlayContent,
  
  // Legacy props
  number,
  title,
  description,
  bgColor = 'bg-primary'
}) => {
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  // Legacy mode for existing cards
  const isLegacyMode = !imageSrc && (number || title || description)

  if (isLegacyMode) {
    return (
      <figure
        ref={ref}
        className="tilted-card-figure"
        style={{
          height: containerHeight,
          width: containerWidth,
        }}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showMobileWarning && (
          <div className="tilted-card-mobile-alert">
            This effect is not optimized for mobile. Check on desktop.
          </div>
        )}

        <motion.div
          className="tilted-card-inner bg-white rounded-2xl shadow-sm border border-gray-100 cursor-pointer"
          style={{
            width: containerWidth,
            height: containerHeight,
            rotateX,
            rotateY,
            scale,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="tilted-card-overlay w-full h-full">
            {number && (
              <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center mb-6`}>
                <span className="text-white font-bold text-lg">{number}</span>
              </div>
            )}
            {title && <h3 className="text-xl font-bold text-text_primary mb-4">{title}</h3>}
            {description && <p className="text-gray-600 text-sm leading-relaxed">{description}</p>}
          </div>
        </motion.div>

        {showTooltip && title && (
          <motion.figcaption
            className="tilted-card-caption"
            style={{
              x,
              y,
              opacity,
              rotate: rotateFigcaption,
            }}
          >
            {title}
          </motion.figcaption>
        )}
      </figure>
    )
  }

  // New image-based mode
  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="tilted-card-overlay">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}

export default TiltedCard 