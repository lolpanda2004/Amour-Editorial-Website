"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "../lib/utils";
import { Input } from "./input";

export interface TypewriterInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  name?: string;
  id?: string;
  enableAnimation?: boolean;
  animationDuration?: number;
  scaleFactor?: number;
  animationDelay?: number;
  inputBackground?: string;
  textColor?: string;
  caretColor?: string;
  fontWeight?: "normal" | "medium" | "semibold" | "bold" | "black";
  fontSize?: "xs" | "sm" | "base" | "lg" | "xl";
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  shadowIntensity?: "none" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  readOnly?: boolean;
  width?: string;
  className?: string;
  inputClassName?: string;
  textClassName?: string;
  enableShakeAnimation?: boolean;
  style?: React.CSSProperties;
  ariaLabel?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onEnter?: () => void;
}

export const TypewriterInput: React.FC<TypewriterInputProps> = ({
  value = "",
  onChange,
  placeholder = "Type something...",
  name,
  id,
  enableAnimation = true,
  animationDuration = 200,
  scaleFactor = 50,
  animationDelay = 300,
  inputBackground = "#ffffff",
  textColor = "#000000",
  caretColor = "#555555",
  fontWeight = "black",
  fontSize = "sm",
  borderRadius = "md",
  shadowIntensity = "md",
  disabled = false,
  readOnly = false,
  width = "200px",
  className,
  inputClassName,
  textClassName,
  enableShakeAnimation = true,
  style,
  ariaLabel,
  onFocus,
  onBlur,
  onEnter,
  ...props
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCaret, setShowCaret] = useState(true);
  const [internalValue, setInternalValue] = useState(value);
  const prevValueRef = useRef(value);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    if (!enableAnimation) return;

    const prevValue = prevValueRef.current;
    const currentValue = internalValue;

    if (
      currentValue.length > prevValue.length &&
      currentValue.slice(-1) !== " "
    ) {
      setShowCaret(false);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
          setShowCaret(true);
        }, animationDuration);
      }, 50);
    }

    prevValueRef.current = currentValue;
  }, [internalValue, enableAnimation, animationDuration]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter?.();
    }
  };

  const characters = internalValue.split("");

  const fontWeightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    black: "font-black",
  };

  const fontSizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const borderRadiusClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const shadowClasses = {
    none: "shadow-none",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  return (
    <>
      <style>
        {`
          .typewriter-container {
            position: relative;
            width: ${width};
          }

          .typewriter-input {
            color: transparent !important;
            caret-color: ${showCaret ? caretColor : "transparent"};
            background-color: ${inputBackground};
          }

          .typewriter-input::placeholder {
            color: rgba(0, 0, 0, 0.3);
            font-weight: 700;
          }

          .typewriter-input:focus {
            box-shadow: rgba(0, 0, 0, 0.1) 0 5px 20px;
            border: 0.5px solid #000000;
          }

          .typewriter-label {
            position: absolute;
            top: 50%;
            left: 12px;
            transform: translateY(-50%);
            pointer-events: none;
            letter-spacing: 0;
            color: ${textColor};
          }

          .typewriter-char {
            display: inline-block;
            font-family: inherit;
          }

          .typewriter-char--animate {
            animation: typewriter-print ${animationDuration}ms 1 ease-in-out;
          }

          .typewriter-container--shake {
            animation: typewriter-shake ${animationDuration}ms 1 ease-in-out;
          }

          @keyframes typewriter-print {
            from {
              transform: scale(${scaleFactor});
              position: absolute;
            }
            99% {
              position: absolute;
            }
            to {
              transform: scale(1);
              position: relative;
            }
          }

          @keyframes typewriter-shake {
            from, to {
              transform: scale(1);
            }
            50% {
              transform: scale(0.97);
            }
          }
        `}
      </style>

      <div
        className={cn(
          "typewriter-container",
          {
            "typewriter-container--shake": isAnimating && enableShakeAnimation,
          },
          className
        )}
        style={style}
      >
        <Input
          type="text"
          value={internalValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          name={name}
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          autoComplete="off"
          aria-label={ariaLabel}
          className={cn(
            "typewriter-input",
            fontWeightClasses[fontWeight],
            fontSizeClasses[fontSize],
            borderRadiusClasses[borderRadius],
            shadowClasses[shadowIntensity],
            inputClassName
          )}
          {...props}
        />

        <label
          htmlFor={id || "typewriter-" + name}
          className={cn(
            "typewriter-label",
            fontWeightClasses[fontWeight],
            fontSizeClasses[fontSize],
            textClassName
          )}
        >
          {characters.map((char, index) => (
            <span
              key={char + "-" + index}
              className={cn("typewriter-char", {
                "typewriter-char--animate":
                  isAnimating && index === characters.length - 1,
              })}
            >
              {char}
            </span>
          ))}
        </label>
      </div>
    </>
  );
};

export default TypewriterInput;
