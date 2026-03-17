import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ShowMoreButtonProps {
  total: number;
  shown: number;
  onToggle: () => void;
  isExpanded: boolean;
}

export default function ShowMoreButton({
  total,
  shown,
  onToggle,
  isExpanded,
}: ShowMoreButtonProps) {
  const remaining = total - shown;

  if (total <= shown) return null;

  return (
    <div className="text-center mt-8">
      <button
        type="button"
        onClick={onToggle}
        className="pixel-button variant-outline"
        aria-label={isExpanded ? 'Show less' : `Show ${remaining} more`}
      >
        {isExpanded ? (
          <>
            Show Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            See More ({remaining} more) <ChevronDown className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}