import type { PortableTextBlock } from "@portabletext/types";

export interface Article {
  title: string;
  overview: string;
  slug: { 
    current: string; 
    _type?: "slug";
  };
  date: string;
  description: string;
  photo?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  photo2?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  content: PortableTextBlock[]; // Portable Text
}