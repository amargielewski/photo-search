export type PhotoModalTypes = {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: string;
  urls: Urls;
  links: PhotoModalTypesLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: PhotoModalTypesTopicSubmissions;
  user: User;
  exif: Exif;
  location: Location;
  meta: Meta;
  public_domain: boolean;
  tags: PhotoModalTypesTag[];
  tags_preview: TagsPreview[];
  related_collections: RelatedCollections;
  views: number;
  downloads: number;
  topics: any[];
};

export type Exif = {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
};

export type PhotoModalTypesLinks = {
  self: string;
  html: string;
  download: string;
  download_location: string;
};

export type Location = {
  title: null;
  name: null;
  city: null;
  country: null;
  position: Position;
};

export type Position = {
  latitude: null;
  longitude: null;
};

export type Meta = {
  index: boolean;
};

export type RelatedCollections = {
  total: number;
  type: string;
  results: Result[];
};

export type Result = {
  id: string;
  title: string;
  description: null;
  published_at: Date;
  last_collected_at: Date;
  updated_at: Date;
  curated: boolean;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: ResultTag[];
  links: ResultLinks;
  user: User;
  cover_photo: ResultCoverPhoto;
  preview_photos: PreviewPhoto[];
};

export type ResultCoverPhoto = {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null;
  alt_description: null | string;
  urls: Urls;
  links: PhotoModalTypesLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: PurpleTopicSubmissions;
  user: User;
};

export type PurpleTopicSubmissions = {};

export type Urls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

export type User = {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: null | string;
  twitter_username: null | string;
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
};

export type UserLinks = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
};

export type ProfileImage = {
  small: string;
  medium: string;
  large: string;
};

export type Social = {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null | string;
  paypal_email: null;
};

export type ResultLinks = {
  self: string;
  html: string;
  photos: string;
  related: string;
};

export type PreviewPhoto = {
  id: string;
  created_at: Date;
  updated_at: Date;
  blur_hash: string;
  urls: Urls;
};

export type ResultTag = {
  type: Type;
  title: string;
  source?: PurpleSource;
};

export type PurpleSource = {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: PurpleCoverPhoto;
};

export type Ancestry = {
  type: Category;
  category?: Category;
  subcategory?: Category;
};

export type Category = {
  slug: string;
  pretty_slug: string;
};

export type PurpleCoverPhoto = {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: null | string;
  urls: Urls;
  links: PhotoModalTypesLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: FluffyTopicSubmissions;
  user: User;
};

export type FluffyTopicSubmissions = {
  "current-events"?: Health;
  "textures-patterns"?: Health;
  wallpapers?: Health;
  nature?: Health;
};

export type Health = {
  status: string;
  approved_on: Date;
};

export enum Type {
  LandingPage = "landing_page",
  Search = "search",
}

export type PhotoModalTypesTag = {
  type: Type;
  title: string;
  source?: FluffySource;
};

export type FluffySource = {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: FluffyCoverPhoto;
};

export type FluffyCoverPhoto = {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: null | string;
  urls: Urls;
  links: PhotoModalTypesLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: TentacledTopicSubmissions;
  user: User;
};

export type TentacledTopicSubmissions = {
  "textures-patterns"?: Health;
  health?: Health;
};

export type TagsPreview = {
  type: Type;
  title: string;
};

export type PhotoModalTypesTopicSubmissions = {
  "food-drink": FoodDrink;
};

export type FoodDrink = {
  status: string;
};
