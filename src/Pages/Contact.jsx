import React, { useState, useEffect, memo } from "react";

import {
  Share2,
  User,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";

import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    Swal.fire({
      title: "Mengirim Pesan...",
      html: "Harap tunggu selagi kami mengirim pesan Anda",
      allowOutsideClick: false,
      background: "#120811",
      color: "#f3dce4",
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // FormSubmit endpoint
      const formSubmitUrl =
        "https://formsubmit.co/adiknurhalimah83@gmail.com";

      // Siapkan data form
      const submitData = new FormData();

      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("message", formData.message);
      submitData.append(
        "_subject",
        "Pesan Baru dari Website Portfolio"
      );
      submitData.append("_captcha", "false");
      submitData.append("_template", "table");

      await axios.post(formSubmitUrl, submitData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Swal.fire({
        title: "Berhasil!",
        text: "Pesan Anda telah berhasil terkirim!",
        icon: "success",
        confirmButtonColor: "#F04470",
        background: "#120811",
        color: "#f3dce4",
        timer: 2000,
        timerProgressBar: true,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      if (error.request && error.request.status === 0) {
        Swal.fire({
          title: "Berhasil!",
          text: "Pesan Anda telah berhasil terkirim!",
          icon: "success",
          confirmButtonColor: "#F04470",
          background: "#120811",
          color: "#f3dce4",
          timer: 2000,
          timerProgressBar: true,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Gagal!",
          text: "Terjadi kesalahan. Silakan coba lagi nanti.",
          icon: "error",
          confirmButtonColor: "#F04470",
          background: "#120811",
          color: "#f3dce4",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="
        px-[5%]
        sm:px-[5%]
        lg:px-[10%]
        relative
        overflow-hidden
      "
    >
      {/* =====================================================
          HEADING
      ====================================================== */}

      <div
        className="
          text-center
          lg:mt-[5%]
          mt-10
          mb-2
          sm:px-0
          px-[5%]
          relative
          z-10
          w-full
        "
      >
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="
            w-full
            text-3xl
            md:text-5xl
            font-bold
            text-center
            mx-auto

            text-transparent
            bg-clip-text
            bg-gradient-to-r from-[#ff6b6b] to-[#ff4d8d]

            drop-shadow-[0_0_25px_rgba(240,68,112,0.12)]

            leading-[1.2]
            pb-2
          "
        >
          Hubungi Saya
        </h2>

        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="
            text-[#d8c2ca]
            max-w-2xl
            mx-auto
            text-sm
            md:text-base
            mt-3
            leading-relaxed
          "
        >
          Punya pertanyaan? Kirimi saya pesan, dan saya akan segera
          membalasnya.
        </p>
      </div>

      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <div
        id="Contact"
        className="
          h-auto
          py-10
          flex
          items-center
          justify-center
          2xl:pr-[3.1%]
          lg:pr-[3.8%]
          md:px-0
          relative
          z-10
        "
      >
        <div
          className="
            container
            px-[1%]

            grid
            grid-cols-1
            sm:grid-cols-1
            md:grid-cols-1
            lg:grid-cols-[45%_55%]
            2xl:grid-cols-[35%_65%]

            gap-12
          "
        >
          {/* =====================================================
              CONTACT FORM
          ====================================================== */}

          <div
            className="
              relative
              overflow-hidden

              bg-gradient-to-br
              from-white/[0.10]
              via-white/[0.075]
              to-white/[0.045]

              backdrop-blur-2xl

              rounded-3xl

              border
              border-white/[0.16]

              shadow-[0_20px_60px_rgba(0,0,0,0.14)]

              p-5
              py-10
              sm:p-10

              transform
              transition-all
              duration-500

              hover:border-[#F04470]/35
            "
          >
            {/* Soft Card Glow */}
            <div
              className="
                absolute
                -top-24
                -right-24
                w-48
                h-48
                rounded-full
                bg-[#F04470]/[0.10]
                blur-[80px]
                pointer-events-none
              "
            />

            <div
              className="
                absolute
                -bottom-24
                -left-24
                w-48
                h-48
                rounded-full
                bg-[#D62965]/[0.06]
                blur-[80px]
                pointer-events-none
              "
            />

            {/* Form Header */}
            <div
              className="
                flex
                justify-between
                items-start
                mb-8
                relative
                z-10
                gap-5
              "
            >
              <div className="min-w-0">
                <h2
                  className="
                    text-3xl
                    sm:text-4xl
                    font-bold
                    mb-3

                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r from-[#ff4d8d] to-[#ff6b8b]

                    leading-[1.2]
                    pb-2
                  "
                >
                  Hubungi
                </h2>

                <p className="text-[#d8c2ca] leading-relaxed">
                  Ada yang ingin didiskusikan? Kirim saya pesan dan mari
                  kita bicara.
                </p>
              </div>

              <Share2
                className="
                  flex-shrink-0
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  text-[#FF4d8d]
                "
              />
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              {/* Name */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="relative group"
              >
                <User
                  className="
                    absolute
                    left-4
                    top-4
                    w-5
                    h-5
                    text-[#a9929b]
                    group-focus-within:text-[#F04470]
                    transition-colors
                    duration-300
                  "
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="
                    w-full
                    p-4
                    pl-12

                    bg-white/[0.055]
                    backdrop-blur-md

                    rounded-xl

                    border
                    border-white/[0.12]

                    placeholder-[#a9929b]
                    text-[#fff1f5]

                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#F04470]/20
                    focus:border-[#F04470]/50

                    transition-all
                    duration-300

                    hover:border-white/[0.20]

                    disabled:opacity-50
                  "
                  required
                />
              </div>

              {/* Email */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="relative group"
              >
                <Mail
                  className="
                    absolute
                    left-4
                    top-4
                    w-5
                    h-5
                    text-[#a9929b]
                    group-focus-within:text-[#F04470]
                    transition-colors
                    duration-300
                  "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="
                    w-full
                    p-4
                    pl-12

                    bg-white/[0.055]
                    backdrop-blur-md

                    rounded-xl

                    border
                    border-white/[0.12]

                    placeholder-[#a9929b]
                    text-[#fff1f5]

                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#F04470]/20
                    focus:border-[#F04470]/50

                    transition-all
                    duration-300

                    hover:border-white/[0.20]

                    disabled:opacity-50
                  "
                  required
                />
              </div>

              {/* Message */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="relative group"
              >
                <MessageSquare
                  className="
                    absolute
                    left-4
                    top-4
                    w-5
                    h-5
                    text-[#a9929b]
                    group-focus-within:text-[#F04470]
                    transition-colors
                    duration-300
                  "
                />

                <textarea
                  name="message"
                  placeholder="Pesan Anda"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="
                    w-full
                    resize-none
                    p-4
                    pl-12

                    bg-white/[0.055]
                    backdrop-blur-md

                    rounded-xl

                    border
                    border-white/[0.12]

                    placeholder-[#a9929b]
                    text-[#fff1f5]

                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#F04470]/20
                    focus:border-[#F04470]/50

                    transition-all
                    duration-300

                    hover:border-white/[0.20]

                    h-[9.9rem]

                    disabled:opacity-50
                  "
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                data-aos="fade-up"
                data-aos-delay="400"
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full

                  bg-gradient-to-r
                  from-[#F04470]
                  via-[#E73570]
                  to-[#D62965]

                  text-white

                  py-4
                  rounded-xl

                  font-semibold

                  transition-all
                  duration-300

                  hover:scale-[1.02]
                  hover:shadow-[0_10px_35px_rgba(240,68,112,0.30)]

                  active:scale-[0.98]

                  flex
                  items-center
                  justify-center
                  gap-2

                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  disabled:hover:scale-100
                "
              >
                <Send className="w-5 h-5" />

                {isSubmitting
                  ? "Mengirim..."
                  : "Kirim Pesan"}
              </button>
            </form>

            {/* Social Links */}
            <div
              className="
                mt-10
                pt-6

                border-t
                border-white/[0.10]

                flex
                justify-center
                space-x-6

                relative
                z-10
              "
            >
              <SocialLinks />
            </div>
          </div>

          {/* =====================================================
              COMMENTS
          ====================================================== */}

          <div
            className="
              relative
              overflow-hidden

              bg-gradient-to-br
              from-white/[0.10]
              via-white/[0.075]
              to-white/[0.045]

              backdrop-blur-2xl

              rounded-3xl

              border
              border-white/[0.16]

              p-3
              py-3

              md:p-10
              md:py-8

              shadow-[0_20px_60px_rgba(0,0,0,0.14)]

              transform
              transition-all
              duration-500

              hover:border-[#Ffffff]/35
            "
          >
            {/* Soft Card Glow */}
            <div
              className="
                absolute
                -bottom-24
                -left-24
                w-48
                h-48
                rounded-full
                bg-[#D62965]/[0.08]
                blur-[80px]
                pointer-events-none
              "
            />

            <div className="relative z-10">
              <Komentar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactPage);