/* eslint-disable @typescript-eslint/naming-convention */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  graphqlTypegen?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat = 'NO_CHANGE' | 'AUTO' | 'JPG' | 'PNG' | 'WEBP' | 'AVIF';

export type GatsbyImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED';

export type GatsbyImagePlaceholder = 'DOMINANT_COLOR' | 'TRACED_SVG' | 'BLURRED' | 'NONE';

export type ImageFormat = 'NO_CHANGE' | 'AUTO' | 'JPG' | 'PNG' | 'WEBP' | 'AVIF';

export type ImageFit = 'COVER' | 'CONTAIN' | 'FILL' | 'INSIDE' | 'OUTSIDE';

export type ImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};

export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder = 'DOMINANT_COLOR' | 'TRACED_SVG' | 'BLURRED' | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type GraphCms_Asset = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  locale: GraphCms_Locale;
  stage: GraphCms_Stage;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  publishedBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  createdBy?: Maybe<GraphCms_User>;
  carouselImagesPortfolioItem: Array<GraphCms_PortfolioItem>;
  iconSpeciality: Array<GraphCms_Speciality>;
  iconTechnology: Array<GraphCms_Technology>;
  headerImageBlog: Array<GraphCms_Blog>;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  url: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
};

export type GraphCms_AssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  placeholder?: InputMaybe<GraphCmsImagePlaceholder>;
};

export type GraphCmsImagePlaceholder = 'NONE' | 'BLURRED' | 'DOMINANT_COLOR' | 'TRACED_SVG';

export type GraphCms_Locale = 'en';

export type GraphCms_Stage = 'DRAFT' | 'PUBLISHED';

export type GraphCms_User = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  isActive: Scalars['Boolean'];
  picture?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  kind: GraphCms_UserKind;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_PortfolioItem = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  title: Scalars['String'];
  description: Scalars['String'];
  about: GraphCms_RichText;
  techSheet: Array<Scalars['String']>;
  publishedBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  createdBy?: Maybe<GraphCms_User>;
  carouselImages: Array<GraphCms_Asset>;
  links: Array<GraphCms_Link>;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_PortfolioItemGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type GraphCms_Speciality = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  title: Scalars['String'];
  description: GraphCms_RichText;
  publishedBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  createdBy?: Maybe<GraphCms_User>;
  icon: GraphCms_Asset;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_Technology = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  title: Scalars['String'];
  description: GraphCms_RichText;
  backgroundColor: GraphCms_Color;
  publishedBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  createdBy?: Maybe<GraphCms_User>;
  icon: GraphCms_Asset;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_Blog = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  title: Scalars['String'];
  description: Scalars['String'];
  content: GraphCms_RichText;
  publishedBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  createdBy?: Maybe<GraphCms_User>;
  headerImage: GraphCms_Asset;
  type: GraphCms_BlogType;
  categories: Array<GraphCms_BlogCategories>;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_BlogGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type GraphCms_ScheduledOperation = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  rawPayload: Scalars['JSON'];
  errorMessage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  release?: Maybe<GraphCms_ScheduledRelease>;
  publishedBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  createdBy?: Maybe<GraphCms_User>;
  status: GraphCms_ScheduledOperationStatus;
  affectedDocuments: Array<GraphCms_ScheduledOperationAffectedDocument>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_RichText = {
  remoteTypeName: Scalars['String'];
  raw: Scalars['JSON'];
  html: Scalars['String'];
  markdown: Scalars['String'];
  text: Scalars['String'];
};

export type GraphCms_BlogType = 'Blog' | 'Tutorial' | 'Lab';

export type GraphCms_BlogCategories = 'Javascript' | 'Vue' | 'React';

export type GraphCms_Link = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  title: Scalars['String'];
  url: Scalars['String'];
  publishedBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  createdBy?: Maybe<GraphCms_User>;
  type?: Maybe<GraphCms_LinkType>;
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_LinkType = 'GITHUB' | 'NPM' | 'GOOGLE_PLAY' | 'APP_STORE_IOS';

export type GraphCms_ScheduledRelease = Node & {
  remoteTypeName: Scalars['String'];
  remoteId: Scalars['ID'];
  stage: GraphCms_Stage;
  releaseAt?: Maybe<Scalars['JSON']>;
  isImplicit: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  errorMessage?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['JSON']>;
  updatedAt: Scalars['JSON'];
  createdAt: Scalars['JSON'];
  operations: Array<GraphCms_ScheduledOperation>;
  publishedBy?: Maybe<GraphCms_User>;
  updatedBy?: Maybe<GraphCms_User>;
  createdBy?: Maybe<GraphCms_User>;
  status: GraphCms_ScheduledReleaseStatus;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GraphCms_ScheduledOperationStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'CANCELED';

export type GraphCms_ScheduledOperationAffectedDocument =
  | GraphCms_Asset
  | GraphCms_Blog
  | GraphCms_Link
  | GraphCms_PortfolioItem
  | GraphCms_Speciality
  | GraphCms_Technology;

export type GraphCms_ScheduledReleaseStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';

export type GraphCms_Color = {
  remoteTypeName: Scalars['String'];
  hex: Scalars['JSON'];
  rgba: GraphCms_Rgba;
  css: Scalars['String'];
};

export type GraphCms_Rgba = {
  remoteTypeName: Scalars['String'];
  r: Scalars['JSON'];
  g: Scalars['JSON'];
  b: Scalars['JSON'];
  a: Scalars['JSON'];
};

export type GraphCms_UserKind = 'MEMBER' | 'PAT' | 'PUBLIC' | 'WEBHOOK' | 'APP_TOKEN';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  graphCmsAsset?: Maybe<GraphCms_Asset>;
  allGraphCmsAsset: GraphCms_AssetConnection;
  graphCmsUser?: Maybe<GraphCms_User>;
  allGraphCmsUser: GraphCms_UserConnection;
  graphCmsPortfolioItem?: Maybe<GraphCms_PortfolioItem>;
  allGraphCmsPortfolioItem: GraphCms_PortfolioItemConnection;
  graphCmsSpeciality?: Maybe<GraphCms_Speciality>;
  allGraphCmsSpeciality: GraphCms_SpecialityConnection;
  graphCmsTechnology?: Maybe<GraphCms_Technology>;
  allGraphCmsTechnology: GraphCms_TechnologyConnection;
  graphCmsBlog?: Maybe<GraphCms_Blog>;
  allGraphCmsBlog: GraphCms_BlogConnection;
  graphCmsScheduledOperation?: Maybe<GraphCms_ScheduledOperation>;
  allGraphCmsScheduledOperation: GraphCms_ScheduledOperationConnection;
  graphCmsLink?: Maybe<GraphCms_Link>;
  allGraphCmsLink: GraphCms_LinkConnection;
  graphCmsScheduledRelease?: Maybe<GraphCms_ScheduledRelease>;
  allGraphCmsScheduledRelease: GraphCms_ScheduledReleaseConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryGraphCmsAssetArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  locale?: InputMaybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  carouselImagesPortfolioItem?: InputMaybe<GraphCms_PortfolioItemFilterListInput>;
  iconSpeciality?: InputMaybe<GraphCms_SpecialityFilterListInput>;
  iconTechnology?: InputMaybe<GraphCms_TechnologyFilterListInput>;
  headerImageBlog?: InputMaybe<GraphCms_BlogFilterListInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllGraphCmsAssetArgs = {
  filter?: InputMaybe<GraphCms_AssetFilterInput>;
  sort?: InputMaybe<GraphCms_AssetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryGraphCmsUserArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  picture?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  kind?: InputMaybe<GraphCms_UserKindQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllGraphCmsUserArgs = {
  filter?: InputMaybe<GraphCms_UserFilterInput>;
  sort?: InputMaybe<GraphCms_UserSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryGraphCmsPortfolioItemArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  about?: InputMaybe<GraphCms_RichTextFilterInput>;
  techSheet?: InputMaybe<StringQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  carouselImages?: InputMaybe<GraphCms_AssetFilterListInput>;
  links?: InputMaybe<GraphCms_LinkFilterListInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllGraphCmsPortfolioItemArgs = {
  filter?: InputMaybe<GraphCms_PortfolioItemFilterInput>;
  sort?: InputMaybe<GraphCms_PortfolioItemSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryGraphCmsSpecialityArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<GraphCms_RichTextFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  icon?: InputMaybe<GraphCms_AssetFilterInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllGraphCmsSpecialityArgs = {
  filter?: InputMaybe<GraphCms_SpecialityFilterInput>;
  sort?: InputMaybe<GraphCms_SpecialitySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryGraphCmsTechnologyArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<GraphCms_RichTextFilterInput>;
  backgroundColor?: InputMaybe<GraphCms_ColorFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  icon?: InputMaybe<GraphCms_AssetFilterInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllGraphCmsTechnologyArgs = {
  filter?: InputMaybe<GraphCms_TechnologyFilterInput>;
  sort?: InputMaybe<GraphCms_TechnologySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryGraphCmsBlogArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  content?: InputMaybe<GraphCms_RichTextFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  headerImage?: InputMaybe<GraphCms_AssetFilterInput>;
  type?: InputMaybe<GraphCms_BlogTypeQueryOperatorInput>;
  categories?: InputMaybe<GraphCms_BlogCategoriesQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllGraphCmsBlogArgs = {
  filter?: InputMaybe<GraphCms_BlogFilterInput>;
  sort?: InputMaybe<GraphCms_BlogSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryGraphCmsScheduledOperationArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  rawPayload?: InputMaybe<JsonQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  release?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  status?: InputMaybe<GraphCms_ScheduledOperationStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllGraphCmsScheduledOperationArgs = {
  filter?: InputMaybe<GraphCms_ScheduledOperationFilterInput>;
  sort?: InputMaybe<GraphCms_ScheduledOperationSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryGraphCmsLinkArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  type?: InputMaybe<GraphCms_LinkTypeQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllGraphCmsLinkArgs = {
  filter?: InputMaybe<GraphCms_LinkFilterInput>;
  sort?: InputMaybe<GraphCms_LinkSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryGraphCmsScheduledReleaseArgs = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  releaseAt?: InputMaybe<JsonQueryOperatorInput>;
  isImplicit?: InputMaybe<BooleanQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  operations?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  status?: InputMaybe<GraphCms_ScheduledReleaseStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllGraphCmsScheduledReleaseArgs = {
  filter?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  sort?: InputMaybe<GraphCms_ScheduledReleaseSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___parent___internal___contentFilePath'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___children___internal___contentFilePath'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childrenImageSharp___internal___contentFilePath'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___parent___internal___contentFilePath'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___children___internal___contentFilePath'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childImageSharp___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 'ASC' | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  image?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___image'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'graphqlTypegen'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___parent___internal___contentFilePath'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___children___internal___contentFilePath'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IdQueryOperatorInput = {
  eq?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type GraphCms_LocaleQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Locale>;
  ne?: InputMaybe<GraphCms_Locale>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Locale>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Locale>>>;
};

export type GraphCms_StageQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Stage>;
  ne?: InputMaybe<GraphCms_Stage>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Stage>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Stage>>>;
};

export type GraphCms_UserFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  picture?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  kind?: InputMaybe<GraphCms_UserKindQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_UserKindQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_UserKind>;
  ne?: InputMaybe<GraphCms_UserKind>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_UserKind>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_UserKind>>>;
};

export type GraphCms_PortfolioItemFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_PortfolioItemFilterInput>;
};

export type GraphCms_PortfolioItemFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  about?: InputMaybe<GraphCms_RichTextFilterInput>;
  techSheet?: InputMaybe<StringQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  carouselImages?: InputMaybe<GraphCms_AssetFilterListInput>;
  links?: InputMaybe<GraphCms_LinkFilterListInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_RichTextFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  raw?: InputMaybe<JsonQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  markdown?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type GraphCms_AssetFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_AssetFilterInput>;
};

export type GraphCms_AssetFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  locale?: InputMaybe<GraphCms_LocaleQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  carouselImagesPortfolioItem?: InputMaybe<GraphCms_PortfolioItemFilterListInput>;
  iconSpeciality?: InputMaybe<GraphCms_SpecialityFilterListInput>;
  iconTechnology?: InputMaybe<GraphCms_TechnologyFilterListInput>;
  headerImageBlog?: InputMaybe<GraphCms_BlogFilterListInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_SpecialityFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_SpecialityFilterInput>;
};

export type GraphCms_SpecialityFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<GraphCms_RichTextFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  icon?: InputMaybe<GraphCms_AssetFilterInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_ScheduledOperationFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_ScheduledOperationFilterInput>;
};

export type GraphCms_ScheduledOperationFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  rawPayload?: InputMaybe<JsonQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  release?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  status?: InputMaybe<GraphCms_ScheduledOperationStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_ScheduledReleaseFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  releaseAt?: InputMaybe<JsonQueryOperatorInput>;
  isImplicit?: InputMaybe<BooleanQueryOperatorInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  operations?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  status?: InputMaybe<GraphCms_ScheduledReleaseStatusQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_ScheduledReleaseStatusQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_ScheduledReleaseStatus>;
  ne?: InputMaybe<GraphCms_ScheduledReleaseStatus>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseStatus>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseStatus>>>;
};

export type GraphCms_ScheduledOperationStatusQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_ScheduledOperationStatus>;
  ne?: InputMaybe<GraphCms_ScheduledOperationStatus>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationStatus>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationStatus>>>;
};

export type GraphCms_TechnologyFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_TechnologyFilterInput>;
};

export type GraphCms_TechnologyFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<GraphCms_RichTextFilterInput>;
  backgroundColor?: InputMaybe<GraphCms_ColorFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  icon?: InputMaybe<GraphCms_AssetFilterInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_ColorFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  hex?: InputMaybe<JsonQueryOperatorInput>;
  rgba?: InputMaybe<GraphCms_RgbaFilterInput>;
  css?: InputMaybe<StringQueryOperatorInput>;
};

export type GraphCms_RgbaFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  r?: InputMaybe<JsonQueryOperatorInput>;
  g?: InputMaybe<JsonQueryOperatorInput>;
  b?: InputMaybe<JsonQueryOperatorInput>;
  a?: InputMaybe<JsonQueryOperatorInput>;
};

export type GraphCms_BlogFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_BlogFilterInput>;
};

export type GraphCms_BlogFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  content?: InputMaybe<GraphCms_RichTextFilterInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  headerImage?: InputMaybe<GraphCms_AssetFilterInput>;
  type?: InputMaybe<GraphCms_BlogTypeQueryOperatorInput>;
  categories?: InputMaybe<GraphCms_BlogCategoriesQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_BlogTypeQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_BlogType>;
  ne?: InputMaybe<GraphCms_BlogType>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_BlogType>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_BlogType>>>;
};

export type GraphCms_BlogCategoriesQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_BlogCategories>;
  ne?: InputMaybe<GraphCms_BlogCategories>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_BlogCategories>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_BlogCategories>>>;
};

export type GraphCms_LinkFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_LinkFilterInput>;
};

export type GraphCms_LinkFilterInput = {
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  type?: InputMaybe<GraphCms_LinkTypeQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type GraphCms_LinkTypeQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_LinkType>;
  ne?: InputMaybe<GraphCms_LinkType>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_LinkType>>>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_LinkType>>>;
};

export type GraphCms_AssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_AssetEdge>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_AssetGroupConnection>;
};

export type GraphCms_AssetConnectionDistinctArgs = {
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetConnectionMaxArgs = {
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetConnectionMinArgs = {
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetConnectionSumArgs = {
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetEdge = {
  next?: Maybe<GraphCms_Asset>;
  node: GraphCms_Asset;
  previous?: Maybe<GraphCms_Asset>;
};

export type GraphCms_AssetFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'locale'
  | 'stage'
  | 'mimeType'
  | 'size'
  | 'width'
  | 'height'
  | 'fileName'
  | 'handle'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___isActive'
  | 'publishedBy___picture'
  | 'publishedBy___name'
  | 'publishedBy___publishedAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___createdAt'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___parent___internal___contentFilePath'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___children___internal___contentFilePath'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'publishedBy___internal___contentFilePath'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___isActive'
  | 'updatedBy___picture'
  | 'updatedBy___name'
  | 'updatedBy___publishedAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___createdAt'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___parent___internal___contentFilePath'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___children___internal___contentFilePath'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'updatedBy___internal___contentFilePath'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___isActive'
  | 'createdBy___picture'
  | 'createdBy___name'
  | 'createdBy___publishedAt'
  | 'createdBy___updatedAt'
  | 'createdBy___createdAt'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___parent___internal___contentFilePath'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___children___internal___contentFilePath'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'createdBy___internal___contentFilePath'
  | 'carouselImagesPortfolioItem'
  | 'carouselImagesPortfolioItem___remoteTypeName'
  | 'carouselImagesPortfolioItem___remoteId'
  | 'carouselImagesPortfolioItem___stage'
  | 'carouselImagesPortfolioItem___publishedAt'
  | 'carouselImagesPortfolioItem___updatedAt'
  | 'carouselImagesPortfolioItem___createdAt'
  | 'carouselImagesPortfolioItem___title'
  | 'carouselImagesPortfolioItem___description'
  | 'carouselImagesPortfolioItem___about___remoteTypeName'
  | 'carouselImagesPortfolioItem___about___raw'
  | 'carouselImagesPortfolioItem___about___html'
  | 'carouselImagesPortfolioItem___about___markdown'
  | 'carouselImagesPortfolioItem___about___text'
  | 'carouselImagesPortfolioItem___techSheet'
  | 'carouselImagesPortfolioItem___publishedBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___publishedBy___remoteId'
  | 'carouselImagesPortfolioItem___publishedBy___stage'
  | 'carouselImagesPortfolioItem___publishedBy___isActive'
  | 'carouselImagesPortfolioItem___publishedBy___picture'
  | 'carouselImagesPortfolioItem___publishedBy___name'
  | 'carouselImagesPortfolioItem___publishedBy___publishedAt'
  | 'carouselImagesPortfolioItem___publishedBy___updatedAt'
  | 'carouselImagesPortfolioItem___publishedBy___createdAt'
  | 'carouselImagesPortfolioItem___publishedBy___kind'
  | 'carouselImagesPortfolioItem___publishedBy___id'
  | 'carouselImagesPortfolioItem___publishedBy___parent___id'
  | 'carouselImagesPortfolioItem___publishedBy___parent___children'
  | 'carouselImagesPortfolioItem___publishedBy___children'
  | 'carouselImagesPortfolioItem___publishedBy___children___id'
  | 'carouselImagesPortfolioItem___publishedBy___children___children'
  | 'carouselImagesPortfolioItem___publishedBy___internal___content'
  | 'carouselImagesPortfolioItem___publishedBy___internal___contentDigest'
  | 'carouselImagesPortfolioItem___publishedBy___internal___description'
  | 'carouselImagesPortfolioItem___publishedBy___internal___fieldOwners'
  | 'carouselImagesPortfolioItem___publishedBy___internal___ignoreType'
  | 'carouselImagesPortfolioItem___publishedBy___internal___mediaType'
  | 'carouselImagesPortfolioItem___publishedBy___internal___owner'
  | 'carouselImagesPortfolioItem___publishedBy___internal___type'
  | 'carouselImagesPortfolioItem___publishedBy___internal___contentFilePath'
  | 'carouselImagesPortfolioItem___updatedBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___updatedBy___remoteId'
  | 'carouselImagesPortfolioItem___updatedBy___stage'
  | 'carouselImagesPortfolioItem___updatedBy___isActive'
  | 'carouselImagesPortfolioItem___updatedBy___picture'
  | 'carouselImagesPortfolioItem___updatedBy___name'
  | 'carouselImagesPortfolioItem___updatedBy___publishedAt'
  | 'carouselImagesPortfolioItem___updatedBy___updatedAt'
  | 'carouselImagesPortfolioItem___updatedBy___createdAt'
  | 'carouselImagesPortfolioItem___updatedBy___kind'
  | 'carouselImagesPortfolioItem___updatedBy___id'
  | 'carouselImagesPortfolioItem___updatedBy___parent___id'
  | 'carouselImagesPortfolioItem___updatedBy___parent___children'
  | 'carouselImagesPortfolioItem___updatedBy___children'
  | 'carouselImagesPortfolioItem___updatedBy___children___id'
  | 'carouselImagesPortfolioItem___updatedBy___children___children'
  | 'carouselImagesPortfolioItem___updatedBy___internal___content'
  | 'carouselImagesPortfolioItem___updatedBy___internal___contentDigest'
  | 'carouselImagesPortfolioItem___updatedBy___internal___description'
  | 'carouselImagesPortfolioItem___updatedBy___internal___fieldOwners'
  | 'carouselImagesPortfolioItem___updatedBy___internal___ignoreType'
  | 'carouselImagesPortfolioItem___updatedBy___internal___mediaType'
  | 'carouselImagesPortfolioItem___updatedBy___internal___owner'
  | 'carouselImagesPortfolioItem___updatedBy___internal___type'
  | 'carouselImagesPortfolioItem___updatedBy___internal___contentFilePath'
  | 'carouselImagesPortfolioItem___createdBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___createdBy___remoteId'
  | 'carouselImagesPortfolioItem___createdBy___stage'
  | 'carouselImagesPortfolioItem___createdBy___isActive'
  | 'carouselImagesPortfolioItem___createdBy___picture'
  | 'carouselImagesPortfolioItem___createdBy___name'
  | 'carouselImagesPortfolioItem___createdBy___publishedAt'
  | 'carouselImagesPortfolioItem___createdBy___updatedAt'
  | 'carouselImagesPortfolioItem___createdBy___createdAt'
  | 'carouselImagesPortfolioItem___createdBy___kind'
  | 'carouselImagesPortfolioItem___createdBy___id'
  | 'carouselImagesPortfolioItem___createdBy___parent___id'
  | 'carouselImagesPortfolioItem___createdBy___parent___children'
  | 'carouselImagesPortfolioItem___createdBy___children'
  | 'carouselImagesPortfolioItem___createdBy___children___id'
  | 'carouselImagesPortfolioItem___createdBy___children___children'
  | 'carouselImagesPortfolioItem___createdBy___internal___content'
  | 'carouselImagesPortfolioItem___createdBy___internal___contentDigest'
  | 'carouselImagesPortfolioItem___createdBy___internal___description'
  | 'carouselImagesPortfolioItem___createdBy___internal___fieldOwners'
  | 'carouselImagesPortfolioItem___createdBy___internal___ignoreType'
  | 'carouselImagesPortfolioItem___createdBy___internal___mediaType'
  | 'carouselImagesPortfolioItem___createdBy___internal___owner'
  | 'carouselImagesPortfolioItem___createdBy___internal___type'
  | 'carouselImagesPortfolioItem___createdBy___internal___contentFilePath'
  | 'carouselImagesPortfolioItem___carouselImages'
  | 'carouselImagesPortfolioItem___carouselImages___remoteTypeName'
  | 'carouselImagesPortfolioItem___carouselImages___remoteId'
  | 'carouselImagesPortfolioItem___carouselImages___locale'
  | 'carouselImagesPortfolioItem___carouselImages___stage'
  | 'carouselImagesPortfolioItem___carouselImages___mimeType'
  | 'carouselImagesPortfolioItem___carouselImages___size'
  | 'carouselImagesPortfolioItem___carouselImages___width'
  | 'carouselImagesPortfolioItem___carouselImages___height'
  | 'carouselImagesPortfolioItem___carouselImages___fileName'
  | 'carouselImagesPortfolioItem___carouselImages___handle'
  | 'carouselImagesPortfolioItem___carouselImages___publishedAt'
  | 'carouselImagesPortfolioItem___carouselImages___updatedAt'
  | 'carouselImagesPortfolioItem___carouselImages___createdAt'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___remoteId'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___stage'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___isActive'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___picture'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___name'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___publishedAt'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___updatedAt'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___createdAt'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___kind'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___id'
  | 'carouselImagesPortfolioItem___carouselImages___publishedBy___children'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___remoteId'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___stage'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___isActive'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___picture'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___name'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___publishedAt'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___updatedAt'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___createdAt'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___kind'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___id'
  | 'carouselImagesPortfolioItem___carouselImages___updatedBy___children'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___remoteId'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___stage'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___isActive'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___picture'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___name'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___publishedAt'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___updatedAt'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___createdAt'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___kind'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___id'
  | 'carouselImagesPortfolioItem___carouselImages___createdBy___children'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___remoteTypeName'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___remoteId'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___stage'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___publishedAt'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___updatedAt'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___createdAt'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___title'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___description'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___techSheet'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___carouselImages'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___links'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___scheduledIn'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___gatsbyPath'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___id'
  | 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___children'
  | 'carouselImagesPortfolioItem___carouselImages___iconSpeciality'
  | 'carouselImagesPortfolioItem___carouselImages___iconSpeciality___remoteTypeName'
  | 'carouselImagesPortfolioItem___carouselImages___iconSpeciality___remoteId'
  | 'carouselImagesPortfolioItem___carouselImages___iconSpeciality___stage'
  | 'carouselImagesPortfolioItem___carouselImages___iconSpeciality___publishedAt'
  | 'carouselImagesPortfolioItem___carouselImages___iconSpeciality___updatedAt'
  | 'carouselImagesPortfolioItem___carouselImages___iconSpeciality___createdAt'
  | 'carouselImagesPortfolioItem___carouselImages___iconSpeciality___title'
  | 'carouselImagesPortfolioItem___carouselImages___iconSpeciality___scheduledIn'
  | 'carouselImagesPortfolioItem___carouselImages___iconSpeciality___id'
  | 'carouselImagesPortfolioItem___carouselImages___iconSpeciality___children'
  | 'carouselImagesPortfolioItem___carouselImages___iconTechnology'
  | 'carouselImagesPortfolioItem___carouselImages___iconTechnology___remoteTypeName'
  | 'carouselImagesPortfolioItem___carouselImages___iconTechnology___remoteId'
  | 'carouselImagesPortfolioItem___carouselImages___iconTechnology___stage'
  | 'carouselImagesPortfolioItem___carouselImages___iconTechnology___publishedAt'
  | 'carouselImagesPortfolioItem___carouselImages___iconTechnology___updatedAt'
  | 'carouselImagesPortfolioItem___carouselImages___iconTechnology___createdAt'
  | 'carouselImagesPortfolioItem___carouselImages___iconTechnology___title'
  | 'carouselImagesPortfolioItem___carouselImages___iconTechnology___scheduledIn'
  | 'carouselImagesPortfolioItem___carouselImages___iconTechnology___id'
  | 'carouselImagesPortfolioItem___carouselImages___iconTechnology___children'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___remoteTypeName'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___remoteId'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___stage'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___publishedAt'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___updatedAt'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___createdAt'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___title'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___description'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___type'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___categories'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___scheduledIn'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___gatsbyPath'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___id'
  | 'carouselImagesPortfolioItem___carouselImages___headerImageBlog___children'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___remoteTypeName'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___remoteId'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___stage'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___rawPayload'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___errorMessage'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___description'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___publishedAt'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___updatedAt'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___createdAt'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___status'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___id'
  | 'carouselImagesPortfolioItem___carouselImages___scheduledIn___children'
  | 'carouselImagesPortfolioItem___carouselImages___url'
  | 'carouselImagesPortfolioItem___carouselImages___id'
  | 'carouselImagesPortfolioItem___carouselImages___parent___id'
  | 'carouselImagesPortfolioItem___carouselImages___parent___children'
  | 'carouselImagesPortfolioItem___carouselImages___children'
  | 'carouselImagesPortfolioItem___carouselImages___children___id'
  | 'carouselImagesPortfolioItem___carouselImages___children___children'
  | 'carouselImagesPortfolioItem___carouselImages___internal___content'
  | 'carouselImagesPortfolioItem___carouselImages___internal___contentDigest'
  | 'carouselImagesPortfolioItem___carouselImages___internal___description'
  | 'carouselImagesPortfolioItem___carouselImages___internal___fieldOwners'
  | 'carouselImagesPortfolioItem___carouselImages___internal___ignoreType'
  | 'carouselImagesPortfolioItem___carouselImages___internal___mediaType'
  | 'carouselImagesPortfolioItem___carouselImages___internal___owner'
  | 'carouselImagesPortfolioItem___carouselImages___internal___type'
  | 'carouselImagesPortfolioItem___carouselImages___internal___contentFilePath'
  | 'carouselImagesPortfolioItem___links'
  | 'carouselImagesPortfolioItem___links___remoteTypeName'
  | 'carouselImagesPortfolioItem___links___remoteId'
  | 'carouselImagesPortfolioItem___links___stage'
  | 'carouselImagesPortfolioItem___links___publishedAt'
  | 'carouselImagesPortfolioItem___links___updatedAt'
  | 'carouselImagesPortfolioItem___links___createdAt'
  | 'carouselImagesPortfolioItem___links___title'
  | 'carouselImagesPortfolioItem___links___url'
  | 'carouselImagesPortfolioItem___links___publishedBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___links___publishedBy___remoteId'
  | 'carouselImagesPortfolioItem___links___publishedBy___stage'
  | 'carouselImagesPortfolioItem___links___publishedBy___isActive'
  | 'carouselImagesPortfolioItem___links___publishedBy___picture'
  | 'carouselImagesPortfolioItem___links___publishedBy___name'
  | 'carouselImagesPortfolioItem___links___publishedBy___publishedAt'
  | 'carouselImagesPortfolioItem___links___publishedBy___updatedAt'
  | 'carouselImagesPortfolioItem___links___publishedBy___createdAt'
  | 'carouselImagesPortfolioItem___links___publishedBy___kind'
  | 'carouselImagesPortfolioItem___links___publishedBy___id'
  | 'carouselImagesPortfolioItem___links___publishedBy___children'
  | 'carouselImagesPortfolioItem___links___updatedBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___links___updatedBy___remoteId'
  | 'carouselImagesPortfolioItem___links___updatedBy___stage'
  | 'carouselImagesPortfolioItem___links___updatedBy___isActive'
  | 'carouselImagesPortfolioItem___links___updatedBy___picture'
  | 'carouselImagesPortfolioItem___links___updatedBy___name'
  | 'carouselImagesPortfolioItem___links___updatedBy___publishedAt'
  | 'carouselImagesPortfolioItem___links___updatedBy___updatedAt'
  | 'carouselImagesPortfolioItem___links___updatedBy___createdAt'
  | 'carouselImagesPortfolioItem___links___updatedBy___kind'
  | 'carouselImagesPortfolioItem___links___updatedBy___id'
  | 'carouselImagesPortfolioItem___links___updatedBy___children'
  | 'carouselImagesPortfolioItem___links___createdBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___links___createdBy___remoteId'
  | 'carouselImagesPortfolioItem___links___createdBy___stage'
  | 'carouselImagesPortfolioItem___links___createdBy___isActive'
  | 'carouselImagesPortfolioItem___links___createdBy___picture'
  | 'carouselImagesPortfolioItem___links___createdBy___name'
  | 'carouselImagesPortfolioItem___links___createdBy___publishedAt'
  | 'carouselImagesPortfolioItem___links___createdBy___updatedAt'
  | 'carouselImagesPortfolioItem___links___createdBy___createdAt'
  | 'carouselImagesPortfolioItem___links___createdBy___kind'
  | 'carouselImagesPortfolioItem___links___createdBy___id'
  | 'carouselImagesPortfolioItem___links___createdBy___children'
  | 'carouselImagesPortfolioItem___links___type'
  | 'carouselImagesPortfolioItem___links___scheduledIn'
  | 'carouselImagesPortfolioItem___links___scheduledIn___remoteTypeName'
  | 'carouselImagesPortfolioItem___links___scheduledIn___remoteId'
  | 'carouselImagesPortfolioItem___links___scheduledIn___stage'
  | 'carouselImagesPortfolioItem___links___scheduledIn___rawPayload'
  | 'carouselImagesPortfolioItem___links___scheduledIn___errorMessage'
  | 'carouselImagesPortfolioItem___links___scheduledIn___description'
  | 'carouselImagesPortfolioItem___links___scheduledIn___publishedAt'
  | 'carouselImagesPortfolioItem___links___scheduledIn___updatedAt'
  | 'carouselImagesPortfolioItem___links___scheduledIn___createdAt'
  | 'carouselImagesPortfolioItem___links___scheduledIn___status'
  | 'carouselImagesPortfolioItem___links___scheduledIn___id'
  | 'carouselImagesPortfolioItem___links___scheduledIn___children'
  | 'carouselImagesPortfolioItem___links___id'
  | 'carouselImagesPortfolioItem___links___parent___id'
  | 'carouselImagesPortfolioItem___links___parent___children'
  | 'carouselImagesPortfolioItem___links___children'
  | 'carouselImagesPortfolioItem___links___children___id'
  | 'carouselImagesPortfolioItem___links___children___children'
  | 'carouselImagesPortfolioItem___links___internal___content'
  | 'carouselImagesPortfolioItem___links___internal___contentDigest'
  | 'carouselImagesPortfolioItem___links___internal___description'
  | 'carouselImagesPortfolioItem___links___internal___fieldOwners'
  | 'carouselImagesPortfolioItem___links___internal___ignoreType'
  | 'carouselImagesPortfolioItem___links___internal___mediaType'
  | 'carouselImagesPortfolioItem___links___internal___owner'
  | 'carouselImagesPortfolioItem___links___internal___type'
  | 'carouselImagesPortfolioItem___links___internal___contentFilePath'
  | 'carouselImagesPortfolioItem___scheduledIn'
  | 'carouselImagesPortfolioItem___scheduledIn___remoteTypeName'
  | 'carouselImagesPortfolioItem___scheduledIn___remoteId'
  | 'carouselImagesPortfolioItem___scheduledIn___stage'
  | 'carouselImagesPortfolioItem___scheduledIn___rawPayload'
  | 'carouselImagesPortfolioItem___scheduledIn___errorMessage'
  | 'carouselImagesPortfolioItem___scheduledIn___description'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedAt'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedAt'
  | 'carouselImagesPortfolioItem___scheduledIn___createdAt'
  | 'carouselImagesPortfolioItem___scheduledIn___release___remoteTypeName'
  | 'carouselImagesPortfolioItem___scheduledIn___release___remoteId'
  | 'carouselImagesPortfolioItem___scheduledIn___release___stage'
  | 'carouselImagesPortfolioItem___scheduledIn___release___releaseAt'
  | 'carouselImagesPortfolioItem___scheduledIn___release___isImplicit'
  | 'carouselImagesPortfolioItem___scheduledIn___release___isActive'
  | 'carouselImagesPortfolioItem___scheduledIn___release___errorMessage'
  | 'carouselImagesPortfolioItem___scheduledIn___release___description'
  | 'carouselImagesPortfolioItem___scheduledIn___release___title'
  | 'carouselImagesPortfolioItem___scheduledIn___release___publishedAt'
  | 'carouselImagesPortfolioItem___scheduledIn___release___updatedAt'
  | 'carouselImagesPortfolioItem___scheduledIn___release___createdAt'
  | 'carouselImagesPortfolioItem___scheduledIn___release___operations'
  | 'carouselImagesPortfolioItem___scheduledIn___release___status'
  | 'carouselImagesPortfolioItem___scheduledIn___release___id'
  | 'carouselImagesPortfolioItem___scheduledIn___release___children'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___remoteId'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___stage'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___isActive'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___picture'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___name'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___publishedAt'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___updatedAt'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___createdAt'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___kind'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___id'
  | 'carouselImagesPortfolioItem___scheduledIn___publishedBy___children'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___remoteId'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___stage'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___isActive'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___picture'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___name'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___publishedAt'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___updatedAt'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___createdAt'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___kind'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___id'
  | 'carouselImagesPortfolioItem___scheduledIn___updatedBy___children'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___remoteTypeName'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___remoteId'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___stage'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___isActive'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___picture'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___name'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___publishedAt'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___updatedAt'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___createdAt'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___kind'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___id'
  | 'carouselImagesPortfolioItem___scheduledIn___createdBy___children'
  | 'carouselImagesPortfolioItem___scheduledIn___status'
  | 'carouselImagesPortfolioItem___scheduledIn___id'
  | 'carouselImagesPortfolioItem___scheduledIn___parent___id'
  | 'carouselImagesPortfolioItem___scheduledIn___parent___children'
  | 'carouselImagesPortfolioItem___scheduledIn___children'
  | 'carouselImagesPortfolioItem___scheduledIn___children___id'
  | 'carouselImagesPortfolioItem___scheduledIn___children___children'
  | 'carouselImagesPortfolioItem___scheduledIn___internal___content'
  | 'carouselImagesPortfolioItem___scheduledIn___internal___contentDigest'
  | 'carouselImagesPortfolioItem___scheduledIn___internal___description'
  | 'carouselImagesPortfolioItem___scheduledIn___internal___fieldOwners'
  | 'carouselImagesPortfolioItem___scheduledIn___internal___ignoreType'
  | 'carouselImagesPortfolioItem___scheduledIn___internal___mediaType'
  | 'carouselImagesPortfolioItem___scheduledIn___internal___owner'
  | 'carouselImagesPortfolioItem___scheduledIn___internal___type'
  | 'carouselImagesPortfolioItem___scheduledIn___internal___contentFilePath'
  | 'carouselImagesPortfolioItem___gatsbyPath'
  | 'carouselImagesPortfolioItem___id'
  | 'carouselImagesPortfolioItem___parent___id'
  | 'carouselImagesPortfolioItem___parent___parent___id'
  | 'carouselImagesPortfolioItem___parent___parent___children'
  | 'carouselImagesPortfolioItem___parent___children'
  | 'carouselImagesPortfolioItem___parent___children___id'
  | 'carouselImagesPortfolioItem___parent___children___children'
  | 'carouselImagesPortfolioItem___parent___internal___content'
  | 'carouselImagesPortfolioItem___parent___internal___contentDigest'
  | 'carouselImagesPortfolioItem___parent___internal___description'
  | 'carouselImagesPortfolioItem___parent___internal___fieldOwners'
  | 'carouselImagesPortfolioItem___parent___internal___ignoreType'
  | 'carouselImagesPortfolioItem___parent___internal___mediaType'
  | 'carouselImagesPortfolioItem___parent___internal___owner'
  | 'carouselImagesPortfolioItem___parent___internal___type'
  | 'carouselImagesPortfolioItem___parent___internal___contentFilePath'
  | 'carouselImagesPortfolioItem___children'
  | 'carouselImagesPortfolioItem___children___id'
  | 'carouselImagesPortfolioItem___children___parent___id'
  | 'carouselImagesPortfolioItem___children___parent___children'
  | 'carouselImagesPortfolioItem___children___children'
  | 'carouselImagesPortfolioItem___children___children___id'
  | 'carouselImagesPortfolioItem___children___children___children'
  | 'carouselImagesPortfolioItem___children___internal___content'
  | 'carouselImagesPortfolioItem___children___internal___contentDigest'
  | 'carouselImagesPortfolioItem___children___internal___description'
  | 'carouselImagesPortfolioItem___children___internal___fieldOwners'
  | 'carouselImagesPortfolioItem___children___internal___ignoreType'
  | 'carouselImagesPortfolioItem___children___internal___mediaType'
  | 'carouselImagesPortfolioItem___children___internal___owner'
  | 'carouselImagesPortfolioItem___children___internal___type'
  | 'carouselImagesPortfolioItem___children___internal___contentFilePath'
  | 'carouselImagesPortfolioItem___internal___content'
  | 'carouselImagesPortfolioItem___internal___contentDigest'
  | 'carouselImagesPortfolioItem___internal___description'
  | 'carouselImagesPortfolioItem___internal___fieldOwners'
  | 'carouselImagesPortfolioItem___internal___ignoreType'
  | 'carouselImagesPortfolioItem___internal___mediaType'
  | 'carouselImagesPortfolioItem___internal___owner'
  | 'carouselImagesPortfolioItem___internal___type'
  | 'carouselImagesPortfolioItem___internal___contentFilePath'
  | 'iconSpeciality'
  | 'iconSpeciality___remoteTypeName'
  | 'iconSpeciality___remoteId'
  | 'iconSpeciality___stage'
  | 'iconSpeciality___publishedAt'
  | 'iconSpeciality___updatedAt'
  | 'iconSpeciality___createdAt'
  | 'iconSpeciality___title'
  | 'iconSpeciality___description___remoteTypeName'
  | 'iconSpeciality___description___raw'
  | 'iconSpeciality___description___html'
  | 'iconSpeciality___description___markdown'
  | 'iconSpeciality___description___text'
  | 'iconSpeciality___publishedBy___remoteTypeName'
  | 'iconSpeciality___publishedBy___remoteId'
  | 'iconSpeciality___publishedBy___stage'
  | 'iconSpeciality___publishedBy___isActive'
  | 'iconSpeciality___publishedBy___picture'
  | 'iconSpeciality___publishedBy___name'
  | 'iconSpeciality___publishedBy___publishedAt'
  | 'iconSpeciality___publishedBy___updatedAt'
  | 'iconSpeciality___publishedBy___createdAt'
  | 'iconSpeciality___publishedBy___kind'
  | 'iconSpeciality___publishedBy___id'
  | 'iconSpeciality___publishedBy___parent___id'
  | 'iconSpeciality___publishedBy___parent___children'
  | 'iconSpeciality___publishedBy___children'
  | 'iconSpeciality___publishedBy___children___id'
  | 'iconSpeciality___publishedBy___children___children'
  | 'iconSpeciality___publishedBy___internal___content'
  | 'iconSpeciality___publishedBy___internal___contentDigest'
  | 'iconSpeciality___publishedBy___internal___description'
  | 'iconSpeciality___publishedBy___internal___fieldOwners'
  | 'iconSpeciality___publishedBy___internal___ignoreType'
  | 'iconSpeciality___publishedBy___internal___mediaType'
  | 'iconSpeciality___publishedBy___internal___owner'
  | 'iconSpeciality___publishedBy___internal___type'
  | 'iconSpeciality___publishedBy___internal___contentFilePath'
  | 'iconSpeciality___updatedBy___remoteTypeName'
  | 'iconSpeciality___updatedBy___remoteId'
  | 'iconSpeciality___updatedBy___stage'
  | 'iconSpeciality___updatedBy___isActive'
  | 'iconSpeciality___updatedBy___picture'
  | 'iconSpeciality___updatedBy___name'
  | 'iconSpeciality___updatedBy___publishedAt'
  | 'iconSpeciality___updatedBy___updatedAt'
  | 'iconSpeciality___updatedBy___createdAt'
  | 'iconSpeciality___updatedBy___kind'
  | 'iconSpeciality___updatedBy___id'
  | 'iconSpeciality___updatedBy___parent___id'
  | 'iconSpeciality___updatedBy___parent___children'
  | 'iconSpeciality___updatedBy___children'
  | 'iconSpeciality___updatedBy___children___id'
  | 'iconSpeciality___updatedBy___children___children'
  | 'iconSpeciality___updatedBy___internal___content'
  | 'iconSpeciality___updatedBy___internal___contentDigest'
  | 'iconSpeciality___updatedBy___internal___description'
  | 'iconSpeciality___updatedBy___internal___fieldOwners'
  | 'iconSpeciality___updatedBy___internal___ignoreType'
  | 'iconSpeciality___updatedBy___internal___mediaType'
  | 'iconSpeciality___updatedBy___internal___owner'
  | 'iconSpeciality___updatedBy___internal___type'
  | 'iconSpeciality___updatedBy___internal___contentFilePath'
  | 'iconSpeciality___createdBy___remoteTypeName'
  | 'iconSpeciality___createdBy___remoteId'
  | 'iconSpeciality___createdBy___stage'
  | 'iconSpeciality___createdBy___isActive'
  | 'iconSpeciality___createdBy___picture'
  | 'iconSpeciality___createdBy___name'
  | 'iconSpeciality___createdBy___publishedAt'
  | 'iconSpeciality___createdBy___updatedAt'
  | 'iconSpeciality___createdBy___createdAt'
  | 'iconSpeciality___createdBy___kind'
  | 'iconSpeciality___createdBy___id'
  | 'iconSpeciality___createdBy___parent___id'
  | 'iconSpeciality___createdBy___parent___children'
  | 'iconSpeciality___createdBy___children'
  | 'iconSpeciality___createdBy___children___id'
  | 'iconSpeciality___createdBy___children___children'
  | 'iconSpeciality___createdBy___internal___content'
  | 'iconSpeciality___createdBy___internal___contentDigest'
  | 'iconSpeciality___createdBy___internal___description'
  | 'iconSpeciality___createdBy___internal___fieldOwners'
  | 'iconSpeciality___createdBy___internal___ignoreType'
  | 'iconSpeciality___createdBy___internal___mediaType'
  | 'iconSpeciality___createdBy___internal___owner'
  | 'iconSpeciality___createdBy___internal___type'
  | 'iconSpeciality___createdBy___internal___contentFilePath'
  | 'iconSpeciality___icon___remoteTypeName'
  | 'iconSpeciality___icon___remoteId'
  | 'iconSpeciality___icon___locale'
  | 'iconSpeciality___icon___stage'
  | 'iconSpeciality___icon___mimeType'
  | 'iconSpeciality___icon___size'
  | 'iconSpeciality___icon___width'
  | 'iconSpeciality___icon___height'
  | 'iconSpeciality___icon___fileName'
  | 'iconSpeciality___icon___handle'
  | 'iconSpeciality___icon___publishedAt'
  | 'iconSpeciality___icon___updatedAt'
  | 'iconSpeciality___icon___createdAt'
  | 'iconSpeciality___icon___publishedBy___remoteTypeName'
  | 'iconSpeciality___icon___publishedBy___remoteId'
  | 'iconSpeciality___icon___publishedBy___stage'
  | 'iconSpeciality___icon___publishedBy___isActive'
  | 'iconSpeciality___icon___publishedBy___picture'
  | 'iconSpeciality___icon___publishedBy___name'
  | 'iconSpeciality___icon___publishedBy___publishedAt'
  | 'iconSpeciality___icon___publishedBy___updatedAt'
  | 'iconSpeciality___icon___publishedBy___createdAt'
  | 'iconSpeciality___icon___publishedBy___kind'
  | 'iconSpeciality___icon___publishedBy___id'
  | 'iconSpeciality___icon___publishedBy___children'
  | 'iconSpeciality___icon___updatedBy___remoteTypeName'
  | 'iconSpeciality___icon___updatedBy___remoteId'
  | 'iconSpeciality___icon___updatedBy___stage'
  | 'iconSpeciality___icon___updatedBy___isActive'
  | 'iconSpeciality___icon___updatedBy___picture'
  | 'iconSpeciality___icon___updatedBy___name'
  | 'iconSpeciality___icon___updatedBy___publishedAt'
  | 'iconSpeciality___icon___updatedBy___updatedAt'
  | 'iconSpeciality___icon___updatedBy___createdAt'
  | 'iconSpeciality___icon___updatedBy___kind'
  | 'iconSpeciality___icon___updatedBy___id'
  | 'iconSpeciality___icon___updatedBy___children'
  | 'iconSpeciality___icon___createdBy___remoteTypeName'
  | 'iconSpeciality___icon___createdBy___remoteId'
  | 'iconSpeciality___icon___createdBy___stage'
  | 'iconSpeciality___icon___createdBy___isActive'
  | 'iconSpeciality___icon___createdBy___picture'
  | 'iconSpeciality___icon___createdBy___name'
  | 'iconSpeciality___icon___createdBy___publishedAt'
  | 'iconSpeciality___icon___createdBy___updatedAt'
  | 'iconSpeciality___icon___createdBy___createdAt'
  | 'iconSpeciality___icon___createdBy___kind'
  | 'iconSpeciality___icon___createdBy___id'
  | 'iconSpeciality___icon___createdBy___children'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___remoteTypeName'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___remoteId'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___stage'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___publishedAt'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___updatedAt'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___createdAt'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___title'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___description'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___techSheet'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___carouselImages'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___links'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___scheduledIn'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___gatsbyPath'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___id'
  | 'iconSpeciality___icon___carouselImagesPortfolioItem___children'
  | 'iconSpeciality___icon___iconSpeciality'
  | 'iconSpeciality___icon___iconSpeciality___remoteTypeName'
  | 'iconSpeciality___icon___iconSpeciality___remoteId'
  | 'iconSpeciality___icon___iconSpeciality___stage'
  | 'iconSpeciality___icon___iconSpeciality___publishedAt'
  | 'iconSpeciality___icon___iconSpeciality___updatedAt'
  | 'iconSpeciality___icon___iconSpeciality___createdAt'
  | 'iconSpeciality___icon___iconSpeciality___title'
  | 'iconSpeciality___icon___iconSpeciality___scheduledIn'
  | 'iconSpeciality___icon___iconSpeciality___id'
  | 'iconSpeciality___icon___iconSpeciality___children'
  | 'iconSpeciality___icon___iconTechnology'
  | 'iconSpeciality___icon___iconTechnology___remoteTypeName'
  | 'iconSpeciality___icon___iconTechnology___remoteId'
  | 'iconSpeciality___icon___iconTechnology___stage'
  | 'iconSpeciality___icon___iconTechnology___publishedAt'
  | 'iconSpeciality___icon___iconTechnology___updatedAt'
  | 'iconSpeciality___icon___iconTechnology___createdAt'
  | 'iconSpeciality___icon___iconTechnology___title'
  | 'iconSpeciality___icon___iconTechnology___scheduledIn'
  | 'iconSpeciality___icon___iconTechnology___id'
  | 'iconSpeciality___icon___iconTechnology___children'
  | 'iconSpeciality___icon___headerImageBlog'
  | 'iconSpeciality___icon___headerImageBlog___remoteTypeName'
  | 'iconSpeciality___icon___headerImageBlog___remoteId'
  | 'iconSpeciality___icon___headerImageBlog___stage'
  | 'iconSpeciality___icon___headerImageBlog___publishedAt'
  | 'iconSpeciality___icon___headerImageBlog___updatedAt'
  | 'iconSpeciality___icon___headerImageBlog___createdAt'
  | 'iconSpeciality___icon___headerImageBlog___title'
  | 'iconSpeciality___icon___headerImageBlog___description'
  | 'iconSpeciality___icon___headerImageBlog___type'
  | 'iconSpeciality___icon___headerImageBlog___categories'
  | 'iconSpeciality___icon___headerImageBlog___scheduledIn'
  | 'iconSpeciality___icon___headerImageBlog___gatsbyPath'
  | 'iconSpeciality___icon___headerImageBlog___id'
  | 'iconSpeciality___icon___headerImageBlog___children'
  | 'iconSpeciality___icon___scheduledIn'
  | 'iconSpeciality___icon___scheduledIn___remoteTypeName'
  | 'iconSpeciality___icon___scheduledIn___remoteId'
  | 'iconSpeciality___icon___scheduledIn___stage'
  | 'iconSpeciality___icon___scheduledIn___rawPayload'
  | 'iconSpeciality___icon___scheduledIn___errorMessage'
  | 'iconSpeciality___icon___scheduledIn___description'
  | 'iconSpeciality___icon___scheduledIn___publishedAt'
  | 'iconSpeciality___icon___scheduledIn___updatedAt'
  | 'iconSpeciality___icon___scheduledIn___createdAt'
  | 'iconSpeciality___icon___scheduledIn___status'
  | 'iconSpeciality___icon___scheduledIn___id'
  | 'iconSpeciality___icon___scheduledIn___children'
  | 'iconSpeciality___icon___url'
  | 'iconSpeciality___icon___id'
  | 'iconSpeciality___icon___parent___id'
  | 'iconSpeciality___icon___parent___children'
  | 'iconSpeciality___icon___children'
  | 'iconSpeciality___icon___children___id'
  | 'iconSpeciality___icon___children___children'
  | 'iconSpeciality___icon___internal___content'
  | 'iconSpeciality___icon___internal___contentDigest'
  | 'iconSpeciality___icon___internal___description'
  | 'iconSpeciality___icon___internal___fieldOwners'
  | 'iconSpeciality___icon___internal___ignoreType'
  | 'iconSpeciality___icon___internal___mediaType'
  | 'iconSpeciality___icon___internal___owner'
  | 'iconSpeciality___icon___internal___type'
  | 'iconSpeciality___icon___internal___contentFilePath'
  | 'iconSpeciality___scheduledIn'
  | 'iconSpeciality___scheduledIn___remoteTypeName'
  | 'iconSpeciality___scheduledIn___remoteId'
  | 'iconSpeciality___scheduledIn___stage'
  | 'iconSpeciality___scheduledIn___rawPayload'
  | 'iconSpeciality___scheduledIn___errorMessage'
  | 'iconSpeciality___scheduledIn___description'
  | 'iconSpeciality___scheduledIn___publishedAt'
  | 'iconSpeciality___scheduledIn___updatedAt'
  | 'iconSpeciality___scheduledIn___createdAt'
  | 'iconSpeciality___scheduledIn___release___remoteTypeName'
  | 'iconSpeciality___scheduledIn___release___remoteId'
  | 'iconSpeciality___scheduledIn___release___stage'
  | 'iconSpeciality___scheduledIn___release___releaseAt'
  | 'iconSpeciality___scheduledIn___release___isImplicit'
  | 'iconSpeciality___scheduledIn___release___isActive'
  | 'iconSpeciality___scheduledIn___release___errorMessage'
  | 'iconSpeciality___scheduledIn___release___description'
  | 'iconSpeciality___scheduledIn___release___title'
  | 'iconSpeciality___scheduledIn___release___publishedAt'
  | 'iconSpeciality___scheduledIn___release___updatedAt'
  | 'iconSpeciality___scheduledIn___release___createdAt'
  | 'iconSpeciality___scheduledIn___release___operations'
  | 'iconSpeciality___scheduledIn___release___status'
  | 'iconSpeciality___scheduledIn___release___id'
  | 'iconSpeciality___scheduledIn___release___children'
  | 'iconSpeciality___scheduledIn___publishedBy___remoteTypeName'
  | 'iconSpeciality___scheduledIn___publishedBy___remoteId'
  | 'iconSpeciality___scheduledIn___publishedBy___stage'
  | 'iconSpeciality___scheduledIn___publishedBy___isActive'
  | 'iconSpeciality___scheduledIn___publishedBy___picture'
  | 'iconSpeciality___scheduledIn___publishedBy___name'
  | 'iconSpeciality___scheduledIn___publishedBy___publishedAt'
  | 'iconSpeciality___scheduledIn___publishedBy___updatedAt'
  | 'iconSpeciality___scheduledIn___publishedBy___createdAt'
  | 'iconSpeciality___scheduledIn___publishedBy___kind'
  | 'iconSpeciality___scheduledIn___publishedBy___id'
  | 'iconSpeciality___scheduledIn___publishedBy___children'
  | 'iconSpeciality___scheduledIn___updatedBy___remoteTypeName'
  | 'iconSpeciality___scheduledIn___updatedBy___remoteId'
  | 'iconSpeciality___scheduledIn___updatedBy___stage'
  | 'iconSpeciality___scheduledIn___updatedBy___isActive'
  | 'iconSpeciality___scheduledIn___updatedBy___picture'
  | 'iconSpeciality___scheduledIn___updatedBy___name'
  | 'iconSpeciality___scheduledIn___updatedBy___publishedAt'
  | 'iconSpeciality___scheduledIn___updatedBy___updatedAt'
  | 'iconSpeciality___scheduledIn___updatedBy___createdAt'
  | 'iconSpeciality___scheduledIn___updatedBy___kind'
  | 'iconSpeciality___scheduledIn___updatedBy___id'
  | 'iconSpeciality___scheduledIn___updatedBy___children'
  | 'iconSpeciality___scheduledIn___createdBy___remoteTypeName'
  | 'iconSpeciality___scheduledIn___createdBy___remoteId'
  | 'iconSpeciality___scheduledIn___createdBy___stage'
  | 'iconSpeciality___scheduledIn___createdBy___isActive'
  | 'iconSpeciality___scheduledIn___createdBy___picture'
  | 'iconSpeciality___scheduledIn___createdBy___name'
  | 'iconSpeciality___scheduledIn___createdBy___publishedAt'
  | 'iconSpeciality___scheduledIn___createdBy___updatedAt'
  | 'iconSpeciality___scheduledIn___createdBy___createdAt'
  | 'iconSpeciality___scheduledIn___createdBy___kind'
  | 'iconSpeciality___scheduledIn___createdBy___id'
  | 'iconSpeciality___scheduledIn___createdBy___children'
  | 'iconSpeciality___scheduledIn___status'
  | 'iconSpeciality___scheduledIn___id'
  | 'iconSpeciality___scheduledIn___parent___id'
  | 'iconSpeciality___scheduledIn___parent___children'
  | 'iconSpeciality___scheduledIn___children'
  | 'iconSpeciality___scheduledIn___children___id'
  | 'iconSpeciality___scheduledIn___children___children'
  | 'iconSpeciality___scheduledIn___internal___content'
  | 'iconSpeciality___scheduledIn___internal___contentDigest'
  | 'iconSpeciality___scheduledIn___internal___description'
  | 'iconSpeciality___scheduledIn___internal___fieldOwners'
  | 'iconSpeciality___scheduledIn___internal___ignoreType'
  | 'iconSpeciality___scheduledIn___internal___mediaType'
  | 'iconSpeciality___scheduledIn___internal___owner'
  | 'iconSpeciality___scheduledIn___internal___type'
  | 'iconSpeciality___scheduledIn___internal___contentFilePath'
  | 'iconSpeciality___id'
  | 'iconSpeciality___parent___id'
  | 'iconSpeciality___parent___parent___id'
  | 'iconSpeciality___parent___parent___children'
  | 'iconSpeciality___parent___children'
  | 'iconSpeciality___parent___children___id'
  | 'iconSpeciality___parent___children___children'
  | 'iconSpeciality___parent___internal___content'
  | 'iconSpeciality___parent___internal___contentDigest'
  | 'iconSpeciality___parent___internal___description'
  | 'iconSpeciality___parent___internal___fieldOwners'
  | 'iconSpeciality___parent___internal___ignoreType'
  | 'iconSpeciality___parent___internal___mediaType'
  | 'iconSpeciality___parent___internal___owner'
  | 'iconSpeciality___parent___internal___type'
  | 'iconSpeciality___parent___internal___contentFilePath'
  | 'iconSpeciality___children'
  | 'iconSpeciality___children___id'
  | 'iconSpeciality___children___parent___id'
  | 'iconSpeciality___children___parent___children'
  | 'iconSpeciality___children___children'
  | 'iconSpeciality___children___children___id'
  | 'iconSpeciality___children___children___children'
  | 'iconSpeciality___children___internal___content'
  | 'iconSpeciality___children___internal___contentDigest'
  | 'iconSpeciality___children___internal___description'
  | 'iconSpeciality___children___internal___fieldOwners'
  | 'iconSpeciality___children___internal___ignoreType'
  | 'iconSpeciality___children___internal___mediaType'
  | 'iconSpeciality___children___internal___owner'
  | 'iconSpeciality___children___internal___type'
  | 'iconSpeciality___children___internal___contentFilePath'
  | 'iconSpeciality___internal___content'
  | 'iconSpeciality___internal___contentDigest'
  | 'iconSpeciality___internal___description'
  | 'iconSpeciality___internal___fieldOwners'
  | 'iconSpeciality___internal___ignoreType'
  | 'iconSpeciality___internal___mediaType'
  | 'iconSpeciality___internal___owner'
  | 'iconSpeciality___internal___type'
  | 'iconSpeciality___internal___contentFilePath'
  | 'iconTechnology'
  | 'iconTechnology___remoteTypeName'
  | 'iconTechnology___remoteId'
  | 'iconTechnology___stage'
  | 'iconTechnology___publishedAt'
  | 'iconTechnology___updatedAt'
  | 'iconTechnology___createdAt'
  | 'iconTechnology___title'
  | 'iconTechnology___description___remoteTypeName'
  | 'iconTechnology___description___raw'
  | 'iconTechnology___description___html'
  | 'iconTechnology___description___markdown'
  | 'iconTechnology___description___text'
  | 'iconTechnology___backgroundColor___remoteTypeName'
  | 'iconTechnology___backgroundColor___hex'
  | 'iconTechnology___backgroundColor___rgba___remoteTypeName'
  | 'iconTechnology___backgroundColor___rgba___r'
  | 'iconTechnology___backgroundColor___rgba___g'
  | 'iconTechnology___backgroundColor___rgba___b'
  | 'iconTechnology___backgroundColor___rgba___a'
  | 'iconTechnology___backgroundColor___css'
  | 'iconTechnology___publishedBy___remoteTypeName'
  | 'iconTechnology___publishedBy___remoteId'
  | 'iconTechnology___publishedBy___stage'
  | 'iconTechnology___publishedBy___isActive'
  | 'iconTechnology___publishedBy___picture'
  | 'iconTechnology___publishedBy___name'
  | 'iconTechnology___publishedBy___publishedAt'
  | 'iconTechnology___publishedBy___updatedAt'
  | 'iconTechnology___publishedBy___createdAt'
  | 'iconTechnology___publishedBy___kind'
  | 'iconTechnology___publishedBy___id'
  | 'iconTechnology___publishedBy___parent___id'
  | 'iconTechnology___publishedBy___parent___children'
  | 'iconTechnology___publishedBy___children'
  | 'iconTechnology___publishedBy___children___id'
  | 'iconTechnology___publishedBy___children___children'
  | 'iconTechnology___publishedBy___internal___content'
  | 'iconTechnology___publishedBy___internal___contentDigest'
  | 'iconTechnology___publishedBy___internal___description'
  | 'iconTechnology___publishedBy___internal___fieldOwners'
  | 'iconTechnology___publishedBy___internal___ignoreType'
  | 'iconTechnology___publishedBy___internal___mediaType'
  | 'iconTechnology___publishedBy___internal___owner'
  | 'iconTechnology___publishedBy___internal___type'
  | 'iconTechnology___publishedBy___internal___contentFilePath'
  | 'iconTechnology___updatedBy___remoteTypeName'
  | 'iconTechnology___updatedBy___remoteId'
  | 'iconTechnology___updatedBy___stage'
  | 'iconTechnology___updatedBy___isActive'
  | 'iconTechnology___updatedBy___picture'
  | 'iconTechnology___updatedBy___name'
  | 'iconTechnology___updatedBy___publishedAt'
  | 'iconTechnology___updatedBy___updatedAt'
  | 'iconTechnology___updatedBy___createdAt'
  | 'iconTechnology___updatedBy___kind'
  | 'iconTechnology___updatedBy___id'
  | 'iconTechnology___updatedBy___parent___id'
  | 'iconTechnology___updatedBy___parent___children'
  | 'iconTechnology___updatedBy___children'
  | 'iconTechnology___updatedBy___children___id'
  | 'iconTechnology___updatedBy___children___children'
  | 'iconTechnology___updatedBy___internal___content'
  | 'iconTechnology___updatedBy___internal___contentDigest'
  | 'iconTechnology___updatedBy___internal___description'
  | 'iconTechnology___updatedBy___internal___fieldOwners'
  | 'iconTechnology___updatedBy___internal___ignoreType'
  | 'iconTechnology___updatedBy___internal___mediaType'
  | 'iconTechnology___updatedBy___internal___owner'
  | 'iconTechnology___updatedBy___internal___type'
  | 'iconTechnology___updatedBy___internal___contentFilePath'
  | 'iconTechnology___createdBy___remoteTypeName'
  | 'iconTechnology___createdBy___remoteId'
  | 'iconTechnology___createdBy___stage'
  | 'iconTechnology___createdBy___isActive'
  | 'iconTechnology___createdBy___picture'
  | 'iconTechnology___createdBy___name'
  | 'iconTechnology___createdBy___publishedAt'
  | 'iconTechnology___createdBy___updatedAt'
  | 'iconTechnology___createdBy___createdAt'
  | 'iconTechnology___createdBy___kind'
  | 'iconTechnology___createdBy___id'
  | 'iconTechnology___createdBy___parent___id'
  | 'iconTechnology___createdBy___parent___children'
  | 'iconTechnology___createdBy___children'
  | 'iconTechnology___createdBy___children___id'
  | 'iconTechnology___createdBy___children___children'
  | 'iconTechnology___createdBy___internal___content'
  | 'iconTechnology___createdBy___internal___contentDigest'
  | 'iconTechnology___createdBy___internal___description'
  | 'iconTechnology___createdBy___internal___fieldOwners'
  | 'iconTechnology___createdBy___internal___ignoreType'
  | 'iconTechnology___createdBy___internal___mediaType'
  | 'iconTechnology___createdBy___internal___owner'
  | 'iconTechnology___createdBy___internal___type'
  | 'iconTechnology___createdBy___internal___contentFilePath'
  | 'iconTechnology___icon___remoteTypeName'
  | 'iconTechnology___icon___remoteId'
  | 'iconTechnology___icon___locale'
  | 'iconTechnology___icon___stage'
  | 'iconTechnology___icon___mimeType'
  | 'iconTechnology___icon___size'
  | 'iconTechnology___icon___width'
  | 'iconTechnology___icon___height'
  | 'iconTechnology___icon___fileName'
  | 'iconTechnology___icon___handle'
  | 'iconTechnology___icon___publishedAt'
  | 'iconTechnology___icon___updatedAt'
  | 'iconTechnology___icon___createdAt'
  | 'iconTechnology___icon___publishedBy___remoteTypeName'
  | 'iconTechnology___icon___publishedBy___remoteId'
  | 'iconTechnology___icon___publishedBy___stage'
  | 'iconTechnology___icon___publishedBy___isActive'
  | 'iconTechnology___icon___publishedBy___picture'
  | 'iconTechnology___icon___publishedBy___name'
  | 'iconTechnology___icon___publishedBy___publishedAt'
  | 'iconTechnology___icon___publishedBy___updatedAt'
  | 'iconTechnology___icon___publishedBy___createdAt'
  | 'iconTechnology___icon___publishedBy___kind'
  | 'iconTechnology___icon___publishedBy___id'
  | 'iconTechnology___icon___publishedBy___children'
  | 'iconTechnology___icon___updatedBy___remoteTypeName'
  | 'iconTechnology___icon___updatedBy___remoteId'
  | 'iconTechnology___icon___updatedBy___stage'
  | 'iconTechnology___icon___updatedBy___isActive'
  | 'iconTechnology___icon___updatedBy___picture'
  | 'iconTechnology___icon___updatedBy___name'
  | 'iconTechnology___icon___updatedBy___publishedAt'
  | 'iconTechnology___icon___updatedBy___updatedAt'
  | 'iconTechnology___icon___updatedBy___createdAt'
  | 'iconTechnology___icon___updatedBy___kind'
  | 'iconTechnology___icon___updatedBy___id'
  | 'iconTechnology___icon___updatedBy___children'
  | 'iconTechnology___icon___createdBy___remoteTypeName'
  | 'iconTechnology___icon___createdBy___remoteId'
  | 'iconTechnology___icon___createdBy___stage'
  | 'iconTechnology___icon___createdBy___isActive'
  | 'iconTechnology___icon___createdBy___picture'
  | 'iconTechnology___icon___createdBy___name'
  | 'iconTechnology___icon___createdBy___publishedAt'
  | 'iconTechnology___icon___createdBy___updatedAt'
  | 'iconTechnology___icon___createdBy___createdAt'
  | 'iconTechnology___icon___createdBy___kind'
  | 'iconTechnology___icon___createdBy___id'
  | 'iconTechnology___icon___createdBy___children'
  | 'iconTechnology___icon___carouselImagesPortfolioItem'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___remoteTypeName'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___remoteId'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___stage'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___publishedAt'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___updatedAt'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___createdAt'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___title'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___description'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___techSheet'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___carouselImages'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___links'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___scheduledIn'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___gatsbyPath'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___id'
  | 'iconTechnology___icon___carouselImagesPortfolioItem___children'
  | 'iconTechnology___icon___iconSpeciality'
  | 'iconTechnology___icon___iconSpeciality___remoteTypeName'
  | 'iconTechnology___icon___iconSpeciality___remoteId'
  | 'iconTechnology___icon___iconSpeciality___stage'
  | 'iconTechnology___icon___iconSpeciality___publishedAt'
  | 'iconTechnology___icon___iconSpeciality___updatedAt'
  | 'iconTechnology___icon___iconSpeciality___createdAt'
  | 'iconTechnology___icon___iconSpeciality___title'
  | 'iconTechnology___icon___iconSpeciality___scheduledIn'
  | 'iconTechnology___icon___iconSpeciality___id'
  | 'iconTechnology___icon___iconSpeciality___children'
  | 'iconTechnology___icon___iconTechnology'
  | 'iconTechnology___icon___iconTechnology___remoteTypeName'
  | 'iconTechnology___icon___iconTechnology___remoteId'
  | 'iconTechnology___icon___iconTechnology___stage'
  | 'iconTechnology___icon___iconTechnology___publishedAt'
  | 'iconTechnology___icon___iconTechnology___updatedAt'
  | 'iconTechnology___icon___iconTechnology___createdAt'
  | 'iconTechnology___icon___iconTechnology___title'
  | 'iconTechnology___icon___iconTechnology___scheduledIn'
  | 'iconTechnology___icon___iconTechnology___id'
  | 'iconTechnology___icon___iconTechnology___children'
  | 'iconTechnology___icon___headerImageBlog'
  | 'iconTechnology___icon___headerImageBlog___remoteTypeName'
  | 'iconTechnology___icon___headerImageBlog___remoteId'
  | 'iconTechnology___icon___headerImageBlog___stage'
  | 'iconTechnology___icon___headerImageBlog___publishedAt'
  | 'iconTechnology___icon___headerImageBlog___updatedAt'
  | 'iconTechnology___icon___headerImageBlog___createdAt'
  | 'iconTechnology___icon___headerImageBlog___title'
  | 'iconTechnology___icon___headerImageBlog___description'
  | 'iconTechnology___icon___headerImageBlog___type'
  | 'iconTechnology___icon___headerImageBlog___categories'
  | 'iconTechnology___icon___headerImageBlog___scheduledIn'
  | 'iconTechnology___icon___headerImageBlog___gatsbyPath'
  | 'iconTechnology___icon___headerImageBlog___id'
  | 'iconTechnology___icon___headerImageBlog___children'
  | 'iconTechnology___icon___scheduledIn'
  | 'iconTechnology___icon___scheduledIn___remoteTypeName'
  | 'iconTechnology___icon___scheduledIn___remoteId'
  | 'iconTechnology___icon___scheduledIn___stage'
  | 'iconTechnology___icon___scheduledIn___rawPayload'
  | 'iconTechnology___icon___scheduledIn___errorMessage'
  | 'iconTechnology___icon___scheduledIn___description'
  | 'iconTechnology___icon___scheduledIn___publishedAt'
  | 'iconTechnology___icon___scheduledIn___updatedAt'
  | 'iconTechnology___icon___scheduledIn___createdAt'
  | 'iconTechnology___icon___scheduledIn___status'
  | 'iconTechnology___icon___scheduledIn___id'
  | 'iconTechnology___icon___scheduledIn___children'
  | 'iconTechnology___icon___url'
  | 'iconTechnology___icon___id'
  | 'iconTechnology___icon___parent___id'
  | 'iconTechnology___icon___parent___children'
  | 'iconTechnology___icon___children'
  | 'iconTechnology___icon___children___id'
  | 'iconTechnology___icon___children___children'
  | 'iconTechnology___icon___internal___content'
  | 'iconTechnology___icon___internal___contentDigest'
  | 'iconTechnology___icon___internal___description'
  | 'iconTechnology___icon___internal___fieldOwners'
  | 'iconTechnology___icon___internal___ignoreType'
  | 'iconTechnology___icon___internal___mediaType'
  | 'iconTechnology___icon___internal___owner'
  | 'iconTechnology___icon___internal___type'
  | 'iconTechnology___icon___internal___contentFilePath'
  | 'iconTechnology___scheduledIn'
  | 'iconTechnology___scheduledIn___remoteTypeName'
  | 'iconTechnology___scheduledIn___remoteId'
  | 'iconTechnology___scheduledIn___stage'
  | 'iconTechnology___scheduledIn___rawPayload'
  | 'iconTechnology___scheduledIn___errorMessage'
  | 'iconTechnology___scheduledIn___description'
  | 'iconTechnology___scheduledIn___publishedAt'
  | 'iconTechnology___scheduledIn___updatedAt'
  | 'iconTechnology___scheduledIn___createdAt'
  | 'iconTechnology___scheduledIn___release___remoteTypeName'
  | 'iconTechnology___scheduledIn___release___remoteId'
  | 'iconTechnology___scheduledIn___release___stage'
  | 'iconTechnology___scheduledIn___release___releaseAt'
  | 'iconTechnology___scheduledIn___release___isImplicit'
  | 'iconTechnology___scheduledIn___release___isActive'
  | 'iconTechnology___scheduledIn___release___errorMessage'
  | 'iconTechnology___scheduledIn___release___description'
  | 'iconTechnology___scheduledIn___release___title'
  | 'iconTechnology___scheduledIn___release___publishedAt'
  | 'iconTechnology___scheduledIn___release___updatedAt'
  | 'iconTechnology___scheduledIn___release___createdAt'
  | 'iconTechnology___scheduledIn___release___operations'
  | 'iconTechnology___scheduledIn___release___status'
  | 'iconTechnology___scheduledIn___release___id'
  | 'iconTechnology___scheduledIn___release___children'
  | 'iconTechnology___scheduledIn___publishedBy___remoteTypeName'
  | 'iconTechnology___scheduledIn___publishedBy___remoteId'
  | 'iconTechnology___scheduledIn___publishedBy___stage'
  | 'iconTechnology___scheduledIn___publishedBy___isActive'
  | 'iconTechnology___scheduledIn___publishedBy___picture'
  | 'iconTechnology___scheduledIn___publishedBy___name'
  | 'iconTechnology___scheduledIn___publishedBy___publishedAt'
  | 'iconTechnology___scheduledIn___publishedBy___updatedAt'
  | 'iconTechnology___scheduledIn___publishedBy___createdAt'
  | 'iconTechnology___scheduledIn___publishedBy___kind'
  | 'iconTechnology___scheduledIn___publishedBy___id'
  | 'iconTechnology___scheduledIn___publishedBy___children'
  | 'iconTechnology___scheduledIn___updatedBy___remoteTypeName'
  | 'iconTechnology___scheduledIn___updatedBy___remoteId'
  | 'iconTechnology___scheduledIn___updatedBy___stage'
  | 'iconTechnology___scheduledIn___updatedBy___isActive'
  | 'iconTechnology___scheduledIn___updatedBy___picture'
  | 'iconTechnology___scheduledIn___updatedBy___name'
  | 'iconTechnology___scheduledIn___updatedBy___publishedAt'
  | 'iconTechnology___scheduledIn___updatedBy___updatedAt'
  | 'iconTechnology___scheduledIn___updatedBy___createdAt'
  | 'iconTechnology___scheduledIn___updatedBy___kind'
  | 'iconTechnology___scheduledIn___updatedBy___id'
  | 'iconTechnology___scheduledIn___updatedBy___children'
  | 'iconTechnology___scheduledIn___createdBy___remoteTypeName'
  | 'iconTechnology___scheduledIn___createdBy___remoteId'
  | 'iconTechnology___scheduledIn___createdBy___stage'
  | 'iconTechnology___scheduledIn___createdBy___isActive'
  | 'iconTechnology___scheduledIn___createdBy___picture'
  | 'iconTechnology___scheduledIn___createdBy___name'
  | 'iconTechnology___scheduledIn___createdBy___publishedAt'
  | 'iconTechnology___scheduledIn___createdBy___updatedAt'
  | 'iconTechnology___scheduledIn___createdBy___createdAt'
  | 'iconTechnology___scheduledIn___createdBy___kind'
  | 'iconTechnology___scheduledIn___createdBy___id'
  | 'iconTechnology___scheduledIn___createdBy___children'
  | 'iconTechnology___scheduledIn___status'
  | 'iconTechnology___scheduledIn___id'
  | 'iconTechnology___scheduledIn___parent___id'
  | 'iconTechnology___scheduledIn___parent___children'
  | 'iconTechnology___scheduledIn___children'
  | 'iconTechnology___scheduledIn___children___id'
  | 'iconTechnology___scheduledIn___children___children'
  | 'iconTechnology___scheduledIn___internal___content'
  | 'iconTechnology___scheduledIn___internal___contentDigest'
  | 'iconTechnology___scheduledIn___internal___description'
  | 'iconTechnology___scheduledIn___internal___fieldOwners'
  | 'iconTechnology___scheduledIn___internal___ignoreType'
  | 'iconTechnology___scheduledIn___internal___mediaType'
  | 'iconTechnology___scheduledIn___internal___owner'
  | 'iconTechnology___scheduledIn___internal___type'
  | 'iconTechnology___scheduledIn___internal___contentFilePath'
  | 'iconTechnology___id'
  | 'iconTechnology___parent___id'
  | 'iconTechnology___parent___parent___id'
  | 'iconTechnology___parent___parent___children'
  | 'iconTechnology___parent___children'
  | 'iconTechnology___parent___children___id'
  | 'iconTechnology___parent___children___children'
  | 'iconTechnology___parent___internal___content'
  | 'iconTechnology___parent___internal___contentDigest'
  | 'iconTechnology___parent___internal___description'
  | 'iconTechnology___parent___internal___fieldOwners'
  | 'iconTechnology___parent___internal___ignoreType'
  | 'iconTechnology___parent___internal___mediaType'
  | 'iconTechnology___parent___internal___owner'
  | 'iconTechnology___parent___internal___type'
  | 'iconTechnology___parent___internal___contentFilePath'
  | 'iconTechnology___children'
  | 'iconTechnology___children___id'
  | 'iconTechnology___children___parent___id'
  | 'iconTechnology___children___parent___children'
  | 'iconTechnology___children___children'
  | 'iconTechnology___children___children___id'
  | 'iconTechnology___children___children___children'
  | 'iconTechnology___children___internal___content'
  | 'iconTechnology___children___internal___contentDigest'
  | 'iconTechnology___children___internal___description'
  | 'iconTechnology___children___internal___fieldOwners'
  | 'iconTechnology___children___internal___ignoreType'
  | 'iconTechnology___children___internal___mediaType'
  | 'iconTechnology___children___internal___owner'
  | 'iconTechnology___children___internal___type'
  | 'iconTechnology___children___internal___contentFilePath'
  | 'iconTechnology___internal___content'
  | 'iconTechnology___internal___contentDigest'
  | 'iconTechnology___internal___description'
  | 'iconTechnology___internal___fieldOwners'
  | 'iconTechnology___internal___ignoreType'
  | 'iconTechnology___internal___mediaType'
  | 'iconTechnology___internal___owner'
  | 'iconTechnology___internal___type'
  | 'iconTechnology___internal___contentFilePath'
  | 'headerImageBlog'
  | 'headerImageBlog___remoteTypeName'
  | 'headerImageBlog___remoteId'
  | 'headerImageBlog___stage'
  | 'headerImageBlog___publishedAt'
  | 'headerImageBlog___updatedAt'
  | 'headerImageBlog___createdAt'
  | 'headerImageBlog___title'
  | 'headerImageBlog___description'
  | 'headerImageBlog___content___remoteTypeName'
  | 'headerImageBlog___content___raw'
  | 'headerImageBlog___content___html'
  | 'headerImageBlog___content___markdown'
  | 'headerImageBlog___content___text'
  | 'headerImageBlog___publishedBy___remoteTypeName'
  | 'headerImageBlog___publishedBy___remoteId'
  | 'headerImageBlog___publishedBy___stage'
  | 'headerImageBlog___publishedBy___isActive'
  | 'headerImageBlog___publishedBy___picture'
  | 'headerImageBlog___publishedBy___name'
  | 'headerImageBlog___publishedBy___publishedAt'
  | 'headerImageBlog___publishedBy___updatedAt'
  | 'headerImageBlog___publishedBy___createdAt'
  | 'headerImageBlog___publishedBy___kind'
  | 'headerImageBlog___publishedBy___id'
  | 'headerImageBlog___publishedBy___parent___id'
  | 'headerImageBlog___publishedBy___parent___children'
  | 'headerImageBlog___publishedBy___children'
  | 'headerImageBlog___publishedBy___children___id'
  | 'headerImageBlog___publishedBy___children___children'
  | 'headerImageBlog___publishedBy___internal___content'
  | 'headerImageBlog___publishedBy___internal___contentDigest'
  | 'headerImageBlog___publishedBy___internal___description'
  | 'headerImageBlog___publishedBy___internal___fieldOwners'
  | 'headerImageBlog___publishedBy___internal___ignoreType'
  | 'headerImageBlog___publishedBy___internal___mediaType'
  | 'headerImageBlog___publishedBy___internal___owner'
  | 'headerImageBlog___publishedBy___internal___type'
  | 'headerImageBlog___publishedBy___internal___contentFilePath'
  | 'headerImageBlog___updatedBy___remoteTypeName'
  | 'headerImageBlog___updatedBy___remoteId'
  | 'headerImageBlog___updatedBy___stage'
  | 'headerImageBlog___updatedBy___isActive'
  | 'headerImageBlog___updatedBy___picture'
  | 'headerImageBlog___updatedBy___name'
  | 'headerImageBlog___updatedBy___publishedAt'
  | 'headerImageBlog___updatedBy___updatedAt'
  | 'headerImageBlog___updatedBy___createdAt'
  | 'headerImageBlog___updatedBy___kind'
  | 'headerImageBlog___updatedBy___id'
  | 'headerImageBlog___updatedBy___parent___id'
  | 'headerImageBlog___updatedBy___parent___children'
  | 'headerImageBlog___updatedBy___children'
  | 'headerImageBlog___updatedBy___children___id'
  | 'headerImageBlog___updatedBy___children___children'
  | 'headerImageBlog___updatedBy___internal___content'
  | 'headerImageBlog___updatedBy___internal___contentDigest'
  | 'headerImageBlog___updatedBy___internal___description'
  | 'headerImageBlog___updatedBy___internal___fieldOwners'
  | 'headerImageBlog___updatedBy___internal___ignoreType'
  | 'headerImageBlog___updatedBy___internal___mediaType'
  | 'headerImageBlog___updatedBy___internal___owner'
  | 'headerImageBlog___updatedBy___internal___type'
  | 'headerImageBlog___updatedBy___internal___contentFilePath'
  | 'headerImageBlog___createdBy___remoteTypeName'
  | 'headerImageBlog___createdBy___remoteId'
  | 'headerImageBlog___createdBy___stage'
  | 'headerImageBlog___createdBy___isActive'
  | 'headerImageBlog___createdBy___picture'
  | 'headerImageBlog___createdBy___name'
  | 'headerImageBlog___createdBy___publishedAt'
  | 'headerImageBlog___createdBy___updatedAt'
  | 'headerImageBlog___createdBy___createdAt'
  | 'headerImageBlog___createdBy___kind'
  | 'headerImageBlog___createdBy___id'
  | 'headerImageBlog___createdBy___parent___id'
  | 'headerImageBlog___createdBy___parent___children'
  | 'headerImageBlog___createdBy___children'
  | 'headerImageBlog___createdBy___children___id'
  | 'headerImageBlog___createdBy___children___children'
  | 'headerImageBlog___createdBy___internal___content'
  | 'headerImageBlog___createdBy___internal___contentDigest'
  | 'headerImageBlog___createdBy___internal___description'
  | 'headerImageBlog___createdBy___internal___fieldOwners'
  | 'headerImageBlog___createdBy___internal___ignoreType'
  | 'headerImageBlog___createdBy___internal___mediaType'
  | 'headerImageBlog___createdBy___internal___owner'
  | 'headerImageBlog___createdBy___internal___type'
  | 'headerImageBlog___createdBy___internal___contentFilePath'
  | 'headerImageBlog___headerImage___remoteTypeName'
  | 'headerImageBlog___headerImage___remoteId'
  | 'headerImageBlog___headerImage___locale'
  | 'headerImageBlog___headerImage___stage'
  | 'headerImageBlog___headerImage___mimeType'
  | 'headerImageBlog___headerImage___size'
  | 'headerImageBlog___headerImage___width'
  | 'headerImageBlog___headerImage___height'
  | 'headerImageBlog___headerImage___fileName'
  | 'headerImageBlog___headerImage___handle'
  | 'headerImageBlog___headerImage___publishedAt'
  | 'headerImageBlog___headerImage___updatedAt'
  | 'headerImageBlog___headerImage___createdAt'
  | 'headerImageBlog___headerImage___publishedBy___remoteTypeName'
  | 'headerImageBlog___headerImage___publishedBy___remoteId'
  | 'headerImageBlog___headerImage___publishedBy___stage'
  | 'headerImageBlog___headerImage___publishedBy___isActive'
  | 'headerImageBlog___headerImage___publishedBy___picture'
  | 'headerImageBlog___headerImage___publishedBy___name'
  | 'headerImageBlog___headerImage___publishedBy___publishedAt'
  | 'headerImageBlog___headerImage___publishedBy___updatedAt'
  | 'headerImageBlog___headerImage___publishedBy___createdAt'
  | 'headerImageBlog___headerImage___publishedBy___kind'
  | 'headerImageBlog___headerImage___publishedBy___id'
  | 'headerImageBlog___headerImage___publishedBy___children'
  | 'headerImageBlog___headerImage___updatedBy___remoteTypeName'
  | 'headerImageBlog___headerImage___updatedBy___remoteId'
  | 'headerImageBlog___headerImage___updatedBy___stage'
  | 'headerImageBlog___headerImage___updatedBy___isActive'
  | 'headerImageBlog___headerImage___updatedBy___picture'
  | 'headerImageBlog___headerImage___updatedBy___name'
  | 'headerImageBlog___headerImage___updatedBy___publishedAt'
  | 'headerImageBlog___headerImage___updatedBy___updatedAt'
  | 'headerImageBlog___headerImage___updatedBy___createdAt'
  | 'headerImageBlog___headerImage___updatedBy___kind'
  | 'headerImageBlog___headerImage___updatedBy___id'
  | 'headerImageBlog___headerImage___updatedBy___children'
  | 'headerImageBlog___headerImage___createdBy___remoteTypeName'
  | 'headerImageBlog___headerImage___createdBy___remoteId'
  | 'headerImageBlog___headerImage___createdBy___stage'
  | 'headerImageBlog___headerImage___createdBy___isActive'
  | 'headerImageBlog___headerImage___createdBy___picture'
  | 'headerImageBlog___headerImage___createdBy___name'
  | 'headerImageBlog___headerImage___createdBy___publishedAt'
  | 'headerImageBlog___headerImage___createdBy___updatedAt'
  | 'headerImageBlog___headerImage___createdBy___createdAt'
  | 'headerImageBlog___headerImage___createdBy___kind'
  | 'headerImageBlog___headerImage___createdBy___id'
  | 'headerImageBlog___headerImage___createdBy___children'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___remoteTypeName'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___remoteId'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___stage'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___publishedAt'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___updatedAt'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___createdAt'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___title'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___description'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___techSheet'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___carouselImages'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___links'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___scheduledIn'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___gatsbyPath'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___id'
  | 'headerImageBlog___headerImage___carouselImagesPortfolioItem___children'
  | 'headerImageBlog___headerImage___iconSpeciality'
  | 'headerImageBlog___headerImage___iconSpeciality___remoteTypeName'
  | 'headerImageBlog___headerImage___iconSpeciality___remoteId'
  | 'headerImageBlog___headerImage___iconSpeciality___stage'
  | 'headerImageBlog___headerImage___iconSpeciality___publishedAt'
  | 'headerImageBlog___headerImage___iconSpeciality___updatedAt'
  | 'headerImageBlog___headerImage___iconSpeciality___createdAt'
  | 'headerImageBlog___headerImage___iconSpeciality___title'
  | 'headerImageBlog___headerImage___iconSpeciality___scheduledIn'
  | 'headerImageBlog___headerImage___iconSpeciality___id'
  | 'headerImageBlog___headerImage___iconSpeciality___children'
  | 'headerImageBlog___headerImage___iconTechnology'
  | 'headerImageBlog___headerImage___iconTechnology___remoteTypeName'
  | 'headerImageBlog___headerImage___iconTechnology___remoteId'
  | 'headerImageBlog___headerImage___iconTechnology___stage'
  | 'headerImageBlog___headerImage___iconTechnology___publishedAt'
  | 'headerImageBlog___headerImage___iconTechnology___updatedAt'
  | 'headerImageBlog___headerImage___iconTechnology___createdAt'
  | 'headerImageBlog___headerImage___iconTechnology___title'
  | 'headerImageBlog___headerImage___iconTechnology___scheduledIn'
  | 'headerImageBlog___headerImage___iconTechnology___id'
  | 'headerImageBlog___headerImage___iconTechnology___children'
  | 'headerImageBlog___headerImage___headerImageBlog'
  | 'headerImageBlog___headerImage___headerImageBlog___remoteTypeName'
  | 'headerImageBlog___headerImage___headerImageBlog___remoteId'
  | 'headerImageBlog___headerImage___headerImageBlog___stage'
  | 'headerImageBlog___headerImage___headerImageBlog___publishedAt'
  | 'headerImageBlog___headerImage___headerImageBlog___updatedAt'
  | 'headerImageBlog___headerImage___headerImageBlog___createdAt'
  | 'headerImageBlog___headerImage___headerImageBlog___title'
  | 'headerImageBlog___headerImage___headerImageBlog___description'
  | 'headerImageBlog___headerImage___headerImageBlog___type'
  | 'headerImageBlog___headerImage___headerImageBlog___categories'
  | 'headerImageBlog___headerImage___headerImageBlog___scheduledIn'
  | 'headerImageBlog___headerImage___headerImageBlog___gatsbyPath'
  | 'headerImageBlog___headerImage___headerImageBlog___id'
  | 'headerImageBlog___headerImage___headerImageBlog___children'
  | 'headerImageBlog___headerImage___scheduledIn'
  | 'headerImageBlog___headerImage___scheduledIn___remoteTypeName'
  | 'headerImageBlog___headerImage___scheduledIn___remoteId'
  | 'headerImageBlog___headerImage___scheduledIn___stage'
  | 'headerImageBlog___headerImage___scheduledIn___rawPayload'
  | 'headerImageBlog___headerImage___scheduledIn___errorMessage'
  | 'headerImageBlog___headerImage___scheduledIn___description'
  | 'headerImageBlog___headerImage___scheduledIn___publishedAt'
  | 'headerImageBlog___headerImage___scheduledIn___updatedAt'
  | 'headerImageBlog___headerImage___scheduledIn___createdAt'
  | 'headerImageBlog___headerImage___scheduledIn___status'
  | 'headerImageBlog___headerImage___scheduledIn___id'
  | 'headerImageBlog___headerImage___scheduledIn___children'
  | 'headerImageBlog___headerImage___url'
  | 'headerImageBlog___headerImage___id'
  | 'headerImageBlog___headerImage___parent___id'
  | 'headerImageBlog___headerImage___parent___children'
  | 'headerImageBlog___headerImage___children'
  | 'headerImageBlog___headerImage___children___id'
  | 'headerImageBlog___headerImage___children___children'
  | 'headerImageBlog___headerImage___internal___content'
  | 'headerImageBlog___headerImage___internal___contentDigest'
  | 'headerImageBlog___headerImage___internal___description'
  | 'headerImageBlog___headerImage___internal___fieldOwners'
  | 'headerImageBlog___headerImage___internal___ignoreType'
  | 'headerImageBlog___headerImage___internal___mediaType'
  | 'headerImageBlog___headerImage___internal___owner'
  | 'headerImageBlog___headerImage___internal___type'
  | 'headerImageBlog___headerImage___internal___contentFilePath'
  | 'headerImageBlog___type'
  | 'headerImageBlog___categories'
  | 'headerImageBlog___scheduledIn'
  | 'headerImageBlog___scheduledIn___remoteTypeName'
  | 'headerImageBlog___scheduledIn___remoteId'
  | 'headerImageBlog___scheduledIn___stage'
  | 'headerImageBlog___scheduledIn___rawPayload'
  | 'headerImageBlog___scheduledIn___errorMessage'
  | 'headerImageBlog___scheduledIn___description'
  | 'headerImageBlog___scheduledIn___publishedAt'
  | 'headerImageBlog___scheduledIn___updatedAt'
  | 'headerImageBlog___scheduledIn___createdAt'
  | 'headerImageBlog___scheduledIn___release___remoteTypeName'
  | 'headerImageBlog___scheduledIn___release___remoteId'
  | 'headerImageBlog___scheduledIn___release___stage'
  | 'headerImageBlog___scheduledIn___release___releaseAt'
  | 'headerImageBlog___scheduledIn___release___isImplicit'
  | 'headerImageBlog___scheduledIn___release___isActive'
  | 'headerImageBlog___scheduledIn___release___errorMessage'
  | 'headerImageBlog___scheduledIn___release___description'
  | 'headerImageBlog___scheduledIn___release___title'
  | 'headerImageBlog___scheduledIn___release___publishedAt'
  | 'headerImageBlog___scheduledIn___release___updatedAt'
  | 'headerImageBlog___scheduledIn___release___createdAt'
  | 'headerImageBlog___scheduledIn___release___operations'
  | 'headerImageBlog___scheduledIn___release___status'
  | 'headerImageBlog___scheduledIn___release___id'
  | 'headerImageBlog___scheduledIn___release___children'
  | 'headerImageBlog___scheduledIn___publishedBy___remoteTypeName'
  | 'headerImageBlog___scheduledIn___publishedBy___remoteId'
  | 'headerImageBlog___scheduledIn___publishedBy___stage'
  | 'headerImageBlog___scheduledIn___publishedBy___isActive'
  | 'headerImageBlog___scheduledIn___publishedBy___picture'
  | 'headerImageBlog___scheduledIn___publishedBy___name'
  | 'headerImageBlog___scheduledIn___publishedBy___publishedAt'
  | 'headerImageBlog___scheduledIn___publishedBy___updatedAt'
  | 'headerImageBlog___scheduledIn___publishedBy___createdAt'
  | 'headerImageBlog___scheduledIn___publishedBy___kind'
  | 'headerImageBlog___scheduledIn___publishedBy___id'
  | 'headerImageBlog___scheduledIn___publishedBy___children'
  | 'headerImageBlog___scheduledIn___updatedBy___remoteTypeName'
  | 'headerImageBlog___scheduledIn___updatedBy___remoteId'
  | 'headerImageBlog___scheduledIn___updatedBy___stage'
  | 'headerImageBlog___scheduledIn___updatedBy___isActive'
  | 'headerImageBlog___scheduledIn___updatedBy___picture'
  | 'headerImageBlog___scheduledIn___updatedBy___name'
  | 'headerImageBlog___scheduledIn___updatedBy___publishedAt'
  | 'headerImageBlog___scheduledIn___updatedBy___updatedAt'
  | 'headerImageBlog___scheduledIn___updatedBy___createdAt'
  | 'headerImageBlog___scheduledIn___updatedBy___kind'
  | 'headerImageBlog___scheduledIn___updatedBy___id'
  | 'headerImageBlog___scheduledIn___updatedBy___children'
  | 'headerImageBlog___scheduledIn___createdBy___remoteTypeName'
  | 'headerImageBlog___scheduledIn___createdBy___remoteId'
  | 'headerImageBlog___scheduledIn___createdBy___stage'
  | 'headerImageBlog___scheduledIn___createdBy___isActive'
  | 'headerImageBlog___scheduledIn___createdBy___picture'
  | 'headerImageBlog___scheduledIn___createdBy___name'
  | 'headerImageBlog___scheduledIn___createdBy___publishedAt'
  | 'headerImageBlog___scheduledIn___createdBy___updatedAt'
  | 'headerImageBlog___scheduledIn___createdBy___createdAt'
  | 'headerImageBlog___scheduledIn___createdBy___kind'
  | 'headerImageBlog___scheduledIn___createdBy___id'
  | 'headerImageBlog___scheduledIn___createdBy___children'
  | 'headerImageBlog___scheduledIn___status'
  | 'headerImageBlog___scheduledIn___id'
  | 'headerImageBlog___scheduledIn___parent___id'
  | 'headerImageBlog___scheduledIn___parent___children'
  | 'headerImageBlog___scheduledIn___children'
  | 'headerImageBlog___scheduledIn___children___id'
  | 'headerImageBlog___scheduledIn___children___children'
  | 'headerImageBlog___scheduledIn___internal___content'
  | 'headerImageBlog___scheduledIn___internal___contentDigest'
  | 'headerImageBlog___scheduledIn___internal___description'
  | 'headerImageBlog___scheduledIn___internal___fieldOwners'
  | 'headerImageBlog___scheduledIn___internal___ignoreType'
  | 'headerImageBlog___scheduledIn___internal___mediaType'
  | 'headerImageBlog___scheduledIn___internal___owner'
  | 'headerImageBlog___scheduledIn___internal___type'
  | 'headerImageBlog___scheduledIn___internal___contentFilePath'
  | 'headerImageBlog___gatsbyPath'
  | 'headerImageBlog___id'
  | 'headerImageBlog___parent___id'
  | 'headerImageBlog___parent___parent___id'
  | 'headerImageBlog___parent___parent___children'
  | 'headerImageBlog___parent___children'
  | 'headerImageBlog___parent___children___id'
  | 'headerImageBlog___parent___children___children'
  | 'headerImageBlog___parent___internal___content'
  | 'headerImageBlog___parent___internal___contentDigest'
  | 'headerImageBlog___parent___internal___description'
  | 'headerImageBlog___parent___internal___fieldOwners'
  | 'headerImageBlog___parent___internal___ignoreType'
  | 'headerImageBlog___parent___internal___mediaType'
  | 'headerImageBlog___parent___internal___owner'
  | 'headerImageBlog___parent___internal___type'
  | 'headerImageBlog___parent___internal___contentFilePath'
  | 'headerImageBlog___children'
  | 'headerImageBlog___children___id'
  | 'headerImageBlog___children___parent___id'
  | 'headerImageBlog___children___parent___children'
  | 'headerImageBlog___children___children'
  | 'headerImageBlog___children___children___id'
  | 'headerImageBlog___children___children___children'
  | 'headerImageBlog___children___internal___content'
  | 'headerImageBlog___children___internal___contentDigest'
  | 'headerImageBlog___children___internal___description'
  | 'headerImageBlog___children___internal___fieldOwners'
  | 'headerImageBlog___children___internal___ignoreType'
  | 'headerImageBlog___children___internal___mediaType'
  | 'headerImageBlog___children___internal___owner'
  | 'headerImageBlog___children___internal___type'
  | 'headerImageBlog___children___internal___contentFilePath'
  | 'headerImageBlog___internal___content'
  | 'headerImageBlog___internal___contentDigest'
  | 'headerImageBlog___internal___description'
  | 'headerImageBlog___internal___fieldOwners'
  | 'headerImageBlog___internal___ignoreType'
  | 'headerImageBlog___internal___mediaType'
  | 'headerImageBlog___internal___owner'
  | 'headerImageBlog___internal___type'
  | 'headerImageBlog___internal___contentFilePath'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___description'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___release___internal___contentFilePath'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___publishedBy___internal___contentFilePath'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___updatedBy___internal___contentFilePath'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___createdBy___internal___contentFilePath'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___parent___internal___contentFilePath'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___children___internal___contentFilePath'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'scheduledIn___internal___contentFilePath'
  | 'url'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type GraphCms_AssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_AssetEdge>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_AssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_AssetGroupConnectionDistinctArgs = {
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetGroupConnectionMaxArgs = {
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetGroupConnectionMinArgs = {
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetGroupConnectionSumArgs = {
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_AssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_UserConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_UserEdge>;
  nodes: Array<GraphCms_User>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_UserGroupConnection>;
};

export type GraphCms_UserConnectionDistinctArgs = {
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserConnectionMaxArgs = {
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserConnectionMinArgs = {
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserConnectionSumArgs = {
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserEdge = {
  next?: Maybe<GraphCms_User>;
  node: GraphCms_User;
  previous?: Maybe<GraphCms_User>;
};

export type GraphCms_UserFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'isActive'
  | 'picture'
  | 'name'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'kind'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type GraphCms_UserGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_UserEdge>;
  nodes: Array<GraphCms_User>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_UserGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_UserGroupConnectionDistinctArgs = {
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserGroupConnectionMaxArgs = {
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserGroupConnectionMinArgs = {
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserGroupConnectionSumArgs = {
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_UserFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_PortfolioItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_PortfolioItemEdge>;
  nodes: Array<GraphCms_PortfolioItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_PortfolioItemGroupConnection>;
};

export type GraphCms_PortfolioItemConnectionDistinctArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemConnectionMaxArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemConnectionMinArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemConnectionSumArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemEdge = {
  next?: Maybe<GraphCms_PortfolioItem>;
  node: GraphCms_PortfolioItem;
  previous?: Maybe<GraphCms_PortfolioItem>;
};

export type GraphCms_PortfolioItemFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'title'
  | 'description'
  | 'about___remoteTypeName'
  | 'about___raw'
  | 'about___html'
  | 'about___markdown'
  | 'about___text'
  | 'techSheet'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___isActive'
  | 'publishedBy___picture'
  | 'publishedBy___name'
  | 'publishedBy___publishedAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___createdAt'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___parent___internal___contentFilePath'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___children___internal___contentFilePath'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'publishedBy___internal___contentFilePath'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___isActive'
  | 'updatedBy___picture'
  | 'updatedBy___name'
  | 'updatedBy___publishedAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___createdAt'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___parent___internal___contentFilePath'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___children___internal___contentFilePath'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'updatedBy___internal___contentFilePath'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___isActive'
  | 'createdBy___picture'
  | 'createdBy___name'
  | 'createdBy___publishedAt'
  | 'createdBy___updatedAt'
  | 'createdBy___createdAt'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___parent___internal___contentFilePath'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___children___internal___contentFilePath'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'createdBy___internal___contentFilePath'
  | 'carouselImages'
  | 'carouselImages___remoteTypeName'
  | 'carouselImages___remoteId'
  | 'carouselImages___locale'
  | 'carouselImages___stage'
  | 'carouselImages___mimeType'
  | 'carouselImages___size'
  | 'carouselImages___width'
  | 'carouselImages___height'
  | 'carouselImages___fileName'
  | 'carouselImages___handle'
  | 'carouselImages___publishedAt'
  | 'carouselImages___updatedAt'
  | 'carouselImages___createdAt'
  | 'carouselImages___publishedBy___remoteTypeName'
  | 'carouselImages___publishedBy___remoteId'
  | 'carouselImages___publishedBy___stage'
  | 'carouselImages___publishedBy___isActive'
  | 'carouselImages___publishedBy___picture'
  | 'carouselImages___publishedBy___name'
  | 'carouselImages___publishedBy___publishedAt'
  | 'carouselImages___publishedBy___updatedAt'
  | 'carouselImages___publishedBy___createdAt'
  | 'carouselImages___publishedBy___kind'
  | 'carouselImages___publishedBy___id'
  | 'carouselImages___publishedBy___parent___id'
  | 'carouselImages___publishedBy___parent___children'
  | 'carouselImages___publishedBy___children'
  | 'carouselImages___publishedBy___children___id'
  | 'carouselImages___publishedBy___children___children'
  | 'carouselImages___publishedBy___internal___content'
  | 'carouselImages___publishedBy___internal___contentDigest'
  | 'carouselImages___publishedBy___internal___description'
  | 'carouselImages___publishedBy___internal___fieldOwners'
  | 'carouselImages___publishedBy___internal___ignoreType'
  | 'carouselImages___publishedBy___internal___mediaType'
  | 'carouselImages___publishedBy___internal___owner'
  | 'carouselImages___publishedBy___internal___type'
  | 'carouselImages___publishedBy___internal___contentFilePath'
  | 'carouselImages___updatedBy___remoteTypeName'
  | 'carouselImages___updatedBy___remoteId'
  | 'carouselImages___updatedBy___stage'
  | 'carouselImages___updatedBy___isActive'
  | 'carouselImages___updatedBy___picture'
  | 'carouselImages___updatedBy___name'
  | 'carouselImages___updatedBy___publishedAt'
  | 'carouselImages___updatedBy___updatedAt'
  | 'carouselImages___updatedBy___createdAt'
  | 'carouselImages___updatedBy___kind'
  | 'carouselImages___updatedBy___id'
  | 'carouselImages___updatedBy___parent___id'
  | 'carouselImages___updatedBy___parent___children'
  | 'carouselImages___updatedBy___children'
  | 'carouselImages___updatedBy___children___id'
  | 'carouselImages___updatedBy___children___children'
  | 'carouselImages___updatedBy___internal___content'
  | 'carouselImages___updatedBy___internal___contentDigest'
  | 'carouselImages___updatedBy___internal___description'
  | 'carouselImages___updatedBy___internal___fieldOwners'
  | 'carouselImages___updatedBy___internal___ignoreType'
  | 'carouselImages___updatedBy___internal___mediaType'
  | 'carouselImages___updatedBy___internal___owner'
  | 'carouselImages___updatedBy___internal___type'
  | 'carouselImages___updatedBy___internal___contentFilePath'
  | 'carouselImages___createdBy___remoteTypeName'
  | 'carouselImages___createdBy___remoteId'
  | 'carouselImages___createdBy___stage'
  | 'carouselImages___createdBy___isActive'
  | 'carouselImages___createdBy___picture'
  | 'carouselImages___createdBy___name'
  | 'carouselImages___createdBy___publishedAt'
  | 'carouselImages___createdBy___updatedAt'
  | 'carouselImages___createdBy___createdAt'
  | 'carouselImages___createdBy___kind'
  | 'carouselImages___createdBy___id'
  | 'carouselImages___createdBy___parent___id'
  | 'carouselImages___createdBy___parent___children'
  | 'carouselImages___createdBy___children'
  | 'carouselImages___createdBy___children___id'
  | 'carouselImages___createdBy___children___children'
  | 'carouselImages___createdBy___internal___content'
  | 'carouselImages___createdBy___internal___contentDigest'
  | 'carouselImages___createdBy___internal___description'
  | 'carouselImages___createdBy___internal___fieldOwners'
  | 'carouselImages___createdBy___internal___ignoreType'
  | 'carouselImages___createdBy___internal___mediaType'
  | 'carouselImages___createdBy___internal___owner'
  | 'carouselImages___createdBy___internal___type'
  | 'carouselImages___createdBy___internal___contentFilePath'
  | 'carouselImages___carouselImagesPortfolioItem'
  | 'carouselImages___carouselImagesPortfolioItem___remoteTypeName'
  | 'carouselImages___carouselImagesPortfolioItem___remoteId'
  | 'carouselImages___carouselImagesPortfolioItem___stage'
  | 'carouselImages___carouselImagesPortfolioItem___publishedAt'
  | 'carouselImages___carouselImagesPortfolioItem___updatedAt'
  | 'carouselImages___carouselImagesPortfolioItem___createdAt'
  | 'carouselImages___carouselImagesPortfolioItem___title'
  | 'carouselImages___carouselImagesPortfolioItem___description'
  | 'carouselImages___carouselImagesPortfolioItem___about___remoteTypeName'
  | 'carouselImages___carouselImagesPortfolioItem___about___raw'
  | 'carouselImages___carouselImagesPortfolioItem___about___html'
  | 'carouselImages___carouselImagesPortfolioItem___about___markdown'
  | 'carouselImages___carouselImagesPortfolioItem___about___text'
  | 'carouselImages___carouselImagesPortfolioItem___techSheet'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___remoteTypeName'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___remoteId'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___stage'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___isActive'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___picture'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___name'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___publishedAt'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___updatedAt'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___createdAt'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___kind'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___id'
  | 'carouselImages___carouselImagesPortfolioItem___publishedBy___children'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___remoteTypeName'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___remoteId'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___stage'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___isActive'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___picture'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___name'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___publishedAt'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___updatedAt'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___createdAt'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___kind'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___id'
  | 'carouselImages___carouselImagesPortfolioItem___updatedBy___children'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___remoteTypeName'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___remoteId'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___stage'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___isActive'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___picture'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___name'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___publishedAt'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___updatedAt'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___createdAt'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___kind'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___id'
  | 'carouselImages___carouselImagesPortfolioItem___createdBy___children'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___remoteTypeName'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___remoteId'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___locale'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___stage'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___mimeType'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___size'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___width'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___height'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___fileName'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___handle'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___publishedAt'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___updatedAt'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___createdAt'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___iconSpeciality'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___iconTechnology'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___headerImageBlog'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___scheduledIn'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___url'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___id'
  | 'carouselImages___carouselImagesPortfolioItem___carouselImages___children'
  | 'carouselImages___carouselImagesPortfolioItem___links'
  | 'carouselImages___carouselImagesPortfolioItem___links___remoteTypeName'
  | 'carouselImages___carouselImagesPortfolioItem___links___remoteId'
  | 'carouselImages___carouselImagesPortfolioItem___links___stage'
  | 'carouselImages___carouselImagesPortfolioItem___links___publishedAt'
  | 'carouselImages___carouselImagesPortfolioItem___links___updatedAt'
  | 'carouselImages___carouselImagesPortfolioItem___links___createdAt'
  | 'carouselImages___carouselImagesPortfolioItem___links___title'
  | 'carouselImages___carouselImagesPortfolioItem___links___url'
  | 'carouselImages___carouselImagesPortfolioItem___links___type'
  | 'carouselImages___carouselImagesPortfolioItem___links___scheduledIn'
  | 'carouselImages___carouselImagesPortfolioItem___links___id'
  | 'carouselImages___carouselImagesPortfolioItem___links___children'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___remoteTypeName'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___remoteId'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___stage'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___rawPayload'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___errorMessage'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___description'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___publishedAt'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___updatedAt'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___createdAt'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___status'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___id'
  | 'carouselImages___carouselImagesPortfolioItem___scheduledIn___children'
  | 'carouselImages___carouselImagesPortfolioItem___gatsbyPath'
  | 'carouselImages___carouselImagesPortfolioItem___id'
  | 'carouselImages___carouselImagesPortfolioItem___parent___id'
  | 'carouselImages___carouselImagesPortfolioItem___parent___children'
  | 'carouselImages___carouselImagesPortfolioItem___children'
  | 'carouselImages___carouselImagesPortfolioItem___children___id'
  | 'carouselImages___carouselImagesPortfolioItem___children___children'
  | 'carouselImages___carouselImagesPortfolioItem___internal___content'
  | 'carouselImages___carouselImagesPortfolioItem___internal___contentDigest'
  | 'carouselImages___carouselImagesPortfolioItem___internal___description'
  | 'carouselImages___carouselImagesPortfolioItem___internal___fieldOwners'
  | 'carouselImages___carouselImagesPortfolioItem___internal___ignoreType'
  | 'carouselImages___carouselImagesPortfolioItem___internal___mediaType'
  | 'carouselImages___carouselImagesPortfolioItem___internal___owner'
  | 'carouselImages___carouselImagesPortfolioItem___internal___type'
  | 'carouselImages___carouselImagesPortfolioItem___internal___contentFilePath'
  | 'carouselImages___iconSpeciality'
  | 'carouselImages___iconSpeciality___remoteTypeName'
  | 'carouselImages___iconSpeciality___remoteId'
  | 'carouselImages___iconSpeciality___stage'
  | 'carouselImages___iconSpeciality___publishedAt'
  | 'carouselImages___iconSpeciality___updatedAt'
  | 'carouselImages___iconSpeciality___createdAt'
  | 'carouselImages___iconSpeciality___title'
  | 'carouselImages___iconSpeciality___description___remoteTypeName'
  | 'carouselImages___iconSpeciality___description___raw'
  | 'carouselImages___iconSpeciality___description___html'
  | 'carouselImages___iconSpeciality___description___markdown'
  | 'carouselImages___iconSpeciality___description___text'
  | 'carouselImages___iconSpeciality___publishedBy___remoteTypeName'
  | 'carouselImages___iconSpeciality___publishedBy___remoteId'
  | 'carouselImages___iconSpeciality___publishedBy___stage'
  | 'carouselImages___iconSpeciality___publishedBy___isActive'
  | 'carouselImages___iconSpeciality___publishedBy___picture'
  | 'carouselImages___iconSpeciality___publishedBy___name'
  | 'carouselImages___iconSpeciality___publishedBy___publishedAt'
  | 'carouselImages___iconSpeciality___publishedBy___updatedAt'
  | 'carouselImages___iconSpeciality___publishedBy___createdAt'
  | 'carouselImages___iconSpeciality___publishedBy___kind'
  | 'carouselImages___iconSpeciality___publishedBy___id'
  | 'carouselImages___iconSpeciality___publishedBy___children'
  | 'carouselImages___iconSpeciality___updatedBy___remoteTypeName'
  | 'carouselImages___iconSpeciality___updatedBy___remoteId'
  | 'carouselImages___iconSpeciality___updatedBy___stage'
  | 'carouselImages___iconSpeciality___updatedBy___isActive'
  | 'carouselImages___iconSpeciality___updatedBy___picture'
  | 'carouselImages___iconSpeciality___updatedBy___name'
  | 'carouselImages___iconSpeciality___updatedBy___publishedAt'
  | 'carouselImages___iconSpeciality___updatedBy___updatedAt'
  | 'carouselImages___iconSpeciality___updatedBy___createdAt'
  | 'carouselImages___iconSpeciality___updatedBy___kind'
  | 'carouselImages___iconSpeciality___updatedBy___id'
  | 'carouselImages___iconSpeciality___updatedBy___children'
  | 'carouselImages___iconSpeciality___createdBy___remoteTypeName'
  | 'carouselImages___iconSpeciality___createdBy___remoteId'
  | 'carouselImages___iconSpeciality___createdBy___stage'
  | 'carouselImages___iconSpeciality___createdBy___isActive'
  | 'carouselImages___iconSpeciality___createdBy___picture'
  | 'carouselImages___iconSpeciality___createdBy___name'
  | 'carouselImages___iconSpeciality___createdBy___publishedAt'
  | 'carouselImages___iconSpeciality___createdBy___updatedAt'
  | 'carouselImages___iconSpeciality___createdBy___createdAt'
  | 'carouselImages___iconSpeciality___createdBy___kind'
  | 'carouselImages___iconSpeciality___createdBy___id'
  | 'carouselImages___iconSpeciality___createdBy___children'
  | 'carouselImages___iconSpeciality___icon___remoteTypeName'
  | 'carouselImages___iconSpeciality___icon___remoteId'
  | 'carouselImages___iconSpeciality___icon___locale'
  | 'carouselImages___iconSpeciality___icon___stage'
  | 'carouselImages___iconSpeciality___icon___mimeType'
  | 'carouselImages___iconSpeciality___icon___size'
  | 'carouselImages___iconSpeciality___icon___width'
  | 'carouselImages___iconSpeciality___icon___height'
  | 'carouselImages___iconSpeciality___icon___fileName'
  | 'carouselImages___iconSpeciality___icon___handle'
  | 'carouselImages___iconSpeciality___icon___publishedAt'
  | 'carouselImages___iconSpeciality___icon___updatedAt'
  | 'carouselImages___iconSpeciality___icon___createdAt'
  | 'carouselImages___iconSpeciality___icon___carouselImagesPortfolioItem'
  | 'carouselImages___iconSpeciality___icon___iconSpeciality'
  | 'carouselImages___iconSpeciality___icon___iconTechnology'
  | 'carouselImages___iconSpeciality___icon___headerImageBlog'
  | 'carouselImages___iconSpeciality___icon___scheduledIn'
  | 'carouselImages___iconSpeciality___icon___url'
  | 'carouselImages___iconSpeciality___icon___id'
  | 'carouselImages___iconSpeciality___icon___children'
  | 'carouselImages___iconSpeciality___scheduledIn'
  | 'carouselImages___iconSpeciality___scheduledIn___remoteTypeName'
  | 'carouselImages___iconSpeciality___scheduledIn___remoteId'
  | 'carouselImages___iconSpeciality___scheduledIn___stage'
  | 'carouselImages___iconSpeciality___scheduledIn___rawPayload'
  | 'carouselImages___iconSpeciality___scheduledIn___errorMessage'
  | 'carouselImages___iconSpeciality___scheduledIn___description'
  | 'carouselImages___iconSpeciality___scheduledIn___publishedAt'
  | 'carouselImages___iconSpeciality___scheduledIn___updatedAt'
  | 'carouselImages___iconSpeciality___scheduledIn___createdAt'
  | 'carouselImages___iconSpeciality___scheduledIn___status'
  | 'carouselImages___iconSpeciality___scheduledIn___id'
  | 'carouselImages___iconSpeciality___scheduledIn___children'
  | 'carouselImages___iconSpeciality___id'
  | 'carouselImages___iconSpeciality___parent___id'
  | 'carouselImages___iconSpeciality___parent___children'
  | 'carouselImages___iconSpeciality___children'
  | 'carouselImages___iconSpeciality___children___id'
  | 'carouselImages___iconSpeciality___children___children'
  | 'carouselImages___iconSpeciality___internal___content'
  | 'carouselImages___iconSpeciality___internal___contentDigest'
  | 'carouselImages___iconSpeciality___internal___description'
  | 'carouselImages___iconSpeciality___internal___fieldOwners'
  | 'carouselImages___iconSpeciality___internal___ignoreType'
  | 'carouselImages___iconSpeciality___internal___mediaType'
  | 'carouselImages___iconSpeciality___internal___owner'
  | 'carouselImages___iconSpeciality___internal___type'
  | 'carouselImages___iconSpeciality___internal___contentFilePath'
  | 'carouselImages___iconTechnology'
  | 'carouselImages___iconTechnology___remoteTypeName'
  | 'carouselImages___iconTechnology___remoteId'
  | 'carouselImages___iconTechnology___stage'
  | 'carouselImages___iconTechnology___publishedAt'
  | 'carouselImages___iconTechnology___updatedAt'
  | 'carouselImages___iconTechnology___createdAt'
  | 'carouselImages___iconTechnology___title'
  | 'carouselImages___iconTechnology___description___remoteTypeName'
  | 'carouselImages___iconTechnology___description___raw'
  | 'carouselImages___iconTechnology___description___html'
  | 'carouselImages___iconTechnology___description___markdown'
  | 'carouselImages___iconTechnology___description___text'
  | 'carouselImages___iconTechnology___backgroundColor___remoteTypeName'
  | 'carouselImages___iconTechnology___backgroundColor___hex'
  | 'carouselImages___iconTechnology___backgroundColor___css'
  | 'carouselImages___iconTechnology___publishedBy___remoteTypeName'
  | 'carouselImages___iconTechnology___publishedBy___remoteId'
  | 'carouselImages___iconTechnology___publishedBy___stage'
  | 'carouselImages___iconTechnology___publishedBy___isActive'
  | 'carouselImages___iconTechnology___publishedBy___picture'
  | 'carouselImages___iconTechnology___publishedBy___name'
  | 'carouselImages___iconTechnology___publishedBy___publishedAt'
  | 'carouselImages___iconTechnology___publishedBy___updatedAt'
  | 'carouselImages___iconTechnology___publishedBy___createdAt'
  | 'carouselImages___iconTechnology___publishedBy___kind'
  | 'carouselImages___iconTechnology___publishedBy___id'
  | 'carouselImages___iconTechnology___publishedBy___children'
  | 'carouselImages___iconTechnology___updatedBy___remoteTypeName'
  | 'carouselImages___iconTechnology___updatedBy___remoteId'
  | 'carouselImages___iconTechnology___updatedBy___stage'
  | 'carouselImages___iconTechnology___updatedBy___isActive'
  | 'carouselImages___iconTechnology___updatedBy___picture'
  | 'carouselImages___iconTechnology___updatedBy___name'
  | 'carouselImages___iconTechnology___updatedBy___publishedAt'
  | 'carouselImages___iconTechnology___updatedBy___updatedAt'
  | 'carouselImages___iconTechnology___updatedBy___createdAt'
  | 'carouselImages___iconTechnology___updatedBy___kind'
  | 'carouselImages___iconTechnology___updatedBy___id'
  | 'carouselImages___iconTechnology___updatedBy___children'
  | 'carouselImages___iconTechnology___createdBy___remoteTypeName'
  | 'carouselImages___iconTechnology___createdBy___remoteId'
  | 'carouselImages___iconTechnology___createdBy___stage'
  | 'carouselImages___iconTechnology___createdBy___isActive'
  | 'carouselImages___iconTechnology___createdBy___picture'
  | 'carouselImages___iconTechnology___createdBy___name'
  | 'carouselImages___iconTechnology___createdBy___publishedAt'
  | 'carouselImages___iconTechnology___createdBy___updatedAt'
  | 'carouselImages___iconTechnology___createdBy___createdAt'
  | 'carouselImages___iconTechnology___createdBy___kind'
  | 'carouselImages___iconTechnology___createdBy___id'
  | 'carouselImages___iconTechnology___createdBy___children'
  | 'carouselImages___iconTechnology___icon___remoteTypeName'
  | 'carouselImages___iconTechnology___icon___remoteId'
  | 'carouselImages___iconTechnology___icon___locale'
  | 'carouselImages___iconTechnology___icon___stage'
  | 'carouselImages___iconTechnology___icon___mimeType'
  | 'carouselImages___iconTechnology___icon___size'
  | 'carouselImages___iconTechnology___icon___width'
  | 'carouselImages___iconTechnology___icon___height'
  | 'carouselImages___iconTechnology___icon___fileName'
  | 'carouselImages___iconTechnology___icon___handle'
  | 'carouselImages___iconTechnology___icon___publishedAt'
  | 'carouselImages___iconTechnology___icon___updatedAt'
  | 'carouselImages___iconTechnology___icon___createdAt'
  | 'carouselImages___iconTechnology___icon___carouselImagesPortfolioItem'
  | 'carouselImages___iconTechnology___icon___iconSpeciality'
  | 'carouselImages___iconTechnology___icon___iconTechnology'
  | 'carouselImages___iconTechnology___icon___headerImageBlog'
  | 'carouselImages___iconTechnology___icon___scheduledIn'
  | 'carouselImages___iconTechnology___icon___url'
  | 'carouselImages___iconTechnology___icon___id'
  | 'carouselImages___iconTechnology___icon___children'
  | 'carouselImages___iconTechnology___scheduledIn'
  | 'carouselImages___iconTechnology___scheduledIn___remoteTypeName'
  | 'carouselImages___iconTechnology___scheduledIn___remoteId'
  | 'carouselImages___iconTechnology___scheduledIn___stage'
  | 'carouselImages___iconTechnology___scheduledIn___rawPayload'
  | 'carouselImages___iconTechnology___scheduledIn___errorMessage'
  | 'carouselImages___iconTechnology___scheduledIn___description'
  | 'carouselImages___iconTechnology___scheduledIn___publishedAt'
  | 'carouselImages___iconTechnology___scheduledIn___updatedAt'
  | 'carouselImages___iconTechnology___scheduledIn___createdAt'
  | 'carouselImages___iconTechnology___scheduledIn___status'
  | 'carouselImages___iconTechnology___scheduledIn___id'
  | 'carouselImages___iconTechnology___scheduledIn___children'
  | 'carouselImages___iconTechnology___id'
  | 'carouselImages___iconTechnology___parent___id'
  | 'carouselImages___iconTechnology___parent___children'
  | 'carouselImages___iconTechnology___children'
  | 'carouselImages___iconTechnology___children___id'
  | 'carouselImages___iconTechnology___children___children'
  | 'carouselImages___iconTechnology___internal___content'
  | 'carouselImages___iconTechnology___internal___contentDigest'
  | 'carouselImages___iconTechnology___internal___description'
  | 'carouselImages___iconTechnology___internal___fieldOwners'
  | 'carouselImages___iconTechnology___internal___ignoreType'
  | 'carouselImages___iconTechnology___internal___mediaType'
  | 'carouselImages___iconTechnology___internal___owner'
  | 'carouselImages___iconTechnology___internal___type'
  | 'carouselImages___iconTechnology___internal___contentFilePath'
  | 'carouselImages___headerImageBlog'
  | 'carouselImages___headerImageBlog___remoteTypeName'
  | 'carouselImages___headerImageBlog___remoteId'
  | 'carouselImages___headerImageBlog___stage'
  | 'carouselImages___headerImageBlog___publishedAt'
  | 'carouselImages___headerImageBlog___updatedAt'
  | 'carouselImages___headerImageBlog___createdAt'
  | 'carouselImages___headerImageBlog___title'
  | 'carouselImages___headerImageBlog___description'
  | 'carouselImages___headerImageBlog___content___remoteTypeName'
  | 'carouselImages___headerImageBlog___content___raw'
  | 'carouselImages___headerImageBlog___content___html'
  | 'carouselImages___headerImageBlog___content___markdown'
  | 'carouselImages___headerImageBlog___content___text'
  | 'carouselImages___headerImageBlog___publishedBy___remoteTypeName'
  | 'carouselImages___headerImageBlog___publishedBy___remoteId'
  | 'carouselImages___headerImageBlog___publishedBy___stage'
  | 'carouselImages___headerImageBlog___publishedBy___isActive'
  | 'carouselImages___headerImageBlog___publishedBy___picture'
  | 'carouselImages___headerImageBlog___publishedBy___name'
  | 'carouselImages___headerImageBlog___publishedBy___publishedAt'
  | 'carouselImages___headerImageBlog___publishedBy___updatedAt'
  | 'carouselImages___headerImageBlog___publishedBy___createdAt'
  | 'carouselImages___headerImageBlog___publishedBy___kind'
  | 'carouselImages___headerImageBlog___publishedBy___id'
  | 'carouselImages___headerImageBlog___publishedBy___children'
  | 'carouselImages___headerImageBlog___updatedBy___remoteTypeName'
  | 'carouselImages___headerImageBlog___updatedBy___remoteId'
  | 'carouselImages___headerImageBlog___updatedBy___stage'
  | 'carouselImages___headerImageBlog___updatedBy___isActive'
  | 'carouselImages___headerImageBlog___updatedBy___picture'
  | 'carouselImages___headerImageBlog___updatedBy___name'
  | 'carouselImages___headerImageBlog___updatedBy___publishedAt'
  | 'carouselImages___headerImageBlog___updatedBy___updatedAt'
  | 'carouselImages___headerImageBlog___updatedBy___createdAt'
  | 'carouselImages___headerImageBlog___updatedBy___kind'
  | 'carouselImages___headerImageBlog___updatedBy___id'
  | 'carouselImages___headerImageBlog___updatedBy___children'
  | 'carouselImages___headerImageBlog___createdBy___remoteTypeName'
  | 'carouselImages___headerImageBlog___createdBy___remoteId'
  | 'carouselImages___headerImageBlog___createdBy___stage'
  | 'carouselImages___headerImageBlog___createdBy___isActive'
  | 'carouselImages___headerImageBlog___createdBy___picture'
  | 'carouselImages___headerImageBlog___createdBy___name'
  | 'carouselImages___headerImageBlog___createdBy___publishedAt'
  | 'carouselImages___headerImageBlog___createdBy___updatedAt'
  | 'carouselImages___headerImageBlog___createdBy___createdAt'
  | 'carouselImages___headerImageBlog___createdBy___kind'
  | 'carouselImages___headerImageBlog___createdBy___id'
  | 'carouselImages___headerImageBlog___createdBy___children'
  | 'carouselImages___headerImageBlog___headerImage___remoteTypeName'
  | 'carouselImages___headerImageBlog___headerImage___remoteId'
  | 'carouselImages___headerImageBlog___headerImage___locale'
  | 'carouselImages___headerImageBlog___headerImage___stage'
  | 'carouselImages___headerImageBlog___headerImage___mimeType'
  | 'carouselImages___headerImageBlog___headerImage___size'
  | 'carouselImages___headerImageBlog___headerImage___width'
  | 'carouselImages___headerImageBlog___headerImage___height'
  | 'carouselImages___headerImageBlog___headerImage___fileName'
  | 'carouselImages___headerImageBlog___headerImage___handle'
  | 'carouselImages___headerImageBlog___headerImage___publishedAt'
  | 'carouselImages___headerImageBlog___headerImage___updatedAt'
  | 'carouselImages___headerImageBlog___headerImage___createdAt'
  | 'carouselImages___headerImageBlog___headerImage___carouselImagesPortfolioItem'
  | 'carouselImages___headerImageBlog___headerImage___iconSpeciality'
  | 'carouselImages___headerImageBlog___headerImage___iconTechnology'
  | 'carouselImages___headerImageBlog___headerImage___headerImageBlog'
  | 'carouselImages___headerImageBlog___headerImage___scheduledIn'
  | 'carouselImages___headerImageBlog___headerImage___url'
  | 'carouselImages___headerImageBlog___headerImage___id'
  | 'carouselImages___headerImageBlog___headerImage___children'
  | 'carouselImages___headerImageBlog___type'
  | 'carouselImages___headerImageBlog___categories'
  | 'carouselImages___headerImageBlog___scheduledIn'
  | 'carouselImages___headerImageBlog___scheduledIn___remoteTypeName'
  | 'carouselImages___headerImageBlog___scheduledIn___remoteId'
  | 'carouselImages___headerImageBlog___scheduledIn___stage'
  | 'carouselImages___headerImageBlog___scheduledIn___rawPayload'
  | 'carouselImages___headerImageBlog___scheduledIn___errorMessage'
  | 'carouselImages___headerImageBlog___scheduledIn___description'
  | 'carouselImages___headerImageBlog___scheduledIn___publishedAt'
  | 'carouselImages___headerImageBlog___scheduledIn___updatedAt'
  | 'carouselImages___headerImageBlog___scheduledIn___createdAt'
  | 'carouselImages___headerImageBlog___scheduledIn___status'
  | 'carouselImages___headerImageBlog___scheduledIn___id'
  | 'carouselImages___headerImageBlog___scheduledIn___children'
  | 'carouselImages___headerImageBlog___gatsbyPath'
  | 'carouselImages___headerImageBlog___id'
  | 'carouselImages___headerImageBlog___parent___id'
  | 'carouselImages___headerImageBlog___parent___children'
  | 'carouselImages___headerImageBlog___children'
  | 'carouselImages___headerImageBlog___children___id'
  | 'carouselImages___headerImageBlog___children___children'
  | 'carouselImages___headerImageBlog___internal___content'
  | 'carouselImages___headerImageBlog___internal___contentDigest'
  | 'carouselImages___headerImageBlog___internal___description'
  | 'carouselImages___headerImageBlog___internal___fieldOwners'
  | 'carouselImages___headerImageBlog___internal___ignoreType'
  | 'carouselImages___headerImageBlog___internal___mediaType'
  | 'carouselImages___headerImageBlog___internal___owner'
  | 'carouselImages___headerImageBlog___internal___type'
  | 'carouselImages___headerImageBlog___internal___contentFilePath'
  | 'carouselImages___scheduledIn'
  | 'carouselImages___scheduledIn___remoteTypeName'
  | 'carouselImages___scheduledIn___remoteId'
  | 'carouselImages___scheduledIn___stage'
  | 'carouselImages___scheduledIn___rawPayload'
  | 'carouselImages___scheduledIn___errorMessage'
  | 'carouselImages___scheduledIn___description'
  | 'carouselImages___scheduledIn___publishedAt'
  | 'carouselImages___scheduledIn___updatedAt'
  | 'carouselImages___scheduledIn___createdAt'
  | 'carouselImages___scheduledIn___release___remoteTypeName'
  | 'carouselImages___scheduledIn___release___remoteId'
  | 'carouselImages___scheduledIn___release___stage'
  | 'carouselImages___scheduledIn___release___releaseAt'
  | 'carouselImages___scheduledIn___release___isImplicit'
  | 'carouselImages___scheduledIn___release___isActive'
  | 'carouselImages___scheduledIn___release___errorMessage'
  | 'carouselImages___scheduledIn___release___description'
  | 'carouselImages___scheduledIn___release___title'
  | 'carouselImages___scheduledIn___release___publishedAt'
  | 'carouselImages___scheduledIn___release___updatedAt'
  | 'carouselImages___scheduledIn___release___createdAt'
  | 'carouselImages___scheduledIn___release___operations'
  | 'carouselImages___scheduledIn___release___status'
  | 'carouselImages___scheduledIn___release___id'
  | 'carouselImages___scheduledIn___release___children'
  | 'carouselImages___scheduledIn___publishedBy___remoteTypeName'
  | 'carouselImages___scheduledIn___publishedBy___remoteId'
  | 'carouselImages___scheduledIn___publishedBy___stage'
  | 'carouselImages___scheduledIn___publishedBy___isActive'
  | 'carouselImages___scheduledIn___publishedBy___picture'
  | 'carouselImages___scheduledIn___publishedBy___name'
  | 'carouselImages___scheduledIn___publishedBy___publishedAt'
  | 'carouselImages___scheduledIn___publishedBy___updatedAt'
  | 'carouselImages___scheduledIn___publishedBy___createdAt'
  | 'carouselImages___scheduledIn___publishedBy___kind'
  | 'carouselImages___scheduledIn___publishedBy___id'
  | 'carouselImages___scheduledIn___publishedBy___children'
  | 'carouselImages___scheduledIn___updatedBy___remoteTypeName'
  | 'carouselImages___scheduledIn___updatedBy___remoteId'
  | 'carouselImages___scheduledIn___updatedBy___stage'
  | 'carouselImages___scheduledIn___updatedBy___isActive'
  | 'carouselImages___scheduledIn___updatedBy___picture'
  | 'carouselImages___scheduledIn___updatedBy___name'
  | 'carouselImages___scheduledIn___updatedBy___publishedAt'
  | 'carouselImages___scheduledIn___updatedBy___updatedAt'
  | 'carouselImages___scheduledIn___updatedBy___createdAt'
  | 'carouselImages___scheduledIn___updatedBy___kind'
  | 'carouselImages___scheduledIn___updatedBy___id'
  | 'carouselImages___scheduledIn___updatedBy___children'
  | 'carouselImages___scheduledIn___createdBy___remoteTypeName'
  | 'carouselImages___scheduledIn___createdBy___remoteId'
  | 'carouselImages___scheduledIn___createdBy___stage'
  | 'carouselImages___scheduledIn___createdBy___isActive'
  | 'carouselImages___scheduledIn___createdBy___picture'
  | 'carouselImages___scheduledIn___createdBy___name'
  | 'carouselImages___scheduledIn___createdBy___publishedAt'
  | 'carouselImages___scheduledIn___createdBy___updatedAt'
  | 'carouselImages___scheduledIn___createdBy___createdAt'
  | 'carouselImages___scheduledIn___createdBy___kind'
  | 'carouselImages___scheduledIn___createdBy___id'
  | 'carouselImages___scheduledIn___createdBy___children'
  | 'carouselImages___scheduledIn___status'
  | 'carouselImages___scheduledIn___id'
  | 'carouselImages___scheduledIn___parent___id'
  | 'carouselImages___scheduledIn___parent___children'
  | 'carouselImages___scheduledIn___children'
  | 'carouselImages___scheduledIn___children___id'
  | 'carouselImages___scheduledIn___children___children'
  | 'carouselImages___scheduledIn___internal___content'
  | 'carouselImages___scheduledIn___internal___contentDigest'
  | 'carouselImages___scheduledIn___internal___description'
  | 'carouselImages___scheduledIn___internal___fieldOwners'
  | 'carouselImages___scheduledIn___internal___ignoreType'
  | 'carouselImages___scheduledIn___internal___mediaType'
  | 'carouselImages___scheduledIn___internal___owner'
  | 'carouselImages___scheduledIn___internal___type'
  | 'carouselImages___scheduledIn___internal___contentFilePath'
  | 'carouselImages___url'
  | 'carouselImages___id'
  | 'carouselImages___parent___id'
  | 'carouselImages___parent___parent___id'
  | 'carouselImages___parent___parent___children'
  | 'carouselImages___parent___children'
  | 'carouselImages___parent___children___id'
  | 'carouselImages___parent___children___children'
  | 'carouselImages___parent___internal___content'
  | 'carouselImages___parent___internal___contentDigest'
  | 'carouselImages___parent___internal___description'
  | 'carouselImages___parent___internal___fieldOwners'
  | 'carouselImages___parent___internal___ignoreType'
  | 'carouselImages___parent___internal___mediaType'
  | 'carouselImages___parent___internal___owner'
  | 'carouselImages___parent___internal___type'
  | 'carouselImages___parent___internal___contentFilePath'
  | 'carouselImages___children'
  | 'carouselImages___children___id'
  | 'carouselImages___children___parent___id'
  | 'carouselImages___children___parent___children'
  | 'carouselImages___children___children'
  | 'carouselImages___children___children___id'
  | 'carouselImages___children___children___children'
  | 'carouselImages___children___internal___content'
  | 'carouselImages___children___internal___contentDigest'
  | 'carouselImages___children___internal___description'
  | 'carouselImages___children___internal___fieldOwners'
  | 'carouselImages___children___internal___ignoreType'
  | 'carouselImages___children___internal___mediaType'
  | 'carouselImages___children___internal___owner'
  | 'carouselImages___children___internal___type'
  | 'carouselImages___children___internal___contentFilePath'
  | 'carouselImages___internal___content'
  | 'carouselImages___internal___contentDigest'
  | 'carouselImages___internal___description'
  | 'carouselImages___internal___fieldOwners'
  | 'carouselImages___internal___ignoreType'
  | 'carouselImages___internal___mediaType'
  | 'carouselImages___internal___owner'
  | 'carouselImages___internal___type'
  | 'carouselImages___internal___contentFilePath'
  | 'links'
  | 'links___remoteTypeName'
  | 'links___remoteId'
  | 'links___stage'
  | 'links___publishedAt'
  | 'links___updatedAt'
  | 'links___createdAt'
  | 'links___title'
  | 'links___url'
  | 'links___publishedBy___remoteTypeName'
  | 'links___publishedBy___remoteId'
  | 'links___publishedBy___stage'
  | 'links___publishedBy___isActive'
  | 'links___publishedBy___picture'
  | 'links___publishedBy___name'
  | 'links___publishedBy___publishedAt'
  | 'links___publishedBy___updatedAt'
  | 'links___publishedBy___createdAt'
  | 'links___publishedBy___kind'
  | 'links___publishedBy___id'
  | 'links___publishedBy___parent___id'
  | 'links___publishedBy___parent___children'
  | 'links___publishedBy___children'
  | 'links___publishedBy___children___id'
  | 'links___publishedBy___children___children'
  | 'links___publishedBy___internal___content'
  | 'links___publishedBy___internal___contentDigest'
  | 'links___publishedBy___internal___description'
  | 'links___publishedBy___internal___fieldOwners'
  | 'links___publishedBy___internal___ignoreType'
  | 'links___publishedBy___internal___mediaType'
  | 'links___publishedBy___internal___owner'
  | 'links___publishedBy___internal___type'
  | 'links___publishedBy___internal___contentFilePath'
  | 'links___updatedBy___remoteTypeName'
  | 'links___updatedBy___remoteId'
  | 'links___updatedBy___stage'
  | 'links___updatedBy___isActive'
  | 'links___updatedBy___picture'
  | 'links___updatedBy___name'
  | 'links___updatedBy___publishedAt'
  | 'links___updatedBy___updatedAt'
  | 'links___updatedBy___createdAt'
  | 'links___updatedBy___kind'
  | 'links___updatedBy___id'
  | 'links___updatedBy___parent___id'
  | 'links___updatedBy___parent___children'
  | 'links___updatedBy___children'
  | 'links___updatedBy___children___id'
  | 'links___updatedBy___children___children'
  | 'links___updatedBy___internal___content'
  | 'links___updatedBy___internal___contentDigest'
  | 'links___updatedBy___internal___description'
  | 'links___updatedBy___internal___fieldOwners'
  | 'links___updatedBy___internal___ignoreType'
  | 'links___updatedBy___internal___mediaType'
  | 'links___updatedBy___internal___owner'
  | 'links___updatedBy___internal___type'
  | 'links___updatedBy___internal___contentFilePath'
  | 'links___createdBy___remoteTypeName'
  | 'links___createdBy___remoteId'
  | 'links___createdBy___stage'
  | 'links___createdBy___isActive'
  | 'links___createdBy___picture'
  | 'links___createdBy___name'
  | 'links___createdBy___publishedAt'
  | 'links___createdBy___updatedAt'
  | 'links___createdBy___createdAt'
  | 'links___createdBy___kind'
  | 'links___createdBy___id'
  | 'links___createdBy___parent___id'
  | 'links___createdBy___parent___children'
  | 'links___createdBy___children'
  | 'links___createdBy___children___id'
  | 'links___createdBy___children___children'
  | 'links___createdBy___internal___content'
  | 'links___createdBy___internal___contentDigest'
  | 'links___createdBy___internal___description'
  | 'links___createdBy___internal___fieldOwners'
  | 'links___createdBy___internal___ignoreType'
  | 'links___createdBy___internal___mediaType'
  | 'links___createdBy___internal___owner'
  | 'links___createdBy___internal___type'
  | 'links___createdBy___internal___contentFilePath'
  | 'links___type'
  | 'links___scheduledIn'
  | 'links___scheduledIn___remoteTypeName'
  | 'links___scheduledIn___remoteId'
  | 'links___scheduledIn___stage'
  | 'links___scheduledIn___rawPayload'
  | 'links___scheduledIn___errorMessage'
  | 'links___scheduledIn___description'
  | 'links___scheduledIn___publishedAt'
  | 'links___scheduledIn___updatedAt'
  | 'links___scheduledIn___createdAt'
  | 'links___scheduledIn___release___remoteTypeName'
  | 'links___scheduledIn___release___remoteId'
  | 'links___scheduledIn___release___stage'
  | 'links___scheduledIn___release___releaseAt'
  | 'links___scheduledIn___release___isImplicit'
  | 'links___scheduledIn___release___isActive'
  | 'links___scheduledIn___release___errorMessage'
  | 'links___scheduledIn___release___description'
  | 'links___scheduledIn___release___title'
  | 'links___scheduledIn___release___publishedAt'
  | 'links___scheduledIn___release___updatedAt'
  | 'links___scheduledIn___release___createdAt'
  | 'links___scheduledIn___release___operations'
  | 'links___scheduledIn___release___status'
  | 'links___scheduledIn___release___id'
  | 'links___scheduledIn___release___children'
  | 'links___scheduledIn___publishedBy___remoteTypeName'
  | 'links___scheduledIn___publishedBy___remoteId'
  | 'links___scheduledIn___publishedBy___stage'
  | 'links___scheduledIn___publishedBy___isActive'
  | 'links___scheduledIn___publishedBy___picture'
  | 'links___scheduledIn___publishedBy___name'
  | 'links___scheduledIn___publishedBy___publishedAt'
  | 'links___scheduledIn___publishedBy___updatedAt'
  | 'links___scheduledIn___publishedBy___createdAt'
  | 'links___scheduledIn___publishedBy___kind'
  | 'links___scheduledIn___publishedBy___id'
  | 'links___scheduledIn___publishedBy___children'
  | 'links___scheduledIn___updatedBy___remoteTypeName'
  | 'links___scheduledIn___updatedBy___remoteId'
  | 'links___scheduledIn___updatedBy___stage'
  | 'links___scheduledIn___updatedBy___isActive'
  | 'links___scheduledIn___updatedBy___picture'
  | 'links___scheduledIn___updatedBy___name'
  | 'links___scheduledIn___updatedBy___publishedAt'
  | 'links___scheduledIn___updatedBy___updatedAt'
  | 'links___scheduledIn___updatedBy___createdAt'
  | 'links___scheduledIn___updatedBy___kind'
  | 'links___scheduledIn___updatedBy___id'
  | 'links___scheduledIn___updatedBy___children'
  | 'links___scheduledIn___createdBy___remoteTypeName'
  | 'links___scheduledIn___createdBy___remoteId'
  | 'links___scheduledIn___createdBy___stage'
  | 'links___scheduledIn___createdBy___isActive'
  | 'links___scheduledIn___createdBy___picture'
  | 'links___scheduledIn___createdBy___name'
  | 'links___scheduledIn___createdBy___publishedAt'
  | 'links___scheduledIn___createdBy___updatedAt'
  | 'links___scheduledIn___createdBy___createdAt'
  | 'links___scheduledIn___createdBy___kind'
  | 'links___scheduledIn___createdBy___id'
  | 'links___scheduledIn___createdBy___children'
  | 'links___scheduledIn___status'
  | 'links___scheduledIn___id'
  | 'links___scheduledIn___parent___id'
  | 'links___scheduledIn___parent___children'
  | 'links___scheduledIn___children'
  | 'links___scheduledIn___children___id'
  | 'links___scheduledIn___children___children'
  | 'links___scheduledIn___internal___content'
  | 'links___scheduledIn___internal___contentDigest'
  | 'links___scheduledIn___internal___description'
  | 'links___scheduledIn___internal___fieldOwners'
  | 'links___scheduledIn___internal___ignoreType'
  | 'links___scheduledIn___internal___mediaType'
  | 'links___scheduledIn___internal___owner'
  | 'links___scheduledIn___internal___type'
  | 'links___scheduledIn___internal___contentFilePath'
  | 'links___id'
  | 'links___parent___id'
  | 'links___parent___parent___id'
  | 'links___parent___parent___children'
  | 'links___parent___children'
  | 'links___parent___children___id'
  | 'links___parent___children___children'
  | 'links___parent___internal___content'
  | 'links___parent___internal___contentDigest'
  | 'links___parent___internal___description'
  | 'links___parent___internal___fieldOwners'
  | 'links___parent___internal___ignoreType'
  | 'links___parent___internal___mediaType'
  | 'links___parent___internal___owner'
  | 'links___parent___internal___type'
  | 'links___parent___internal___contentFilePath'
  | 'links___children'
  | 'links___children___id'
  | 'links___children___parent___id'
  | 'links___children___parent___children'
  | 'links___children___children'
  | 'links___children___children___id'
  | 'links___children___children___children'
  | 'links___children___internal___content'
  | 'links___children___internal___contentDigest'
  | 'links___children___internal___description'
  | 'links___children___internal___fieldOwners'
  | 'links___children___internal___ignoreType'
  | 'links___children___internal___mediaType'
  | 'links___children___internal___owner'
  | 'links___children___internal___type'
  | 'links___children___internal___contentFilePath'
  | 'links___internal___content'
  | 'links___internal___contentDigest'
  | 'links___internal___description'
  | 'links___internal___fieldOwners'
  | 'links___internal___ignoreType'
  | 'links___internal___mediaType'
  | 'links___internal___owner'
  | 'links___internal___type'
  | 'links___internal___contentFilePath'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___description'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___release___internal___contentFilePath'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___publishedBy___internal___contentFilePath'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___updatedBy___internal___contentFilePath'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___createdBy___internal___contentFilePath'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___parent___internal___contentFilePath'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___children___internal___contentFilePath'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'scheduledIn___internal___contentFilePath'
  | 'gatsbyPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type GraphCms_PortfolioItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_PortfolioItemEdge>;
  nodes: Array<GraphCms_PortfolioItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_PortfolioItemGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_PortfolioItemGroupConnectionDistinctArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemGroupConnectionMaxArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemGroupConnectionMinArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemGroupConnectionSumArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_PortfolioItemFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_SpecialityConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_SpecialityEdge>;
  nodes: Array<GraphCms_Speciality>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_SpecialityGroupConnection>;
};

export type GraphCms_SpecialityConnectionDistinctArgs = {
  field: GraphCms_SpecialityFieldsEnum;
};

export type GraphCms_SpecialityConnectionMaxArgs = {
  field: GraphCms_SpecialityFieldsEnum;
};

export type GraphCms_SpecialityConnectionMinArgs = {
  field: GraphCms_SpecialityFieldsEnum;
};

export type GraphCms_SpecialityConnectionSumArgs = {
  field: GraphCms_SpecialityFieldsEnum;
};

export type GraphCms_SpecialityConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_SpecialityFieldsEnum;
};

export type GraphCms_SpecialityEdge = {
  next?: Maybe<GraphCms_Speciality>;
  node: GraphCms_Speciality;
  previous?: Maybe<GraphCms_Speciality>;
};

export type GraphCms_SpecialityFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'title'
  | 'description___remoteTypeName'
  | 'description___raw'
  | 'description___html'
  | 'description___markdown'
  | 'description___text'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___isActive'
  | 'publishedBy___picture'
  | 'publishedBy___name'
  | 'publishedBy___publishedAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___createdAt'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___parent___internal___contentFilePath'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___children___internal___contentFilePath'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'publishedBy___internal___contentFilePath'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___isActive'
  | 'updatedBy___picture'
  | 'updatedBy___name'
  | 'updatedBy___publishedAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___createdAt'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___parent___internal___contentFilePath'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___children___internal___contentFilePath'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'updatedBy___internal___contentFilePath'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___isActive'
  | 'createdBy___picture'
  | 'createdBy___name'
  | 'createdBy___publishedAt'
  | 'createdBy___updatedAt'
  | 'createdBy___createdAt'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___parent___internal___contentFilePath'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___children___internal___contentFilePath'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'createdBy___internal___contentFilePath'
  | 'icon___remoteTypeName'
  | 'icon___remoteId'
  | 'icon___locale'
  | 'icon___stage'
  | 'icon___mimeType'
  | 'icon___size'
  | 'icon___width'
  | 'icon___height'
  | 'icon___fileName'
  | 'icon___handle'
  | 'icon___publishedAt'
  | 'icon___updatedAt'
  | 'icon___createdAt'
  | 'icon___publishedBy___remoteTypeName'
  | 'icon___publishedBy___remoteId'
  | 'icon___publishedBy___stage'
  | 'icon___publishedBy___isActive'
  | 'icon___publishedBy___picture'
  | 'icon___publishedBy___name'
  | 'icon___publishedBy___publishedAt'
  | 'icon___publishedBy___updatedAt'
  | 'icon___publishedBy___createdAt'
  | 'icon___publishedBy___kind'
  | 'icon___publishedBy___id'
  | 'icon___publishedBy___parent___id'
  | 'icon___publishedBy___parent___children'
  | 'icon___publishedBy___children'
  | 'icon___publishedBy___children___id'
  | 'icon___publishedBy___children___children'
  | 'icon___publishedBy___internal___content'
  | 'icon___publishedBy___internal___contentDigest'
  | 'icon___publishedBy___internal___description'
  | 'icon___publishedBy___internal___fieldOwners'
  | 'icon___publishedBy___internal___ignoreType'
  | 'icon___publishedBy___internal___mediaType'
  | 'icon___publishedBy___internal___owner'
  | 'icon___publishedBy___internal___type'
  | 'icon___publishedBy___internal___contentFilePath'
  | 'icon___updatedBy___remoteTypeName'
  | 'icon___updatedBy___remoteId'
  | 'icon___updatedBy___stage'
  | 'icon___updatedBy___isActive'
  | 'icon___updatedBy___picture'
  | 'icon___updatedBy___name'
  | 'icon___updatedBy___publishedAt'
  | 'icon___updatedBy___updatedAt'
  | 'icon___updatedBy___createdAt'
  | 'icon___updatedBy___kind'
  | 'icon___updatedBy___id'
  | 'icon___updatedBy___parent___id'
  | 'icon___updatedBy___parent___children'
  | 'icon___updatedBy___children'
  | 'icon___updatedBy___children___id'
  | 'icon___updatedBy___children___children'
  | 'icon___updatedBy___internal___content'
  | 'icon___updatedBy___internal___contentDigest'
  | 'icon___updatedBy___internal___description'
  | 'icon___updatedBy___internal___fieldOwners'
  | 'icon___updatedBy___internal___ignoreType'
  | 'icon___updatedBy___internal___mediaType'
  | 'icon___updatedBy___internal___owner'
  | 'icon___updatedBy___internal___type'
  | 'icon___updatedBy___internal___contentFilePath'
  | 'icon___createdBy___remoteTypeName'
  | 'icon___createdBy___remoteId'
  | 'icon___createdBy___stage'
  | 'icon___createdBy___isActive'
  | 'icon___createdBy___picture'
  | 'icon___createdBy___name'
  | 'icon___createdBy___publishedAt'
  | 'icon___createdBy___updatedAt'
  | 'icon___createdBy___createdAt'
  | 'icon___createdBy___kind'
  | 'icon___createdBy___id'
  | 'icon___createdBy___parent___id'
  | 'icon___createdBy___parent___children'
  | 'icon___createdBy___children'
  | 'icon___createdBy___children___id'
  | 'icon___createdBy___children___children'
  | 'icon___createdBy___internal___content'
  | 'icon___createdBy___internal___contentDigest'
  | 'icon___createdBy___internal___description'
  | 'icon___createdBy___internal___fieldOwners'
  | 'icon___createdBy___internal___ignoreType'
  | 'icon___createdBy___internal___mediaType'
  | 'icon___createdBy___internal___owner'
  | 'icon___createdBy___internal___type'
  | 'icon___createdBy___internal___contentFilePath'
  | 'icon___carouselImagesPortfolioItem'
  | 'icon___carouselImagesPortfolioItem___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___remoteId'
  | 'icon___carouselImagesPortfolioItem___stage'
  | 'icon___carouselImagesPortfolioItem___publishedAt'
  | 'icon___carouselImagesPortfolioItem___updatedAt'
  | 'icon___carouselImagesPortfolioItem___createdAt'
  | 'icon___carouselImagesPortfolioItem___title'
  | 'icon___carouselImagesPortfolioItem___description'
  | 'icon___carouselImagesPortfolioItem___about___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___about___raw'
  | 'icon___carouselImagesPortfolioItem___about___html'
  | 'icon___carouselImagesPortfolioItem___about___markdown'
  | 'icon___carouselImagesPortfolioItem___about___text'
  | 'icon___carouselImagesPortfolioItem___techSheet'
  | 'icon___carouselImagesPortfolioItem___publishedBy___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___publishedBy___remoteId'
  | 'icon___carouselImagesPortfolioItem___publishedBy___stage'
  | 'icon___carouselImagesPortfolioItem___publishedBy___isActive'
  | 'icon___carouselImagesPortfolioItem___publishedBy___picture'
  | 'icon___carouselImagesPortfolioItem___publishedBy___name'
  | 'icon___carouselImagesPortfolioItem___publishedBy___publishedAt'
  | 'icon___carouselImagesPortfolioItem___publishedBy___updatedAt'
  | 'icon___carouselImagesPortfolioItem___publishedBy___createdAt'
  | 'icon___carouselImagesPortfolioItem___publishedBy___kind'
  | 'icon___carouselImagesPortfolioItem___publishedBy___id'
  | 'icon___carouselImagesPortfolioItem___publishedBy___children'
  | 'icon___carouselImagesPortfolioItem___updatedBy___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___updatedBy___remoteId'
  | 'icon___carouselImagesPortfolioItem___updatedBy___stage'
  | 'icon___carouselImagesPortfolioItem___updatedBy___isActive'
  | 'icon___carouselImagesPortfolioItem___updatedBy___picture'
  | 'icon___carouselImagesPortfolioItem___updatedBy___name'
  | 'icon___carouselImagesPortfolioItem___updatedBy___publishedAt'
  | 'icon___carouselImagesPortfolioItem___updatedBy___updatedAt'
  | 'icon___carouselImagesPortfolioItem___updatedBy___createdAt'
  | 'icon___carouselImagesPortfolioItem___updatedBy___kind'
  | 'icon___carouselImagesPortfolioItem___updatedBy___id'
  | 'icon___carouselImagesPortfolioItem___updatedBy___children'
  | 'icon___carouselImagesPortfolioItem___createdBy___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___createdBy___remoteId'
  | 'icon___carouselImagesPortfolioItem___createdBy___stage'
  | 'icon___carouselImagesPortfolioItem___createdBy___isActive'
  | 'icon___carouselImagesPortfolioItem___createdBy___picture'
  | 'icon___carouselImagesPortfolioItem___createdBy___name'
  | 'icon___carouselImagesPortfolioItem___createdBy___publishedAt'
  | 'icon___carouselImagesPortfolioItem___createdBy___updatedAt'
  | 'icon___carouselImagesPortfolioItem___createdBy___createdAt'
  | 'icon___carouselImagesPortfolioItem___createdBy___kind'
  | 'icon___carouselImagesPortfolioItem___createdBy___id'
  | 'icon___carouselImagesPortfolioItem___createdBy___children'
  | 'icon___carouselImagesPortfolioItem___carouselImages'
  | 'icon___carouselImagesPortfolioItem___carouselImages___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___carouselImages___remoteId'
  | 'icon___carouselImagesPortfolioItem___carouselImages___locale'
  | 'icon___carouselImagesPortfolioItem___carouselImages___stage'
  | 'icon___carouselImagesPortfolioItem___carouselImages___mimeType'
  | 'icon___carouselImagesPortfolioItem___carouselImages___size'
  | 'icon___carouselImagesPortfolioItem___carouselImages___width'
  | 'icon___carouselImagesPortfolioItem___carouselImages___height'
  | 'icon___carouselImagesPortfolioItem___carouselImages___fileName'
  | 'icon___carouselImagesPortfolioItem___carouselImages___handle'
  | 'icon___carouselImagesPortfolioItem___carouselImages___publishedAt'
  | 'icon___carouselImagesPortfolioItem___carouselImages___updatedAt'
  | 'icon___carouselImagesPortfolioItem___carouselImages___createdAt'
  | 'icon___carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem'
  | 'icon___carouselImagesPortfolioItem___carouselImages___iconSpeciality'
  | 'icon___carouselImagesPortfolioItem___carouselImages___iconTechnology'
  | 'icon___carouselImagesPortfolioItem___carouselImages___headerImageBlog'
  | 'icon___carouselImagesPortfolioItem___carouselImages___scheduledIn'
  | 'icon___carouselImagesPortfolioItem___carouselImages___url'
  | 'icon___carouselImagesPortfolioItem___carouselImages___id'
  | 'icon___carouselImagesPortfolioItem___carouselImages___children'
  | 'icon___carouselImagesPortfolioItem___links'
  | 'icon___carouselImagesPortfolioItem___links___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___links___remoteId'
  | 'icon___carouselImagesPortfolioItem___links___stage'
  | 'icon___carouselImagesPortfolioItem___links___publishedAt'
  | 'icon___carouselImagesPortfolioItem___links___updatedAt'
  | 'icon___carouselImagesPortfolioItem___links___createdAt'
  | 'icon___carouselImagesPortfolioItem___links___title'
  | 'icon___carouselImagesPortfolioItem___links___url'
  | 'icon___carouselImagesPortfolioItem___links___type'
  | 'icon___carouselImagesPortfolioItem___links___scheduledIn'
  | 'icon___carouselImagesPortfolioItem___links___id'
  | 'icon___carouselImagesPortfolioItem___links___children'
  | 'icon___carouselImagesPortfolioItem___scheduledIn'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___remoteId'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___stage'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___rawPayload'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___errorMessage'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___description'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___publishedAt'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___updatedAt'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___createdAt'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___status'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___id'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___children'
  | 'icon___carouselImagesPortfolioItem___gatsbyPath'
  | 'icon___carouselImagesPortfolioItem___id'
  | 'icon___carouselImagesPortfolioItem___parent___id'
  | 'icon___carouselImagesPortfolioItem___parent___children'
  | 'icon___carouselImagesPortfolioItem___children'
  | 'icon___carouselImagesPortfolioItem___children___id'
  | 'icon___carouselImagesPortfolioItem___children___children'
  | 'icon___carouselImagesPortfolioItem___internal___content'
  | 'icon___carouselImagesPortfolioItem___internal___contentDigest'
  | 'icon___carouselImagesPortfolioItem___internal___description'
  | 'icon___carouselImagesPortfolioItem___internal___fieldOwners'
  | 'icon___carouselImagesPortfolioItem___internal___ignoreType'
  | 'icon___carouselImagesPortfolioItem___internal___mediaType'
  | 'icon___carouselImagesPortfolioItem___internal___owner'
  | 'icon___carouselImagesPortfolioItem___internal___type'
  | 'icon___carouselImagesPortfolioItem___internal___contentFilePath'
  | 'icon___iconSpeciality'
  | 'icon___iconSpeciality___remoteTypeName'
  | 'icon___iconSpeciality___remoteId'
  | 'icon___iconSpeciality___stage'
  | 'icon___iconSpeciality___publishedAt'
  | 'icon___iconSpeciality___updatedAt'
  | 'icon___iconSpeciality___createdAt'
  | 'icon___iconSpeciality___title'
  | 'icon___iconSpeciality___description___remoteTypeName'
  | 'icon___iconSpeciality___description___raw'
  | 'icon___iconSpeciality___description___html'
  | 'icon___iconSpeciality___description___markdown'
  | 'icon___iconSpeciality___description___text'
  | 'icon___iconSpeciality___publishedBy___remoteTypeName'
  | 'icon___iconSpeciality___publishedBy___remoteId'
  | 'icon___iconSpeciality___publishedBy___stage'
  | 'icon___iconSpeciality___publishedBy___isActive'
  | 'icon___iconSpeciality___publishedBy___picture'
  | 'icon___iconSpeciality___publishedBy___name'
  | 'icon___iconSpeciality___publishedBy___publishedAt'
  | 'icon___iconSpeciality___publishedBy___updatedAt'
  | 'icon___iconSpeciality___publishedBy___createdAt'
  | 'icon___iconSpeciality___publishedBy___kind'
  | 'icon___iconSpeciality___publishedBy___id'
  | 'icon___iconSpeciality___publishedBy___children'
  | 'icon___iconSpeciality___updatedBy___remoteTypeName'
  | 'icon___iconSpeciality___updatedBy___remoteId'
  | 'icon___iconSpeciality___updatedBy___stage'
  | 'icon___iconSpeciality___updatedBy___isActive'
  | 'icon___iconSpeciality___updatedBy___picture'
  | 'icon___iconSpeciality___updatedBy___name'
  | 'icon___iconSpeciality___updatedBy___publishedAt'
  | 'icon___iconSpeciality___updatedBy___updatedAt'
  | 'icon___iconSpeciality___updatedBy___createdAt'
  | 'icon___iconSpeciality___updatedBy___kind'
  | 'icon___iconSpeciality___updatedBy___id'
  | 'icon___iconSpeciality___updatedBy___children'
  | 'icon___iconSpeciality___createdBy___remoteTypeName'
  | 'icon___iconSpeciality___createdBy___remoteId'
  | 'icon___iconSpeciality___createdBy___stage'
  | 'icon___iconSpeciality___createdBy___isActive'
  | 'icon___iconSpeciality___createdBy___picture'
  | 'icon___iconSpeciality___createdBy___name'
  | 'icon___iconSpeciality___createdBy___publishedAt'
  | 'icon___iconSpeciality___createdBy___updatedAt'
  | 'icon___iconSpeciality___createdBy___createdAt'
  | 'icon___iconSpeciality___createdBy___kind'
  | 'icon___iconSpeciality___createdBy___id'
  | 'icon___iconSpeciality___createdBy___children'
  | 'icon___iconSpeciality___icon___remoteTypeName'
  | 'icon___iconSpeciality___icon___remoteId'
  | 'icon___iconSpeciality___icon___locale'
  | 'icon___iconSpeciality___icon___stage'
  | 'icon___iconSpeciality___icon___mimeType'
  | 'icon___iconSpeciality___icon___size'
  | 'icon___iconSpeciality___icon___width'
  | 'icon___iconSpeciality___icon___height'
  | 'icon___iconSpeciality___icon___fileName'
  | 'icon___iconSpeciality___icon___handle'
  | 'icon___iconSpeciality___icon___publishedAt'
  | 'icon___iconSpeciality___icon___updatedAt'
  | 'icon___iconSpeciality___icon___createdAt'
  | 'icon___iconSpeciality___icon___carouselImagesPortfolioItem'
  | 'icon___iconSpeciality___icon___iconSpeciality'
  | 'icon___iconSpeciality___icon___iconTechnology'
  | 'icon___iconSpeciality___icon___headerImageBlog'
  | 'icon___iconSpeciality___icon___scheduledIn'
  | 'icon___iconSpeciality___icon___url'
  | 'icon___iconSpeciality___icon___id'
  | 'icon___iconSpeciality___icon___children'
  | 'icon___iconSpeciality___scheduledIn'
  | 'icon___iconSpeciality___scheduledIn___remoteTypeName'
  | 'icon___iconSpeciality___scheduledIn___remoteId'
  | 'icon___iconSpeciality___scheduledIn___stage'
  | 'icon___iconSpeciality___scheduledIn___rawPayload'
  | 'icon___iconSpeciality___scheduledIn___errorMessage'
  | 'icon___iconSpeciality___scheduledIn___description'
  | 'icon___iconSpeciality___scheduledIn___publishedAt'
  | 'icon___iconSpeciality___scheduledIn___updatedAt'
  | 'icon___iconSpeciality___scheduledIn___createdAt'
  | 'icon___iconSpeciality___scheduledIn___status'
  | 'icon___iconSpeciality___scheduledIn___id'
  | 'icon___iconSpeciality___scheduledIn___children'
  | 'icon___iconSpeciality___id'
  | 'icon___iconSpeciality___parent___id'
  | 'icon___iconSpeciality___parent___children'
  | 'icon___iconSpeciality___children'
  | 'icon___iconSpeciality___children___id'
  | 'icon___iconSpeciality___children___children'
  | 'icon___iconSpeciality___internal___content'
  | 'icon___iconSpeciality___internal___contentDigest'
  | 'icon___iconSpeciality___internal___description'
  | 'icon___iconSpeciality___internal___fieldOwners'
  | 'icon___iconSpeciality___internal___ignoreType'
  | 'icon___iconSpeciality___internal___mediaType'
  | 'icon___iconSpeciality___internal___owner'
  | 'icon___iconSpeciality___internal___type'
  | 'icon___iconSpeciality___internal___contentFilePath'
  | 'icon___iconTechnology'
  | 'icon___iconTechnology___remoteTypeName'
  | 'icon___iconTechnology___remoteId'
  | 'icon___iconTechnology___stage'
  | 'icon___iconTechnology___publishedAt'
  | 'icon___iconTechnology___updatedAt'
  | 'icon___iconTechnology___createdAt'
  | 'icon___iconTechnology___title'
  | 'icon___iconTechnology___description___remoteTypeName'
  | 'icon___iconTechnology___description___raw'
  | 'icon___iconTechnology___description___html'
  | 'icon___iconTechnology___description___markdown'
  | 'icon___iconTechnology___description___text'
  | 'icon___iconTechnology___backgroundColor___remoteTypeName'
  | 'icon___iconTechnology___backgroundColor___hex'
  | 'icon___iconTechnology___backgroundColor___css'
  | 'icon___iconTechnology___publishedBy___remoteTypeName'
  | 'icon___iconTechnology___publishedBy___remoteId'
  | 'icon___iconTechnology___publishedBy___stage'
  | 'icon___iconTechnology___publishedBy___isActive'
  | 'icon___iconTechnology___publishedBy___picture'
  | 'icon___iconTechnology___publishedBy___name'
  | 'icon___iconTechnology___publishedBy___publishedAt'
  | 'icon___iconTechnology___publishedBy___updatedAt'
  | 'icon___iconTechnology___publishedBy___createdAt'
  | 'icon___iconTechnology___publishedBy___kind'
  | 'icon___iconTechnology___publishedBy___id'
  | 'icon___iconTechnology___publishedBy___children'
  | 'icon___iconTechnology___updatedBy___remoteTypeName'
  | 'icon___iconTechnology___updatedBy___remoteId'
  | 'icon___iconTechnology___updatedBy___stage'
  | 'icon___iconTechnology___updatedBy___isActive'
  | 'icon___iconTechnology___updatedBy___picture'
  | 'icon___iconTechnology___updatedBy___name'
  | 'icon___iconTechnology___updatedBy___publishedAt'
  | 'icon___iconTechnology___updatedBy___updatedAt'
  | 'icon___iconTechnology___updatedBy___createdAt'
  | 'icon___iconTechnology___updatedBy___kind'
  | 'icon___iconTechnology___updatedBy___id'
  | 'icon___iconTechnology___updatedBy___children'
  | 'icon___iconTechnology___createdBy___remoteTypeName'
  | 'icon___iconTechnology___createdBy___remoteId'
  | 'icon___iconTechnology___createdBy___stage'
  | 'icon___iconTechnology___createdBy___isActive'
  | 'icon___iconTechnology___createdBy___picture'
  | 'icon___iconTechnology___createdBy___name'
  | 'icon___iconTechnology___createdBy___publishedAt'
  | 'icon___iconTechnology___createdBy___updatedAt'
  | 'icon___iconTechnology___createdBy___createdAt'
  | 'icon___iconTechnology___createdBy___kind'
  | 'icon___iconTechnology___createdBy___id'
  | 'icon___iconTechnology___createdBy___children'
  | 'icon___iconTechnology___icon___remoteTypeName'
  | 'icon___iconTechnology___icon___remoteId'
  | 'icon___iconTechnology___icon___locale'
  | 'icon___iconTechnology___icon___stage'
  | 'icon___iconTechnology___icon___mimeType'
  | 'icon___iconTechnology___icon___size'
  | 'icon___iconTechnology___icon___width'
  | 'icon___iconTechnology___icon___height'
  | 'icon___iconTechnology___icon___fileName'
  | 'icon___iconTechnology___icon___handle'
  | 'icon___iconTechnology___icon___publishedAt'
  | 'icon___iconTechnology___icon___updatedAt'
  | 'icon___iconTechnology___icon___createdAt'
  | 'icon___iconTechnology___icon___carouselImagesPortfolioItem'
  | 'icon___iconTechnology___icon___iconSpeciality'
  | 'icon___iconTechnology___icon___iconTechnology'
  | 'icon___iconTechnology___icon___headerImageBlog'
  | 'icon___iconTechnology___icon___scheduledIn'
  | 'icon___iconTechnology___icon___url'
  | 'icon___iconTechnology___icon___id'
  | 'icon___iconTechnology___icon___children'
  | 'icon___iconTechnology___scheduledIn'
  | 'icon___iconTechnology___scheduledIn___remoteTypeName'
  | 'icon___iconTechnology___scheduledIn___remoteId'
  | 'icon___iconTechnology___scheduledIn___stage'
  | 'icon___iconTechnology___scheduledIn___rawPayload'
  | 'icon___iconTechnology___scheduledIn___errorMessage'
  | 'icon___iconTechnology___scheduledIn___description'
  | 'icon___iconTechnology___scheduledIn___publishedAt'
  | 'icon___iconTechnology___scheduledIn___updatedAt'
  | 'icon___iconTechnology___scheduledIn___createdAt'
  | 'icon___iconTechnology___scheduledIn___status'
  | 'icon___iconTechnology___scheduledIn___id'
  | 'icon___iconTechnology___scheduledIn___children'
  | 'icon___iconTechnology___id'
  | 'icon___iconTechnology___parent___id'
  | 'icon___iconTechnology___parent___children'
  | 'icon___iconTechnology___children'
  | 'icon___iconTechnology___children___id'
  | 'icon___iconTechnology___children___children'
  | 'icon___iconTechnology___internal___content'
  | 'icon___iconTechnology___internal___contentDigest'
  | 'icon___iconTechnology___internal___description'
  | 'icon___iconTechnology___internal___fieldOwners'
  | 'icon___iconTechnology___internal___ignoreType'
  | 'icon___iconTechnology___internal___mediaType'
  | 'icon___iconTechnology___internal___owner'
  | 'icon___iconTechnology___internal___type'
  | 'icon___iconTechnology___internal___contentFilePath'
  | 'icon___headerImageBlog'
  | 'icon___headerImageBlog___remoteTypeName'
  | 'icon___headerImageBlog___remoteId'
  | 'icon___headerImageBlog___stage'
  | 'icon___headerImageBlog___publishedAt'
  | 'icon___headerImageBlog___updatedAt'
  | 'icon___headerImageBlog___createdAt'
  | 'icon___headerImageBlog___title'
  | 'icon___headerImageBlog___description'
  | 'icon___headerImageBlog___content___remoteTypeName'
  | 'icon___headerImageBlog___content___raw'
  | 'icon___headerImageBlog___content___html'
  | 'icon___headerImageBlog___content___markdown'
  | 'icon___headerImageBlog___content___text'
  | 'icon___headerImageBlog___publishedBy___remoteTypeName'
  | 'icon___headerImageBlog___publishedBy___remoteId'
  | 'icon___headerImageBlog___publishedBy___stage'
  | 'icon___headerImageBlog___publishedBy___isActive'
  | 'icon___headerImageBlog___publishedBy___picture'
  | 'icon___headerImageBlog___publishedBy___name'
  | 'icon___headerImageBlog___publishedBy___publishedAt'
  | 'icon___headerImageBlog___publishedBy___updatedAt'
  | 'icon___headerImageBlog___publishedBy___createdAt'
  | 'icon___headerImageBlog___publishedBy___kind'
  | 'icon___headerImageBlog___publishedBy___id'
  | 'icon___headerImageBlog___publishedBy___children'
  | 'icon___headerImageBlog___updatedBy___remoteTypeName'
  | 'icon___headerImageBlog___updatedBy___remoteId'
  | 'icon___headerImageBlog___updatedBy___stage'
  | 'icon___headerImageBlog___updatedBy___isActive'
  | 'icon___headerImageBlog___updatedBy___picture'
  | 'icon___headerImageBlog___updatedBy___name'
  | 'icon___headerImageBlog___updatedBy___publishedAt'
  | 'icon___headerImageBlog___updatedBy___updatedAt'
  | 'icon___headerImageBlog___updatedBy___createdAt'
  | 'icon___headerImageBlog___updatedBy___kind'
  | 'icon___headerImageBlog___updatedBy___id'
  | 'icon___headerImageBlog___updatedBy___children'
  | 'icon___headerImageBlog___createdBy___remoteTypeName'
  | 'icon___headerImageBlog___createdBy___remoteId'
  | 'icon___headerImageBlog___createdBy___stage'
  | 'icon___headerImageBlog___createdBy___isActive'
  | 'icon___headerImageBlog___createdBy___picture'
  | 'icon___headerImageBlog___createdBy___name'
  | 'icon___headerImageBlog___createdBy___publishedAt'
  | 'icon___headerImageBlog___createdBy___updatedAt'
  | 'icon___headerImageBlog___createdBy___createdAt'
  | 'icon___headerImageBlog___createdBy___kind'
  | 'icon___headerImageBlog___createdBy___id'
  | 'icon___headerImageBlog___createdBy___children'
  | 'icon___headerImageBlog___headerImage___remoteTypeName'
  | 'icon___headerImageBlog___headerImage___remoteId'
  | 'icon___headerImageBlog___headerImage___locale'
  | 'icon___headerImageBlog___headerImage___stage'
  | 'icon___headerImageBlog___headerImage___mimeType'
  | 'icon___headerImageBlog___headerImage___size'
  | 'icon___headerImageBlog___headerImage___width'
  | 'icon___headerImageBlog___headerImage___height'
  | 'icon___headerImageBlog___headerImage___fileName'
  | 'icon___headerImageBlog___headerImage___handle'
  | 'icon___headerImageBlog___headerImage___publishedAt'
  | 'icon___headerImageBlog___headerImage___updatedAt'
  | 'icon___headerImageBlog___headerImage___createdAt'
  | 'icon___headerImageBlog___headerImage___carouselImagesPortfolioItem'
  | 'icon___headerImageBlog___headerImage___iconSpeciality'
  | 'icon___headerImageBlog___headerImage___iconTechnology'
  | 'icon___headerImageBlog___headerImage___headerImageBlog'
  | 'icon___headerImageBlog___headerImage___scheduledIn'
  | 'icon___headerImageBlog___headerImage___url'
  | 'icon___headerImageBlog___headerImage___id'
  | 'icon___headerImageBlog___headerImage___children'
  | 'icon___headerImageBlog___type'
  | 'icon___headerImageBlog___categories'
  | 'icon___headerImageBlog___scheduledIn'
  | 'icon___headerImageBlog___scheduledIn___remoteTypeName'
  | 'icon___headerImageBlog___scheduledIn___remoteId'
  | 'icon___headerImageBlog___scheduledIn___stage'
  | 'icon___headerImageBlog___scheduledIn___rawPayload'
  | 'icon___headerImageBlog___scheduledIn___errorMessage'
  | 'icon___headerImageBlog___scheduledIn___description'
  | 'icon___headerImageBlog___scheduledIn___publishedAt'
  | 'icon___headerImageBlog___scheduledIn___updatedAt'
  | 'icon___headerImageBlog___scheduledIn___createdAt'
  | 'icon___headerImageBlog___scheduledIn___status'
  | 'icon___headerImageBlog___scheduledIn___id'
  | 'icon___headerImageBlog___scheduledIn___children'
  | 'icon___headerImageBlog___gatsbyPath'
  | 'icon___headerImageBlog___id'
  | 'icon___headerImageBlog___parent___id'
  | 'icon___headerImageBlog___parent___children'
  | 'icon___headerImageBlog___children'
  | 'icon___headerImageBlog___children___id'
  | 'icon___headerImageBlog___children___children'
  | 'icon___headerImageBlog___internal___content'
  | 'icon___headerImageBlog___internal___contentDigest'
  | 'icon___headerImageBlog___internal___description'
  | 'icon___headerImageBlog___internal___fieldOwners'
  | 'icon___headerImageBlog___internal___ignoreType'
  | 'icon___headerImageBlog___internal___mediaType'
  | 'icon___headerImageBlog___internal___owner'
  | 'icon___headerImageBlog___internal___type'
  | 'icon___headerImageBlog___internal___contentFilePath'
  | 'icon___scheduledIn'
  | 'icon___scheduledIn___remoteTypeName'
  | 'icon___scheduledIn___remoteId'
  | 'icon___scheduledIn___stage'
  | 'icon___scheduledIn___rawPayload'
  | 'icon___scheduledIn___errorMessage'
  | 'icon___scheduledIn___description'
  | 'icon___scheduledIn___publishedAt'
  | 'icon___scheduledIn___updatedAt'
  | 'icon___scheduledIn___createdAt'
  | 'icon___scheduledIn___release___remoteTypeName'
  | 'icon___scheduledIn___release___remoteId'
  | 'icon___scheduledIn___release___stage'
  | 'icon___scheduledIn___release___releaseAt'
  | 'icon___scheduledIn___release___isImplicit'
  | 'icon___scheduledIn___release___isActive'
  | 'icon___scheduledIn___release___errorMessage'
  | 'icon___scheduledIn___release___description'
  | 'icon___scheduledIn___release___title'
  | 'icon___scheduledIn___release___publishedAt'
  | 'icon___scheduledIn___release___updatedAt'
  | 'icon___scheduledIn___release___createdAt'
  | 'icon___scheduledIn___release___operations'
  | 'icon___scheduledIn___release___status'
  | 'icon___scheduledIn___release___id'
  | 'icon___scheduledIn___release___children'
  | 'icon___scheduledIn___publishedBy___remoteTypeName'
  | 'icon___scheduledIn___publishedBy___remoteId'
  | 'icon___scheduledIn___publishedBy___stage'
  | 'icon___scheduledIn___publishedBy___isActive'
  | 'icon___scheduledIn___publishedBy___picture'
  | 'icon___scheduledIn___publishedBy___name'
  | 'icon___scheduledIn___publishedBy___publishedAt'
  | 'icon___scheduledIn___publishedBy___updatedAt'
  | 'icon___scheduledIn___publishedBy___createdAt'
  | 'icon___scheduledIn___publishedBy___kind'
  | 'icon___scheduledIn___publishedBy___id'
  | 'icon___scheduledIn___publishedBy___children'
  | 'icon___scheduledIn___updatedBy___remoteTypeName'
  | 'icon___scheduledIn___updatedBy___remoteId'
  | 'icon___scheduledIn___updatedBy___stage'
  | 'icon___scheduledIn___updatedBy___isActive'
  | 'icon___scheduledIn___updatedBy___picture'
  | 'icon___scheduledIn___updatedBy___name'
  | 'icon___scheduledIn___updatedBy___publishedAt'
  | 'icon___scheduledIn___updatedBy___updatedAt'
  | 'icon___scheduledIn___updatedBy___createdAt'
  | 'icon___scheduledIn___updatedBy___kind'
  | 'icon___scheduledIn___updatedBy___id'
  | 'icon___scheduledIn___updatedBy___children'
  | 'icon___scheduledIn___createdBy___remoteTypeName'
  | 'icon___scheduledIn___createdBy___remoteId'
  | 'icon___scheduledIn___createdBy___stage'
  | 'icon___scheduledIn___createdBy___isActive'
  | 'icon___scheduledIn___createdBy___picture'
  | 'icon___scheduledIn___createdBy___name'
  | 'icon___scheduledIn___createdBy___publishedAt'
  | 'icon___scheduledIn___createdBy___updatedAt'
  | 'icon___scheduledIn___createdBy___createdAt'
  | 'icon___scheduledIn___createdBy___kind'
  | 'icon___scheduledIn___createdBy___id'
  | 'icon___scheduledIn___createdBy___children'
  | 'icon___scheduledIn___status'
  | 'icon___scheduledIn___id'
  | 'icon___scheduledIn___parent___id'
  | 'icon___scheduledIn___parent___children'
  | 'icon___scheduledIn___children'
  | 'icon___scheduledIn___children___id'
  | 'icon___scheduledIn___children___children'
  | 'icon___scheduledIn___internal___content'
  | 'icon___scheduledIn___internal___contentDigest'
  | 'icon___scheduledIn___internal___description'
  | 'icon___scheduledIn___internal___fieldOwners'
  | 'icon___scheduledIn___internal___ignoreType'
  | 'icon___scheduledIn___internal___mediaType'
  | 'icon___scheduledIn___internal___owner'
  | 'icon___scheduledIn___internal___type'
  | 'icon___scheduledIn___internal___contentFilePath'
  | 'icon___url'
  | 'icon___id'
  | 'icon___parent___id'
  | 'icon___parent___parent___id'
  | 'icon___parent___parent___children'
  | 'icon___parent___children'
  | 'icon___parent___children___id'
  | 'icon___parent___children___children'
  | 'icon___parent___internal___content'
  | 'icon___parent___internal___contentDigest'
  | 'icon___parent___internal___description'
  | 'icon___parent___internal___fieldOwners'
  | 'icon___parent___internal___ignoreType'
  | 'icon___parent___internal___mediaType'
  | 'icon___parent___internal___owner'
  | 'icon___parent___internal___type'
  | 'icon___parent___internal___contentFilePath'
  | 'icon___children'
  | 'icon___children___id'
  | 'icon___children___parent___id'
  | 'icon___children___parent___children'
  | 'icon___children___children'
  | 'icon___children___children___id'
  | 'icon___children___children___children'
  | 'icon___children___internal___content'
  | 'icon___children___internal___contentDigest'
  | 'icon___children___internal___description'
  | 'icon___children___internal___fieldOwners'
  | 'icon___children___internal___ignoreType'
  | 'icon___children___internal___mediaType'
  | 'icon___children___internal___owner'
  | 'icon___children___internal___type'
  | 'icon___children___internal___contentFilePath'
  | 'icon___internal___content'
  | 'icon___internal___contentDigest'
  | 'icon___internal___description'
  | 'icon___internal___fieldOwners'
  | 'icon___internal___ignoreType'
  | 'icon___internal___mediaType'
  | 'icon___internal___owner'
  | 'icon___internal___type'
  | 'icon___internal___contentFilePath'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___description'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___release___internal___contentFilePath'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___publishedBy___internal___contentFilePath'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___updatedBy___internal___contentFilePath'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___createdBy___internal___contentFilePath'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___parent___internal___contentFilePath'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___children___internal___contentFilePath'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'scheduledIn___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type GraphCms_SpecialityGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_SpecialityEdge>;
  nodes: Array<GraphCms_Speciality>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_SpecialityGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_SpecialityGroupConnectionDistinctArgs = {
  field: GraphCms_SpecialityFieldsEnum;
};

export type GraphCms_SpecialityGroupConnectionMaxArgs = {
  field: GraphCms_SpecialityFieldsEnum;
};

export type GraphCms_SpecialityGroupConnectionMinArgs = {
  field: GraphCms_SpecialityFieldsEnum;
};

export type GraphCms_SpecialityGroupConnectionSumArgs = {
  field: GraphCms_SpecialityFieldsEnum;
};

export type GraphCms_SpecialityGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_SpecialityFieldsEnum;
};

export type GraphCms_SpecialitySortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_SpecialityFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_TechnologyConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_TechnologyEdge>;
  nodes: Array<GraphCms_Technology>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_TechnologyGroupConnection>;
};

export type GraphCms_TechnologyConnectionDistinctArgs = {
  field: GraphCms_TechnologyFieldsEnum;
};

export type GraphCms_TechnologyConnectionMaxArgs = {
  field: GraphCms_TechnologyFieldsEnum;
};

export type GraphCms_TechnologyConnectionMinArgs = {
  field: GraphCms_TechnologyFieldsEnum;
};

export type GraphCms_TechnologyConnectionSumArgs = {
  field: GraphCms_TechnologyFieldsEnum;
};

export type GraphCms_TechnologyConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_TechnologyFieldsEnum;
};

export type GraphCms_TechnologyEdge = {
  next?: Maybe<GraphCms_Technology>;
  node: GraphCms_Technology;
  previous?: Maybe<GraphCms_Technology>;
};

export type GraphCms_TechnologyFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'title'
  | 'description___remoteTypeName'
  | 'description___raw'
  | 'description___html'
  | 'description___markdown'
  | 'description___text'
  | 'backgroundColor___remoteTypeName'
  | 'backgroundColor___hex'
  | 'backgroundColor___rgba___remoteTypeName'
  | 'backgroundColor___rgba___r'
  | 'backgroundColor___rgba___g'
  | 'backgroundColor___rgba___b'
  | 'backgroundColor___rgba___a'
  | 'backgroundColor___css'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___isActive'
  | 'publishedBy___picture'
  | 'publishedBy___name'
  | 'publishedBy___publishedAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___createdAt'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___parent___internal___contentFilePath'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___children___internal___contentFilePath'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'publishedBy___internal___contentFilePath'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___isActive'
  | 'updatedBy___picture'
  | 'updatedBy___name'
  | 'updatedBy___publishedAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___createdAt'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___parent___internal___contentFilePath'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___children___internal___contentFilePath'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'updatedBy___internal___contentFilePath'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___isActive'
  | 'createdBy___picture'
  | 'createdBy___name'
  | 'createdBy___publishedAt'
  | 'createdBy___updatedAt'
  | 'createdBy___createdAt'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___parent___internal___contentFilePath'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___children___internal___contentFilePath'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'createdBy___internal___contentFilePath'
  | 'icon___remoteTypeName'
  | 'icon___remoteId'
  | 'icon___locale'
  | 'icon___stage'
  | 'icon___mimeType'
  | 'icon___size'
  | 'icon___width'
  | 'icon___height'
  | 'icon___fileName'
  | 'icon___handle'
  | 'icon___publishedAt'
  | 'icon___updatedAt'
  | 'icon___createdAt'
  | 'icon___publishedBy___remoteTypeName'
  | 'icon___publishedBy___remoteId'
  | 'icon___publishedBy___stage'
  | 'icon___publishedBy___isActive'
  | 'icon___publishedBy___picture'
  | 'icon___publishedBy___name'
  | 'icon___publishedBy___publishedAt'
  | 'icon___publishedBy___updatedAt'
  | 'icon___publishedBy___createdAt'
  | 'icon___publishedBy___kind'
  | 'icon___publishedBy___id'
  | 'icon___publishedBy___parent___id'
  | 'icon___publishedBy___parent___children'
  | 'icon___publishedBy___children'
  | 'icon___publishedBy___children___id'
  | 'icon___publishedBy___children___children'
  | 'icon___publishedBy___internal___content'
  | 'icon___publishedBy___internal___contentDigest'
  | 'icon___publishedBy___internal___description'
  | 'icon___publishedBy___internal___fieldOwners'
  | 'icon___publishedBy___internal___ignoreType'
  | 'icon___publishedBy___internal___mediaType'
  | 'icon___publishedBy___internal___owner'
  | 'icon___publishedBy___internal___type'
  | 'icon___publishedBy___internal___contentFilePath'
  | 'icon___updatedBy___remoteTypeName'
  | 'icon___updatedBy___remoteId'
  | 'icon___updatedBy___stage'
  | 'icon___updatedBy___isActive'
  | 'icon___updatedBy___picture'
  | 'icon___updatedBy___name'
  | 'icon___updatedBy___publishedAt'
  | 'icon___updatedBy___updatedAt'
  | 'icon___updatedBy___createdAt'
  | 'icon___updatedBy___kind'
  | 'icon___updatedBy___id'
  | 'icon___updatedBy___parent___id'
  | 'icon___updatedBy___parent___children'
  | 'icon___updatedBy___children'
  | 'icon___updatedBy___children___id'
  | 'icon___updatedBy___children___children'
  | 'icon___updatedBy___internal___content'
  | 'icon___updatedBy___internal___contentDigest'
  | 'icon___updatedBy___internal___description'
  | 'icon___updatedBy___internal___fieldOwners'
  | 'icon___updatedBy___internal___ignoreType'
  | 'icon___updatedBy___internal___mediaType'
  | 'icon___updatedBy___internal___owner'
  | 'icon___updatedBy___internal___type'
  | 'icon___updatedBy___internal___contentFilePath'
  | 'icon___createdBy___remoteTypeName'
  | 'icon___createdBy___remoteId'
  | 'icon___createdBy___stage'
  | 'icon___createdBy___isActive'
  | 'icon___createdBy___picture'
  | 'icon___createdBy___name'
  | 'icon___createdBy___publishedAt'
  | 'icon___createdBy___updatedAt'
  | 'icon___createdBy___createdAt'
  | 'icon___createdBy___kind'
  | 'icon___createdBy___id'
  | 'icon___createdBy___parent___id'
  | 'icon___createdBy___parent___children'
  | 'icon___createdBy___children'
  | 'icon___createdBy___children___id'
  | 'icon___createdBy___children___children'
  | 'icon___createdBy___internal___content'
  | 'icon___createdBy___internal___contentDigest'
  | 'icon___createdBy___internal___description'
  | 'icon___createdBy___internal___fieldOwners'
  | 'icon___createdBy___internal___ignoreType'
  | 'icon___createdBy___internal___mediaType'
  | 'icon___createdBy___internal___owner'
  | 'icon___createdBy___internal___type'
  | 'icon___createdBy___internal___contentFilePath'
  | 'icon___carouselImagesPortfolioItem'
  | 'icon___carouselImagesPortfolioItem___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___remoteId'
  | 'icon___carouselImagesPortfolioItem___stage'
  | 'icon___carouselImagesPortfolioItem___publishedAt'
  | 'icon___carouselImagesPortfolioItem___updatedAt'
  | 'icon___carouselImagesPortfolioItem___createdAt'
  | 'icon___carouselImagesPortfolioItem___title'
  | 'icon___carouselImagesPortfolioItem___description'
  | 'icon___carouselImagesPortfolioItem___about___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___about___raw'
  | 'icon___carouselImagesPortfolioItem___about___html'
  | 'icon___carouselImagesPortfolioItem___about___markdown'
  | 'icon___carouselImagesPortfolioItem___about___text'
  | 'icon___carouselImagesPortfolioItem___techSheet'
  | 'icon___carouselImagesPortfolioItem___publishedBy___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___publishedBy___remoteId'
  | 'icon___carouselImagesPortfolioItem___publishedBy___stage'
  | 'icon___carouselImagesPortfolioItem___publishedBy___isActive'
  | 'icon___carouselImagesPortfolioItem___publishedBy___picture'
  | 'icon___carouselImagesPortfolioItem___publishedBy___name'
  | 'icon___carouselImagesPortfolioItem___publishedBy___publishedAt'
  | 'icon___carouselImagesPortfolioItem___publishedBy___updatedAt'
  | 'icon___carouselImagesPortfolioItem___publishedBy___createdAt'
  | 'icon___carouselImagesPortfolioItem___publishedBy___kind'
  | 'icon___carouselImagesPortfolioItem___publishedBy___id'
  | 'icon___carouselImagesPortfolioItem___publishedBy___children'
  | 'icon___carouselImagesPortfolioItem___updatedBy___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___updatedBy___remoteId'
  | 'icon___carouselImagesPortfolioItem___updatedBy___stage'
  | 'icon___carouselImagesPortfolioItem___updatedBy___isActive'
  | 'icon___carouselImagesPortfolioItem___updatedBy___picture'
  | 'icon___carouselImagesPortfolioItem___updatedBy___name'
  | 'icon___carouselImagesPortfolioItem___updatedBy___publishedAt'
  | 'icon___carouselImagesPortfolioItem___updatedBy___updatedAt'
  | 'icon___carouselImagesPortfolioItem___updatedBy___createdAt'
  | 'icon___carouselImagesPortfolioItem___updatedBy___kind'
  | 'icon___carouselImagesPortfolioItem___updatedBy___id'
  | 'icon___carouselImagesPortfolioItem___updatedBy___children'
  | 'icon___carouselImagesPortfolioItem___createdBy___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___createdBy___remoteId'
  | 'icon___carouselImagesPortfolioItem___createdBy___stage'
  | 'icon___carouselImagesPortfolioItem___createdBy___isActive'
  | 'icon___carouselImagesPortfolioItem___createdBy___picture'
  | 'icon___carouselImagesPortfolioItem___createdBy___name'
  | 'icon___carouselImagesPortfolioItem___createdBy___publishedAt'
  | 'icon___carouselImagesPortfolioItem___createdBy___updatedAt'
  | 'icon___carouselImagesPortfolioItem___createdBy___createdAt'
  | 'icon___carouselImagesPortfolioItem___createdBy___kind'
  | 'icon___carouselImagesPortfolioItem___createdBy___id'
  | 'icon___carouselImagesPortfolioItem___createdBy___children'
  | 'icon___carouselImagesPortfolioItem___carouselImages'
  | 'icon___carouselImagesPortfolioItem___carouselImages___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___carouselImages___remoteId'
  | 'icon___carouselImagesPortfolioItem___carouselImages___locale'
  | 'icon___carouselImagesPortfolioItem___carouselImages___stage'
  | 'icon___carouselImagesPortfolioItem___carouselImages___mimeType'
  | 'icon___carouselImagesPortfolioItem___carouselImages___size'
  | 'icon___carouselImagesPortfolioItem___carouselImages___width'
  | 'icon___carouselImagesPortfolioItem___carouselImages___height'
  | 'icon___carouselImagesPortfolioItem___carouselImages___fileName'
  | 'icon___carouselImagesPortfolioItem___carouselImages___handle'
  | 'icon___carouselImagesPortfolioItem___carouselImages___publishedAt'
  | 'icon___carouselImagesPortfolioItem___carouselImages___updatedAt'
  | 'icon___carouselImagesPortfolioItem___carouselImages___createdAt'
  | 'icon___carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem'
  | 'icon___carouselImagesPortfolioItem___carouselImages___iconSpeciality'
  | 'icon___carouselImagesPortfolioItem___carouselImages___iconTechnology'
  | 'icon___carouselImagesPortfolioItem___carouselImages___headerImageBlog'
  | 'icon___carouselImagesPortfolioItem___carouselImages___scheduledIn'
  | 'icon___carouselImagesPortfolioItem___carouselImages___url'
  | 'icon___carouselImagesPortfolioItem___carouselImages___id'
  | 'icon___carouselImagesPortfolioItem___carouselImages___children'
  | 'icon___carouselImagesPortfolioItem___links'
  | 'icon___carouselImagesPortfolioItem___links___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___links___remoteId'
  | 'icon___carouselImagesPortfolioItem___links___stage'
  | 'icon___carouselImagesPortfolioItem___links___publishedAt'
  | 'icon___carouselImagesPortfolioItem___links___updatedAt'
  | 'icon___carouselImagesPortfolioItem___links___createdAt'
  | 'icon___carouselImagesPortfolioItem___links___title'
  | 'icon___carouselImagesPortfolioItem___links___url'
  | 'icon___carouselImagesPortfolioItem___links___type'
  | 'icon___carouselImagesPortfolioItem___links___scheduledIn'
  | 'icon___carouselImagesPortfolioItem___links___id'
  | 'icon___carouselImagesPortfolioItem___links___children'
  | 'icon___carouselImagesPortfolioItem___scheduledIn'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___remoteTypeName'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___remoteId'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___stage'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___rawPayload'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___errorMessage'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___description'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___publishedAt'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___updatedAt'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___createdAt'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___status'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___id'
  | 'icon___carouselImagesPortfolioItem___scheduledIn___children'
  | 'icon___carouselImagesPortfolioItem___gatsbyPath'
  | 'icon___carouselImagesPortfolioItem___id'
  | 'icon___carouselImagesPortfolioItem___parent___id'
  | 'icon___carouselImagesPortfolioItem___parent___children'
  | 'icon___carouselImagesPortfolioItem___children'
  | 'icon___carouselImagesPortfolioItem___children___id'
  | 'icon___carouselImagesPortfolioItem___children___children'
  | 'icon___carouselImagesPortfolioItem___internal___content'
  | 'icon___carouselImagesPortfolioItem___internal___contentDigest'
  | 'icon___carouselImagesPortfolioItem___internal___description'
  | 'icon___carouselImagesPortfolioItem___internal___fieldOwners'
  | 'icon___carouselImagesPortfolioItem___internal___ignoreType'
  | 'icon___carouselImagesPortfolioItem___internal___mediaType'
  | 'icon___carouselImagesPortfolioItem___internal___owner'
  | 'icon___carouselImagesPortfolioItem___internal___type'
  | 'icon___carouselImagesPortfolioItem___internal___contentFilePath'
  | 'icon___iconSpeciality'
  | 'icon___iconSpeciality___remoteTypeName'
  | 'icon___iconSpeciality___remoteId'
  | 'icon___iconSpeciality___stage'
  | 'icon___iconSpeciality___publishedAt'
  | 'icon___iconSpeciality___updatedAt'
  | 'icon___iconSpeciality___createdAt'
  | 'icon___iconSpeciality___title'
  | 'icon___iconSpeciality___description___remoteTypeName'
  | 'icon___iconSpeciality___description___raw'
  | 'icon___iconSpeciality___description___html'
  | 'icon___iconSpeciality___description___markdown'
  | 'icon___iconSpeciality___description___text'
  | 'icon___iconSpeciality___publishedBy___remoteTypeName'
  | 'icon___iconSpeciality___publishedBy___remoteId'
  | 'icon___iconSpeciality___publishedBy___stage'
  | 'icon___iconSpeciality___publishedBy___isActive'
  | 'icon___iconSpeciality___publishedBy___picture'
  | 'icon___iconSpeciality___publishedBy___name'
  | 'icon___iconSpeciality___publishedBy___publishedAt'
  | 'icon___iconSpeciality___publishedBy___updatedAt'
  | 'icon___iconSpeciality___publishedBy___createdAt'
  | 'icon___iconSpeciality___publishedBy___kind'
  | 'icon___iconSpeciality___publishedBy___id'
  | 'icon___iconSpeciality___publishedBy___children'
  | 'icon___iconSpeciality___updatedBy___remoteTypeName'
  | 'icon___iconSpeciality___updatedBy___remoteId'
  | 'icon___iconSpeciality___updatedBy___stage'
  | 'icon___iconSpeciality___updatedBy___isActive'
  | 'icon___iconSpeciality___updatedBy___picture'
  | 'icon___iconSpeciality___updatedBy___name'
  | 'icon___iconSpeciality___updatedBy___publishedAt'
  | 'icon___iconSpeciality___updatedBy___updatedAt'
  | 'icon___iconSpeciality___updatedBy___createdAt'
  | 'icon___iconSpeciality___updatedBy___kind'
  | 'icon___iconSpeciality___updatedBy___id'
  | 'icon___iconSpeciality___updatedBy___children'
  | 'icon___iconSpeciality___createdBy___remoteTypeName'
  | 'icon___iconSpeciality___createdBy___remoteId'
  | 'icon___iconSpeciality___createdBy___stage'
  | 'icon___iconSpeciality___createdBy___isActive'
  | 'icon___iconSpeciality___createdBy___picture'
  | 'icon___iconSpeciality___createdBy___name'
  | 'icon___iconSpeciality___createdBy___publishedAt'
  | 'icon___iconSpeciality___createdBy___updatedAt'
  | 'icon___iconSpeciality___createdBy___createdAt'
  | 'icon___iconSpeciality___createdBy___kind'
  | 'icon___iconSpeciality___createdBy___id'
  | 'icon___iconSpeciality___createdBy___children'
  | 'icon___iconSpeciality___icon___remoteTypeName'
  | 'icon___iconSpeciality___icon___remoteId'
  | 'icon___iconSpeciality___icon___locale'
  | 'icon___iconSpeciality___icon___stage'
  | 'icon___iconSpeciality___icon___mimeType'
  | 'icon___iconSpeciality___icon___size'
  | 'icon___iconSpeciality___icon___width'
  | 'icon___iconSpeciality___icon___height'
  | 'icon___iconSpeciality___icon___fileName'
  | 'icon___iconSpeciality___icon___handle'
  | 'icon___iconSpeciality___icon___publishedAt'
  | 'icon___iconSpeciality___icon___updatedAt'
  | 'icon___iconSpeciality___icon___createdAt'
  | 'icon___iconSpeciality___icon___carouselImagesPortfolioItem'
  | 'icon___iconSpeciality___icon___iconSpeciality'
  | 'icon___iconSpeciality___icon___iconTechnology'
  | 'icon___iconSpeciality___icon___headerImageBlog'
  | 'icon___iconSpeciality___icon___scheduledIn'
  | 'icon___iconSpeciality___icon___url'
  | 'icon___iconSpeciality___icon___id'
  | 'icon___iconSpeciality___icon___children'
  | 'icon___iconSpeciality___scheduledIn'
  | 'icon___iconSpeciality___scheduledIn___remoteTypeName'
  | 'icon___iconSpeciality___scheduledIn___remoteId'
  | 'icon___iconSpeciality___scheduledIn___stage'
  | 'icon___iconSpeciality___scheduledIn___rawPayload'
  | 'icon___iconSpeciality___scheduledIn___errorMessage'
  | 'icon___iconSpeciality___scheduledIn___description'
  | 'icon___iconSpeciality___scheduledIn___publishedAt'
  | 'icon___iconSpeciality___scheduledIn___updatedAt'
  | 'icon___iconSpeciality___scheduledIn___createdAt'
  | 'icon___iconSpeciality___scheduledIn___status'
  | 'icon___iconSpeciality___scheduledIn___id'
  | 'icon___iconSpeciality___scheduledIn___children'
  | 'icon___iconSpeciality___id'
  | 'icon___iconSpeciality___parent___id'
  | 'icon___iconSpeciality___parent___children'
  | 'icon___iconSpeciality___children'
  | 'icon___iconSpeciality___children___id'
  | 'icon___iconSpeciality___children___children'
  | 'icon___iconSpeciality___internal___content'
  | 'icon___iconSpeciality___internal___contentDigest'
  | 'icon___iconSpeciality___internal___description'
  | 'icon___iconSpeciality___internal___fieldOwners'
  | 'icon___iconSpeciality___internal___ignoreType'
  | 'icon___iconSpeciality___internal___mediaType'
  | 'icon___iconSpeciality___internal___owner'
  | 'icon___iconSpeciality___internal___type'
  | 'icon___iconSpeciality___internal___contentFilePath'
  | 'icon___iconTechnology'
  | 'icon___iconTechnology___remoteTypeName'
  | 'icon___iconTechnology___remoteId'
  | 'icon___iconTechnology___stage'
  | 'icon___iconTechnology___publishedAt'
  | 'icon___iconTechnology___updatedAt'
  | 'icon___iconTechnology___createdAt'
  | 'icon___iconTechnology___title'
  | 'icon___iconTechnology___description___remoteTypeName'
  | 'icon___iconTechnology___description___raw'
  | 'icon___iconTechnology___description___html'
  | 'icon___iconTechnology___description___markdown'
  | 'icon___iconTechnology___description___text'
  | 'icon___iconTechnology___backgroundColor___remoteTypeName'
  | 'icon___iconTechnology___backgroundColor___hex'
  | 'icon___iconTechnology___backgroundColor___css'
  | 'icon___iconTechnology___publishedBy___remoteTypeName'
  | 'icon___iconTechnology___publishedBy___remoteId'
  | 'icon___iconTechnology___publishedBy___stage'
  | 'icon___iconTechnology___publishedBy___isActive'
  | 'icon___iconTechnology___publishedBy___picture'
  | 'icon___iconTechnology___publishedBy___name'
  | 'icon___iconTechnology___publishedBy___publishedAt'
  | 'icon___iconTechnology___publishedBy___updatedAt'
  | 'icon___iconTechnology___publishedBy___createdAt'
  | 'icon___iconTechnology___publishedBy___kind'
  | 'icon___iconTechnology___publishedBy___id'
  | 'icon___iconTechnology___publishedBy___children'
  | 'icon___iconTechnology___updatedBy___remoteTypeName'
  | 'icon___iconTechnology___updatedBy___remoteId'
  | 'icon___iconTechnology___updatedBy___stage'
  | 'icon___iconTechnology___updatedBy___isActive'
  | 'icon___iconTechnology___updatedBy___picture'
  | 'icon___iconTechnology___updatedBy___name'
  | 'icon___iconTechnology___updatedBy___publishedAt'
  | 'icon___iconTechnology___updatedBy___updatedAt'
  | 'icon___iconTechnology___updatedBy___createdAt'
  | 'icon___iconTechnology___updatedBy___kind'
  | 'icon___iconTechnology___updatedBy___id'
  | 'icon___iconTechnology___updatedBy___children'
  | 'icon___iconTechnology___createdBy___remoteTypeName'
  | 'icon___iconTechnology___createdBy___remoteId'
  | 'icon___iconTechnology___createdBy___stage'
  | 'icon___iconTechnology___createdBy___isActive'
  | 'icon___iconTechnology___createdBy___picture'
  | 'icon___iconTechnology___createdBy___name'
  | 'icon___iconTechnology___createdBy___publishedAt'
  | 'icon___iconTechnology___createdBy___updatedAt'
  | 'icon___iconTechnology___createdBy___createdAt'
  | 'icon___iconTechnology___createdBy___kind'
  | 'icon___iconTechnology___createdBy___id'
  | 'icon___iconTechnology___createdBy___children'
  | 'icon___iconTechnology___icon___remoteTypeName'
  | 'icon___iconTechnology___icon___remoteId'
  | 'icon___iconTechnology___icon___locale'
  | 'icon___iconTechnology___icon___stage'
  | 'icon___iconTechnology___icon___mimeType'
  | 'icon___iconTechnology___icon___size'
  | 'icon___iconTechnology___icon___width'
  | 'icon___iconTechnology___icon___height'
  | 'icon___iconTechnology___icon___fileName'
  | 'icon___iconTechnology___icon___handle'
  | 'icon___iconTechnology___icon___publishedAt'
  | 'icon___iconTechnology___icon___updatedAt'
  | 'icon___iconTechnology___icon___createdAt'
  | 'icon___iconTechnology___icon___carouselImagesPortfolioItem'
  | 'icon___iconTechnology___icon___iconSpeciality'
  | 'icon___iconTechnology___icon___iconTechnology'
  | 'icon___iconTechnology___icon___headerImageBlog'
  | 'icon___iconTechnology___icon___scheduledIn'
  | 'icon___iconTechnology___icon___url'
  | 'icon___iconTechnology___icon___id'
  | 'icon___iconTechnology___icon___children'
  | 'icon___iconTechnology___scheduledIn'
  | 'icon___iconTechnology___scheduledIn___remoteTypeName'
  | 'icon___iconTechnology___scheduledIn___remoteId'
  | 'icon___iconTechnology___scheduledIn___stage'
  | 'icon___iconTechnology___scheduledIn___rawPayload'
  | 'icon___iconTechnology___scheduledIn___errorMessage'
  | 'icon___iconTechnology___scheduledIn___description'
  | 'icon___iconTechnology___scheduledIn___publishedAt'
  | 'icon___iconTechnology___scheduledIn___updatedAt'
  | 'icon___iconTechnology___scheduledIn___createdAt'
  | 'icon___iconTechnology___scheduledIn___status'
  | 'icon___iconTechnology___scheduledIn___id'
  | 'icon___iconTechnology___scheduledIn___children'
  | 'icon___iconTechnology___id'
  | 'icon___iconTechnology___parent___id'
  | 'icon___iconTechnology___parent___children'
  | 'icon___iconTechnology___children'
  | 'icon___iconTechnology___children___id'
  | 'icon___iconTechnology___children___children'
  | 'icon___iconTechnology___internal___content'
  | 'icon___iconTechnology___internal___contentDigest'
  | 'icon___iconTechnology___internal___description'
  | 'icon___iconTechnology___internal___fieldOwners'
  | 'icon___iconTechnology___internal___ignoreType'
  | 'icon___iconTechnology___internal___mediaType'
  | 'icon___iconTechnology___internal___owner'
  | 'icon___iconTechnology___internal___type'
  | 'icon___iconTechnology___internal___contentFilePath'
  | 'icon___headerImageBlog'
  | 'icon___headerImageBlog___remoteTypeName'
  | 'icon___headerImageBlog___remoteId'
  | 'icon___headerImageBlog___stage'
  | 'icon___headerImageBlog___publishedAt'
  | 'icon___headerImageBlog___updatedAt'
  | 'icon___headerImageBlog___createdAt'
  | 'icon___headerImageBlog___title'
  | 'icon___headerImageBlog___description'
  | 'icon___headerImageBlog___content___remoteTypeName'
  | 'icon___headerImageBlog___content___raw'
  | 'icon___headerImageBlog___content___html'
  | 'icon___headerImageBlog___content___markdown'
  | 'icon___headerImageBlog___content___text'
  | 'icon___headerImageBlog___publishedBy___remoteTypeName'
  | 'icon___headerImageBlog___publishedBy___remoteId'
  | 'icon___headerImageBlog___publishedBy___stage'
  | 'icon___headerImageBlog___publishedBy___isActive'
  | 'icon___headerImageBlog___publishedBy___picture'
  | 'icon___headerImageBlog___publishedBy___name'
  | 'icon___headerImageBlog___publishedBy___publishedAt'
  | 'icon___headerImageBlog___publishedBy___updatedAt'
  | 'icon___headerImageBlog___publishedBy___createdAt'
  | 'icon___headerImageBlog___publishedBy___kind'
  | 'icon___headerImageBlog___publishedBy___id'
  | 'icon___headerImageBlog___publishedBy___children'
  | 'icon___headerImageBlog___updatedBy___remoteTypeName'
  | 'icon___headerImageBlog___updatedBy___remoteId'
  | 'icon___headerImageBlog___updatedBy___stage'
  | 'icon___headerImageBlog___updatedBy___isActive'
  | 'icon___headerImageBlog___updatedBy___picture'
  | 'icon___headerImageBlog___updatedBy___name'
  | 'icon___headerImageBlog___updatedBy___publishedAt'
  | 'icon___headerImageBlog___updatedBy___updatedAt'
  | 'icon___headerImageBlog___updatedBy___createdAt'
  | 'icon___headerImageBlog___updatedBy___kind'
  | 'icon___headerImageBlog___updatedBy___id'
  | 'icon___headerImageBlog___updatedBy___children'
  | 'icon___headerImageBlog___createdBy___remoteTypeName'
  | 'icon___headerImageBlog___createdBy___remoteId'
  | 'icon___headerImageBlog___createdBy___stage'
  | 'icon___headerImageBlog___createdBy___isActive'
  | 'icon___headerImageBlog___createdBy___picture'
  | 'icon___headerImageBlog___createdBy___name'
  | 'icon___headerImageBlog___createdBy___publishedAt'
  | 'icon___headerImageBlog___createdBy___updatedAt'
  | 'icon___headerImageBlog___createdBy___createdAt'
  | 'icon___headerImageBlog___createdBy___kind'
  | 'icon___headerImageBlog___createdBy___id'
  | 'icon___headerImageBlog___createdBy___children'
  | 'icon___headerImageBlog___headerImage___remoteTypeName'
  | 'icon___headerImageBlog___headerImage___remoteId'
  | 'icon___headerImageBlog___headerImage___locale'
  | 'icon___headerImageBlog___headerImage___stage'
  | 'icon___headerImageBlog___headerImage___mimeType'
  | 'icon___headerImageBlog___headerImage___size'
  | 'icon___headerImageBlog___headerImage___width'
  | 'icon___headerImageBlog___headerImage___height'
  | 'icon___headerImageBlog___headerImage___fileName'
  | 'icon___headerImageBlog___headerImage___handle'
  | 'icon___headerImageBlog___headerImage___publishedAt'
  | 'icon___headerImageBlog___headerImage___updatedAt'
  | 'icon___headerImageBlog___headerImage___createdAt'
  | 'icon___headerImageBlog___headerImage___carouselImagesPortfolioItem'
  | 'icon___headerImageBlog___headerImage___iconSpeciality'
  | 'icon___headerImageBlog___headerImage___iconTechnology'
  | 'icon___headerImageBlog___headerImage___headerImageBlog'
  | 'icon___headerImageBlog___headerImage___scheduledIn'
  | 'icon___headerImageBlog___headerImage___url'
  | 'icon___headerImageBlog___headerImage___id'
  | 'icon___headerImageBlog___headerImage___children'
  | 'icon___headerImageBlog___type'
  | 'icon___headerImageBlog___categories'
  | 'icon___headerImageBlog___scheduledIn'
  | 'icon___headerImageBlog___scheduledIn___remoteTypeName'
  | 'icon___headerImageBlog___scheduledIn___remoteId'
  | 'icon___headerImageBlog___scheduledIn___stage'
  | 'icon___headerImageBlog___scheduledIn___rawPayload'
  | 'icon___headerImageBlog___scheduledIn___errorMessage'
  | 'icon___headerImageBlog___scheduledIn___description'
  | 'icon___headerImageBlog___scheduledIn___publishedAt'
  | 'icon___headerImageBlog___scheduledIn___updatedAt'
  | 'icon___headerImageBlog___scheduledIn___createdAt'
  | 'icon___headerImageBlog___scheduledIn___status'
  | 'icon___headerImageBlog___scheduledIn___id'
  | 'icon___headerImageBlog___scheduledIn___children'
  | 'icon___headerImageBlog___gatsbyPath'
  | 'icon___headerImageBlog___id'
  | 'icon___headerImageBlog___parent___id'
  | 'icon___headerImageBlog___parent___children'
  | 'icon___headerImageBlog___children'
  | 'icon___headerImageBlog___children___id'
  | 'icon___headerImageBlog___children___children'
  | 'icon___headerImageBlog___internal___content'
  | 'icon___headerImageBlog___internal___contentDigest'
  | 'icon___headerImageBlog___internal___description'
  | 'icon___headerImageBlog___internal___fieldOwners'
  | 'icon___headerImageBlog___internal___ignoreType'
  | 'icon___headerImageBlog___internal___mediaType'
  | 'icon___headerImageBlog___internal___owner'
  | 'icon___headerImageBlog___internal___type'
  | 'icon___headerImageBlog___internal___contentFilePath'
  | 'icon___scheduledIn'
  | 'icon___scheduledIn___remoteTypeName'
  | 'icon___scheduledIn___remoteId'
  | 'icon___scheduledIn___stage'
  | 'icon___scheduledIn___rawPayload'
  | 'icon___scheduledIn___errorMessage'
  | 'icon___scheduledIn___description'
  | 'icon___scheduledIn___publishedAt'
  | 'icon___scheduledIn___updatedAt'
  | 'icon___scheduledIn___createdAt'
  | 'icon___scheduledIn___release___remoteTypeName'
  | 'icon___scheduledIn___release___remoteId'
  | 'icon___scheduledIn___release___stage'
  | 'icon___scheduledIn___release___releaseAt'
  | 'icon___scheduledIn___release___isImplicit'
  | 'icon___scheduledIn___release___isActive'
  | 'icon___scheduledIn___release___errorMessage'
  | 'icon___scheduledIn___release___description'
  | 'icon___scheduledIn___release___title'
  | 'icon___scheduledIn___release___publishedAt'
  | 'icon___scheduledIn___release___updatedAt'
  | 'icon___scheduledIn___release___createdAt'
  | 'icon___scheduledIn___release___operations'
  | 'icon___scheduledIn___release___status'
  | 'icon___scheduledIn___release___id'
  | 'icon___scheduledIn___release___children'
  | 'icon___scheduledIn___publishedBy___remoteTypeName'
  | 'icon___scheduledIn___publishedBy___remoteId'
  | 'icon___scheduledIn___publishedBy___stage'
  | 'icon___scheduledIn___publishedBy___isActive'
  | 'icon___scheduledIn___publishedBy___picture'
  | 'icon___scheduledIn___publishedBy___name'
  | 'icon___scheduledIn___publishedBy___publishedAt'
  | 'icon___scheduledIn___publishedBy___updatedAt'
  | 'icon___scheduledIn___publishedBy___createdAt'
  | 'icon___scheduledIn___publishedBy___kind'
  | 'icon___scheduledIn___publishedBy___id'
  | 'icon___scheduledIn___publishedBy___children'
  | 'icon___scheduledIn___updatedBy___remoteTypeName'
  | 'icon___scheduledIn___updatedBy___remoteId'
  | 'icon___scheduledIn___updatedBy___stage'
  | 'icon___scheduledIn___updatedBy___isActive'
  | 'icon___scheduledIn___updatedBy___picture'
  | 'icon___scheduledIn___updatedBy___name'
  | 'icon___scheduledIn___updatedBy___publishedAt'
  | 'icon___scheduledIn___updatedBy___updatedAt'
  | 'icon___scheduledIn___updatedBy___createdAt'
  | 'icon___scheduledIn___updatedBy___kind'
  | 'icon___scheduledIn___updatedBy___id'
  | 'icon___scheduledIn___updatedBy___children'
  | 'icon___scheduledIn___createdBy___remoteTypeName'
  | 'icon___scheduledIn___createdBy___remoteId'
  | 'icon___scheduledIn___createdBy___stage'
  | 'icon___scheduledIn___createdBy___isActive'
  | 'icon___scheduledIn___createdBy___picture'
  | 'icon___scheduledIn___createdBy___name'
  | 'icon___scheduledIn___createdBy___publishedAt'
  | 'icon___scheduledIn___createdBy___updatedAt'
  | 'icon___scheduledIn___createdBy___createdAt'
  | 'icon___scheduledIn___createdBy___kind'
  | 'icon___scheduledIn___createdBy___id'
  | 'icon___scheduledIn___createdBy___children'
  | 'icon___scheduledIn___status'
  | 'icon___scheduledIn___id'
  | 'icon___scheduledIn___parent___id'
  | 'icon___scheduledIn___parent___children'
  | 'icon___scheduledIn___children'
  | 'icon___scheduledIn___children___id'
  | 'icon___scheduledIn___children___children'
  | 'icon___scheduledIn___internal___content'
  | 'icon___scheduledIn___internal___contentDigest'
  | 'icon___scheduledIn___internal___description'
  | 'icon___scheduledIn___internal___fieldOwners'
  | 'icon___scheduledIn___internal___ignoreType'
  | 'icon___scheduledIn___internal___mediaType'
  | 'icon___scheduledIn___internal___owner'
  | 'icon___scheduledIn___internal___type'
  | 'icon___scheduledIn___internal___contentFilePath'
  | 'icon___url'
  | 'icon___id'
  | 'icon___parent___id'
  | 'icon___parent___parent___id'
  | 'icon___parent___parent___children'
  | 'icon___parent___children'
  | 'icon___parent___children___id'
  | 'icon___parent___children___children'
  | 'icon___parent___internal___content'
  | 'icon___parent___internal___contentDigest'
  | 'icon___parent___internal___description'
  | 'icon___parent___internal___fieldOwners'
  | 'icon___parent___internal___ignoreType'
  | 'icon___parent___internal___mediaType'
  | 'icon___parent___internal___owner'
  | 'icon___parent___internal___type'
  | 'icon___parent___internal___contentFilePath'
  | 'icon___children'
  | 'icon___children___id'
  | 'icon___children___parent___id'
  | 'icon___children___parent___children'
  | 'icon___children___children'
  | 'icon___children___children___id'
  | 'icon___children___children___children'
  | 'icon___children___internal___content'
  | 'icon___children___internal___contentDigest'
  | 'icon___children___internal___description'
  | 'icon___children___internal___fieldOwners'
  | 'icon___children___internal___ignoreType'
  | 'icon___children___internal___mediaType'
  | 'icon___children___internal___owner'
  | 'icon___children___internal___type'
  | 'icon___children___internal___contentFilePath'
  | 'icon___internal___content'
  | 'icon___internal___contentDigest'
  | 'icon___internal___description'
  | 'icon___internal___fieldOwners'
  | 'icon___internal___ignoreType'
  | 'icon___internal___mediaType'
  | 'icon___internal___owner'
  | 'icon___internal___type'
  | 'icon___internal___contentFilePath'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___description'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___release___internal___contentFilePath'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___publishedBy___internal___contentFilePath'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___updatedBy___internal___contentFilePath'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___createdBy___internal___contentFilePath'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___parent___internal___contentFilePath'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___children___internal___contentFilePath'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'scheduledIn___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type GraphCms_TechnologyGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_TechnologyEdge>;
  nodes: Array<GraphCms_Technology>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_TechnologyGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_TechnologyGroupConnectionDistinctArgs = {
  field: GraphCms_TechnologyFieldsEnum;
};

export type GraphCms_TechnologyGroupConnectionMaxArgs = {
  field: GraphCms_TechnologyFieldsEnum;
};

export type GraphCms_TechnologyGroupConnectionMinArgs = {
  field: GraphCms_TechnologyFieldsEnum;
};

export type GraphCms_TechnologyGroupConnectionSumArgs = {
  field: GraphCms_TechnologyFieldsEnum;
};

export type GraphCms_TechnologyGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_TechnologyFieldsEnum;
};

export type GraphCms_TechnologySortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_TechnologyFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_BlogConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_BlogEdge>;
  nodes: Array<GraphCms_Blog>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_BlogGroupConnection>;
};

export type GraphCms_BlogConnectionDistinctArgs = {
  field: GraphCms_BlogFieldsEnum;
};

export type GraphCms_BlogConnectionMaxArgs = {
  field: GraphCms_BlogFieldsEnum;
};

export type GraphCms_BlogConnectionMinArgs = {
  field: GraphCms_BlogFieldsEnum;
};

export type GraphCms_BlogConnectionSumArgs = {
  field: GraphCms_BlogFieldsEnum;
};

export type GraphCms_BlogConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_BlogFieldsEnum;
};

export type GraphCms_BlogEdge = {
  next?: Maybe<GraphCms_Blog>;
  node: GraphCms_Blog;
  previous?: Maybe<GraphCms_Blog>;
};

export type GraphCms_BlogFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'title'
  | 'description'
  | 'content___remoteTypeName'
  | 'content___raw'
  | 'content___html'
  | 'content___markdown'
  | 'content___text'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___isActive'
  | 'publishedBy___picture'
  | 'publishedBy___name'
  | 'publishedBy___publishedAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___createdAt'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___parent___internal___contentFilePath'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___children___internal___contentFilePath'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'publishedBy___internal___contentFilePath'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___isActive'
  | 'updatedBy___picture'
  | 'updatedBy___name'
  | 'updatedBy___publishedAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___createdAt'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___parent___internal___contentFilePath'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___children___internal___contentFilePath'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'updatedBy___internal___contentFilePath'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___isActive'
  | 'createdBy___picture'
  | 'createdBy___name'
  | 'createdBy___publishedAt'
  | 'createdBy___updatedAt'
  | 'createdBy___createdAt'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___parent___internal___contentFilePath'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___children___internal___contentFilePath'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'createdBy___internal___contentFilePath'
  | 'headerImage___remoteTypeName'
  | 'headerImage___remoteId'
  | 'headerImage___locale'
  | 'headerImage___stage'
  | 'headerImage___mimeType'
  | 'headerImage___size'
  | 'headerImage___width'
  | 'headerImage___height'
  | 'headerImage___fileName'
  | 'headerImage___handle'
  | 'headerImage___publishedAt'
  | 'headerImage___updatedAt'
  | 'headerImage___createdAt'
  | 'headerImage___publishedBy___remoteTypeName'
  | 'headerImage___publishedBy___remoteId'
  | 'headerImage___publishedBy___stage'
  | 'headerImage___publishedBy___isActive'
  | 'headerImage___publishedBy___picture'
  | 'headerImage___publishedBy___name'
  | 'headerImage___publishedBy___publishedAt'
  | 'headerImage___publishedBy___updatedAt'
  | 'headerImage___publishedBy___createdAt'
  | 'headerImage___publishedBy___kind'
  | 'headerImage___publishedBy___id'
  | 'headerImage___publishedBy___parent___id'
  | 'headerImage___publishedBy___parent___children'
  | 'headerImage___publishedBy___children'
  | 'headerImage___publishedBy___children___id'
  | 'headerImage___publishedBy___children___children'
  | 'headerImage___publishedBy___internal___content'
  | 'headerImage___publishedBy___internal___contentDigest'
  | 'headerImage___publishedBy___internal___description'
  | 'headerImage___publishedBy___internal___fieldOwners'
  | 'headerImage___publishedBy___internal___ignoreType'
  | 'headerImage___publishedBy___internal___mediaType'
  | 'headerImage___publishedBy___internal___owner'
  | 'headerImage___publishedBy___internal___type'
  | 'headerImage___publishedBy___internal___contentFilePath'
  | 'headerImage___updatedBy___remoteTypeName'
  | 'headerImage___updatedBy___remoteId'
  | 'headerImage___updatedBy___stage'
  | 'headerImage___updatedBy___isActive'
  | 'headerImage___updatedBy___picture'
  | 'headerImage___updatedBy___name'
  | 'headerImage___updatedBy___publishedAt'
  | 'headerImage___updatedBy___updatedAt'
  | 'headerImage___updatedBy___createdAt'
  | 'headerImage___updatedBy___kind'
  | 'headerImage___updatedBy___id'
  | 'headerImage___updatedBy___parent___id'
  | 'headerImage___updatedBy___parent___children'
  | 'headerImage___updatedBy___children'
  | 'headerImage___updatedBy___children___id'
  | 'headerImage___updatedBy___children___children'
  | 'headerImage___updatedBy___internal___content'
  | 'headerImage___updatedBy___internal___contentDigest'
  | 'headerImage___updatedBy___internal___description'
  | 'headerImage___updatedBy___internal___fieldOwners'
  | 'headerImage___updatedBy___internal___ignoreType'
  | 'headerImage___updatedBy___internal___mediaType'
  | 'headerImage___updatedBy___internal___owner'
  | 'headerImage___updatedBy___internal___type'
  | 'headerImage___updatedBy___internal___contentFilePath'
  | 'headerImage___createdBy___remoteTypeName'
  | 'headerImage___createdBy___remoteId'
  | 'headerImage___createdBy___stage'
  | 'headerImage___createdBy___isActive'
  | 'headerImage___createdBy___picture'
  | 'headerImage___createdBy___name'
  | 'headerImage___createdBy___publishedAt'
  | 'headerImage___createdBy___updatedAt'
  | 'headerImage___createdBy___createdAt'
  | 'headerImage___createdBy___kind'
  | 'headerImage___createdBy___id'
  | 'headerImage___createdBy___parent___id'
  | 'headerImage___createdBy___parent___children'
  | 'headerImage___createdBy___children'
  | 'headerImage___createdBy___children___id'
  | 'headerImage___createdBy___children___children'
  | 'headerImage___createdBy___internal___content'
  | 'headerImage___createdBy___internal___contentDigest'
  | 'headerImage___createdBy___internal___description'
  | 'headerImage___createdBy___internal___fieldOwners'
  | 'headerImage___createdBy___internal___ignoreType'
  | 'headerImage___createdBy___internal___mediaType'
  | 'headerImage___createdBy___internal___owner'
  | 'headerImage___createdBy___internal___type'
  | 'headerImage___createdBy___internal___contentFilePath'
  | 'headerImage___carouselImagesPortfolioItem'
  | 'headerImage___carouselImagesPortfolioItem___remoteTypeName'
  | 'headerImage___carouselImagesPortfolioItem___remoteId'
  | 'headerImage___carouselImagesPortfolioItem___stage'
  | 'headerImage___carouselImagesPortfolioItem___publishedAt'
  | 'headerImage___carouselImagesPortfolioItem___updatedAt'
  | 'headerImage___carouselImagesPortfolioItem___createdAt'
  | 'headerImage___carouselImagesPortfolioItem___title'
  | 'headerImage___carouselImagesPortfolioItem___description'
  | 'headerImage___carouselImagesPortfolioItem___about___remoteTypeName'
  | 'headerImage___carouselImagesPortfolioItem___about___raw'
  | 'headerImage___carouselImagesPortfolioItem___about___html'
  | 'headerImage___carouselImagesPortfolioItem___about___markdown'
  | 'headerImage___carouselImagesPortfolioItem___about___text'
  | 'headerImage___carouselImagesPortfolioItem___techSheet'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___remoteTypeName'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___remoteId'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___stage'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___isActive'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___picture'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___name'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___publishedAt'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___updatedAt'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___createdAt'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___kind'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___id'
  | 'headerImage___carouselImagesPortfolioItem___publishedBy___children'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___remoteTypeName'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___remoteId'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___stage'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___isActive'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___picture'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___name'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___publishedAt'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___updatedAt'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___createdAt'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___kind'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___id'
  | 'headerImage___carouselImagesPortfolioItem___updatedBy___children'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___remoteTypeName'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___remoteId'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___stage'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___isActive'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___picture'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___name'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___publishedAt'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___updatedAt'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___createdAt'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___kind'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___id'
  | 'headerImage___carouselImagesPortfolioItem___createdBy___children'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___remoteTypeName'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___remoteId'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___locale'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___stage'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___mimeType'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___size'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___width'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___height'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___fileName'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___handle'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___publishedAt'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___updatedAt'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___createdAt'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___iconSpeciality'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___iconTechnology'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___headerImageBlog'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___scheduledIn'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___url'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___id'
  | 'headerImage___carouselImagesPortfolioItem___carouselImages___children'
  | 'headerImage___carouselImagesPortfolioItem___links'
  | 'headerImage___carouselImagesPortfolioItem___links___remoteTypeName'
  | 'headerImage___carouselImagesPortfolioItem___links___remoteId'
  | 'headerImage___carouselImagesPortfolioItem___links___stage'
  | 'headerImage___carouselImagesPortfolioItem___links___publishedAt'
  | 'headerImage___carouselImagesPortfolioItem___links___updatedAt'
  | 'headerImage___carouselImagesPortfolioItem___links___createdAt'
  | 'headerImage___carouselImagesPortfolioItem___links___title'
  | 'headerImage___carouselImagesPortfolioItem___links___url'
  | 'headerImage___carouselImagesPortfolioItem___links___type'
  | 'headerImage___carouselImagesPortfolioItem___links___scheduledIn'
  | 'headerImage___carouselImagesPortfolioItem___links___id'
  | 'headerImage___carouselImagesPortfolioItem___links___children'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___remoteTypeName'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___remoteId'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___stage'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___rawPayload'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___errorMessage'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___description'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___publishedAt'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___updatedAt'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___createdAt'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___status'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___id'
  | 'headerImage___carouselImagesPortfolioItem___scheduledIn___children'
  | 'headerImage___carouselImagesPortfolioItem___gatsbyPath'
  | 'headerImage___carouselImagesPortfolioItem___id'
  | 'headerImage___carouselImagesPortfolioItem___parent___id'
  | 'headerImage___carouselImagesPortfolioItem___parent___children'
  | 'headerImage___carouselImagesPortfolioItem___children'
  | 'headerImage___carouselImagesPortfolioItem___children___id'
  | 'headerImage___carouselImagesPortfolioItem___children___children'
  | 'headerImage___carouselImagesPortfolioItem___internal___content'
  | 'headerImage___carouselImagesPortfolioItem___internal___contentDigest'
  | 'headerImage___carouselImagesPortfolioItem___internal___description'
  | 'headerImage___carouselImagesPortfolioItem___internal___fieldOwners'
  | 'headerImage___carouselImagesPortfolioItem___internal___ignoreType'
  | 'headerImage___carouselImagesPortfolioItem___internal___mediaType'
  | 'headerImage___carouselImagesPortfolioItem___internal___owner'
  | 'headerImage___carouselImagesPortfolioItem___internal___type'
  | 'headerImage___carouselImagesPortfolioItem___internal___contentFilePath'
  | 'headerImage___iconSpeciality'
  | 'headerImage___iconSpeciality___remoteTypeName'
  | 'headerImage___iconSpeciality___remoteId'
  | 'headerImage___iconSpeciality___stage'
  | 'headerImage___iconSpeciality___publishedAt'
  | 'headerImage___iconSpeciality___updatedAt'
  | 'headerImage___iconSpeciality___createdAt'
  | 'headerImage___iconSpeciality___title'
  | 'headerImage___iconSpeciality___description___remoteTypeName'
  | 'headerImage___iconSpeciality___description___raw'
  | 'headerImage___iconSpeciality___description___html'
  | 'headerImage___iconSpeciality___description___markdown'
  | 'headerImage___iconSpeciality___description___text'
  | 'headerImage___iconSpeciality___publishedBy___remoteTypeName'
  | 'headerImage___iconSpeciality___publishedBy___remoteId'
  | 'headerImage___iconSpeciality___publishedBy___stage'
  | 'headerImage___iconSpeciality___publishedBy___isActive'
  | 'headerImage___iconSpeciality___publishedBy___picture'
  | 'headerImage___iconSpeciality___publishedBy___name'
  | 'headerImage___iconSpeciality___publishedBy___publishedAt'
  | 'headerImage___iconSpeciality___publishedBy___updatedAt'
  | 'headerImage___iconSpeciality___publishedBy___createdAt'
  | 'headerImage___iconSpeciality___publishedBy___kind'
  | 'headerImage___iconSpeciality___publishedBy___id'
  | 'headerImage___iconSpeciality___publishedBy___children'
  | 'headerImage___iconSpeciality___updatedBy___remoteTypeName'
  | 'headerImage___iconSpeciality___updatedBy___remoteId'
  | 'headerImage___iconSpeciality___updatedBy___stage'
  | 'headerImage___iconSpeciality___updatedBy___isActive'
  | 'headerImage___iconSpeciality___updatedBy___picture'
  | 'headerImage___iconSpeciality___updatedBy___name'
  | 'headerImage___iconSpeciality___updatedBy___publishedAt'
  | 'headerImage___iconSpeciality___updatedBy___updatedAt'
  | 'headerImage___iconSpeciality___updatedBy___createdAt'
  | 'headerImage___iconSpeciality___updatedBy___kind'
  | 'headerImage___iconSpeciality___updatedBy___id'
  | 'headerImage___iconSpeciality___updatedBy___children'
  | 'headerImage___iconSpeciality___createdBy___remoteTypeName'
  | 'headerImage___iconSpeciality___createdBy___remoteId'
  | 'headerImage___iconSpeciality___createdBy___stage'
  | 'headerImage___iconSpeciality___createdBy___isActive'
  | 'headerImage___iconSpeciality___createdBy___picture'
  | 'headerImage___iconSpeciality___createdBy___name'
  | 'headerImage___iconSpeciality___createdBy___publishedAt'
  | 'headerImage___iconSpeciality___createdBy___updatedAt'
  | 'headerImage___iconSpeciality___createdBy___createdAt'
  | 'headerImage___iconSpeciality___createdBy___kind'
  | 'headerImage___iconSpeciality___createdBy___id'
  | 'headerImage___iconSpeciality___createdBy___children'
  | 'headerImage___iconSpeciality___icon___remoteTypeName'
  | 'headerImage___iconSpeciality___icon___remoteId'
  | 'headerImage___iconSpeciality___icon___locale'
  | 'headerImage___iconSpeciality___icon___stage'
  | 'headerImage___iconSpeciality___icon___mimeType'
  | 'headerImage___iconSpeciality___icon___size'
  | 'headerImage___iconSpeciality___icon___width'
  | 'headerImage___iconSpeciality___icon___height'
  | 'headerImage___iconSpeciality___icon___fileName'
  | 'headerImage___iconSpeciality___icon___handle'
  | 'headerImage___iconSpeciality___icon___publishedAt'
  | 'headerImage___iconSpeciality___icon___updatedAt'
  | 'headerImage___iconSpeciality___icon___createdAt'
  | 'headerImage___iconSpeciality___icon___carouselImagesPortfolioItem'
  | 'headerImage___iconSpeciality___icon___iconSpeciality'
  | 'headerImage___iconSpeciality___icon___iconTechnology'
  | 'headerImage___iconSpeciality___icon___headerImageBlog'
  | 'headerImage___iconSpeciality___icon___scheduledIn'
  | 'headerImage___iconSpeciality___icon___url'
  | 'headerImage___iconSpeciality___icon___id'
  | 'headerImage___iconSpeciality___icon___children'
  | 'headerImage___iconSpeciality___scheduledIn'
  | 'headerImage___iconSpeciality___scheduledIn___remoteTypeName'
  | 'headerImage___iconSpeciality___scheduledIn___remoteId'
  | 'headerImage___iconSpeciality___scheduledIn___stage'
  | 'headerImage___iconSpeciality___scheduledIn___rawPayload'
  | 'headerImage___iconSpeciality___scheduledIn___errorMessage'
  | 'headerImage___iconSpeciality___scheduledIn___description'
  | 'headerImage___iconSpeciality___scheduledIn___publishedAt'
  | 'headerImage___iconSpeciality___scheduledIn___updatedAt'
  | 'headerImage___iconSpeciality___scheduledIn___createdAt'
  | 'headerImage___iconSpeciality___scheduledIn___status'
  | 'headerImage___iconSpeciality___scheduledIn___id'
  | 'headerImage___iconSpeciality___scheduledIn___children'
  | 'headerImage___iconSpeciality___id'
  | 'headerImage___iconSpeciality___parent___id'
  | 'headerImage___iconSpeciality___parent___children'
  | 'headerImage___iconSpeciality___children'
  | 'headerImage___iconSpeciality___children___id'
  | 'headerImage___iconSpeciality___children___children'
  | 'headerImage___iconSpeciality___internal___content'
  | 'headerImage___iconSpeciality___internal___contentDigest'
  | 'headerImage___iconSpeciality___internal___description'
  | 'headerImage___iconSpeciality___internal___fieldOwners'
  | 'headerImage___iconSpeciality___internal___ignoreType'
  | 'headerImage___iconSpeciality___internal___mediaType'
  | 'headerImage___iconSpeciality___internal___owner'
  | 'headerImage___iconSpeciality___internal___type'
  | 'headerImage___iconSpeciality___internal___contentFilePath'
  | 'headerImage___iconTechnology'
  | 'headerImage___iconTechnology___remoteTypeName'
  | 'headerImage___iconTechnology___remoteId'
  | 'headerImage___iconTechnology___stage'
  | 'headerImage___iconTechnology___publishedAt'
  | 'headerImage___iconTechnology___updatedAt'
  | 'headerImage___iconTechnology___createdAt'
  | 'headerImage___iconTechnology___title'
  | 'headerImage___iconTechnology___description___remoteTypeName'
  | 'headerImage___iconTechnology___description___raw'
  | 'headerImage___iconTechnology___description___html'
  | 'headerImage___iconTechnology___description___markdown'
  | 'headerImage___iconTechnology___description___text'
  | 'headerImage___iconTechnology___backgroundColor___remoteTypeName'
  | 'headerImage___iconTechnology___backgroundColor___hex'
  | 'headerImage___iconTechnology___backgroundColor___css'
  | 'headerImage___iconTechnology___publishedBy___remoteTypeName'
  | 'headerImage___iconTechnology___publishedBy___remoteId'
  | 'headerImage___iconTechnology___publishedBy___stage'
  | 'headerImage___iconTechnology___publishedBy___isActive'
  | 'headerImage___iconTechnology___publishedBy___picture'
  | 'headerImage___iconTechnology___publishedBy___name'
  | 'headerImage___iconTechnology___publishedBy___publishedAt'
  | 'headerImage___iconTechnology___publishedBy___updatedAt'
  | 'headerImage___iconTechnology___publishedBy___createdAt'
  | 'headerImage___iconTechnology___publishedBy___kind'
  | 'headerImage___iconTechnology___publishedBy___id'
  | 'headerImage___iconTechnology___publishedBy___children'
  | 'headerImage___iconTechnology___updatedBy___remoteTypeName'
  | 'headerImage___iconTechnology___updatedBy___remoteId'
  | 'headerImage___iconTechnology___updatedBy___stage'
  | 'headerImage___iconTechnology___updatedBy___isActive'
  | 'headerImage___iconTechnology___updatedBy___picture'
  | 'headerImage___iconTechnology___updatedBy___name'
  | 'headerImage___iconTechnology___updatedBy___publishedAt'
  | 'headerImage___iconTechnology___updatedBy___updatedAt'
  | 'headerImage___iconTechnology___updatedBy___createdAt'
  | 'headerImage___iconTechnology___updatedBy___kind'
  | 'headerImage___iconTechnology___updatedBy___id'
  | 'headerImage___iconTechnology___updatedBy___children'
  | 'headerImage___iconTechnology___createdBy___remoteTypeName'
  | 'headerImage___iconTechnology___createdBy___remoteId'
  | 'headerImage___iconTechnology___createdBy___stage'
  | 'headerImage___iconTechnology___createdBy___isActive'
  | 'headerImage___iconTechnology___createdBy___picture'
  | 'headerImage___iconTechnology___createdBy___name'
  | 'headerImage___iconTechnology___createdBy___publishedAt'
  | 'headerImage___iconTechnology___createdBy___updatedAt'
  | 'headerImage___iconTechnology___createdBy___createdAt'
  | 'headerImage___iconTechnology___createdBy___kind'
  | 'headerImage___iconTechnology___createdBy___id'
  | 'headerImage___iconTechnology___createdBy___children'
  | 'headerImage___iconTechnology___icon___remoteTypeName'
  | 'headerImage___iconTechnology___icon___remoteId'
  | 'headerImage___iconTechnology___icon___locale'
  | 'headerImage___iconTechnology___icon___stage'
  | 'headerImage___iconTechnology___icon___mimeType'
  | 'headerImage___iconTechnology___icon___size'
  | 'headerImage___iconTechnology___icon___width'
  | 'headerImage___iconTechnology___icon___height'
  | 'headerImage___iconTechnology___icon___fileName'
  | 'headerImage___iconTechnology___icon___handle'
  | 'headerImage___iconTechnology___icon___publishedAt'
  | 'headerImage___iconTechnology___icon___updatedAt'
  | 'headerImage___iconTechnology___icon___createdAt'
  | 'headerImage___iconTechnology___icon___carouselImagesPortfolioItem'
  | 'headerImage___iconTechnology___icon___iconSpeciality'
  | 'headerImage___iconTechnology___icon___iconTechnology'
  | 'headerImage___iconTechnology___icon___headerImageBlog'
  | 'headerImage___iconTechnology___icon___scheduledIn'
  | 'headerImage___iconTechnology___icon___url'
  | 'headerImage___iconTechnology___icon___id'
  | 'headerImage___iconTechnology___icon___children'
  | 'headerImage___iconTechnology___scheduledIn'
  | 'headerImage___iconTechnology___scheduledIn___remoteTypeName'
  | 'headerImage___iconTechnology___scheduledIn___remoteId'
  | 'headerImage___iconTechnology___scheduledIn___stage'
  | 'headerImage___iconTechnology___scheduledIn___rawPayload'
  | 'headerImage___iconTechnology___scheduledIn___errorMessage'
  | 'headerImage___iconTechnology___scheduledIn___description'
  | 'headerImage___iconTechnology___scheduledIn___publishedAt'
  | 'headerImage___iconTechnology___scheduledIn___updatedAt'
  | 'headerImage___iconTechnology___scheduledIn___createdAt'
  | 'headerImage___iconTechnology___scheduledIn___status'
  | 'headerImage___iconTechnology___scheduledIn___id'
  | 'headerImage___iconTechnology___scheduledIn___children'
  | 'headerImage___iconTechnology___id'
  | 'headerImage___iconTechnology___parent___id'
  | 'headerImage___iconTechnology___parent___children'
  | 'headerImage___iconTechnology___children'
  | 'headerImage___iconTechnology___children___id'
  | 'headerImage___iconTechnology___children___children'
  | 'headerImage___iconTechnology___internal___content'
  | 'headerImage___iconTechnology___internal___contentDigest'
  | 'headerImage___iconTechnology___internal___description'
  | 'headerImage___iconTechnology___internal___fieldOwners'
  | 'headerImage___iconTechnology___internal___ignoreType'
  | 'headerImage___iconTechnology___internal___mediaType'
  | 'headerImage___iconTechnology___internal___owner'
  | 'headerImage___iconTechnology___internal___type'
  | 'headerImage___iconTechnology___internal___contentFilePath'
  | 'headerImage___headerImageBlog'
  | 'headerImage___headerImageBlog___remoteTypeName'
  | 'headerImage___headerImageBlog___remoteId'
  | 'headerImage___headerImageBlog___stage'
  | 'headerImage___headerImageBlog___publishedAt'
  | 'headerImage___headerImageBlog___updatedAt'
  | 'headerImage___headerImageBlog___createdAt'
  | 'headerImage___headerImageBlog___title'
  | 'headerImage___headerImageBlog___description'
  | 'headerImage___headerImageBlog___content___remoteTypeName'
  | 'headerImage___headerImageBlog___content___raw'
  | 'headerImage___headerImageBlog___content___html'
  | 'headerImage___headerImageBlog___content___markdown'
  | 'headerImage___headerImageBlog___content___text'
  | 'headerImage___headerImageBlog___publishedBy___remoteTypeName'
  | 'headerImage___headerImageBlog___publishedBy___remoteId'
  | 'headerImage___headerImageBlog___publishedBy___stage'
  | 'headerImage___headerImageBlog___publishedBy___isActive'
  | 'headerImage___headerImageBlog___publishedBy___picture'
  | 'headerImage___headerImageBlog___publishedBy___name'
  | 'headerImage___headerImageBlog___publishedBy___publishedAt'
  | 'headerImage___headerImageBlog___publishedBy___updatedAt'
  | 'headerImage___headerImageBlog___publishedBy___createdAt'
  | 'headerImage___headerImageBlog___publishedBy___kind'
  | 'headerImage___headerImageBlog___publishedBy___id'
  | 'headerImage___headerImageBlog___publishedBy___children'
  | 'headerImage___headerImageBlog___updatedBy___remoteTypeName'
  | 'headerImage___headerImageBlog___updatedBy___remoteId'
  | 'headerImage___headerImageBlog___updatedBy___stage'
  | 'headerImage___headerImageBlog___updatedBy___isActive'
  | 'headerImage___headerImageBlog___updatedBy___picture'
  | 'headerImage___headerImageBlog___updatedBy___name'
  | 'headerImage___headerImageBlog___updatedBy___publishedAt'
  | 'headerImage___headerImageBlog___updatedBy___updatedAt'
  | 'headerImage___headerImageBlog___updatedBy___createdAt'
  | 'headerImage___headerImageBlog___updatedBy___kind'
  | 'headerImage___headerImageBlog___updatedBy___id'
  | 'headerImage___headerImageBlog___updatedBy___children'
  | 'headerImage___headerImageBlog___createdBy___remoteTypeName'
  | 'headerImage___headerImageBlog___createdBy___remoteId'
  | 'headerImage___headerImageBlog___createdBy___stage'
  | 'headerImage___headerImageBlog___createdBy___isActive'
  | 'headerImage___headerImageBlog___createdBy___picture'
  | 'headerImage___headerImageBlog___createdBy___name'
  | 'headerImage___headerImageBlog___createdBy___publishedAt'
  | 'headerImage___headerImageBlog___createdBy___updatedAt'
  | 'headerImage___headerImageBlog___createdBy___createdAt'
  | 'headerImage___headerImageBlog___createdBy___kind'
  | 'headerImage___headerImageBlog___createdBy___id'
  | 'headerImage___headerImageBlog___createdBy___children'
  | 'headerImage___headerImageBlog___headerImage___remoteTypeName'
  | 'headerImage___headerImageBlog___headerImage___remoteId'
  | 'headerImage___headerImageBlog___headerImage___locale'
  | 'headerImage___headerImageBlog___headerImage___stage'
  | 'headerImage___headerImageBlog___headerImage___mimeType'
  | 'headerImage___headerImageBlog___headerImage___size'
  | 'headerImage___headerImageBlog___headerImage___width'
  | 'headerImage___headerImageBlog___headerImage___height'
  | 'headerImage___headerImageBlog___headerImage___fileName'
  | 'headerImage___headerImageBlog___headerImage___handle'
  | 'headerImage___headerImageBlog___headerImage___publishedAt'
  | 'headerImage___headerImageBlog___headerImage___updatedAt'
  | 'headerImage___headerImageBlog___headerImage___createdAt'
  | 'headerImage___headerImageBlog___headerImage___carouselImagesPortfolioItem'
  | 'headerImage___headerImageBlog___headerImage___iconSpeciality'
  | 'headerImage___headerImageBlog___headerImage___iconTechnology'
  | 'headerImage___headerImageBlog___headerImage___headerImageBlog'
  | 'headerImage___headerImageBlog___headerImage___scheduledIn'
  | 'headerImage___headerImageBlog___headerImage___url'
  | 'headerImage___headerImageBlog___headerImage___id'
  | 'headerImage___headerImageBlog___headerImage___children'
  | 'headerImage___headerImageBlog___type'
  | 'headerImage___headerImageBlog___categories'
  | 'headerImage___headerImageBlog___scheduledIn'
  | 'headerImage___headerImageBlog___scheduledIn___remoteTypeName'
  | 'headerImage___headerImageBlog___scheduledIn___remoteId'
  | 'headerImage___headerImageBlog___scheduledIn___stage'
  | 'headerImage___headerImageBlog___scheduledIn___rawPayload'
  | 'headerImage___headerImageBlog___scheduledIn___errorMessage'
  | 'headerImage___headerImageBlog___scheduledIn___description'
  | 'headerImage___headerImageBlog___scheduledIn___publishedAt'
  | 'headerImage___headerImageBlog___scheduledIn___updatedAt'
  | 'headerImage___headerImageBlog___scheduledIn___createdAt'
  | 'headerImage___headerImageBlog___scheduledIn___status'
  | 'headerImage___headerImageBlog___scheduledIn___id'
  | 'headerImage___headerImageBlog___scheduledIn___children'
  | 'headerImage___headerImageBlog___gatsbyPath'
  | 'headerImage___headerImageBlog___id'
  | 'headerImage___headerImageBlog___parent___id'
  | 'headerImage___headerImageBlog___parent___children'
  | 'headerImage___headerImageBlog___children'
  | 'headerImage___headerImageBlog___children___id'
  | 'headerImage___headerImageBlog___children___children'
  | 'headerImage___headerImageBlog___internal___content'
  | 'headerImage___headerImageBlog___internal___contentDigest'
  | 'headerImage___headerImageBlog___internal___description'
  | 'headerImage___headerImageBlog___internal___fieldOwners'
  | 'headerImage___headerImageBlog___internal___ignoreType'
  | 'headerImage___headerImageBlog___internal___mediaType'
  | 'headerImage___headerImageBlog___internal___owner'
  | 'headerImage___headerImageBlog___internal___type'
  | 'headerImage___headerImageBlog___internal___contentFilePath'
  | 'headerImage___scheduledIn'
  | 'headerImage___scheduledIn___remoteTypeName'
  | 'headerImage___scheduledIn___remoteId'
  | 'headerImage___scheduledIn___stage'
  | 'headerImage___scheduledIn___rawPayload'
  | 'headerImage___scheduledIn___errorMessage'
  | 'headerImage___scheduledIn___description'
  | 'headerImage___scheduledIn___publishedAt'
  | 'headerImage___scheduledIn___updatedAt'
  | 'headerImage___scheduledIn___createdAt'
  | 'headerImage___scheduledIn___release___remoteTypeName'
  | 'headerImage___scheduledIn___release___remoteId'
  | 'headerImage___scheduledIn___release___stage'
  | 'headerImage___scheduledIn___release___releaseAt'
  | 'headerImage___scheduledIn___release___isImplicit'
  | 'headerImage___scheduledIn___release___isActive'
  | 'headerImage___scheduledIn___release___errorMessage'
  | 'headerImage___scheduledIn___release___description'
  | 'headerImage___scheduledIn___release___title'
  | 'headerImage___scheduledIn___release___publishedAt'
  | 'headerImage___scheduledIn___release___updatedAt'
  | 'headerImage___scheduledIn___release___createdAt'
  | 'headerImage___scheduledIn___release___operations'
  | 'headerImage___scheduledIn___release___status'
  | 'headerImage___scheduledIn___release___id'
  | 'headerImage___scheduledIn___release___children'
  | 'headerImage___scheduledIn___publishedBy___remoteTypeName'
  | 'headerImage___scheduledIn___publishedBy___remoteId'
  | 'headerImage___scheduledIn___publishedBy___stage'
  | 'headerImage___scheduledIn___publishedBy___isActive'
  | 'headerImage___scheduledIn___publishedBy___picture'
  | 'headerImage___scheduledIn___publishedBy___name'
  | 'headerImage___scheduledIn___publishedBy___publishedAt'
  | 'headerImage___scheduledIn___publishedBy___updatedAt'
  | 'headerImage___scheduledIn___publishedBy___createdAt'
  | 'headerImage___scheduledIn___publishedBy___kind'
  | 'headerImage___scheduledIn___publishedBy___id'
  | 'headerImage___scheduledIn___publishedBy___children'
  | 'headerImage___scheduledIn___updatedBy___remoteTypeName'
  | 'headerImage___scheduledIn___updatedBy___remoteId'
  | 'headerImage___scheduledIn___updatedBy___stage'
  | 'headerImage___scheduledIn___updatedBy___isActive'
  | 'headerImage___scheduledIn___updatedBy___picture'
  | 'headerImage___scheduledIn___updatedBy___name'
  | 'headerImage___scheduledIn___updatedBy___publishedAt'
  | 'headerImage___scheduledIn___updatedBy___updatedAt'
  | 'headerImage___scheduledIn___updatedBy___createdAt'
  | 'headerImage___scheduledIn___updatedBy___kind'
  | 'headerImage___scheduledIn___updatedBy___id'
  | 'headerImage___scheduledIn___updatedBy___children'
  | 'headerImage___scheduledIn___createdBy___remoteTypeName'
  | 'headerImage___scheduledIn___createdBy___remoteId'
  | 'headerImage___scheduledIn___createdBy___stage'
  | 'headerImage___scheduledIn___createdBy___isActive'
  | 'headerImage___scheduledIn___createdBy___picture'
  | 'headerImage___scheduledIn___createdBy___name'
  | 'headerImage___scheduledIn___createdBy___publishedAt'
  | 'headerImage___scheduledIn___createdBy___updatedAt'
  | 'headerImage___scheduledIn___createdBy___createdAt'
  | 'headerImage___scheduledIn___createdBy___kind'
  | 'headerImage___scheduledIn___createdBy___id'
  | 'headerImage___scheduledIn___createdBy___children'
  | 'headerImage___scheduledIn___status'
  | 'headerImage___scheduledIn___id'
  | 'headerImage___scheduledIn___parent___id'
  | 'headerImage___scheduledIn___parent___children'
  | 'headerImage___scheduledIn___children'
  | 'headerImage___scheduledIn___children___id'
  | 'headerImage___scheduledIn___children___children'
  | 'headerImage___scheduledIn___internal___content'
  | 'headerImage___scheduledIn___internal___contentDigest'
  | 'headerImage___scheduledIn___internal___description'
  | 'headerImage___scheduledIn___internal___fieldOwners'
  | 'headerImage___scheduledIn___internal___ignoreType'
  | 'headerImage___scheduledIn___internal___mediaType'
  | 'headerImage___scheduledIn___internal___owner'
  | 'headerImage___scheduledIn___internal___type'
  | 'headerImage___scheduledIn___internal___contentFilePath'
  | 'headerImage___url'
  | 'headerImage___id'
  | 'headerImage___parent___id'
  | 'headerImage___parent___parent___id'
  | 'headerImage___parent___parent___children'
  | 'headerImage___parent___children'
  | 'headerImage___parent___children___id'
  | 'headerImage___parent___children___children'
  | 'headerImage___parent___internal___content'
  | 'headerImage___parent___internal___contentDigest'
  | 'headerImage___parent___internal___description'
  | 'headerImage___parent___internal___fieldOwners'
  | 'headerImage___parent___internal___ignoreType'
  | 'headerImage___parent___internal___mediaType'
  | 'headerImage___parent___internal___owner'
  | 'headerImage___parent___internal___type'
  | 'headerImage___parent___internal___contentFilePath'
  | 'headerImage___children'
  | 'headerImage___children___id'
  | 'headerImage___children___parent___id'
  | 'headerImage___children___parent___children'
  | 'headerImage___children___children'
  | 'headerImage___children___children___id'
  | 'headerImage___children___children___children'
  | 'headerImage___children___internal___content'
  | 'headerImage___children___internal___contentDigest'
  | 'headerImage___children___internal___description'
  | 'headerImage___children___internal___fieldOwners'
  | 'headerImage___children___internal___ignoreType'
  | 'headerImage___children___internal___mediaType'
  | 'headerImage___children___internal___owner'
  | 'headerImage___children___internal___type'
  | 'headerImage___children___internal___contentFilePath'
  | 'headerImage___internal___content'
  | 'headerImage___internal___contentDigest'
  | 'headerImage___internal___description'
  | 'headerImage___internal___fieldOwners'
  | 'headerImage___internal___ignoreType'
  | 'headerImage___internal___mediaType'
  | 'headerImage___internal___owner'
  | 'headerImage___internal___type'
  | 'headerImage___internal___contentFilePath'
  | 'type'
  | 'categories'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___description'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___release___internal___contentFilePath'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___publishedBy___internal___contentFilePath'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___updatedBy___internal___contentFilePath'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___createdBy___internal___contentFilePath'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___parent___internal___contentFilePath'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___children___internal___contentFilePath'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'scheduledIn___internal___contentFilePath'
  | 'gatsbyPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type GraphCms_BlogGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_BlogEdge>;
  nodes: Array<GraphCms_Blog>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_BlogGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_BlogGroupConnectionDistinctArgs = {
  field: GraphCms_BlogFieldsEnum;
};

export type GraphCms_BlogGroupConnectionMaxArgs = {
  field: GraphCms_BlogFieldsEnum;
};

export type GraphCms_BlogGroupConnectionMinArgs = {
  field: GraphCms_BlogFieldsEnum;
};

export type GraphCms_BlogGroupConnectionSumArgs = {
  field: GraphCms_BlogFieldsEnum;
};

export type GraphCms_BlogGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_BlogFieldsEnum;
};

export type GraphCms_BlogSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_BlogFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_ScheduledOperationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledOperationEdge>;
  nodes: Array<GraphCms_ScheduledOperation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledOperationGroupConnection>;
};

export type GraphCms_ScheduledOperationConnectionDistinctArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationConnectionMaxArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationConnectionMinArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationConnectionSumArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationEdge = {
  next?: Maybe<GraphCms_ScheduledOperation>;
  node: GraphCms_ScheduledOperation;
  previous?: Maybe<GraphCms_ScheduledOperation>;
};

export type GraphCms_ScheduledOperationFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'rawPayload'
  | 'errorMessage'
  | 'description'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'release___remoteTypeName'
  | 'release___remoteId'
  | 'release___stage'
  | 'release___releaseAt'
  | 'release___isImplicit'
  | 'release___isActive'
  | 'release___errorMessage'
  | 'release___description'
  | 'release___title'
  | 'release___publishedAt'
  | 'release___updatedAt'
  | 'release___createdAt'
  | 'release___operations'
  | 'release___operations___remoteTypeName'
  | 'release___operations___remoteId'
  | 'release___operations___stage'
  | 'release___operations___rawPayload'
  | 'release___operations___errorMessage'
  | 'release___operations___description'
  | 'release___operations___publishedAt'
  | 'release___operations___updatedAt'
  | 'release___operations___createdAt'
  | 'release___operations___release___remoteTypeName'
  | 'release___operations___release___remoteId'
  | 'release___operations___release___stage'
  | 'release___operations___release___releaseAt'
  | 'release___operations___release___isImplicit'
  | 'release___operations___release___isActive'
  | 'release___operations___release___errorMessage'
  | 'release___operations___release___description'
  | 'release___operations___release___title'
  | 'release___operations___release___publishedAt'
  | 'release___operations___release___updatedAt'
  | 'release___operations___release___createdAt'
  | 'release___operations___release___operations'
  | 'release___operations___release___status'
  | 'release___operations___release___id'
  | 'release___operations___release___children'
  | 'release___operations___publishedBy___remoteTypeName'
  | 'release___operations___publishedBy___remoteId'
  | 'release___operations___publishedBy___stage'
  | 'release___operations___publishedBy___isActive'
  | 'release___operations___publishedBy___picture'
  | 'release___operations___publishedBy___name'
  | 'release___operations___publishedBy___publishedAt'
  | 'release___operations___publishedBy___updatedAt'
  | 'release___operations___publishedBy___createdAt'
  | 'release___operations___publishedBy___kind'
  | 'release___operations___publishedBy___id'
  | 'release___operations___publishedBy___children'
  | 'release___operations___updatedBy___remoteTypeName'
  | 'release___operations___updatedBy___remoteId'
  | 'release___operations___updatedBy___stage'
  | 'release___operations___updatedBy___isActive'
  | 'release___operations___updatedBy___picture'
  | 'release___operations___updatedBy___name'
  | 'release___operations___updatedBy___publishedAt'
  | 'release___operations___updatedBy___updatedAt'
  | 'release___operations___updatedBy___createdAt'
  | 'release___operations___updatedBy___kind'
  | 'release___operations___updatedBy___id'
  | 'release___operations___updatedBy___children'
  | 'release___operations___createdBy___remoteTypeName'
  | 'release___operations___createdBy___remoteId'
  | 'release___operations___createdBy___stage'
  | 'release___operations___createdBy___isActive'
  | 'release___operations___createdBy___picture'
  | 'release___operations___createdBy___name'
  | 'release___operations___createdBy___publishedAt'
  | 'release___operations___createdBy___updatedAt'
  | 'release___operations___createdBy___createdAt'
  | 'release___operations___createdBy___kind'
  | 'release___operations___createdBy___id'
  | 'release___operations___createdBy___children'
  | 'release___operations___status'
  | 'release___operations___id'
  | 'release___operations___parent___id'
  | 'release___operations___parent___children'
  | 'release___operations___children'
  | 'release___operations___children___id'
  | 'release___operations___children___children'
  | 'release___operations___internal___content'
  | 'release___operations___internal___contentDigest'
  | 'release___operations___internal___description'
  | 'release___operations___internal___fieldOwners'
  | 'release___operations___internal___ignoreType'
  | 'release___operations___internal___mediaType'
  | 'release___operations___internal___owner'
  | 'release___operations___internal___type'
  | 'release___operations___internal___contentFilePath'
  | 'release___publishedBy___remoteTypeName'
  | 'release___publishedBy___remoteId'
  | 'release___publishedBy___stage'
  | 'release___publishedBy___isActive'
  | 'release___publishedBy___picture'
  | 'release___publishedBy___name'
  | 'release___publishedBy___publishedAt'
  | 'release___publishedBy___updatedAt'
  | 'release___publishedBy___createdAt'
  | 'release___publishedBy___kind'
  | 'release___publishedBy___id'
  | 'release___publishedBy___parent___id'
  | 'release___publishedBy___parent___children'
  | 'release___publishedBy___children'
  | 'release___publishedBy___children___id'
  | 'release___publishedBy___children___children'
  | 'release___publishedBy___internal___content'
  | 'release___publishedBy___internal___contentDigest'
  | 'release___publishedBy___internal___description'
  | 'release___publishedBy___internal___fieldOwners'
  | 'release___publishedBy___internal___ignoreType'
  | 'release___publishedBy___internal___mediaType'
  | 'release___publishedBy___internal___owner'
  | 'release___publishedBy___internal___type'
  | 'release___publishedBy___internal___contentFilePath'
  | 'release___updatedBy___remoteTypeName'
  | 'release___updatedBy___remoteId'
  | 'release___updatedBy___stage'
  | 'release___updatedBy___isActive'
  | 'release___updatedBy___picture'
  | 'release___updatedBy___name'
  | 'release___updatedBy___publishedAt'
  | 'release___updatedBy___updatedAt'
  | 'release___updatedBy___createdAt'
  | 'release___updatedBy___kind'
  | 'release___updatedBy___id'
  | 'release___updatedBy___parent___id'
  | 'release___updatedBy___parent___children'
  | 'release___updatedBy___children'
  | 'release___updatedBy___children___id'
  | 'release___updatedBy___children___children'
  | 'release___updatedBy___internal___content'
  | 'release___updatedBy___internal___contentDigest'
  | 'release___updatedBy___internal___description'
  | 'release___updatedBy___internal___fieldOwners'
  | 'release___updatedBy___internal___ignoreType'
  | 'release___updatedBy___internal___mediaType'
  | 'release___updatedBy___internal___owner'
  | 'release___updatedBy___internal___type'
  | 'release___updatedBy___internal___contentFilePath'
  | 'release___createdBy___remoteTypeName'
  | 'release___createdBy___remoteId'
  | 'release___createdBy___stage'
  | 'release___createdBy___isActive'
  | 'release___createdBy___picture'
  | 'release___createdBy___name'
  | 'release___createdBy___publishedAt'
  | 'release___createdBy___updatedAt'
  | 'release___createdBy___createdAt'
  | 'release___createdBy___kind'
  | 'release___createdBy___id'
  | 'release___createdBy___parent___id'
  | 'release___createdBy___parent___children'
  | 'release___createdBy___children'
  | 'release___createdBy___children___id'
  | 'release___createdBy___children___children'
  | 'release___createdBy___internal___content'
  | 'release___createdBy___internal___contentDigest'
  | 'release___createdBy___internal___description'
  | 'release___createdBy___internal___fieldOwners'
  | 'release___createdBy___internal___ignoreType'
  | 'release___createdBy___internal___mediaType'
  | 'release___createdBy___internal___owner'
  | 'release___createdBy___internal___type'
  | 'release___createdBy___internal___contentFilePath'
  | 'release___status'
  | 'release___id'
  | 'release___parent___id'
  | 'release___parent___parent___id'
  | 'release___parent___parent___children'
  | 'release___parent___children'
  | 'release___parent___children___id'
  | 'release___parent___children___children'
  | 'release___parent___internal___content'
  | 'release___parent___internal___contentDigest'
  | 'release___parent___internal___description'
  | 'release___parent___internal___fieldOwners'
  | 'release___parent___internal___ignoreType'
  | 'release___parent___internal___mediaType'
  | 'release___parent___internal___owner'
  | 'release___parent___internal___type'
  | 'release___parent___internal___contentFilePath'
  | 'release___children'
  | 'release___children___id'
  | 'release___children___parent___id'
  | 'release___children___parent___children'
  | 'release___children___children'
  | 'release___children___children___id'
  | 'release___children___children___children'
  | 'release___children___internal___content'
  | 'release___children___internal___contentDigest'
  | 'release___children___internal___description'
  | 'release___children___internal___fieldOwners'
  | 'release___children___internal___ignoreType'
  | 'release___children___internal___mediaType'
  | 'release___children___internal___owner'
  | 'release___children___internal___type'
  | 'release___children___internal___contentFilePath'
  | 'release___internal___content'
  | 'release___internal___contentDigest'
  | 'release___internal___description'
  | 'release___internal___fieldOwners'
  | 'release___internal___ignoreType'
  | 'release___internal___mediaType'
  | 'release___internal___owner'
  | 'release___internal___type'
  | 'release___internal___contentFilePath'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___isActive'
  | 'publishedBy___picture'
  | 'publishedBy___name'
  | 'publishedBy___publishedAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___createdAt'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___parent___internal___contentFilePath'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___children___internal___contentFilePath'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'publishedBy___internal___contentFilePath'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___isActive'
  | 'updatedBy___picture'
  | 'updatedBy___name'
  | 'updatedBy___publishedAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___createdAt'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___parent___internal___contentFilePath'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___children___internal___contentFilePath'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'updatedBy___internal___contentFilePath'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___isActive'
  | 'createdBy___picture'
  | 'createdBy___name'
  | 'createdBy___publishedAt'
  | 'createdBy___updatedAt'
  | 'createdBy___createdAt'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___parent___internal___contentFilePath'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___children___internal___contentFilePath'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'createdBy___internal___contentFilePath'
  | 'status'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type GraphCms_ScheduledOperationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledOperationEdge>;
  nodes: Array<GraphCms_ScheduledOperation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledOperationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_ScheduledOperationGroupConnectionDistinctArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationGroupConnectionMaxArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationGroupConnectionMinArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationGroupConnectionSumArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_LinkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_LinkEdge>;
  nodes: Array<GraphCms_Link>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_LinkGroupConnection>;
};

export type GraphCms_LinkConnectionDistinctArgs = {
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkConnectionMaxArgs = {
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkConnectionMinArgs = {
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkConnectionSumArgs = {
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkEdge = {
  next?: Maybe<GraphCms_Link>;
  node: GraphCms_Link;
  previous?: Maybe<GraphCms_Link>;
};

export type GraphCms_LinkFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'title'
  | 'url'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___isActive'
  | 'publishedBy___picture'
  | 'publishedBy___name'
  | 'publishedBy___publishedAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___createdAt'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___parent___internal___contentFilePath'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___children___internal___contentFilePath'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'publishedBy___internal___contentFilePath'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___isActive'
  | 'updatedBy___picture'
  | 'updatedBy___name'
  | 'updatedBy___publishedAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___createdAt'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___parent___internal___contentFilePath'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___children___internal___contentFilePath'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'updatedBy___internal___contentFilePath'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___isActive'
  | 'createdBy___picture'
  | 'createdBy___name'
  | 'createdBy___publishedAt'
  | 'createdBy___updatedAt'
  | 'createdBy___createdAt'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___parent___internal___contentFilePath'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___children___internal___contentFilePath'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'createdBy___internal___contentFilePath'
  | 'type'
  | 'scheduledIn'
  | 'scheduledIn___remoteTypeName'
  | 'scheduledIn___remoteId'
  | 'scheduledIn___stage'
  | 'scheduledIn___rawPayload'
  | 'scheduledIn___errorMessage'
  | 'scheduledIn___description'
  | 'scheduledIn___publishedAt'
  | 'scheduledIn___updatedAt'
  | 'scheduledIn___createdAt'
  | 'scheduledIn___release___remoteTypeName'
  | 'scheduledIn___release___remoteId'
  | 'scheduledIn___release___stage'
  | 'scheduledIn___release___releaseAt'
  | 'scheduledIn___release___isImplicit'
  | 'scheduledIn___release___isActive'
  | 'scheduledIn___release___errorMessage'
  | 'scheduledIn___release___description'
  | 'scheduledIn___release___title'
  | 'scheduledIn___release___publishedAt'
  | 'scheduledIn___release___updatedAt'
  | 'scheduledIn___release___createdAt'
  | 'scheduledIn___release___operations'
  | 'scheduledIn___release___operations___remoteTypeName'
  | 'scheduledIn___release___operations___remoteId'
  | 'scheduledIn___release___operations___stage'
  | 'scheduledIn___release___operations___rawPayload'
  | 'scheduledIn___release___operations___errorMessage'
  | 'scheduledIn___release___operations___description'
  | 'scheduledIn___release___operations___publishedAt'
  | 'scheduledIn___release___operations___updatedAt'
  | 'scheduledIn___release___operations___createdAt'
  | 'scheduledIn___release___operations___status'
  | 'scheduledIn___release___operations___id'
  | 'scheduledIn___release___operations___children'
  | 'scheduledIn___release___publishedBy___remoteTypeName'
  | 'scheduledIn___release___publishedBy___remoteId'
  | 'scheduledIn___release___publishedBy___stage'
  | 'scheduledIn___release___publishedBy___isActive'
  | 'scheduledIn___release___publishedBy___picture'
  | 'scheduledIn___release___publishedBy___name'
  | 'scheduledIn___release___publishedBy___publishedAt'
  | 'scheduledIn___release___publishedBy___updatedAt'
  | 'scheduledIn___release___publishedBy___createdAt'
  | 'scheduledIn___release___publishedBy___kind'
  | 'scheduledIn___release___publishedBy___id'
  | 'scheduledIn___release___publishedBy___children'
  | 'scheduledIn___release___updatedBy___remoteTypeName'
  | 'scheduledIn___release___updatedBy___remoteId'
  | 'scheduledIn___release___updatedBy___stage'
  | 'scheduledIn___release___updatedBy___isActive'
  | 'scheduledIn___release___updatedBy___picture'
  | 'scheduledIn___release___updatedBy___name'
  | 'scheduledIn___release___updatedBy___publishedAt'
  | 'scheduledIn___release___updatedBy___updatedAt'
  | 'scheduledIn___release___updatedBy___createdAt'
  | 'scheduledIn___release___updatedBy___kind'
  | 'scheduledIn___release___updatedBy___id'
  | 'scheduledIn___release___updatedBy___children'
  | 'scheduledIn___release___createdBy___remoteTypeName'
  | 'scheduledIn___release___createdBy___remoteId'
  | 'scheduledIn___release___createdBy___stage'
  | 'scheduledIn___release___createdBy___isActive'
  | 'scheduledIn___release___createdBy___picture'
  | 'scheduledIn___release___createdBy___name'
  | 'scheduledIn___release___createdBy___publishedAt'
  | 'scheduledIn___release___createdBy___updatedAt'
  | 'scheduledIn___release___createdBy___createdAt'
  | 'scheduledIn___release___createdBy___kind'
  | 'scheduledIn___release___createdBy___id'
  | 'scheduledIn___release___createdBy___children'
  | 'scheduledIn___release___status'
  | 'scheduledIn___release___id'
  | 'scheduledIn___release___parent___id'
  | 'scheduledIn___release___parent___children'
  | 'scheduledIn___release___children'
  | 'scheduledIn___release___children___id'
  | 'scheduledIn___release___children___children'
  | 'scheduledIn___release___internal___content'
  | 'scheduledIn___release___internal___contentDigest'
  | 'scheduledIn___release___internal___description'
  | 'scheduledIn___release___internal___fieldOwners'
  | 'scheduledIn___release___internal___ignoreType'
  | 'scheduledIn___release___internal___mediaType'
  | 'scheduledIn___release___internal___owner'
  | 'scheduledIn___release___internal___type'
  | 'scheduledIn___release___internal___contentFilePath'
  | 'scheduledIn___publishedBy___remoteTypeName'
  | 'scheduledIn___publishedBy___remoteId'
  | 'scheduledIn___publishedBy___stage'
  | 'scheduledIn___publishedBy___isActive'
  | 'scheduledIn___publishedBy___picture'
  | 'scheduledIn___publishedBy___name'
  | 'scheduledIn___publishedBy___publishedAt'
  | 'scheduledIn___publishedBy___updatedAt'
  | 'scheduledIn___publishedBy___createdAt'
  | 'scheduledIn___publishedBy___kind'
  | 'scheduledIn___publishedBy___id'
  | 'scheduledIn___publishedBy___parent___id'
  | 'scheduledIn___publishedBy___parent___children'
  | 'scheduledIn___publishedBy___children'
  | 'scheduledIn___publishedBy___children___id'
  | 'scheduledIn___publishedBy___children___children'
  | 'scheduledIn___publishedBy___internal___content'
  | 'scheduledIn___publishedBy___internal___contentDigest'
  | 'scheduledIn___publishedBy___internal___description'
  | 'scheduledIn___publishedBy___internal___fieldOwners'
  | 'scheduledIn___publishedBy___internal___ignoreType'
  | 'scheduledIn___publishedBy___internal___mediaType'
  | 'scheduledIn___publishedBy___internal___owner'
  | 'scheduledIn___publishedBy___internal___type'
  | 'scheduledIn___publishedBy___internal___contentFilePath'
  | 'scheduledIn___updatedBy___remoteTypeName'
  | 'scheduledIn___updatedBy___remoteId'
  | 'scheduledIn___updatedBy___stage'
  | 'scheduledIn___updatedBy___isActive'
  | 'scheduledIn___updatedBy___picture'
  | 'scheduledIn___updatedBy___name'
  | 'scheduledIn___updatedBy___publishedAt'
  | 'scheduledIn___updatedBy___updatedAt'
  | 'scheduledIn___updatedBy___createdAt'
  | 'scheduledIn___updatedBy___kind'
  | 'scheduledIn___updatedBy___id'
  | 'scheduledIn___updatedBy___parent___id'
  | 'scheduledIn___updatedBy___parent___children'
  | 'scheduledIn___updatedBy___children'
  | 'scheduledIn___updatedBy___children___id'
  | 'scheduledIn___updatedBy___children___children'
  | 'scheduledIn___updatedBy___internal___content'
  | 'scheduledIn___updatedBy___internal___contentDigest'
  | 'scheduledIn___updatedBy___internal___description'
  | 'scheduledIn___updatedBy___internal___fieldOwners'
  | 'scheduledIn___updatedBy___internal___ignoreType'
  | 'scheduledIn___updatedBy___internal___mediaType'
  | 'scheduledIn___updatedBy___internal___owner'
  | 'scheduledIn___updatedBy___internal___type'
  | 'scheduledIn___updatedBy___internal___contentFilePath'
  | 'scheduledIn___createdBy___remoteTypeName'
  | 'scheduledIn___createdBy___remoteId'
  | 'scheduledIn___createdBy___stage'
  | 'scheduledIn___createdBy___isActive'
  | 'scheduledIn___createdBy___picture'
  | 'scheduledIn___createdBy___name'
  | 'scheduledIn___createdBy___publishedAt'
  | 'scheduledIn___createdBy___updatedAt'
  | 'scheduledIn___createdBy___createdAt'
  | 'scheduledIn___createdBy___kind'
  | 'scheduledIn___createdBy___id'
  | 'scheduledIn___createdBy___parent___id'
  | 'scheduledIn___createdBy___parent___children'
  | 'scheduledIn___createdBy___children'
  | 'scheduledIn___createdBy___children___id'
  | 'scheduledIn___createdBy___children___children'
  | 'scheduledIn___createdBy___internal___content'
  | 'scheduledIn___createdBy___internal___contentDigest'
  | 'scheduledIn___createdBy___internal___description'
  | 'scheduledIn___createdBy___internal___fieldOwners'
  | 'scheduledIn___createdBy___internal___ignoreType'
  | 'scheduledIn___createdBy___internal___mediaType'
  | 'scheduledIn___createdBy___internal___owner'
  | 'scheduledIn___createdBy___internal___type'
  | 'scheduledIn___createdBy___internal___contentFilePath'
  | 'scheduledIn___status'
  | 'scheduledIn___id'
  | 'scheduledIn___parent___id'
  | 'scheduledIn___parent___parent___id'
  | 'scheduledIn___parent___parent___children'
  | 'scheduledIn___parent___children'
  | 'scheduledIn___parent___children___id'
  | 'scheduledIn___parent___children___children'
  | 'scheduledIn___parent___internal___content'
  | 'scheduledIn___parent___internal___contentDigest'
  | 'scheduledIn___parent___internal___description'
  | 'scheduledIn___parent___internal___fieldOwners'
  | 'scheduledIn___parent___internal___ignoreType'
  | 'scheduledIn___parent___internal___mediaType'
  | 'scheduledIn___parent___internal___owner'
  | 'scheduledIn___parent___internal___type'
  | 'scheduledIn___parent___internal___contentFilePath'
  | 'scheduledIn___children'
  | 'scheduledIn___children___id'
  | 'scheduledIn___children___parent___id'
  | 'scheduledIn___children___parent___children'
  | 'scheduledIn___children___children'
  | 'scheduledIn___children___children___id'
  | 'scheduledIn___children___children___children'
  | 'scheduledIn___children___internal___content'
  | 'scheduledIn___children___internal___contentDigest'
  | 'scheduledIn___children___internal___description'
  | 'scheduledIn___children___internal___fieldOwners'
  | 'scheduledIn___children___internal___ignoreType'
  | 'scheduledIn___children___internal___mediaType'
  | 'scheduledIn___children___internal___owner'
  | 'scheduledIn___children___internal___type'
  | 'scheduledIn___children___internal___contentFilePath'
  | 'scheduledIn___internal___content'
  | 'scheduledIn___internal___contentDigest'
  | 'scheduledIn___internal___description'
  | 'scheduledIn___internal___fieldOwners'
  | 'scheduledIn___internal___ignoreType'
  | 'scheduledIn___internal___mediaType'
  | 'scheduledIn___internal___owner'
  | 'scheduledIn___internal___type'
  | 'scheduledIn___internal___contentFilePath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type GraphCms_LinkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_LinkEdge>;
  nodes: Array<GraphCms_Link>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_LinkGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_LinkGroupConnectionDistinctArgs = {
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkGroupConnectionMaxArgs = {
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkGroupConnectionMinArgs = {
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkGroupConnectionSumArgs = {
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_LinkFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_ScheduledReleaseConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledReleaseEdge>;
  nodes: Array<GraphCms_ScheduledRelease>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledReleaseGroupConnection>;
};

export type GraphCms_ScheduledReleaseConnectionDistinctArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseConnectionMaxArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseConnectionMinArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseConnectionSumArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseEdge = {
  next?: Maybe<GraphCms_ScheduledRelease>;
  node: GraphCms_ScheduledRelease;
  previous?: Maybe<GraphCms_ScheduledRelease>;
};

export type GraphCms_ScheduledReleaseFieldsEnum =
  | 'remoteTypeName'
  | 'remoteId'
  | 'stage'
  | 'releaseAt'
  | 'isImplicit'
  | 'isActive'
  | 'errorMessage'
  | 'description'
  | 'title'
  | 'publishedAt'
  | 'updatedAt'
  | 'createdAt'
  | 'operations'
  | 'operations___remoteTypeName'
  | 'operations___remoteId'
  | 'operations___stage'
  | 'operations___rawPayload'
  | 'operations___errorMessage'
  | 'operations___description'
  | 'operations___publishedAt'
  | 'operations___updatedAt'
  | 'operations___createdAt'
  | 'operations___release___remoteTypeName'
  | 'operations___release___remoteId'
  | 'operations___release___stage'
  | 'operations___release___releaseAt'
  | 'operations___release___isImplicit'
  | 'operations___release___isActive'
  | 'operations___release___errorMessage'
  | 'operations___release___description'
  | 'operations___release___title'
  | 'operations___release___publishedAt'
  | 'operations___release___updatedAt'
  | 'operations___release___createdAt'
  | 'operations___release___operations'
  | 'operations___release___operations___remoteTypeName'
  | 'operations___release___operations___remoteId'
  | 'operations___release___operations___stage'
  | 'operations___release___operations___rawPayload'
  | 'operations___release___operations___errorMessage'
  | 'operations___release___operations___description'
  | 'operations___release___operations___publishedAt'
  | 'operations___release___operations___updatedAt'
  | 'operations___release___operations___createdAt'
  | 'operations___release___operations___status'
  | 'operations___release___operations___id'
  | 'operations___release___operations___children'
  | 'operations___release___publishedBy___remoteTypeName'
  | 'operations___release___publishedBy___remoteId'
  | 'operations___release___publishedBy___stage'
  | 'operations___release___publishedBy___isActive'
  | 'operations___release___publishedBy___picture'
  | 'operations___release___publishedBy___name'
  | 'operations___release___publishedBy___publishedAt'
  | 'operations___release___publishedBy___updatedAt'
  | 'operations___release___publishedBy___createdAt'
  | 'operations___release___publishedBy___kind'
  | 'operations___release___publishedBy___id'
  | 'operations___release___publishedBy___children'
  | 'operations___release___updatedBy___remoteTypeName'
  | 'operations___release___updatedBy___remoteId'
  | 'operations___release___updatedBy___stage'
  | 'operations___release___updatedBy___isActive'
  | 'operations___release___updatedBy___picture'
  | 'operations___release___updatedBy___name'
  | 'operations___release___updatedBy___publishedAt'
  | 'operations___release___updatedBy___updatedAt'
  | 'operations___release___updatedBy___createdAt'
  | 'operations___release___updatedBy___kind'
  | 'operations___release___updatedBy___id'
  | 'operations___release___updatedBy___children'
  | 'operations___release___createdBy___remoteTypeName'
  | 'operations___release___createdBy___remoteId'
  | 'operations___release___createdBy___stage'
  | 'operations___release___createdBy___isActive'
  | 'operations___release___createdBy___picture'
  | 'operations___release___createdBy___name'
  | 'operations___release___createdBy___publishedAt'
  | 'operations___release___createdBy___updatedAt'
  | 'operations___release___createdBy___createdAt'
  | 'operations___release___createdBy___kind'
  | 'operations___release___createdBy___id'
  | 'operations___release___createdBy___children'
  | 'operations___release___status'
  | 'operations___release___id'
  | 'operations___release___parent___id'
  | 'operations___release___parent___children'
  | 'operations___release___children'
  | 'operations___release___children___id'
  | 'operations___release___children___children'
  | 'operations___release___internal___content'
  | 'operations___release___internal___contentDigest'
  | 'operations___release___internal___description'
  | 'operations___release___internal___fieldOwners'
  | 'operations___release___internal___ignoreType'
  | 'operations___release___internal___mediaType'
  | 'operations___release___internal___owner'
  | 'operations___release___internal___type'
  | 'operations___release___internal___contentFilePath'
  | 'operations___publishedBy___remoteTypeName'
  | 'operations___publishedBy___remoteId'
  | 'operations___publishedBy___stage'
  | 'operations___publishedBy___isActive'
  | 'operations___publishedBy___picture'
  | 'operations___publishedBy___name'
  | 'operations___publishedBy___publishedAt'
  | 'operations___publishedBy___updatedAt'
  | 'operations___publishedBy___createdAt'
  | 'operations___publishedBy___kind'
  | 'operations___publishedBy___id'
  | 'operations___publishedBy___parent___id'
  | 'operations___publishedBy___parent___children'
  | 'operations___publishedBy___children'
  | 'operations___publishedBy___children___id'
  | 'operations___publishedBy___children___children'
  | 'operations___publishedBy___internal___content'
  | 'operations___publishedBy___internal___contentDigest'
  | 'operations___publishedBy___internal___description'
  | 'operations___publishedBy___internal___fieldOwners'
  | 'operations___publishedBy___internal___ignoreType'
  | 'operations___publishedBy___internal___mediaType'
  | 'operations___publishedBy___internal___owner'
  | 'operations___publishedBy___internal___type'
  | 'operations___publishedBy___internal___contentFilePath'
  | 'operations___updatedBy___remoteTypeName'
  | 'operations___updatedBy___remoteId'
  | 'operations___updatedBy___stage'
  | 'operations___updatedBy___isActive'
  | 'operations___updatedBy___picture'
  | 'operations___updatedBy___name'
  | 'operations___updatedBy___publishedAt'
  | 'operations___updatedBy___updatedAt'
  | 'operations___updatedBy___createdAt'
  | 'operations___updatedBy___kind'
  | 'operations___updatedBy___id'
  | 'operations___updatedBy___parent___id'
  | 'operations___updatedBy___parent___children'
  | 'operations___updatedBy___children'
  | 'operations___updatedBy___children___id'
  | 'operations___updatedBy___children___children'
  | 'operations___updatedBy___internal___content'
  | 'operations___updatedBy___internal___contentDigest'
  | 'operations___updatedBy___internal___description'
  | 'operations___updatedBy___internal___fieldOwners'
  | 'operations___updatedBy___internal___ignoreType'
  | 'operations___updatedBy___internal___mediaType'
  | 'operations___updatedBy___internal___owner'
  | 'operations___updatedBy___internal___type'
  | 'operations___updatedBy___internal___contentFilePath'
  | 'operations___createdBy___remoteTypeName'
  | 'operations___createdBy___remoteId'
  | 'operations___createdBy___stage'
  | 'operations___createdBy___isActive'
  | 'operations___createdBy___picture'
  | 'operations___createdBy___name'
  | 'operations___createdBy___publishedAt'
  | 'operations___createdBy___updatedAt'
  | 'operations___createdBy___createdAt'
  | 'operations___createdBy___kind'
  | 'operations___createdBy___id'
  | 'operations___createdBy___parent___id'
  | 'operations___createdBy___parent___children'
  | 'operations___createdBy___children'
  | 'operations___createdBy___children___id'
  | 'operations___createdBy___children___children'
  | 'operations___createdBy___internal___content'
  | 'operations___createdBy___internal___contentDigest'
  | 'operations___createdBy___internal___description'
  | 'operations___createdBy___internal___fieldOwners'
  | 'operations___createdBy___internal___ignoreType'
  | 'operations___createdBy___internal___mediaType'
  | 'operations___createdBy___internal___owner'
  | 'operations___createdBy___internal___type'
  | 'operations___createdBy___internal___contentFilePath'
  | 'operations___status'
  | 'operations___id'
  | 'operations___parent___id'
  | 'operations___parent___parent___id'
  | 'operations___parent___parent___children'
  | 'operations___parent___children'
  | 'operations___parent___children___id'
  | 'operations___parent___children___children'
  | 'operations___parent___internal___content'
  | 'operations___parent___internal___contentDigest'
  | 'operations___parent___internal___description'
  | 'operations___parent___internal___fieldOwners'
  | 'operations___parent___internal___ignoreType'
  | 'operations___parent___internal___mediaType'
  | 'operations___parent___internal___owner'
  | 'operations___parent___internal___type'
  | 'operations___parent___internal___contentFilePath'
  | 'operations___children'
  | 'operations___children___id'
  | 'operations___children___parent___id'
  | 'operations___children___parent___children'
  | 'operations___children___children'
  | 'operations___children___children___id'
  | 'operations___children___children___children'
  | 'operations___children___internal___content'
  | 'operations___children___internal___contentDigest'
  | 'operations___children___internal___description'
  | 'operations___children___internal___fieldOwners'
  | 'operations___children___internal___ignoreType'
  | 'operations___children___internal___mediaType'
  | 'operations___children___internal___owner'
  | 'operations___children___internal___type'
  | 'operations___children___internal___contentFilePath'
  | 'operations___internal___content'
  | 'operations___internal___contentDigest'
  | 'operations___internal___description'
  | 'operations___internal___fieldOwners'
  | 'operations___internal___ignoreType'
  | 'operations___internal___mediaType'
  | 'operations___internal___owner'
  | 'operations___internal___type'
  | 'operations___internal___contentFilePath'
  | 'publishedBy___remoteTypeName'
  | 'publishedBy___remoteId'
  | 'publishedBy___stage'
  | 'publishedBy___isActive'
  | 'publishedBy___picture'
  | 'publishedBy___name'
  | 'publishedBy___publishedAt'
  | 'publishedBy___updatedAt'
  | 'publishedBy___createdAt'
  | 'publishedBy___kind'
  | 'publishedBy___id'
  | 'publishedBy___parent___id'
  | 'publishedBy___parent___parent___id'
  | 'publishedBy___parent___parent___children'
  | 'publishedBy___parent___children'
  | 'publishedBy___parent___children___id'
  | 'publishedBy___parent___children___children'
  | 'publishedBy___parent___internal___content'
  | 'publishedBy___parent___internal___contentDigest'
  | 'publishedBy___parent___internal___description'
  | 'publishedBy___parent___internal___fieldOwners'
  | 'publishedBy___parent___internal___ignoreType'
  | 'publishedBy___parent___internal___mediaType'
  | 'publishedBy___parent___internal___owner'
  | 'publishedBy___parent___internal___type'
  | 'publishedBy___parent___internal___contentFilePath'
  | 'publishedBy___children'
  | 'publishedBy___children___id'
  | 'publishedBy___children___parent___id'
  | 'publishedBy___children___parent___children'
  | 'publishedBy___children___children'
  | 'publishedBy___children___children___id'
  | 'publishedBy___children___children___children'
  | 'publishedBy___children___internal___content'
  | 'publishedBy___children___internal___contentDigest'
  | 'publishedBy___children___internal___description'
  | 'publishedBy___children___internal___fieldOwners'
  | 'publishedBy___children___internal___ignoreType'
  | 'publishedBy___children___internal___mediaType'
  | 'publishedBy___children___internal___owner'
  | 'publishedBy___children___internal___type'
  | 'publishedBy___children___internal___contentFilePath'
  | 'publishedBy___internal___content'
  | 'publishedBy___internal___contentDigest'
  | 'publishedBy___internal___description'
  | 'publishedBy___internal___fieldOwners'
  | 'publishedBy___internal___ignoreType'
  | 'publishedBy___internal___mediaType'
  | 'publishedBy___internal___owner'
  | 'publishedBy___internal___type'
  | 'publishedBy___internal___contentFilePath'
  | 'updatedBy___remoteTypeName'
  | 'updatedBy___remoteId'
  | 'updatedBy___stage'
  | 'updatedBy___isActive'
  | 'updatedBy___picture'
  | 'updatedBy___name'
  | 'updatedBy___publishedAt'
  | 'updatedBy___updatedAt'
  | 'updatedBy___createdAt'
  | 'updatedBy___kind'
  | 'updatedBy___id'
  | 'updatedBy___parent___id'
  | 'updatedBy___parent___parent___id'
  | 'updatedBy___parent___parent___children'
  | 'updatedBy___parent___children'
  | 'updatedBy___parent___children___id'
  | 'updatedBy___parent___children___children'
  | 'updatedBy___parent___internal___content'
  | 'updatedBy___parent___internal___contentDigest'
  | 'updatedBy___parent___internal___description'
  | 'updatedBy___parent___internal___fieldOwners'
  | 'updatedBy___parent___internal___ignoreType'
  | 'updatedBy___parent___internal___mediaType'
  | 'updatedBy___parent___internal___owner'
  | 'updatedBy___parent___internal___type'
  | 'updatedBy___parent___internal___contentFilePath'
  | 'updatedBy___children'
  | 'updatedBy___children___id'
  | 'updatedBy___children___parent___id'
  | 'updatedBy___children___parent___children'
  | 'updatedBy___children___children'
  | 'updatedBy___children___children___id'
  | 'updatedBy___children___children___children'
  | 'updatedBy___children___internal___content'
  | 'updatedBy___children___internal___contentDigest'
  | 'updatedBy___children___internal___description'
  | 'updatedBy___children___internal___fieldOwners'
  | 'updatedBy___children___internal___ignoreType'
  | 'updatedBy___children___internal___mediaType'
  | 'updatedBy___children___internal___owner'
  | 'updatedBy___children___internal___type'
  | 'updatedBy___children___internal___contentFilePath'
  | 'updatedBy___internal___content'
  | 'updatedBy___internal___contentDigest'
  | 'updatedBy___internal___description'
  | 'updatedBy___internal___fieldOwners'
  | 'updatedBy___internal___ignoreType'
  | 'updatedBy___internal___mediaType'
  | 'updatedBy___internal___owner'
  | 'updatedBy___internal___type'
  | 'updatedBy___internal___contentFilePath'
  | 'createdBy___remoteTypeName'
  | 'createdBy___remoteId'
  | 'createdBy___stage'
  | 'createdBy___isActive'
  | 'createdBy___picture'
  | 'createdBy___name'
  | 'createdBy___publishedAt'
  | 'createdBy___updatedAt'
  | 'createdBy___createdAt'
  | 'createdBy___kind'
  | 'createdBy___id'
  | 'createdBy___parent___id'
  | 'createdBy___parent___parent___id'
  | 'createdBy___parent___parent___children'
  | 'createdBy___parent___children'
  | 'createdBy___parent___children___id'
  | 'createdBy___parent___children___children'
  | 'createdBy___parent___internal___content'
  | 'createdBy___parent___internal___contentDigest'
  | 'createdBy___parent___internal___description'
  | 'createdBy___parent___internal___fieldOwners'
  | 'createdBy___parent___internal___ignoreType'
  | 'createdBy___parent___internal___mediaType'
  | 'createdBy___parent___internal___owner'
  | 'createdBy___parent___internal___type'
  | 'createdBy___parent___internal___contentFilePath'
  | 'createdBy___children'
  | 'createdBy___children___id'
  | 'createdBy___children___parent___id'
  | 'createdBy___children___parent___children'
  | 'createdBy___children___children'
  | 'createdBy___children___children___id'
  | 'createdBy___children___children___children'
  | 'createdBy___children___internal___content'
  | 'createdBy___children___internal___contentDigest'
  | 'createdBy___children___internal___description'
  | 'createdBy___children___internal___fieldOwners'
  | 'createdBy___children___internal___ignoreType'
  | 'createdBy___children___internal___mediaType'
  | 'createdBy___children___internal___owner'
  | 'createdBy___children___internal___type'
  | 'createdBy___children___internal___contentFilePath'
  | 'createdBy___internal___content'
  | 'createdBy___internal___contentDigest'
  | 'createdBy___internal___description'
  | 'createdBy___internal___fieldOwners'
  | 'createdBy___internal___ignoreType'
  | 'createdBy___internal___mediaType'
  | 'createdBy___internal___owner'
  | 'createdBy___internal___type'
  | 'createdBy___internal___contentFilePath'
  | 'status'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___parent___internal___contentFilePath'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___children___internal___contentFilePath'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'parent___internal___contentFilePath'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___parent___internal___contentFilePath'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___children___internal___contentFilePath'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'children___internal___contentFilePath'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'internal___contentFilePath';

export type GraphCms_ScheduledReleaseGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphCms_ScheduledReleaseEdge>;
  nodes: Array<GraphCms_ScheduledRelease>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<GraphCms_ScheduledReleaseGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphCms_ScheduledReleaseGroupConnectionDistinctArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseGroupConnectionMaxArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseGroupConnectionMinArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseGroupConnectionSumArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GetSiteMetadataQueryVariables = Exact<{ [key: string]: never }>;

export type GetSiteMetadataQuery = {
  site?: {
    siteMetadata?: {
      title?: string | null;
      description?: string | null;
      image?: string | null;
      siteUrl?: string | null;
    } | null;
  } | null;
};

export type CvAssetsQueryVariables = Exact<{ [key: string]: never }>;

export type CvAssetsQuery = { allGraphCmsAsset: { nodes: Array<{ url: string; id: string; fileName: string }> } };

export type AllAboutDetailsQueryVariables = Exact<{ [key: string]: never }>;

export type AllAboutDetailsQuery = {
  allGraphCmsSpeciality: {
    nodes: Array<{ id: string; title: string; description: { html: string }; icon: { id: string; url: string } }>;
  };
  allGraphCmsTechnology: {
    nodes: Array<{
      id: string;
      title: string;
      description: { html: string };
      icon: { id: string; url: string };
      backgroundColor: { hex: any };
    }>;
  };
};

export type AllBlogItemsQueryVariables = Exact<{ [key: string]: never }>;

export type AllBlogItemsQuery = {
  allGraphCmsBlog: {
    nodes: Array<{
      id: string;
      title: string;
      description: string;
      type: GraphCms_BlogType;
      categories: Array<GraphCms_BlogCategories>;
      blogPath?: string | null;
      headerImage: { id: string; url: string };
    }>;
  };
};

export type BlogPostQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type BlogPostQuery = {
  graphCmsBlog?: {
    id: string;
    title: string;
    description: string;
    type: GraphCms_BlogType;
    categories: Array<GraphCms_BlogCategories>;
    publishedAt?: any | null;
    headerImage: { id: string; url: string };
    content: { html: string };
  } | null;
};

export type AllPortfolioItemsQueryVariables = Exact<{ [key: string]: never }>;

export type AllPortfolioItemsQuery = {
  allGraphCmsPortfolioItem: {
    nodes: Array<{
      id: string;
      title: string;
      description: string;
      portfolioPath?: string | null;
      carouselImages: Array<{ id: string; url: string }>;
    }>;
  };
};

export type PortfolioItemQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type PortfolioItemQuery = {
  graphCmsPortfolioItem?: {
    id: string;
    title: string;
    description: string;
    techSheet: Array<string>;
    about: { html: string };
    carouselImages: Array<{ id: string; url: string }>;
    links: Array<{ id: string; title: string; url: string; type?: GraphCms_LinkType | null }>;
  } | null;
};

export type GatsbyImageSharpFixedFragment = {
  base64?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  tracedSVG?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  base64?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  tracedSVG?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number; height: number; src: string; srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFluidFragment = {
  base64?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number; maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  tracedSVG?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  base64?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  tracedSVG?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};
