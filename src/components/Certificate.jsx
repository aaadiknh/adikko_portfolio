import React, { useState } from "react";

import {
  Modal,
  IconButton,
  Box,
  Backdrop,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Certificate = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
      }}
    >

      {/* Thumbnail Container */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "16px",

          background:
            "linear-gradient(145deg, rgba(240,68,112,0.12), rgba(18,8,17,0.95))",

          border: "1px solid rgba(240,68,112,0.12)",

          boxShadow:
            "0 12px 35px rgba(0,0,0,0.35)",

          transition:
            "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

          "&:hover": {
            transform: "translateY(-6px)",

            borderColor:
              "rgba(240,68,112,0.35)",

            boxShadow:
              "0 18px 45px rgba(214,41,101,0.20)",

            "& .overlay": {
              opacity: 1,
            },

            "& .hover-content": {
              transform:
                "translate(-50%, -50%)",

              opacity: 1,
            },

            "& .certificate-image": {
              filter:
                "contrast(1.05) brightness(1) saturate(1.1)",

              transform: "scale(1.04)",
            },
          },
        }}
      >

        {/* Pink Glow */}
        <Box
          sx={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "180px",
            height: "180px",
            borderRadius: "50%",

            background:
              "rgba(240,68,112,0.16)",

            filter: "blur(50px)",

            pointerEvents: "none",

            zIndex: 0,
          }}
        />

        {/* Certificate Image */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,

            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,

              background:
                "linear-gradient(135deg, rgba(240,68,112,0.08), transparent 45%, rgba(214,41,101,0.10))",

              pointerEvents: "none",
            },
          }}
        >
          <img
            className="certificate-image"
            src={ImgSertif}
            alt="Certificate"
            style={{
              width: "100%",
              height: "auto",
              display: "block",

              objectFit: "cover",

              filter:
                "contrast(1.05) brightness(0.92) saturate(1.05)",

              transition:
                "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",

              aspectRatio: "16/11.5",

              cursor: "pointer",
            }}
            onClick={handleOpen}
          />
        </Box>

        {/* Hover Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,

            opacity: 0,

            transition:
              "opacity 0.35s ease",

            cursor: "pointer",

            zIndex: 2,

            background:
              "linear-gradient(135deg, rgba(214,41,101,0.75), rgba(18,8,17,0.72))",

            backdropFilter: "blur(2px)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleOpen}
        >

          {/* Hover Content */}
          <Box
            className="hover-content"
            sx={{
              position: "absolute",

              top: "50%",
              left: "50%",

              transform:
                "translate(-50%, -60%)",

              opacity: 0,

              transition:
                "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",

              textAlign: "center",

              width: "100%",

              color: "white",
            }}
          >

            {/* Icon Circle */}
            <Box
              sx={{
                width: 58,
                height: 58,

                margin: "0 auto 12px",

                borderRadius: "50%",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                background:
                  "rgba(255,255,255,0.12)",

                border:
                  "1px solid rgba(255,255,255,0.25)",

                backdropFilter: "blur(10px)",

                boxShadow:
                  "0 8px 25px rgba(0,0,0,0.25)",
              }}
            >
              <FullscreenIcon
                sx={{
                  fontSize: 30,
                  color: "#fff",
                }}
              />
            </Box>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,

                fontSize: "1rem",

                color: "#fff",

                textShadow:
                  "0 2px 8px rgba(0,0,0,0.35)",
              }}
            >
              View Certificate
            </Typography>

            <Typography
              sx={{
                mt: 0.5,

                fontSize: "0.75rem",

                color:
                  "rgba(255,255,255,0.75)",
              }}
            >
              Click to view full size
            </Typography>

          </Box>
        </Box>

        {/* Bottom Pink Line */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,

            height: "2px",

            background:
              "linear-gradient(90deg, transparent, #F04470, #D62965, transparent)",

            opacity: 0.6,

            zIndex: 3,
          }}
        />

      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        BackdropComponent={Backdrop}

        BackdropProps={{
          timeout: 300,

          sx: {
            backgroundColor:
              "rgba(5, 3, 5, 0.94)",

            backdropFilter:
              "blur(10px)",
          },
        }}

        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          margin: 0,
          padding: 0,

          "& .MuiBackdrop-root": {
            backgroundColor:
              "rgba(5, 3, 5, 0.94)",
          },
        }}
      >

        {/* Modal Content */}
        <Box
          sx={{
            position: "relative",

            width: "auto",

            maxWidth: "92vw",
            maxHeight: "92vh",

            margin: 0,
            padding: 0,

            outline: "none",

            borderRadius: "14px",

            overflow: "hidden",

            border:
              "1px solid rgba(240,68,112,0.25)",

            boxShadow:
              "0 25px 80px rgba(214,41,101,0.20)",

            "&:focus": {
              outline: "none",
            },
          }}
        >

          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",

              right: 14,
              top: 14,

              color: "#fff",

              bgcolor:
                "rgba(18,8,17,0.75)",

              border:
                "1px solid rgba(240,68,112,0.25)",

              backdropFilter: "blur(10px)",

              zIndex: 5,

              padding: 1,

              transition:
                "all 0.25s ease",

              "&:hover": {
                bgcolor:
                  "rgba(240,68,112,0.25)",

                borderColor:
                  "rgba(240,68,112,0.55)",

                transform: "scale(1.08)",
              },
            }}
            size="large"
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </IconButton>

          {/* Modal Image */}
          <img
            src={ImgSertif}
            alt="Certificate Full View"
            style={{
              display: "block",

              maxWidth: "100%",
              maxHeight: "90vh",

              margin: "0 auto",

              objectFit: "contain",

              background: "#0a0709",
            }}
          />

        </Box>
      </Modal>

    </Box>
  );
};

export default Certificate;