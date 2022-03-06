export interface SearchPhotoTypes {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: SearchPhotoTypesLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: SearchPhotoTypesTopicSubmissions;
  user: User;
  tags: Tag[];
}

export interface SearchPhotoTypesLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Tag {
  type: string;
  title: string;
  source: Source;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
}

export interface Ancestry {
  type: Category;
  category: Category;
  subcategory?: Category;
}

export interface Category {
  slug: string;
  pretty_slug: string;
}

export interface CoverPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: SearchPhotoTypesLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: CoverPhotoTopicSubmissions;
  user: User;
}

export interface CoverPhotoTopicSubmissions {
  animals: Animals;
}

export interface Animals {
  status: string;
  approved_on: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  twitter_username: null;
  portfolio_url: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null;
  paypal_email: null;
}

export interface SearchPhotoTypesTopicSubmissions {
  wallpapers: Animals;
  animals: Animals;
}
