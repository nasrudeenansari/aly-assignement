
export interface IPhoto {
    id: String;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    avg_color: string;
    src: IPhotoSrc;
    liked: boolean;
    alt: string;
  }
  export interface IPhotoSrc {
    landscape: string;
    large: string;
    large2x: string;
    medium: string;
    original: string;
    portrait: string;
    small: string;
    tiny: string;
  }
  export interface GalleryProps {
    initialQuery: string;
    totalPages: number;
    response: {
      next_page: string;
      total_results: number;
      page: number;
      per_page: number;
      photos: IPhoto[];
    };
  }
  
export interface IFilters {
    page: number;
    query: string;
  }
  