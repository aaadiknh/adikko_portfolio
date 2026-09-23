import React, { useState, useEffect, useRef, useCallback, memo } from "react";

import {
  MessageCircle,
  UserCircle2,
  Loader2,
  AlertCircle,
  Send,
  ImagePlus,
  X,
  Pin,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

import { supabase } from "../supabase";

const Comment = memo(
  ({ comment, formatDate, index, isPinned = false }) => (
    <div
      className={`
        px-4 pt-4 pb-2 rounded-xl border
        transition-all duration-300 group
        hover:shadow-lg hover:-translate-y-0.5
        ${
          isPinned
            ? "bg-gradient-to-r from-[#F04470]/10 to-[#D62965]/10 border-[#F04470]/30 hover:bg-gradient-to-r hover:from-[#F04470]/15 hover:to-[#D62965]/15"
            : "bg-white/[0.04] border-white/10 hover:bg-white/[0.07] hover:border-[#F04470]/20"
        }
      `}
    >
      {isPinned && (
        <div className="flex items-center gap-2 mb-3 text-[#F58AA7]">
          <Pin className="w-4 h-4" />
          <span className="text-xs font-medium uppercase tracking-wide">
            Pinned Comment
          </span>
        </div>
      )}

      <div className="flex items-start gap-3">
        {comment.profile_image ? (
          <img
            src={comment.profile_image}
            alt={`${comment.user_name}'s profile`}
            className={`
              w-10 h-10 rounded-full object-cover border-2 flex-shrink-0
              ${
                isPinned
                  ? "border-[#F04470]/60"
                  : "border-[#F04470]/30"
              }
            `}
            loading="lazy"
          />
        ) : (
          <div
            className={`
              p-2 rounded-full text-[#F58AA7]
              group-hover:bg-[#F04470]/30 transition-colors
              ${
                isPinned
                  ? "bg-[#F04470]/30"
                  : "bg-[#F04470]/15"
              }
            `}
          >
            <UserCircle2 className="w-5 h-5" />
          </div>
        )}

        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-2">
              <h4
                className={`
                  font-medium truncate
                  ${isPinned ? "text-[#F5B4C5]" : "text-white"}
                `}
              >
                {comment.user_name}
              </h4>

              {isPinned && (
                <span className="px-2 py-0.5 text-xs bg-[#F04470]/15 text-[#F58AA7] rounded-full border border-[#F04470]/20">
                  Admin
                </span>
              )}
            </div>

            <span className="text-xs text-[#88737d] whitespace-nowrap">
              {formatDate(comment.created_at)}
            </span>
          </div>

          <p className="text-[#c1b1b8] text-sm break-words leading-relaxed relative bottom-2">
            {comment.content}
          </p>
        </div>
      </div>
    </div>
  )
);

const CommentForm = memo(({ onSubmit, isSubmitting, error }) => {
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];

    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert(
          "File size must be less than 5MB. Please choose a smaller image."
        );

        if (e.target) e.target.value = "";
        return;
      }

      // Check file type
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");

        if (e.target) e.target.value = "";
        return;
      }

      setImageFile(file);

      const reader = new FileReader();

      reader.onloadend = () => setImagePreview(reader.result);

      reader.readAsDataURL(file);
    }
  }, []);

  const handleTextareaChange = useCallback((e) => {
    setNewComment(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!newComment.trim() || !userName.trim()) return;

      const success = await onSubmit({
        newComment: newComment.trim(),
        userName: userName.trim(),
        imageFile,
      });

      if (success) {
        setNewComment("");
        setUserName("");
        setImagePreview(null);
        setImageFile(null);

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
        }
      }
    },
    [newComment, userName, imageFile, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div
        className="space-y-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <label className="block text-sm font-medium text-white">
          Name <span className="text-[#F04470]">*</span>
        </label>

        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          maxLength={15}
          placeholder="Enter your name"
          className="
            w-full p-3 rounded-xl
            bg-white/[0.04]
            border border-white/10
            text-white
            placeholder-[#806c75]
            focus:outline-none
            focus:border-[#F04470]/60
            focus:ring-2
            focus:ring-[#F04470]/20
            focus:bg-[#F04470]/[0.03]
            transition-all duration-300
          "
          required
        />
      </div>

      {/* Message */}
      <div
        className="space-y-2"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <label className="block text-sm font-medium text-white">
          Message <span className="text-[#F04470]">*</span>
        </label>

        <textarea
          ref={textareaRef}
          value={newComment}
          maxLength={200}
          onChange={handleTextareaChange}
          placeholder="Write your message here..."
          className="
            w-full p-4 rounded-xl
            bg-white/[0.04]
            border border-white/10
            text-white
            placeholder-[#806c75]
            focus:outline-none
            focus:border-[#F04470]/60
            focus:ring-2
            focus:ring-[#F04470]/20
            focus:bg-[#F04470]/[0.03]
            transition-all duration-300
            resize-none
            min-h-[120px]
          "
          required
        />
      </div>

      {/* Profile Photo */}
      <div
        className="space-y-2"
        data-aos="fade-up"
        data-aos-duration="1400"
      >
        <label className="block text-sm font-medium text-white">
          Profile Photo{" "}
          <span className="text-[#88737d]">(optional)</span>
        </label>

        <div className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl">
          {imagePreview ? (
            <div className="flex items-center gap-4">
              <img
                src={imagePreview}
                alt="Profile preview"
                className="
                  w-16 h-16 rounded-full object-cover
                  border-2 border-[#F04470]/60
                  shadow-[0_0_20px_rgba(240,68,112,0.2)]
                "
              />

              <button
                type="button"
                onClick={() => {
                  setImagePreview(null);
                  setImageFile(null);

                  if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                  }
                }}
                className="
                  flex items-center gap-2
                  px-4 py-2 rounded-full
                  bg-[#F04470]/10
                  text-[#F58AA7]
                  border border-[#F04470]/20
                  hover:bg-[#F04470]/20
                  hover:border-[#F04470]/40
                  transition-all duration-300
                  group
                "
              >
                <X className="w-4 h-4" />
                <span>Remove Photo</span>
              </button>
            </div>
          ) : (
            <div className="w-full">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="
                  w-full flex items-center justify-center gap-2
                  px-4 py-3 rounded-xl
                  bg-[#F04470]/10
                  text-[#F58AA7]
                  hover:bg-[#F04470]/15
                  transition-all duration-300
                  border border-dashed
                  border-[#F04470]/40
                  hover:border-[#F04470]/70
                  group
                "
              >
                <ImagePlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Choose Profile Photo</span>
              </button>

              <p className="text-center text-[#88737d] text-sm mt-2">
                Max file size: 5MB
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        data-aos="fade-up"
        data-aos-duration="1000"
        className="
          relative w-full h-12
          bg-gradient-to-r
          from-[#F04470]
          to-[#D62965]
          rounded-xl
          font-medium text-white
          overflow-hidden group
          transition-all duration-300
          hover:scale-[1.02]
          hover:shadow-[0_10px_30px_rgba(240,68,112,0.3)]
          active:scale-[0.98]
          disabled:opacity-50
          disabled:hover:scale-100
          disabled:cursor-not-allowed
        "
      >
        <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />

        <div className="relative flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Posting...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Post Comment</span>
            </>
          )}
        </div>
      </button>
    </form>
  );
});

const Komentar = () => {
  const [comments, setComments] = useState([]);
  const [pinnedComment, setPinnedComment] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      once: false,
      duration: 1000,
    });
  }, []);

  // Fetch pinned comment
  useEffect(() => {
    const fetchPinnedComment = async () => {
      try {
        const { data, error } = await supabase
          .from("portfolio_comments")
          .select("*")
          .eq("is_pinned", true)
          .single();

        if (error && error.code !== "PGRST116") {
          console.error("Error fetching pinned comment:", error);
          return;
        }

        if (data) {
          setPinnedComment(data);
        }
      } catch (error) {
        console.error("Error fetching pinned comment:", error);
      }
    };

    fetchPinnedComment();
  }, []);

  // Fetch regular comments and set up real-time subscription
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("portfolio_comments")
        .select("*")
        .eq("is_pinned", false)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching comments:", error);
        return;
      }

      setComments(data || []);
    };

    fetchComments();

    // Set up real-time subscription
    const subscription = supabase
      .channel("portfolio_comments")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "portfolio_comments",
          filter: "is_pinned=eq.false",
        },
        () => {
          fetchComments();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const uploadImage = useCallback(async (imageFile) => {
    if (!imageFile) return null;

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/jpg",
      "image/webp",
    ];

    if (!allowedTypes.includes(imageFile.type)) {
      throw new Error(
        "Format gambar harus PNG, JPG, JPEG, atau WEBP."
      );
    }

    if (imageFile.size > 5 * 1024 * 1024) {
      throw new Error("Ukuran gambar maksimal 5 MB.");
    }

    const extension = imageFile.name
      .split(".")
      .pop()
      .toLowerCase();

    const fileName = `profile-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 8)}.${extension}`;

    const { data: uploadData, error: uploadError } =
      await supabase.storage
        .from("profile-images")
        .upload(fileName, imageFile, {
          cacheControl: "3600",
          upsert: false,
          contentType: imageFile.type,
        });

    if (uploadError) {
      console.error(
        "PROFILE IMAGE UPLOAD ERROR:",
        uploadError
      );

      throw uploadError;
    }

    console.log(
      "PROFILE IMAGE UPLOAD SUCCESS:",
      uploadData
    );

    const { data: publicUrlData } = supabase.storage
      .from("profile-images")
      .getPublicUrl(fileName);

    const publicUrl = publicUrlData?.publicUrl;

    if (!publicUrl) {
      throw new Error("URL profile image gagal dibuat.");
    }

    console.log("PROFILE IMAGE URL:", publicUrl);

    return publicUrl;
  }, []);

  const handleCommentSubmit = useCallback(
    async ({ newComment, userName, imageFile }) => {
      setError("");
      setIsSubmitting(true);

      try {
        let profileImageUrl = null;

        if (imageFile) {
          profileImageUrl = await uploadImage(imageFile);
        }

        const { data, error } = await supabase
          .from("portfolio_comments")
          .insert([
            {
              content: newComment,
              user_name: userName,
              profile_image: profileImageUrl,
              is_pinned: false,
            },
          ])
          .select()
          .single();

        if (error) {
          console.error("COMMENT INSERT ERROR:", error);
          throw error;
        }

        console.log("COMMENT SUCCESS:", data);

        if (data) {
          setComments((prev) => [data, ...prev]);
        }

        return true;
      } catch (error) {
        console.error("Error adding comment:", error);

        setError(
          error?.message ||
            "Failed to post comment. Please try again."
        );

        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [uploadImage]
  );

  const formatDate = useCallback((timestamp) => {
    if (!timestamp) return "";

    const date = new Date(timestamp);
    const now = new Date();

    const diffMinutes = Math.floor(
      (now - date) / (1000 * 60)
    );

    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMinutes < 1) return "Just now";
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  }, []);

  // Calculate total comments
  const totalComments =
    comments.length + (pinnedComment ? 1 : 0);

  return (
    <div
      className="
        w-full
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#000000]/10
        via-[#000000]/10
        to-[#090609]/98
        rounded-2xl
        border border-[#F04470]/15
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.35)]
      "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#F04470]/[0.07] rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#D62965]/[0.06] rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <div
        className="
          relative z-10
          p-6
          border-b border-white/[0.08]
          bg-white/[0.015]
        "
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <div className="flex items-center gap-3">
          <div
            className="
              p-2 rounded-xl
              bg-[#FF4D8D]/90
              border border-[#FF4D8D]/80
              shadow-[0_0_20px_rgba(240,68,112,0.12)]
            "
          >
            <MessageCircle className="w-6 h-6 text-[#Ffffff]" />
          </div>

          <h3 className="text-xl font-semibold text-white">
            Comments{" "}
            <span className="text-[#FF4D8D]">
              ({totalComments})
            </span>
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 space-y-6">
        {/* Error */}
        {error && (
          <div
            className="
              flex items-center gap-2
              p-4
              text-[#F58AA7]
              bg-[#F04470]/10
              border border-[#F04470]/20
              rounded-xl
            "
            data-aos="fade-in"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />

            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Comment Form */}
        <div>
          <CommentForm
            onSubmit={handleCommentSubmit}
            isSubmitting={isSubmitting}
            error={error}
          />
        </div>

        {/* Comments List */}
        <div
          className="
            space-y-4
            h-[328px]
            overflow-y-auto
            overflow-x-hidden
            custom-scrollbar
            pt-1
            pr-1
          "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Pinned Comment */}
          {pinnedComment && (
            <div
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <Comment
                comment={pinnedComment}
                formatDate={formatDate}
                index={0}
                isPinned={true}
              />
            </div>
          )}

          {/* Regular Comments */}
          {comments.length === 0 && !pinnedComment ? (
            <div
              className="text-center py-8"
              data-aos="fade-in"
            >
              <UserCircle2 className="w-12 h-12 text-[#F04470] mx-auto mb-3 opacity-50" />

              <p className="text-[#88737d]">
                No comments yet. Start the conversation!
              </p>
            </div>
          ) : (
            comments.map((comment, index) => (
              <Comment
                key={comment.id}
                comment={comment}
                formatDate={formatDate}
                index={
                  index + (pinnedComment ? 1 : 0)
                }
                isPinned={false}
              />
            ))
          )}
        </div>
      </div>

      {/* Custom Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.04);
          border-radius: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(240, 68, 112, 0.45);
          border-radius: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(214, 41, 101, 0.75);
        }
      `}</style>
    </div>
  );
};

export default Komentar;