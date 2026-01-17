import * as React from "react";
import Image from "next/image";
import { Heart, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import TikTokEmbed from "./tiktok-embed";

interface TikTokReviewProps {
  username: string;
  caption: string;
  likes: number;
  views: number;
  href?: string;
  videoUrl?: string;
  className?: string;
}

export default function TikTokReview({
  username,
  caption,
  likes,
  views,
  href,
  videoUrl,
  className,
}: TikTokReviewProps) {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const reviewContent = (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center gap-2">
        <Image
          alt="TikTok"
          className="size-5"
          height={20}
          src="/icons/tiktok.png"
          width={20}
        />
        <span className="text-sm font-semibold text-foreground">
          @{username}
        </span>
      </div>
      <p className="text-sm font-medium leading-relaxed text-foreground">
        {caption}
      </p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Heart className="size-4 fill-foreground text-foreground" />
          <span className="text-sm text-muted-foreground">
            {formatNumber(likes)}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Play className="size-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {formatNumber(views)}
          </span>
        </div>
      </div>
    </div>
  );

  const content = (
    <div className="space-y-4">
      {videoUrl && (
        <div className="w-full overflow-hidden rounded-lg">
          <TikTokEmbed videoUrl={videoUrl} />
        </div>
      )}
      {reviewContent}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className="block transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    );
  }

  return content;
}
