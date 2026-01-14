"use client";

import { LogoCarousel } from "@/components/ui/logo-carousel";
import {
  AdobeLogo,
  AppleLogo,
  AWSLogo,
  ClaudeLogo,
  CursorLogo,
  GeminiLogo,
  GitHubLogo,
  GoogleLogo,
  LovableLogo,
  MicrosoftLogo,
  OpenAILogo,
  V0Logo,
  VercelLogo,
} from "@/components/logos";

const logos = [
  { id: 1, name: "Adobe", icon: AdobeLogo },
  { id: 2, name: "Apple", icon: AppleLogo },
  { id: 3, name: "AWS", icon: AWSLogo },
  { id: 4, name: "Claude", icon: ClaudeLogo },
  { id: 5, name: "Cursor", icon: CursorLogo },
  { id: 6, name: "Gemini", icon: GeminiLogo },
  { id: 7, name: "GitHub", icon: GitHubLogo },
  { id: 8, name: "Google", icon: GoogleLogo },
  { id: 9, name: "Lovable", icon: LovableLogo },
  { id: 10, name: "Microsoft", icon: MicrosoftLogo },
  { id: 11, name: "OpenAI", icon: OpenAILogo },
  { id: 12, name: "V0", icon: V0Logo },
  { id: 13, name: "Vercel", icon: VercelLogo },
];

export function LogoCarouselSection() {
  return (
    <section className="max-w-[1320px] mx-auto px-6 mb-12 pt-16 md:pt-24">
      <div className="text-center space-y-4 mb-8">
        <p className="text-xs font-medium tracking-widest text-[#523BE1] uppercase">
          Stop accepting mediocre AI output
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none text-[#2D2D2D]">
          Get the pre-built skills that actually work
        </h2>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-[#B4BBC4]">
        <LogoCarousel logos={logos} columns={5} />
      </div>
    </section>
  );
}

