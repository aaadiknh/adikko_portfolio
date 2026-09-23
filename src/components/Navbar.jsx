import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    const location = useLocation();

    const navItems = [
        { id: "Home", label: "Home" },
        { id: "About", label: "About" },
        { id: "Portofolio", label: "Portofolio" },
        { id: "Contact", label: "Contact" },
    ];

    /* =====================================================
       SCROLL + ACTIVE SECTION
    ===================================================== */
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Hanya cek section jika berada di halaman utama
            if (location.pathname !== "/") {
                return;
            }

            const sections = navItems
                .map((item) => {
                    const section = document.getElementById(item.id);

                    if (!section) return null;

                    return {
                        id: item.id,
                        top: section.offsetTop,
                        height: section.offsetHeight,
                    };
                })
                .filter(Boolean);

            const currentPosition = window.scrollY + 200;

            let currentSection = "Home";

            sections.forEach((section) => {
                if (
                    currentPosition >= section.top &&
                    currentPosition < section.top + section.height
                ) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    /* =====================================================
       MOBILE MENU
    ===================================================== */
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    /* =====================================================
       HANDLE SECTION NAVIGATION
    ===================================================== */
    const scrollToSection = (e, sectionId) => {
        e.preventDefault();

        setIsOpen(false);

        // ================================================
        // JIKA SEDANG DI HALAMAN UTAMA
        // ================================================
        if (location.pathname === "/") {
            const section = document.getElementById(sectionId);

            console.log("Navigating to:", sectionId);
            console.log("Found section:", section);

            if (section) {
                const navbarHeight = 80;

                const sectionTop =
                    section.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({
                    top: sectionTop,
                    behavior: "smooth",
                });

                // Update URL hash tanpa reload
                window.history.replaceState(
                    null,
                    "",
                    `#${sectionId}`
                );

                setActiveSection(sectionId);
            }

            return;
        }

        // ================================================
        // JIKA SEDANG DI HALAMAN LAIN
        // ================================================
        window.location.href = `/#${sectionId}`;
    };

    /* =====================================================
       HANDLE HASH AFTER RETURNING TO HOME
    ===================================================== */
    useEffect(() => {
        if (location.pathname !== "/") return;

        const hash = window.location.hash;

        if (!hash) return;

        const sectionId = hash.replace("#", "");

        const timer = setTimeout(() => {
            const section = document.getElementById(sectionId);

            if (section) {
                const navbarHeight = 80;

                const sectionTop =
                    section.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({
                    top: sectionTop,
                    behavior: "smooth",
                });

                setActiveSection(sectionId);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                isOpen
                    ? "bg-[#090609]/95 backdrop-blur-xl border-b border-[#F04470]/10"
                    : scrolled
                    ? "bg-[#090609]/70 backdrop-blur-xl border-b border-[#F04470]/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
                <div className="flex items-center justify-between h-16">

                    {/* =====================================================
                        LOGO
                    ===================================================== */}
                    <div className="flex-shrink-0">
                        <a
                            href="#Home"
                            onClick={(e) =>
                                scrollToSection(e, "Home")
                            }
                            className="
                                text-xl
                                font-bold
                                bg-gradient-to-r
                                from-[#F04470]
                                to-[#D62965]
                                bg-clip-text
                                text-transparent
                                hover:from-[#F58AA7]
                                hover:to-[#F04470]
                                transition-all
                                duration-300
                            "
                        >
                            adikko
                        </a>
                    </div>

                    {/* =====================================================
                        DESKTOP NAVIGATION
                    ===================================================== */}
                    <div className="hidden md:block">
                        <div className="ml-8 flex items-center space-x-8">

                            {navItems.map((item) => {
                                const isActive =
                                    activeSection === item.id;

                                return (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={(e) =>
                                            scrollToSection(
                                                e,
                                                item.id
                                            )
                                        }
                                        className="
                                            group
                                            relative
                                            px-1
                                            py-2
                                            text-sm
                                            font-medium
                                        "
                                    >
                                        <span
                                            className={`
                                                relative
                                                z-10
                                                transition-all
                                                duration-300
                                                ${
                                                    isActive
                                                        ? "bg-gradient-to-r from-[#F04470] to-[#D62965] bg-clip-text text-transparent font-semibold"
                                                        : "text-[#b9a6ae] group-hover:text-[#F58AA7]"
                                                }
                                            `}
                                        >
                                            {item.label}
                                        </span>

                                        {/* Active / Hover Indicator */}
                                        <span
                                            className={`
                                                absolute
                                                bottom-0
                                                left-0
                                                w-full
                                                h-0.5
                                                bg-gradient-to-r
                                                from-[#F04470]
                                                to-[#D62965]
                                                rounded-full
                                                origin-left
                                                transition-all
                                                duration-300
                                                ${
                                                    isActive
                                                        ? "scale-x-100 shadow-[0_0_10px_rgba(240,68,112,0.5)]"
                                                        : "scale-x-0 group-hover:scale-x-100"
                                                }
                                            `}
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* =====================================================
                        MOBILE MENU BUTTON
                    ===================================================== */}
                    <div className="md:hidden">
                        <button
                            onClick={() =>
                                setIsOpen(!isOpen)
                            }
                            className={`
                                relative
                                p-2
                                rounded-xl
                                text-[#b9a6ae]
                                hover:text-[#F04470]
                                hover:bg-[#F04470]/10
                                transition-all
                                duration-300
                                ease-in-out
                                transform
                                ${
                                    isOpen
                                        ? "rotate-90 scale-110 text-[#F04470]"
                                        : "rotate-0 scale-100"
                                }
                            `}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* =====================================================
                MOBILE MENU
            ===================================================== */}
            <div
                className={`
                    md:hidden
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                        isOpen
                            ? "max-h-screen opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                    }
                `}
            >
                <div
                    className="
                        mx-[5%]
                        mb-4
                        px-3
                        py-4
                        space-y-2
                        rounded-2xl
                        bg-[#120811]/95
                        backdrop-blur-xl
                        border
                        border-[#F04470]/15
                        shadow-[0_15px_40px_rgba(0,0,0,0.4)]
                    "
                >
                    {navItems.map((item, index) => {
                        const isActive =
                            activeSection === item.id;

                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) =>
                                    scrollToSection(
                                        e,
                                        item.id
                                    )
                                }
                                className={`
                                    block
                                    px-4
                                    py-3
                                    rounded-xl
                                    text-lg
                                    font-medium
                                    transition-all
                                    duration-300
                                    ease-in-out
                                    ${
                                        isActive
                                            ? "bg-[#F04470]/10 text-[#F04470] border border-[#F04470]/15"
                                            : "text-[#b9a6ae] hover:bg-white/[0.035] hover:text-[#F58AA7]"
                                    }
                                `}
                                style={{
                                    transitionDelay: `${
                                        index * 100
                                    }ms`,
                                    transform: isOpen
                                        ? "translateX(0)"
                                        : "translateX(50px)",
                                    opacity: isOpen ? 1 : 0,
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <span>
                                        {item.label}
                                    </span>

                                    {isActive && (
                                        <span
                                            className="
                                                w-1.5
                                                h-1.5
                                                rounded-full
                                                bg-[#F04470]
                                                shadow-[0_0_8px_rgba(240,68,112,0.7)]
                                            "
                                        />
                                    )}
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;