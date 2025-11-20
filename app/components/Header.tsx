"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, px } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#why-claire", label: "Why Claire?" },
    { href: "#features", label: "Features" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#reviews", label: "Reviews" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 border-b border-l-0 border-neutral-100 border-r-0 border-solid border-t-0 box-border flex items-center justify-between px-[16px] md:px-[150px] py-[12px] w-full z-50 transition-all duration-300
      `}
      style={
        {
          background: 'white',
        }
      }
      >
      {/* Logo Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ scale: 1.05 }}
        className="box-border flex gap-[6px] md:gap-[8.236px] items-center overflow-clip p-[0.824px] relative shrink-0 cursor-pointer"
      >
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative shrink-0 w-[38px] h-[38px] md:w-[45.296px] md:h-[45.296px]"
        >
          <Image
            alt="Claire Logo Icon"
            className="block max-w-none w-full h-full"
            height={45.296}
            src="/logo-icon.svg"
            width={45.296}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-[29px] md:h-[34.59px] relative shrink-0 w-[100px] md:w-[117.821px]"
        >
          <Image
            alt="Claire Logo Text"
            className="block max-w-none w-full h-full"
            height={34.59}
            src="/logo-text.svg"
            width={117.821}
            priority
          />
        </motion.div>
      </motion.div>

      {/* Navigation Links - Hidden on Mobile */}
      <nav className="hidden lg:flex font-['Saans_TRIAL',sans-serif] font-medium gap-[42px] items-start leading-[0] not-italic relative shrink-0 text-[#010101] text-[14px] tracking-[-0.28px] whitespace-nowrap">
        {navLinks.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5 + index * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{ y: -2, opacity: 1 }}
            className="flex flex-col justify-center opacity-[0.97] relative shrink-0 leading-normal group font-bold"
          >
            <p className="leading-[normal] relative">
              {link.label}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3c3f2e]"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </p>
          </motion.a>
        ))}
      </nav>

      {/* Action Buttons - Desktop */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden lg:flex bg-[rgba(60,63,46,0.1)] items-start relative rounded-[12px] shrink-0 overflow-hidden"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="box-border flex flex-col gap-[5.319px] items-center justify-center overflow-clip px-[20px] py-[12px] relative self-stretch shrink-0 bg-transparent border-none cursor-pointer"
        >
          <span className="flex flex-col font-['Saans_TRIAL',sans-serif] font-semibold justify-center leading-[0] not-italic opacity-[0.97] relative shrink-0 text-[#3c3f2e] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">
            <p className="leading-[normal]">Login</p>
          </span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(60,63,46,0.2)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] box-border flex flex-col gap-[7.978px] items-center justify-center overflow-clip px-[20px] py-[12px] relative rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] shrink-0 border-none cursor-pointer"
        >
          <span className="flex flex-col font-['Saans_TRIAL',sans-serif] font-semibold justify-center leading-[0] not-italic opacity-[0.97] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">
            <p className="leading-[normal]">Sign up</p>
          </span>
        </motion.button>
      </motion.div>

      {/* Mobile: Sign up Button + Hamburger Menu */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex lg:hidden items-center gap-[12px] relative shrink-0"
      >
        {/* Sign up Button - Mobile */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#3c3f2e] to-[#3c3f2e] box-border flex flex-col gap-[7.978px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[12px] shadow-[0px_44.1px_12.41px_0px_rgba(60,63,46,0),0px_28.144px_11.302px_0px_rgba(60,63,46,0.02),0px_15.956px_9.529px_0px_rgba(60,63,46,0.07),0px_7.091px_7.091px_0px_rgba(60,63,46,0.12),0px_1.773px_3.767px_0px_rgba(60,63,46,0.14)] shrink-0 border-none cursor-pointer"
        >
          <span className="flex flex-col font-['Saans_TRIAL',sans-serif] font-semibold justify-center leading-[0] not-italic opacity-[0.97] relative shrink-0 text-[14px] text-center text-white tracking-[-0.28px] whitespace-nowrap">
            <p className="leading-[normal]">Sign up</p>
          </span>
        </motion.button>

        {/* Menu Icon Button */}
        <motion.button
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center justify-center gap-[6px] w-[28px] h-[28px] relative shrink-0 cursor-pointer border-none bg-transparent p-0"
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-full h-[2px] bg-[#3c3f2e] rounded-full"
            animate={
              isMenuOpen
                ? {
                    rotate: 45,
                    y: 8,
                  }
                : {
                    rotate: 0,
                    y: 0,
                  }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="w-full h-[2px] bg-[#3c3f2e] rounded-full"
            animate={isMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-full h-[2px] bg-[#3c3f2e] rounded-full"
            animate={
              isMenuOpen
                ? {
                    rotate: -45,
                    y: -8,
                  }
                : {
                    rotate: 0,
                    y: 0,
                  }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>
      </motion.div>

      {/* Mobile Navigation Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              onClick={closeMenu}
            />

            {/* Menu Overlay */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-[67px] left-2 right-2 rounded-b-[16px]  z-50 lg:hidden border-t border-white/20"
            style={
              {
                borderRadius: '20px',
                border: '1px solid rgba(60, 63, 46, 0.10)',
                background: 'radial-gradient(94.61% 169.7% at 0% -25.89%, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.28) 100%), rgba(60, 63, 46, 0.10)',
                backdropFilter: 'blur(17px)',
                display: 'flex',
width: '358px',
padding: '12px 20px',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
              }
            }
           >
              <nav className="flex flex-col gap-0 py-[8px] px-[16px]">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.3)" }}
                    className="flex items-center py-[16px] px-[12px] text-[#010101] font-['Saans_TRIAL',sans-serif] font-semibold text-[16px] tracking-[-0.32px] opacity-[0.97] border-b border-white/20 last:border-b-0 rounded-[8px] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

