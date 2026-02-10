'use client';

import { useState } from 'react';
import { Share2, Facebook, Linkedin, Check } from 'lucide-react';

interface ShareButtonProps {
  url: string;
  title: string;
  description: string;
}

export default function ShareButton({ url, title, description }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (error) {
        // User cancelled or share failed
        console.log('Share cancelled or failed:', error);
      }
    } else {
      setShowDropdown(!showDropdown);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8 border border-gray-200">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="font-poppins font-bold text-lg text-gray-900 mb-1">
            Share This Story
          </h3>
          <p className="text-sm text-gray-600">
            Help spread the word about youth leadership in action
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Native Share Button (for mobile devices) */}
          <button
            onClick={handleNativeShare}
            className="flex items-center gap-2 px-4 py-2 bg-[#09006C] text-white rounded-lg font-medium hover:bg-[#06004a] transition-colors shadow-sm"
          >
            <Share2 size={18} />
            <span>Share</span>
          </button>

          {/* Social Media Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={shareUrls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors shadow-sm"
              aria-label="Share on Facebook"
            >
              <Facebook size={20} />
            </a>

            <a
              href={shareUrls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1A8CD8] transition-colors shadow-sm"
              aria-label="Share on Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href={shareUrls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0A66C2] text-white rounded-lg hover:bg-[#004182] transition-colors shadow-sm"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors shadow-sm"
              aria-label="Copy link"
            >
              {copied ? (
                <Check size={20} className="text-green-600" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {copied && (
        <div className="mt-3 text-center">
          <p className="text-sm text-green-600 font-medium">Link copied to clipboard!</p>
        </div>
      )}
    </div>
  );
}
