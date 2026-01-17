"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TikTokEmbedProps {
  videoUrl: string;
  className?: string;
}

export default function TikTokEmbed({
  videoUrl,
  className,
}: TikTokEmbedProps) {
  const [embedHtml, setEmbedHtml] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchEmbed() {
      try {
        const response = await fetch(
          `/api/tiktok-oembed?url=${encodeURIComponent(videoUrl)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch embed");
        }
        const data = await response.json();
        setEmbedHtml(data.html);
      } catch (error) {
        console.error("Error fetching TikTok embed:", error);
      } finally {
        setLoading(false);
      }
    }

    if (videoUrl) {
      fetchEmbed();
    }
  }, [videoUrl]);

  useEffect(() => {
    if (!embedHtml) return;

    // Load TikTok embed script
    const existingScript = document.querySelector(
      'script[src="https://www.tiktok.com/embed.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-trigger embed by removing and re-adding script if needed
      existingScript.remove();
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [embedHtml]);

  if (loading) {
    return (
      <div className={cn("flex items-center justify-center p-8", className)}>
        <p className="text-muted-foreground">Loading TikTok video...</p>
      </div>
    );
  }

  if (!embedHtml) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={cn("tiktok-embed-container", className)}
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
}
