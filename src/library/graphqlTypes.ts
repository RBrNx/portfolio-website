export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};

export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid',
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG',
}

export enum GraphCmsImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG',
}

export type GraphCms_Asset = Node & {
  __typename?: 'GraphCMS_Asset';
  carouselImagesPortfolioItem: Array<GraphCms_PortfolioItem>;
  children: Array<Node>;
  createdAt: Scalars['JSON'];
  createdBy?: Maybe<GraphCms_User>;
  fileName: Scalars['String'];
  gatsbyImageData: Scalars['JSON'];
  handle: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  internal: Internal;
  locale: GraphCms_Locale;
  mimeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  publishedAt?: Maybe<Scalars['JSON']>;
  publishedBy?: Maybe<GraphCms_User>;
  remoteId: Scalars['ID'];
  remoteTypeName: Scalars['String'];
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  size?: Maybe<Scalars['Float']>;
  stage: GraphCms_Stage;
  updatedAt: Scalars['JSON'];
  updatedBy?: Maybe<GraphCms_User>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Float']>;
};

export type GraphCms_AssetGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height?: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<GraphCmsImagePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type GraphCms_AssetConnection = {
  __typename?: 'GraphCMS_AssetConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_AssetEdge>;
  group: Array<GraphCms_AssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_AssetConnectionDistinctArgs = {
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetConnectionGroupArgs = {
  field: GraphCms_AssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type GraphCms_AssetEdge = {
  __typename?: 'GraphCMS_AssetEdge';
  next?: Maybe<GraphCms_Asset>;
  node: GraphCms_Asset;
  previous?: Maybe<GraphCms_Asset>;
};

export enum GraphCms_AssetFieldsEnum {
  CarouselImagesPortfolioItem = 'carouselImagesPortfolioItem',
  CarouselImagesPortfolioItemAboutHtml = 'carouselImagesPortfolioItem___about___html',
  CarouselImagesPortfolioItemAboutMarkdown = 'carouselImagesPortfolioItem___about___markdown',
  CarouselImagesPortfolioItemAboutRaw = 'carouselImagesPortfolioItem___about___raw',
  CarouselImagesPortfolioItemAboutRemoteTypeName = 'carouselImagesPortfolioItem___about___remoteTypeName',
  CarouselImagesPortfolioItemAboutText = 'carouselImagesPortfolioItem___about___text',
  CarouselImagesPortfolioItemCarouselImages = 'carouselImagesPortfolioItem___carouselImages',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItem = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemCarouselImages = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___carouselImages',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemChildren = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___children',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemCreatedAt = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___createdAt',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemDescription = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___description',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemGatsbyPath = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___gatsbyPath',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemId = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___id',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemLinks = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___links',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemPublishedAt = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___publishedAt',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemRemoteId = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___remoteId',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemRemoteTypeName = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___remoteTypeName',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemScheduledIn = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___scheduledIn',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemStage = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___stage',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemTechSheet = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___techSheet',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemTitle = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___title',
  CarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItemUpdatedAt = 'carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem___updatedAt',
  CarouselImagesPortfolioItemCarouselImagesChildren = 'carouselImagesPortfolioItem___carouselImages___children',
  CarouselImagesPortfolioItemCarouselImagesChildrenChildren = 'carouselImagesPortfolioItem___carouselImages___children___children',
  CarouselImagesPortfolioItemCarouselImagesChildrenId = 'carouselImagesPortfolioItem___carouselImages___children___id',
  CarouselImagesPortfolioItemCarouselImagesCreatedAt = 'carouselImagesPortfolioItem___carouselImages___createdAt',
  CarouselImagesPortfolioItemCarouselImagesCreatedByChildren = 'carouselImagesPortfolioItem___carouselImages___createdBy___children',
  CarouselImagesPortfolioItemCarouselImagesCreatedByCreatedAt = 'carouselImagesPortfolioItem___carouselImages___createdBy___createdAt',
  CarouselImagesPortfolioItemCarouselImagesCreatedById = 'carouselImagesPortfolioItem___carouselImages___createdBy___id',
  CarouselImagesPortfolioItemCarouselImagesCreatedByIsActive = 'carouselImagesPortfolioItem___carouselImages___createdBy___isActive',
  CarouselImagesPortfolioItemCarouselImagesCreatedByKind = 'carouselImagesPortfolioItem___carouselImages___createdBy___kind',
  CarouselImagesPortfolioItemCarouselImagesCreatedByName = 'carouselImagesPortfolioItem___carouselImages___createdBy___name',
  CarouselImagesPortfolioItemCarouselImagesCreatedByPicture = 'carouselImagesPortfolioItem___carouselImages___createdBy___picture',
  CarouselImagesPortfolioItemCarouselImagesCreatedByPublishedAt = 'carouselImagesPortfolioItem___carouselImages___createdBy___publishedAt',
  CarouselImagesPortfolioItemCarouselImagesCreatedByRemoteId = 'carouselImagesPortfolioItem___carouselImages___createdBy___remoteId',
  CarouselImagesPortfolioItemCarouselImagesCreatedByRemoteTypeName = 'carouselImagesPortfolioItem___carouselImages___createdBy___remoteTypeName',
  CarouselImagesPortfolioItemCarouselImagesCreatedByStage = 'carouselImagesPortfolioItem___carouselImages___createdBy___stage',
  CarouselImagesPortfolioItemCarouselImagesCreatedByUpdatedAt = 'carouselImagesPortfolioItem___carouselImages___createdBy___updatedAt',
  CarouselImagesPortfolioItemCarouselImagesFileName = 'carouselImagesPortfolioItem___carouselImages___fileName',
  CarouselImagesPortfolioItemCarouselImagesHandle = 'carouselImagesPortfolioItem___carouselImages___handle',
  CarouselImagesPortfolioItemCarouselImagesHeight = 'carouselImagesPortfolioItem___carouselImages___height',
  CarouselImagesPortfolioItemCarouselImagesId = 'carouselImagesPortfolioItem___carouselImages___id',
  CarouselImagesPortfolioItemCarouselImagesInternalContent = 'carouselImagesPortfolioItem___carouselImages___internal___content',
  CarouselImagesPortfolioItemCarouselImagesInternalContentDigest = 'carouselImagesPortfolioItem___carouselImages___internal___contentDigest',
  CarouselImagesPortfolioItemCarouselImagesInternalDescription = 'carouselImagesPortfolioItem___carouselImages___internal___description',
  CarouselImagesPortfolioItemCarouselImagesInternalFieldOwners = 'carouselImagesPortfolioItem___carouselImages___internal___fieldOwners',
  CarouselImagesPortfolioItemCarouselImagesInternalIgnoreType = 'carouselImagesPortfolioItem___carouselImages___internal___ignoreType',
  CarouselImagesPortfolioItemCarouselImagesInternalMediaType = 'carouselImagesPortfolioItem___carouselImages___internal___mediaType',
  CarouselImagesPortfolioItemCarouselImagesInternalOwner = 'carouselImagesPortfolioItem___carouselImages___internal___owner',
  CarouselImagesPortfolioItemCarouselImagesInternalType = 'carouselImagesPortfolioItem___carouselImages___internal___type',
  CarouselImagesPortfolioItemCarouselImagesLocale = 'carouselImagesPortfolioItem___carouselImages___locale',
  CarouselImagesPortfolioItemCarouselImagesMimeType = 'carouselImagesPortfolioItem___carouselImages___mimeType',
  CarouselImagesPortfolioItemCarouselImagesParentChildren = 'carouselImagesPortfolioItem___carouselImages___parent___children',
  CarouselImagesPortfolioItemCarouselImagesParentId = 'carouselImagesPortfolioItem___carouselImages___parent___id',
  CarouselImagesPortfolioItemCarouselImagesPublishedAt = 'carouselImagesPortfolioItem___carouselImages___publishedAt',
  CarouselImagesPortfolioItemCarouselImagesPublishedByChildren = 'carouselImagesPortfolioItem___carouselImages___publishedBy___children',
  CarouselImagesPortfolioItemCarouselImagesPublishedByCreatedAt = 'carouselImagesPortfolioItem___carouselImages___publishedBy___createdAt',
  CarouselImagesPortfolioItemCarouselImagesPublishedById = 'carouselImagesPortfolioItem___carouselImages___publishedBy___id',
  CarouselImagesPortfolioItemCarouselImagesPublishedByIsActive = 'carouselImagesPortfolioItem___carouselImages___publishedBy___isActive',
  CarouselImagesPortfolioItemCarouselImagesPublishedByKind = 'carouselImagesPortfolioItem___carouselImages___publishedBy___kind',
  CarouselImagesPortfolioItemCarouselImagesPublishedByName = 'carouselImagesPortfolioItem___carouselImages___publishedBy___name',
  CarouselImagesPortfolioItemCarouselImagesPublishedByPicture = 'carouselImagesPortfolioItem___carouselImages___publishedBy___picture',
  CarouselImagesPortfolioItemCarouselImagesPublishedByPublishedAt = 'carouselImagesPortfolioItem___carouselImages___publishedBy___publishedAt',
  CarouselImagesPortfolioItemCarouselImagesPublishedByRemoteId = 'carouselImagesPortfolioItem___carouselImages___publishedBy___remoteId',
  CarouselImagesPortfolioItemCarouselImagesPublishedByRemoteTypeName = 'carouselImagesPortfolioItem___carouselImages___publishedBy___remoteTypeName',
  CarouselImagesPortfolioItemCarouselImagesPublishedByStage = 'carouselImagesPortfolioItem___carouselImages___publishedBy___stage',
  CarouselImagesPortfolioItemCarouselImagesPublishedByUpdatedAt = 'carouselImagesPortfolioItem___carouselImages___publishedBy___updatedAt',
  CarouselImagesPortfolioItemCarouselImagesRemoteId = 'carouselImagesPortfolioItem___carouselImages___remoteId',
  CarouselImagesPortfolioItemCarouselImagesRemoteTypeName = 'carouselImagesPortfolioItem___carouselImages___remoteTypeName',
  CarouselImagesPortfolioItemCarouselImagesScheduledIn = 'carouselImagesPortfolioItem___carouselImages___scheduledIn',
  CarouselImagesPortfolioItemCarouselImagesScheduledInChildren = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___children',
  CarouselImagesPortfolioItemCarouselImagesScheduledInCreatedAt = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___createdAt',
  CarouselImagesPortfolioItemCarouselImagesScheduledInDescription = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___description',
  CarouselImagesPortfolioItemCarouselImagesScheduledInErrorMessage = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___errorMessage',
  CarouselImagesPortfolioItemCarouselImagesScheduledInId = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___id',
  CarouselImagesPortfolioItemCarouselImagesScheduledInPublishedAt = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___publishedAt',
  CarouselImagesPortfolioItemCarouselImagesScheduledInRawPayload = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___rawPayload',
  CarouselImagesPortfolioItemCarouselImagesScheduledInRemoteId = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___remoteId',
  CarouselImagesPortfolioItemCarouselImagesScheduledInRemoteTypeName = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___remoteTypeName',
  CarouselImagesPortfolioItemCarouselImagesScheduledInStage = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___stage',
  CarouselImagesPortfolioItemCarouselImagesScheduledInStatus = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___status',
  CarouselImagesPortfolioItemCarouselImagesScheduledInUpdatedAt = 'carouselImagesPortfolioItem___carouselImages___scheduledIn___updatedAt',
  CarouselImagesPortfolioItemCarouselImagesSize = 'carouselImagesPortfolioItem___carouselImages___size',
  CarouselImagesPortfolioItemCarouselImagesStage = 'carouselImagesPortfolioItem___carouselImages___stage',
  CarouselImagesPortfolioItemCarouselImagesUpdatedAt = 'carouselImagesPortfolioItem___carouselImages___updatedAt',
  CarouselImagesPortfolioItemCarouselImagesUpdatedByChildren = 'carouselImagesPortfolioItem___carouselImages___updatedBy___children',
  CarouselImagesPortfolioItemCarouselImagesUpdatedByCreatedAt = 'carouselImagesPortfolioItem___carouselImages___updatedBy___createdAt',
  CarouselImagesPortfolioItemCarouselImagesUpdatedById = 'carouselImagesPortfolioItem___carouselImages___updatedBy___id',
  CarouselImagesPortfolioItemCarouselImagesUpdatedByIsActive = 'carouselImagesPortfolioItem___carouselImages___updatedBy___isActive',
  CarouselImagesPortfolioItemCarouselImagesUpdatedByKind = 'carouselImagesPortfolioItem___carouselImages___updatedBy___kind',
  CarouselImagesPortfolioItemCarouselImagesUpdatedByName = 'carouselImagesPortfolioItem___carouselImages___updatedBy___name',
  CarouselImagesPortfolioItemCarouselImagesUpdatedByPicture = 'carouselImagesPortfolioItem___carouselImages___updatedBy___picture',
  CarouselImagesPortfolioItemCarouselImagesUpdatedByPublishedAt = 'carouselImagesPortfolioItem___carouselImages___updatedBy___publishedAt',
  CarouselImagesPortfolioItemCarouselImagesUpdatedByRemoteId = 'carouselImagesPortfolioItem___carouselImages___updatedBy___remoteId',
  CarouselImagesPortfolioItemCarouselImagesUpdatedByRemoteTypeName = 'carouselImagesPortfolioItem___carouselImages___updatedBy___remoteTypeName',
  CarouselImagesPortfolioItemCarouselImagesUpdatedByStage = 'carouselImagesPortfolioItem___carouselImages___updatedBy___stage',
  CarouselImagesPortfolioItemCarouselImagesUpdatedByUpdatedAt = 'carouselImagesPortfolioItem___carouselImages___updatedBy___updatedAt',
  CarouselImagesPortfolioItemCarouselImagesUrl = 'carouselImagesPortfolioItem___carouselImages___url',
  CarouselImagesPortfolioItemCarouselImagesWidth = 'carouselImagesPortfolioItem___carouselImages___width',
  CarouselImagesPortfolioItemChildren = 'carouselImagesPortfolioItem___children',
  CarouselImagesPortfolioItemChildrenChildren = 'carouselImagesPortfolioItem___children___children',
  CarouselImagesPortfolioItemChildrenChildrenChildren = 'carouselImagesPortfolioItem___children___children___children',
  CarouselImagesPortfolioItemChildrenChildrenId = 'carouselImagesPortfolioItem___children___children___id',
  CarouselImagesPortfolioItemChildrenId = 'carouselImagesPortfolioItem___children___id',
  CarouselImagesPortfolioItemChildrenInternalContent = 'carouselImagesPortfolioItem___children___internal___content',
  CarouselImagesPortfolioItemChildrenInternalContentDigest = 'carouselImagesPortfolioItem___children___internal___contentDigest',
  CarouselImagesPortfolioItemChildrenInternalDescription = 'carouselImagesPortfolioItem___children___internal___description',
  CarouselImagesPortfolioItemChildrenInternalFieldOwners = 'carouselImagesPortfolioItem___children___internal___fieldOwners',
  CarouselImagesPortfolioItemChildrenInternalIgnoreType = 'carouselImagesPortfolioItem___children___internal___ignoreType',
  CarouselImagesPortfolioItemChildrenInternalMediaType = 'carouselImagesPortfolioItem___children___internal___mediaType',
  CarouselImagesPortfolioItemChildrenInternalOwner = 'carouselImagesPortfolioItem___children___internal___owner',
  CarouselImagesPortfolioItemChildrenInternalType = 'carouselImagesPortfolioItem___children___internal___type',
  CarouselImagesPortfolioItemChildrenParentChildren = 'carouselImagesPortfolioItem___children___parent___children',
  CarouselImagesPortfolioItemChildrenParentId = 'carouselImagesPortfolioItem___children___parent___id',
  CarouselImagesPortfolioItemCreatedAt = 'carouselImagesPortfolioItem___createdAt',
  CarouselImagesPortfolioItemCreatedByChildren = 'carouselImagesPortfolioItem___createdBy___children',
  CarouselImagesPortfolioItemCreatedByChildrenChildren = 'carouselImagesPortfolioItem___createdBy___children___children',
  CarouselImagesPortfolioItemCreatedByChildrenId = 'carouselImagesPortfolioItem___createdBy___children___id',
  CarouselImagesPortfolioItemCreatedByCreatedAt = 'carouselImagesPortfolioItem___createdBy___createdAt',
  CarouselImagesPortfolioItemCreatedById = 'carouselImagesPortfolioItem___createdBy___id',
  CarouselImagesPortfolioItemCreatedByInternalContent = 'carouselImagesPortfolioItem___createdBy___internal___content',
  CarouselImagesPortfolioItemCreatedByInternalContentDigest = 'carouselImagesPortfolioItem___createdBy___internal___contentDigest',
  CarouselImagesPortfolioItemCreatedByInternalDescription = 'carouselImagesPortfolioItem___createdBy___internal___description',
  CarouselImagesPortfolioItemCreatedByInternalFieldOwners = 'carouselImagesPortfolioItem___createdBy___internal___fieldOwners',
  CarouselImagesPortfolioItemCreatedByInternalIgnoreType = 'carouselImagesPortfolioItem___createdBy___internal___ignoreType',
  CarouselImagesPortfolioItemCreatedByInternalMediaType = 'carouselImagesPortfolioItem___createdBy___internal___mediaType',
  CarouselImagesPortfolioItemCreatedByInternalOwner = 'carouselImagesPortfolioItem___createdBy___internal___owner',
  CarouselImagesPortfolioItemCreatedByInternalType = 'carouselImagesPortfolioItem___createdBy___internal___type',
  CarouselImagesPortfolioItemCreatedByIsActive = 'carouselImagesPortfolioItem___createdBy___isActive',
  CarouselImagesPortfolioItemCreatedByKind = 'carouselImagesPortfolioItem___createdBy___kind',
  CarouselImagesPortfolioItemCreatedByName = 'carouselImagesPortfolioItem___createdBy___name',
  CarouselImagesPortfolioItemCreatedByParentChildren = 'carouselImagesPortfolioItem___createdBy___parent___children',
  CarouselImagesPortfolioItemCreatedByParentId = 'carouselImagesPortfolioItem___createdBy___parent___id',
  CarouselImagesPortfolioItemCreatedByPicture = 'carouselImagesPortfolioItem___createdBy___picture',
  CarouselImagesPortfolioItemCreatedByPublishedAt = 'carouselImagesPortfolioItem___createdBy___publishedAt',
  CarouselImagesPortfolioItemCreatedByRemoteId = 'carouselImagesPortfolioItem___createdBy___remoteId',
  CarouselImagesPortfolioItemCreatedByRemoteTypeName = 'carouselImagesPortfolioItem___createdBy___remoteTypeName',
  CarouselImagesPortfolioItemCreatedByStage = 'carouselImagesPortfolioItem___createdBy___stage',
  CarouselImagesPortfolioItemCreatedByUpdatedAt = 'carouselImagesPortfolioItem___createdBy___updatedAt',
  CarouselImagesPortfolioItemDescription = 'carouselImagesPortfolioItem___description',
  CarouselImagesPortfolioItemGatsbyPath = 'carouselImagesPortfolioItem___gatsbyPath',
  CarouselImagesPortfolioItemId = 'carouselImagesPortfolioItem___id',
  CarouselImagesPortfolioItemInternalContent = 'carouselImagesPortfolioItem___internal___content',
  CarouselImagesPortfolioItemInternalContentDigest = 'carouselImagesPortfolioItem___internal___contentDigest',
  CarouselImagesPortfolioItemInternalDescription = 'carouselImagesPortfolioItem___internal___description',
  CarouselImagesPortfolioItemInternalFieldOwners = 'carouselImagesPortfolioItem___internal___fieldOwners',
  CarouselImagesPortfolioItemInternalIgnoreType = 'carouselImagesPortfolioItem___internal___ignoreType',
  CarouselImagesPortfolioItemInternalMediaType = 'carouselImagesPortfolioItem___internal___mediaType',
  CarouselImagesPortfolioItemInternalOwner = 'carouselImagesPortfolioItem___internal___owner',
  CarouselImagesPortfolioItemInternalType = 'carouselImagesPortfolioItem___internal___type',
  CarouselImagesPortfolioItemLinks = 'carouselImagesPortfolioItem___links',
  CarouselImagesPortfolioItemLinksChildren = 'carouselImagesPortfolioItem___links___children',
  CarouselImagesPortfolioItemLinksChildrenChildren = 'carouselImagesPortfolioItem___links___children___children',
  CarouselImagesPortfolioItemLinksChildrenId = 'carouselImagesPortfolioItem___links___children___id',
  CarouselImagesPortfolioItemLinksCreatedAt = 'carouselImagesPortfolioItem___links___createdAt',
  CarouselImagesPortfolioItemLinksCreatedByChildren = 'carouselImagesPortfolioItem___links___createdBy___children',
  CarouselImagesPortfolioItemLinksCreatedByCreatedAt = 'carouselImagesPortfolioItem___links___createdBy___createdAt',
  CarouselImagesPortfolioItemLinksCreatedById = 'carouselImagesPortfolioItem___links___createdBy___id',
  CarouselImagesPortfolioItemLinksCreatedByIsActive = 'carouselImagesPortfolioItem___links___createdBy___isActive',
  CarouselImagesPortfolioItemLinksCreatedByKind = 'carouselImagesPortfolioItem___links___createdBy___kind',
  CarouselImagesPortfolioItemLinksCreatedByName = 'carouselImagesPortfolioItem___links___createdBy___name',
  CarouselImagesPortfolioItemLinksCreatedByPicture = 'carouselImagesPortfolioItem___links___createdBy___picture',
  CarouselImagesPortfolioItemLinksCreatedByPublishedAt = 'carouselImagesPortfolioItem___links___createdBy___publishedAt',
  CarouselImagesPortfolioItemLinksCreatedByRemoteId = 'carouselImagesPortfolioItem___links___createdBy___remoteId',
  CarouselImagesPortfolioItemLinksCreatedByRemoteTypeName = 'carouselImagesPortfolioItem___links___createdBy___remoteTypeName',
  CarouselImagesPortfolioItemLinksCreatedByStage = 'carouselImagesPortfolioItem___links___createdBy___stage',
  CarouselImagesPortfolioItemLinksCreatedByUpdatedAt = 'carouselImagesPortfolioItem___links___createdBy___updatedAt',
  CarouselImagesPortfolioItemLinksId = 'carouselImagesPortfolioItem___links___id',
  CarouselImagesPortfolioItemLinksInternalContent = 'carouselImagesPortfolioItem___links___internal___content',
  CarouselImagesPortfolioItemLinksInternalContentDigest = 'carouselImagesPortfolioItem___links___internal___contentDigest',
  CarouselImagesPortfolioItemLinksInternalDescription = 'carouselImagesPortfolioItem___links___internal___description',
  CarouselImagesPortfolioItemLinksInternalFieldOwners = 'carouselImagesPortfolioItem___links___internal___fieldOwners',
  CarouselImagesPortfolioItemLinksInternalIgnoreType = 'carouselImagesPortfolioItem___links___internal___ignoreType',
  CarouselImagesPortfolioItemLinksInternalMediaType = 'carouselImagesPortfolioItem___links___internal___mediaType',
  CarouselImagesPortfolioItemLinksInternalOwner = 'carouselImagesPortfolioItem___links___internal___owner',
  CarouselImagesPortfolioItemLinksInternalType = 'carouselImagesPortfolioItem___links___internal___type',
  CarouselImagesPortfolioItemLinksParentChildren = 'carouselImagesPortfolioItem___links___parent___children',
  CarouselImagesPortfolioItemLinksParentId = 'carouselImagesPortfolioItem___links___parent___id',
  CarouselImagesPortfolioItemLinksPublishedAt = 'carouselImagesPortfolioItem___links___publishedAt',
  CarouselImagesPortfolioItemLinksPublishedByChildren = 'carouselImagesPortfolioItem___links___publishedBy___children',
  CarouselImagesPortfolioItemLinksPublishedByCreatedAt = 'carouselImagesPortfolioItem___links___publishedBy___createdAt',
  CarouselImagesPortfolioItemLinksPublishedById = 'carouselImagesPortfolioItem___links___publishedBy___id',
  CarouselImagesPortfolioItemLinksPublishedByIsActive = 'carouselImagesPortfolioItem___links___publishedBy___isActive',
  CarouselImagesPortfolioItemLinksPublishedByKind = 'carouselImagesPortfolioItem___links___publishedBy___kind',
  CarouselImagesPortfolioItemLinksPublishedByName = 'carouselImagesPortfolioItem___links___publishedBy___name',
  CarouselImagesPortfolioItemLinksPublishedByPicture = 'carouselImagesPortfolioItem___links___publishedBy___picture',
  CarouselImagesPortfolioItemLinksPublishedByPublishedAt = 'carouselImagesPortfolioItem___links___publishedBy___publishedAt',
  CarouselImagesPortfolioItemLinksPublishedByRemoteId = 'carouselImagesPortfolioItem___links___publishedBy___remoteId',
  CarouselImagesPortfolioItemLinksPublishedByRemoteTypeName = 'carouselImagesPortfolioItem___links___publishedBy___remoteTypeName',
  CarouselImagesPortfolioItemLinksPublishedByStage = 'carouselImagesPortfolioItem___links___publishedBy___stage',
  CarouselImagesPortfolioItemLinksPublishedByUpdatedAt = 'carouselImagesPortfolioItem___links___publishedBy___updatedAt',
  CarouselImagesPortfolioItemLinksRemoteId = 'carouselImagesPortfolioItem___links___remoteId',
  CarouselImagesPortfolioItemLinksRemoteTypeName = 'carouselImagesPortfolioItem___links___remoteTypeName',
  CarouselImagesPortfolioItemLinksScheduledIn = 'carouselImagesPortfolioItem___links___scheduledIn',
  CarouselImagesPortfolioItemLinksScheduledInChildren = 'carouselImagesPortfolioItem___links___scheduledIn___children',
  CarouselImagesPortfolioItemLinksScheduledInCreatedAt = 'carouselImagesPortfolioItem___links___scheduledIn___createdAt',
  CarouselImagesPortfolioItemLinksScheduledInDescription = 'carouselImagesPortfolioItem___links___scheduledIn___description',
  CarouselImagesPortfolioItemLinksScheduledInErrorMessage = 'carouselImagesPortfolioItem___links___scheduledIn___errorMessage',
  CarouselImagesPortfolioItemLinksScheduledInId = 'carouselImagesPortfolioItem___links___scheduledIn___id',
  CarouselImagesPortfolioItemLinksScheduledInPublishedAt = 'carouselImagesPortfolioItem___links___scheduledIn___publishedAt',
  CarouselImagesPortfolioItemLinksScheduledInRawPayload = 'carouselImagesPortfolioItem___links___scheduledIn___rawPayload',
  CarouselImagesPortfolioItemLinksScheduledInRemoteId = 'carouselImagesPortfolioItem___links___scheduledIn___remoteId',
  CarouselImagesPortfolioItemLinksScheduledInRemoteTypeName = 'carouselImagesPortfolioItem___links___scheduledIn___remoteTypeName',
  CarouselImagesPortfolioItemLinksScheduledInStage = 'carouselImagesPortfolioItem___links___scheduledIn___stage',
  CarouselImagesPortfolioItemLinksScheduledInStatus = 'carouselImagesPortfolioItem___links___scheduledIn___status',
  CarouselImagesPortfolioItemLinksScheduledInUpdatedAt = 'carouselImagesPortfolioItem___links___scheduledIn___updatedAt',
  CarouselImagesPortfolioItemLinksStage = 'carouselImagesPortfolioItem___links___stage',
  CarouselImagesPortfolioItemLinksTitle = 'carouselImagesPortfolioItem___links___title',
  CarouselImagesPortfolioItemLinksType = 'carouselImagesPortfolioItem___links___type',
  CarouselImagesPortfolioItemLinksUpdatedAt = 'carouselImagesPortfolioItem___links___updatedAt',
  CarouselImagesPortfolioItemLinksUpdatedByChildren = 'carouselImagesPortfolioItem___links___updatedBy___children',
  CarouselImagesPortfolioItemLinksUpdatedByCreatedAt = 'carouselImagesPortfolioItem___links___updatedBy___createdAt',
  CarouselImagesPortfolioItemLinksUpdatedById = 'carouselImagesPortfolioItem___links___updatedBy___id',
  CarouselImagesPortfolioItemLinksUpdatedByIsActive = 'carouselImagesPortfolioItem___links___updatedBy___isActive',
  CarouselImagesPortfolioItemLinksUpdatedByKind = 'carouselImagesPortfolioItem___links___updatedBy___kind',
  CarouselImagesPortfolioItemLinksUpdatedByName = 'carouselImagesPortfolioItem___links___updatedBy___name',
  CarouselImagesPortfolioItemLinksUpdatedByPicture = 'carouselImagesPortfolioItem___links___updatedBy___picture',
  CarouselImagesPortfolioItemLinksUpdatedByPublishedAt = 'carouselImagesPortfolioItem___links___updatedBy___publishedAt',
  CarouselImagesPortfolioItemLinksUpdatedByRemoteId = 'carouselImagesPortfolioItem___links___updatedBy___remoteId',
  CarouselImagesPortfolioItemLinksUpdatedByRemoteTypeName = 'carouselImagesPortfolioItem___links___updatedBy___remoteTypeName',
  CarouselImagesPortfolioItemLinksUpdatedByStage = 'carouselImagesPortfolioItem___links___updatedBy___stage',
  CarouselImagesPortfolioItemLinksUpdatedByUpdatedAt = 'carouselImagesPortfolioItem___links___updatedBy___updatedAt',
  CarouselImagesPortfolioItemLinksUrl = 'carouselImagesPortfolioItem___links___url',
  CarouselImagesPortfolioItemParentChildren = 'carouselImagesPortfolioItem___parent___children',
  CarouselImagesPortfolioItemParentChildrenChildren = 'carouselImagesPortfolioItem___parent___children___children',
  CarouselImagesPortfolioItemParentChildrenId = 'carouselImagesPortfolioItem___parent___children___id',
  CarouselImagesPortfolioItemParentId = 'carouselImagesPortfolioItem___parent___id',
  CarouselImagesPortfolioItemParentInternalContent = 'carouselImagesPortfolioItem___parent___internal___content',
  CarouselImagesPortfolioItemParentInternalContentDigest = 'carouselImagesPortfolioItem___parent___internal___contentDigest',
  CarouselImagesPortfolioItemParentInternalDescription = 'carouselImagesPortfolioItem___parent___internal___description',
  CarouselImagesPortfolioItemParentInternalFieldOwners = 'carouselImagesPortfolioItem___parent___internal___fieldOwners',
  CarouselImagesPortfolioItemParentInternalIgnoreType = 'carouselImagesPortfolioItem___parent___internal___ignoreType',
  CarouselImagesPortfolioItemParentInternalMediaType = 'carouselImagesPortfolioItem___parent___internal___mediaType',
  CarouselImagesPortfolioItemParentInternalOwner = 'carouselImagesPortfolioItem___parent___internal___owner',
  CarouselImagesPortfolioItemParentInternalType = 'carouselImagesPortfolioItem___parent___internal___type',
  CarouselImagesPortfolioItemParentParentChildren = 'carouselImagesPortfolioItem___parent___parent___children',
  CarouselImagesPortfolioItemParentParentId = 'carouselImagesPortfolioItem___parent___parent___id',
  CarouselImagesPortfolioItemPublishedAt = 'carouselImagesPortfolioItem___publishedAt',
  CarouselImagesPortfolioItemPublishedByChildren = 'carouselImagesPortfolioItem___publishedBy___children',
  CarouselImagesPortfolioItemPublishedByChildrenChildren = 'carouselImagesPortfolioItem___publishedBy___children___children',
  CarouselImagesPortfolioItemPublishedByChildrenId = 'carouselImagesPortfolioItem___publishedBy___children___id',
  CarouselImagesPortfolioItemPublishedByCreatedAt = 'carouselImagesPortfolioItem___publishedBy___createdAt',
  CarouselImagesPortfolioItemPublishedById = 'carouselImagesPortfolioItem___publishedBy___id',
  CarouselImagesPortfolioItemPublishedByInternalContent = 'carouselImagesPortfolioItem___publishedBy___internal___content',
  CarouselImagesPortfolioItemPublishedByInternalContentDigest = 'carouselImagesPortfolioItem___publishedBy___internal___contentDigest',
  CarouselImagesPortfolioItemPublishedByInternalDescription = 'carouselImagesPortfolioItem___publishedBy___internal___description',
  CarouselImagesPortfolioItemPublishedByInternalFieldOwners = 'carouselImagesPortfolioItem___publishedBy___internal___fieldOwners',
  CarouselImagesPortfolioItemPublishedByInternalIgnoreType = 'carouselImagesPortfolioItem___publishedBy___internal___ignoreType',
  CarouselImagesPortfolioItemPublishedByInternalMediaType = 'carouselImagesPortfolioItem___publishedBy___internal___mediaType',
  CarouselImagesPortfolioItemPublishedByInternalOwner = 'carouselImagesPortfolioItem___publishedBy___internal___owner',
  CarouselImagesPortfolioItemPublishedByInternalType = 'carouselImagesPortfolioItem___publishedBy___internal___type',
  CarouselImagesPortfolioItemPublishedByIsActive = 'carouselImagesPortfolioItem___publishedBy___isActive',
  CarouselImagesPortfolioItemPublishedByKind = 'carouselImagesPortfolioItem___publishedBy___kind',
  CarouselImagesPortfolioItemPublishedByName = 'carouselImagesPortfolioItem___publishedBy___name',
  CarouselImagesPortfolioItemPublishedByParentChildren = 'carouselImagesPortfolioItem___publishedBy___parent___children',
  CarouselImagesPortfolioItemPublishedByParentId = 'carouselImagesPortfolioItem___publishedBy___parent___id',
  CarouselImagesPortfolioItemPublishedByPicture = 'carouselImagesPortfolioItem___publishedBy___picture',
  CarouselImagesPortfolioItemPublishedByPublishedAt = 'carouselImagesPortfolioItem___publishedBy___publishedAt',
  CarouselImagesPortfolioItemPublishedByRemoteId = 'carouselImagesPortfolioItem___publishedBy___remoteId',
  CarouselImagesPortfolioItemPublishedByRemoteTypeName = 'carouselImagesPortfolioItem___publishedBy___remoteTypeName',
  CarouselImagesPortfolioItemPublishedByStage = 'carouselImagesPortfolioItem___publishedBy___stage',
  CarouselImagesPortfolioItemPublishedByUpdatedAt = 'carouselImagesPortfolioItem___publishedBy___updatedAt',
  CarouselImagesPortfolioItemRemoteId = 'carouselImagesPortfolioItem___remoteId',
  CarouselImagesPortfolioItemRemoteTypeName = 'carouselImagesPortfolioItem___remoteTypeName',
  CarouselImagesPortfolioItemScheduledIn = 'carouselImagesPortfolioItem___scheduledIn',
  CarouselImagesPortfolioItemScheduledInChildren = 'carouselImagesPortfolioItem___scheduledIn___children',
  CarouselImagesPortfolioItemScheduledInChildrenChildren = 'carouselImagesPortfolioItem___scheduledIn___children___children',
  CarouselImagesPortfolioItemScheduledInChildrenId = 'carouselImagesPortfolioItem___scheduledIn___children___id',
  CarouselImagesPortfolioItemScheduledInCreatedAt = 'carouselImagesPortfolioItem___scheduledIn___createdAt',
  CarouselImagesPortfolioItemScheduledInCreatedByChildren = 'carouselImagesPortfolioItem___scheduledIn___createdBy___children',
  CarouselImagesPortfolioItemScheduledInCreatedByCreatedAt = 'carouselImagesPortfolioItem___scheduledIn___createdBy___createdAt',
  CarouselImagesPortfolioItemScheduledInCreatedById = 'carouselImagesPortfolioItem___scheduledIn___createdBy___id',
  CarouselImagesPortfolioItemScheduledInCreatedByIsActive = 'carouselImagesPortfolioItem___scheduledIn___createdBy___isActive',
  CarouselImagesPortfolioItemScheduledInCreatedByKind = 'carouselImagesPortfolioItem___scheduledIn___createdBy___kind',
  CarouselImagesPortfolioItemScheduledInCreatedByName = 'carouselImagesPortfolioItem___scheduledIn___createdBy___name',
  CarouselImagesPortfolioItemScheduledInCreatedByPicture = 'carouselImagesPortfolioItem___scheduledIn___createdBy___picture',
  CarouselImagesPortfolioItemScheduledInCreatedByPublishedAt = 'carouselImagesPortfolioItem___scheduledIn___createdBy___publishedAt',
  CarouselImagesPortfolioItemScheduledInCreatedByRemoteId = 'carouselImagesPortfolioItem___scheduledIn___createdBy___remoteId',
  CarouselImagesPortfolioItemScheduledInCreatedByRemoteTypeName = 'carouselImagesPortfolioItem___scheduledIn___createdBy___remoteTypeName',
  CarouselImagesPortfolioItemScheduledInCreatedByStage = 'carouselImagesPortfolioItem___scheduledIn___createdBy___stage',
  CarouselImagesPortfolioItemScheduledInCreatedByUpdatedAt = 'carouselImagesPortfolioItem___scheduledIn___createdBy___updatedAt',
  CarouselImagesPortfolioItemScheduledInDescription = 'carouselImagesPortfolioItem___scheduledIn___description',
  CarouselImagesPortfolioItemScheduledInErrorMessage = 'carouselImagesPortfolioItem___scheduledIn___errorMessage',
  CarouselImagesPortfolioItemScheduledInId = 'carouselImagesPortfolioItem___scheduledIn___id',
  CarouselImagesPortfolioItemScheduledInInternalContent = 'carouselImagesPortfolioItem___scheduledIn___internal___content',
  CarouselImagesPortfolioItemScheduledInInternalContentDigest = 'carouselImagesPortfolioItem___scheduledIn___internal___contentDigest',
  CarouselImagesPortfolioItemScheduledInInternalDescription = 'carouselImagesPortfolioItem___scheduledIn___internal___description',
  CarouselImagesPortfolioItemScheduledInInternalFieldOwners = 'carouselImagesPortfolioItem___scheduledIn___internal___fieldOwners',
  CarouselImagesPortfolioItemScheduledInInternalIgnoreType = 'carouselImagesPortfolioItem___scheduledIn___internal___ignoreType',
  CarouselImagesPortfolioItemScheduledInInternalMediaType = 'carouselImagesPortfolioItem___scheduledIn___internal___mediaType',
  CarouselImagesPortfolioItemScheduledInInternalOwner = 'carouselImagesPortfolioItem___scheduledIn___internal___owner',
  CarouselImagesPortfolioItemScheduledInInternalType = 'carouselImagesPortfolioItem___scheduledIn___internal___type',
  CarouselImagesPortfolioItemScheduledInParentChildren = 'carouselImagesPortfolioItem___scheduledIn___parent___children',
  CarouselImagesPortfolioItemScheduledInParentId = 'carouselImagesPortfolioItem___scheduledIn___parent___id',
  CarouselImagesPortfolioItemScheduledInPublishedAt = 'carouselImagesPortfolioItem___scheduledIn___publishedAt',
  CarouselImagesPortfolioItemScheduledInPublishedByChildren = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___children',
  CarouselImagesPortfolioItemScheduledInPublishedByCreatedAt = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___createdAt',
  CarouselImagesPortfolioItemScheduledInPublishedById = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___id',
  CarouselImagesPortfolioItemScheduledInPublishedByIsActive = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___isActive',
  CarouselImagesPortfolioItemScheduledInPublishedByKind = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___kind',
  CarouselImagesPortfolioItemScheduledInPublishedByName = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___name',
  CarouselImagesPortfolioItemScheduledInPublishedByPicture = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___picture',
  CarouselImagesPortfolioItemScheduledInPublishedByPublishedAt = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___publishedAt',
  CarouselImagesPortfolioItemScheduledInPublishedByRemoteId = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___remoteId',
  CarouselImagesPortfolioItemScheduledInPublishedByRemoteTypeName = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___remoteTypeName',
  CarouselImagesPortfolioItemScheduledInPublishedByStage = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___stage',
  CarouselImagesPortfolioItemScheduledInPublishedByUpdatedAt = 'carouselImagesPortfolioItem___scheduledIn___publishedBy___updatedAt',
  CarouselImagesPortfolioItemScheduledInRawPayload = 'carouselImagesPortfolioItem___scheduledIn___rawPayload',
  CarouselImagesPortfolioItemScheduledInReleaseChildren = 'carouselImagesPortfolioItem___scheduledIn___release___children',
  CarouselImagesPortfolioItemScheduledInReleaseCreatedAt = 'carouselImagesPortfolioItem___scheduledIn___release___createdAt',
  CarouselImagesPortfolioItemScheduledInReleaseDescription = 'carouselImagesPortfolioItem___scheduledIn___release___description',
  CarouselImagesPortfolioItemScheduledInReleaseErrorMessage = 'carouselImagesPortfolioItem___scheduledIn___release___errorMessage',
  CarouselImagesPortfolioItemScheduledInReleaseId = 'carouselImagesPortfolioItem___scheduledIn___release___id',
  CarouselImagesPortfolioItemScheduledInReleaseIsActive = 'carouselImagesPortfolioItem___scheduledIn___release___isActive',
  CarouselImagesPortfolioItemScheduledInReleaseIsImplicit = 'carouselImagesPortfolioItem___scheduledIn___release___isImplicit',
  CarouselImagesPortfolioItemScheduledInReleaseOperations = 'carouselImagesPortfolioItem___scheduledIn___release___operations',
  CarouselImagesPortfolioItemScheduledInReleasePublishedAt = 'carouselImagesPortfolioItem___scheduledIn___release___publishedAt',
  CarouselImagesPortfolioItemScheduledInReleaseReleaseAt = 'carouselImagesPortfolioItem___scheduledIn___release___releaseAt',
  CarouselImagesPortfolioItemScheduledInReleaseRemoteId = 'carouselImagesPortfolioItem___scheduledIn___release___remoteId',
  CarouselImagesPortfolioItemScheduledInReleaseRemoteTypeName = 'carouselImagesPortfolioItem___scheduledIn___release___remoteTypeName',
  CarouselImagesPortfolioItemScheduledInReleaseStage = 'carouselImagesPortfolioItem___scheduledIn___release___stage',
  CarouselImagesPortfolioItemScheduledInReleaseStatus = 'carouselImagesPortfolioItem___scheduledIn___release___status',
  CarouselImagesPortfolioItemScheduledInReleaseTitle = 'carouselImagesPortfolioItem___scheduledIn___release___title',
  CarouselImagesPortfolioItemScheduledInReleaseUpdatedAt = 'carouselImagesPortfolioItem___scheduledIn___release___updatedAt',
  CarouselImagesPortfolioItemScheduledInRemoteId = 'carouselImagesPortfolioItem___scheduledIn___remoteId',
  CarouselImagesPortfolioItemScheduledInRemoteTypeName = 'carouselImagesPortfolioItem___scheduledIn___remoteTypeName',
  CarouselImagesPortfolioItemScheduledInStage = 'carouselImagesPortfolioItem___scheduledIn___stage',
  CarouselImagesPortfolioItemScheduledInStatus = 'carouselImagesPortfolioItem___scheduledIn___status',
  CarouselImagesPortfolioItemScheduledInUpdatedAt = 'carouselImagesPortfolioItem___scheduledIn___updatedAt',
  CarouselImagesPortfolioItemScheduledInUpdatedByChildren = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___children',
  CarouselImagesPortfolioItemScheduledInUpdatedByCreatedAt = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___createdAt',
  CarouselImagesPortfolioItemScheduledInUpdatedById = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___id',
  CarouselImagesPortfolioItemScheduledInUpdatedByIsActive = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___isActive',
  CarouselImagesPortfolioItemScheduledInUpdatedByKind = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___kind',
  CarouselImagesPortfolioItemScheduledInUpdatedByName = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___name',
  CarouselImagesPortfolioItemScheduledInUpdatedByPicture = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___picture',
  CarouselImagesPortfolioItemScheduledInUpdatedByPublishedAt = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___publishedAt',
  CarouselImagesPortfolioItemScheduledInUpdatedByRemoteId = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___remoteId',
  CarouselImagesPortfolioItemScheduledInUpdatedByRemoteTypeName = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___remoteTypeName',
  CarouselImagesPortfolioItemScheduledInUpdatedByStage = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___stage',
  CarouselImagesPortfolioItemScheduledInUpdatedByUpdatedAt = 'carouselImagesPortfolioItem___scheduledIn___updatedBy___updatedAt',
  CarouselImagesPortfolioItemStage = 'carouselImagesPortfolioItem___stage',
  CarouselImagesPortfolioItemTechSheet = 'carouselImagesPortfolioItem___techSheet',
  CarouselImagesPortfolioItemTitle = 'carouselImagesPortfolioItem___title',
  CarouselImagesPortfolioItemUpdatedAt = 'carouselImagesPortfolioItem___updatedAt',
  CarouselImagesPortfolioItemUpdatedByChildren = 'carouselImagesPortfolioItem___updatedBy___children',
  CarouselImagesPortfolioItemUpdatedByChildrenChildren = 'carouselImagesPortfolioItem___updatedBy___children___children',
  CarouselImagesPortfolioItemUpdatedByChildrenId = 'carouselImagesPortfolioItem___updatedBy___children___id',
  CarouselImagesPortfolioItemUpdatedByCreatedAt = 'carouselImagesPortfolioItem___updatedBy___createdAt',
  CarouselImagesPortfolioItemUpdatedById = 'carouselImagesPortfolioItem___updatedBy___id',
  CarouselImagesPortfolioItemUpdatedByInternalContent = 'carouselImagesPortfolioItem___updatedBy___internal___content',
  CarouselImagesPortfolioItemUpdatedByInternalContentDigest = 'carouselImagesPortfolioItem___updatedBy___internal___contentDigest',
  CarouselImagesPortfolioItemUpdatedByInternalDescription = 'carouselImagesPortfolioItem___updatedBy___internal___description',
  CarouselImagesPortfolioItemUpdatedByInternalFieldOwners = 'carouselImagesPortfolioItem___updatedBy___internal___fieldOwners',
  CarouselImagesPortfolioItemUpdatedByInternalIgnoreType = 'carouselImagesPortfolioItem___updatedBy___internal___ignoreType',
  CarouselImagesPortfolioItemUpdatedByInternalMediaType = 'carouselImagesPortfolioItem___updatedBy___internal___mediaType',
  CarouselImagesPortfolioItemUpdatedByInternalOwner = 'carouselImagesPortfolioItem___updatedBy___internal___owner',
  CarouselImagesPortfolioItemUpdatedByInternalType = 'carouselImagesPortfolioItem___updatedBy___internal___type',
  CarouselImagesPortfolioItemUpdatedByIsActive = 'carouselImagesPortfolioItem___updatedBy___isActive',
  CarouselImagesPortfolioItemUpdatedByKind = 'carouselImagesPortfolioItem___updatedBy___kind',
  CarouselImagesPortfolioItemUpdatedByName = 'carouselImagesPortfolioItem___updatedBy___name',
  CarouselImagesPortfolioItemUpdatedByParentChildren = 'carouselImagesPortfolioItem___updatedBy___parent___children',
  CarouselImagesPortfolioItemUpdatedByParentId = 'carouselImagesPortfolioItem___updatedBy___parent___id',
  CarouselImagesPortfolioItemUpdatedByPicture = 'carouselImagesPortfolioItem___updatedBy___picture',
  CarouselImagesPortfolioItemUpdatedByPublishedAt = 'carouselImagesPortfolioItem___updatedBy___publishedAt',
  CarouselImagesPortfolioItemUpdatedByRemoteId = 'carouselImagesPortfolioItem___updatedBy___remoteId',
  CarouselImagesPortfolioItemUpdatedByRemoteTypeName = 'carouselImagesPortfolioItem___updatedBy___remoteTypeName',
  CarouselImagesPortfolioItemUpdatedByStage = 'carouselImagesPortfolioItem___updatedBy___stage',
  CarouselImagesPortfolioItemUpdatedByUpdatedAt = 'carouselImagesPortfolioItem___updatedBy___updatedAt',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CreatedAt = 'createdAt',
  CreatedByChildren = 'createdBy___children',
  CreatedByChildrenChildren = 'createdBy___children___children',
  CreatedByChildrenChildrenChildren = 'createdBy___children___children___children',
  CreatedByChildrenChildrenId = 'createdBy___children___children___id',
  CreatedByChildrenId = 'createdBy___children___id',
  CreatedByChildrenInternalContent = 'createdBy___children___internal___content',
  CreatedByChildrenInternalContentDigest = 'createdBy___children___internal___contentDigest',
  CreatedByChildrenInternalDescription = 'createdBy___children___internal___description',
  CreatedByChildrenInternalFieldOwners = 'createdBy___children___internal___fieldOwners',
  CreatedByChildrenInternalIgnoreType = 'createdBy___children___internal___ignoreType',
  CreatedByChildrenInternalMediaType = 'createdBy___children___internal___mediaType',
  CreatedByChildrenInternalOwner = 'createdBy___children___internal___owner',
  CreatedByChildrenInternalType = 'createdBy___children___internal___type',
  CreatedByChildrenParentChildren = 'createdBy___children___parent___children',
  CreatedByChildrenParentId = 'createdBy___children___parent___id',
  CreatedByCreatedAt = 'createdBy___createdAt',
  CreatedById = 'createdBy___id',
  CreatedByInternalContent = 'createdBy___internal___content',
  CreatedByInternalContentDigest = 'createdBy___internal___contentDigest',
  CreatedByInternalDescription = 'createdBy___internal___description',
  CreatedByInternalFieldOwners = 'createdBy___internal___fieldOwners',
  CreatedByInternalIgnoreType = 'createdBy___internal___ignoreType',
  CreatedByInternalMediaType = 'createdBy___internal___mediaType',
  CreatedByInternalOwner = 'createdBy___internal___owner',
  CreatedByInternalType = 'createdBy___internal___type',
  CreatedByIsActive = 'createdBy___isActive',
  CreatedByKind = 'createdBy___kind',
  CreatedByName = 'createdBy___name',
  CreatedByParentChildren = 'createdBy___parent___children',
  CreatedByParentChildrenChildren = 'createdBy___parent___children___children',
  CreatedByParentChildrenId = 'createdBy___parent___children___id',
  CreatedByParentId = 'createdBy___parent___id',
  CreatedByParentInternalContent = 'createdBy___parent___internal___content',
  CreatedByParentInternalContentDigest = 'createdBy___parent___internal___contentDigest',
  CreatedByParentInternalDescription = 'createdBy___parent___internal___description',
  CreatedByParentInternalFieldOwners = 'createdBy___parent___internal___fieldOwners',
  CreatedByParentInternalIgnoreType = 'createdBy___parent___internal___ignoreType',
  CreatedByParentInternalMediaType = 'createdBy___parent___internal___mediaType',
  CreatedByParentInternalOwner = 'createdBy___parent___internal___owner',
  CreatedByParentInternalType = 'createdBy___parent___internal___type',
  CreatedByParentParentChildren = 'createdBy___parent___parent___children',
  CreatedByParentParentId = 'createdBy___parent___parent___id',
  CreatedByPicture = 'createdBy___picture',
  CreatedByPublishedAt = 'createdBy___publishedAt',
  CreatedByRemoteId = 'createdBy___remoteId',
  CreatedByRemoteTypeName = 'createdBy___remoteTypeName',
  CreatedByStage = 'createdBy___stage',
  CreatedByUpdatedAt = 'createdBy___updatedAt',
  FileName = 'fileName',
  Handle = 'handle',
  Height = 'height',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Locale = 'locale',
  MimeType = 'mimeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PublishedAt = 'publishedAt',
  PublishedByChildren = 'publishedBy___children',
  PublishedByChildrenChildren = 'publishedBy___children___children',
  PublishedByChildrenChildrenChildren = 'publishedBy___children___children___children',
  PublishedByChildrenChildrenId = 'publishedBy___children___children___id',
  PublishedByChildrenId = 'publishedBy___children___id',
  PublishedByChildrenInternalContent = 'publishedBy___children___internal___content',
  PublishedByChildrenInternalContentDigest = 'publishedBy___children___internal___contentDigest',
  PublishedByChildrenInternalDescription = 'publishedBy___children___internal___description',
  PublishedByChildrenInternalFieldOwners = 'publishedBy___children___internal___fieldOwners',
  PublishedByChildrenInternalIgnoreType = 'publishedBy___children___internal___ignoreType',
  PublishedByChildrenInternalMediaType = 'publishedBy___children___internal___mediaType',
  PublishedByChildrenInternalOwner = 'publishedBy___children___internal___owner',
  PublishedByChildrenInternalType = 'publishedBy___children___internal___type',
  PublishedByChildrenParentChildren = 'publishedBy___children___parent___children',
  PublishedByChildrenParentId = 'publishedBy___children___parent___id',
  PublishedByCreatedAt = 'publishedBy___createdAt',
  PublishedById = 'publishedBy___id',
  PublishedByInternalContent = 'publishedBy___internal___content',
  PublishedByInternalContentDigest = 'publishedBy___internal___contentDigest',
  PublishedByInternalDescription = 'publishedBy___internal___description',
  PublishedByInternalFieldOwners = 'publishedBy___internal___fieldOwners',
  PublishedByInternalIgnoreType = 'publishedBy___internal___ignoreType',
  PublishedByInternalMediaType = 'publishedBy___internal___mediaType',
  PublishedByInternalOwner = 'publishedBy___internal___owner',
  PublishedByInternalType = 'publishedBy___internal___type',
  PublishedByIsActive = 'publishedBy___isActive',
  PublishedByKind = 'publishedBy___kind',
  PublishedByName = 'publishedBy___name',
  PublishedByParentChildren = 'publishedBy___parent___children',
  PublishedByParentChildrenChildren = 'publishedBy___parent___children___children',
  PublishedByParentChildrenId = 'publishedBy___parent___children___id',
  PublishedByParentId = 'publishedBy___parent___id',
  PublishedByParentInternalContent = 'publishedBy___parent___internal___content',
  PublishedByParentInternalContentDigest = 'publishedBy___parent___internal___contentDigest',
  PublishedByParentInternalDescription = 'publishedBy___parent___internal___description',
  PublishedByParentInternalFieldOwners = 'publishedBy___parent___internal___fieldOwners',
  PublishedByParentInternalIgnoreType = 'publishedBy___parent___internal___ignoreType',
  PublishedByParentInternalMediaType = 'publishedBy___parent___internal___mediaType',
  PublishedByParentInternalOwner = 'publishedBy___parent___internal___owner',
  PublishedByParentInternalType = 'publishedBy___parent___internal___type',
  PublishedByParentParentChildren = 'publishedBy___parent___parent___children',
  PublishedByParentParentId = 'publishedBy___parent___parent___id',
  PublishedByPicture = 'publishedBy___picture',
  PublishedByPublishedAt = 'publishedBy___publishedAt',
  PublishedByRemoteId = 'publishedBy___remoteId',
  PublishedByRemoteTypeName = 'publishedBy___remoteTypeName',
  PublishedByStage = 'publishedBy___stage',
  PublishedByUpdatedAt = 'publishedBy___updatedAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  ScheduledIn = 'scheduledIn',
  ScheduledInChildren = 'scheduledIn___children',
  ScheduledInChildrenChildren = 'scheduledIn___children___children',
  ScheduledInChildrenChildrenChildren = 'scheduledIn___children___children___children',
  ScheduledInChildrenChildrenId = 'scheduledIn___children___children___id',
  ScheduledInChildrenId = 'scheduledIn___children___id',
  ScheduledInChildrenInternalContent = 'scheduledIn___children___internal___content',
  ScheduledInChildrenInternalContentDigest = 'scheduledIn___children___internal___contentDigest',
  ScheduledInChildrenInternalDescription = 'scheduledIn___children___internal___description',
  ScheduledInChildrenInternalFieldOwners = 'scheduledIn___children___internal___fieldOwners',
  ScheduledInChildrenInternalIgnoreType = 'scheduledIn___children___internal___ignoreType',
  ScheduledInChildrenInternalMediaType = 'scheduledIn___children___internal___mediaType',
  ScheduledInChildrenInternalOwner = 'scheduledIn___children___internal___owner',
  ScheduledInChildrenInternalType = 'scheduledIn___children___internal___type',
  ScheduledInChildrenParentChildren = 'scheduledIn___children___parent___children',
  ScheduledInChildrenParentId = 'scheduledIn___children___parent___id',
  ScheduledInCreatedAt = 'scheduledIn___createdAt',
  ScheduledInCreatedByChildren = 'scheduledIn___createdBy___children',
  ScheduledInCreatedByChildrenChildren = 'scheduledIn___createdBy___children___children',
  ScheduledInCreatedByChildrenId = 'scheduledIn___createdBy___children___id',
  ScheduledInCreatedByCreatedAt = 'scheduledIn___createdBy___createdAt',
  ScheduledInCreatedById = 'scheduledIn___createdBy___id',
  ScheduledInCreatedByInternalContent = 'scheduledIn___createdBy___internal___content',
  ScheduledInCreatedByInternalContentDigest = 'scheduledIn___createdBy___internal___contentDigest',
  ScheduledInCreatedByInternalDescription = 'scheduledIn___createdBy___internal___description',
  ScheduledInCreatedByInternalFieldOwners = 'scheduledIn___createdBy___internal___fieldOwners',
  ScheduledInCreatedByInternalIgnoreType = 'scheduledIn___createdBy___internal___ignoreType',
  ScheduledInCreatedByInternalMediaType = 'scheduledIn___createdBy___internal___mediaType',
  ScheduledInCreatedByInternalOwner = 'scheduledIn___createdBy___internal___owner',
  ScheduledInCreatedByInternalType = 'scheduledIn___createdBy___internal___type',
  ScheduledInCreatedByIsActive = 'scheduledIn___createdBy___isActive',
  ScheduledInCreatedByKind = 'scheduledIn___createdBy___kind',
  ScheduledInCreatedByName = 'scheduledIn___createdBy___name',
  ScheduledInCreatedByParentChildren = 'scheduledIn___createdBy___parent___children',
  ScheduledInCreatedByParentId = 'scheduledIn___createdBy___parent___id',
  ScheduledInCreatedByPicture = 'scheduledIn___createdBy___picture',
  ScheduledInCreatedByPublishedAt = 'scheduledIn___createdBy___publishedAt',
  ScheduledInCreatedByRemoteId = 'scheduledIn___createdBy___remoteId',
  ScheduledInCreatedByRemoteTypeName = 'scheduledIn___createdBy___remoteTypeName',
  ScheduledInCreatedByStage = 'scheduledIn___createdBy___stage',
  ScheduledInCreatedByUpdatedAt = 'scheduledIn___createdBy___updatedAt',
  ScheduledInDescription = 'scheduledIn___description',
  ScheduledInErrorMessage = 'scheduledIn___errorMessage',
  ScheduledInId = 'scheduledIn___id',
  ScheduledInInternalContent = 'scheduledIn___internal___content',
  ScheduledInInternalContentDigest = 'scheduledIn___internal___contentDigest',
  ScheduledInInternalDescription = 'scheduledIn___internal___description',
  ScheduledInInternalFieldOwners = 'scheduledIn___internal___fieldOwners',
  ScheduledInInternalIgnoreType = 'scheduledIn___internal___ignoreType',
  ScheduledInInternalMediaType = 'scheduledIn___internal___mediaType',
  ScheduledInInternalOwner = 'scheduledIn___internal___owner',
  ScheduledInInternalType = 'scheduledIn___internal___type',
  ScheduledInParentChildren = 'scheduledIn___parent___children',
  ScheduledInParentChildrenChildren = 'scheduledIn___parent___children___children',
  ScheduledInParentChildrenId = 'scheduledIn___parent___children___id',
  ScheduledInParentId = 'scheduledIn___parent___id',
  ScheduledInParentInternalContent = 'scheduledIn___parent___internal___content',
  ScheduledInParentInternalContentDigest = 'scheduledIn___parent___internal___contentDigest',
  ScheduledInParentInternalDescription = 'scheduledIn___parent___internal___description',
  ScheduledInParentInternalFieldOwners = 'scheduledIn___parent___internal___fieldOwners',
  ScheduledInParentInternalIgnoreType = 'scheduledIn___parent___internal___ignoreType',
  ScheduledInParentInternalMediaType = 'scheduledIn___parent___internal___mediaType',
  ScheduledInParentInternalOwner = 'scheduledIn___parent___internal___owner',
  ScheduledInParentInternalType = 'scheduledIn___parent___internal___type',
  ScheduledInParentParentChildren = 'scheduledIn___parent___parent___children',
  ScheduledInParentParentId = 'scheduledIn___parent___parent___id',
  ScheduledInPublishedAt = 'scheduledIn___publishedAt',
  ScheduledInPublishedByChildren = 'scheduledIn___publishedBy___children',
  ScheduledInPublishedByChildrenChildren = 'scheduledIn___publishedBy___children___children',
  ScheduledInPublishedByChildrenId = 'scheduledIn___publishedBy___children___id',
  ScheduledInPublishedByCreatedAt = 'scheduledIn___publishedBy___createdAt',
  ScheduledInPublishedById = 'scheduledIn___publishedBy___id',
  ScheduledInPublishedByInternalContent = 'scheduledIn___publishedBy___internal___content',
  ScheduledInPublishedByInternalContentDigest = 'scheduledIn___publishedBy___internal___contentDigest',
  ScheduledInPublishedByInternalDescription = 'scheduledIn___publishedBy___internal___description',
  ScheduledInPublishedByInternalFieldOwners = 'scheduledIn___publishedBy___internal___fieldOwners',
  ScheduledInPublishedByInternalIgnoreType = 'scheduledIn___publishedBy___internal___ignoreType',
  ScheduledInPublishedByInternalMediaType = 'scheduledIn___publishedBy___internal___mediaType',
  ScheduledInPublishedByInternalOwner = 'scheduledIn___publishedBy___internal___owner',
  ScheduledInPublishedByInternalType = 'scheduledIn___publishedBy___internal___type',
  ScheduledInPublishedByIsActive = 'scheduledIn___publishedBy___isActive',
  ScheduledInPublishedByKind = 'scheduledIn___publishedBy___kind',
  ScheduledInPublishedByName = 'scheduledIn___publishedBy___name',
  ScheduledInPublishedByParentChildren = 'scheduledIn___publishedBy___parent___children',
  ScheduledInPublishedByParentId = 'scheduledIn___publishedBy___parent___id',
  ScheduledInPublishedByPicture = 'scheduledIn___publishedBy___picture',
  ScheduledInPublishedByPublishedAt = 'scheduledIn___publishedBy___publishedAt',
  ScheduledInPublishedByRemoteId = 'scheduledIn___publishedBy___remoteId',
  ScheduledInPublishedByRemoteTypeName = 'scheduledIn___publishedBy___remoteTypeName',
  ScheduledInPublishedByStage = 'scheduledIn___publishedBy___stage',
  ScheduledInPublishedByUpdatedAt = 'scheduledIn___publishedBy___updatedAt',
  ScheduledInRawPayload = 'scheduledIn___rawPayload',
  ScheduledInReleaseChildren = 'scheduledIn___release___children',
  ScheduledInReleaseChildrenChildren = 'scheduledIn___release___children___children',
  ScheduledInReleaseChildrenId = 'scheduledIn___release___children___id',
  ScheduledInReleaseCreatedAt = 'scheduledIn___release___createdAt',
  ScheduledInReleaseCreatedByChildren = 'scheduledIn___release___createdBy___children',
  ScheduledInReleaseCreatedByCreatedAt = 'scheduledIn___release___createdBy___createdAt',
  ScheduledInReleaseCreatedById = 'scheduledIn___release___createdBy___id',
  ScheduledInReleaseCreatedByIsActive = 'scheduledIn___release___createdBy___isActive',
  ScheduledInReleaseCreatedByKind = 'scheduledIn___release___createdBy___kind',
  ScheduledInReleaseCreatedByName = 'scheduledIn___release___createdBy___name',
  ScheduledInReleaseCreatedByPicture = 'scheduledIn___release___createdBy___picture',
  ScheduledInReleaseCreatedByPublishedAt = 'scheduledIn___release___createdBy___publishedAt',
  ScheduledInReleaseCreatedByRemoteId = 'scheduledIn___release___createdBy___remoteId',
  ScheduledInReleaseCreatedByRemoteTypeName = 'scheduledIn___release___createdBy___remoteTypeName',
  ScheduledInReleaseCreatedByStage = 'scheduledIn___release___createdBy___stage',
  ScheduledInReleaseCreatedByUpdatedAt = 'scheduledIn___release___createdBy___updatedAt',
  ScheduledInReleaseDescription = 'scheduledIn___release___description',
  ScheduledInReleaseErrorMessage = 'scheduledIn___release___errorMessage',
  ScheduledInReleaseId = 'scheduledIn___release___id',
  ScheduledInReleaseInternalContent = 'scheduledIn___release___internal___content',
  ScheduledInReleaseInternalContentDigest = 'scheduledIn___release___internal___contentDigest',
  ScheduledInReleaseInternalDescription = 'scheduledIn___release___internal___description',
  ScheduledInReleaseInternalFieldOwners = 'scheduledIn___release___internal___fieldOwners',
  ScheduledInReleaseInternalIgnoreType = 'scheduledIn___release___internal___ignoreType',
  ScheduledInReleaseInternalMediaType = 'scheduledIn___release___internal___mediaType',
  ScheduledInReleaseInternalOwner = 'scheduledIn___release___internal___owner',
  ScheduledInReleaseInternalType = 'scheduledIn___release___internal___type',
  ScheduledInReleaseIsActive = 'scheduledIn___release___isActive',
  ScheduledInReleaseIsImplicit = 'scheduledIn___release___isImplicit',
  ScheduledInReleaseOperations = 'scheduledIn___release___operations',
  ScheduledInReleaseOperationsChildren = 'scheduledIn___release___operations___children',
  ScheduledInReleaseOperationsCreatedAt = 'scheduledIn___release___operations___createdAt',
  ScheduledInReleaseOperationsDescription = 'scheduledIn___release___operations___description',
  ScheduledInReleaseOperationsErrorMessage = 'scheduledIn___release___operations___errorMessage',
  ScheduledInReleaseOperationsId = 'scheduledIn___release___operations___id',
  ScheduledInReleaseOperationsPublishedAt = 'scheduledIn___release___operations___publishedAt',
  ScheduledInReleaseOperationsRawPayload = 'scheduledIn___release___operations___rawPayload',
  ScheduledInReleaseOperationsRemoteId = 'scheduledIn___release___operations___remoteId',
  ScheduledInReleaseOperationsRemoteTypeName = 'scheduledIn___release___operations___remoteTypeName',
  ScheduledInReleaseOperationsStage = 'scheduledIn___release___operations___stage',
  ScheduledInReleaseOperationsStatus = 'scheduledIn___release___operations___status',
  ScheduledInReleaseOperationsUpdatedAt = 'scheduledIn___release___operations___updatedAt',
  ScheduledInReleaseParentChildren = 'scheduledIn___release___parent___children',
  ScheduledInReleaseParentId = 'scheduledIn___release___parent___id',
  ScheduledInReleasePublishedAt = 'scheduledIn___release___publishedAt',
  ScheduledInReleasePublishedByChildren = 'scheduledIn___release___publishedBy___children',
  ScheduledInReleasePublishedByCreatedAt = 'scheduledIn___release___publishedBy___createdAt',
  ScheduledInReleasePublishedById = 'scheduledIn___release___publishedBy___id',
  ScheduledInReleasePublishedByIsActive = 'scheduledIn___release___publishedBy___isActive',
  ScheduledInReleasePublishedByKind = 'scheduledIn___release___publishedBy___kind',
  ScheduledInReleasePublishedByName = 'scheduledIn___release___publishedBy___name',
  ScheduledInReleasePublishedByPicture = 'scheduledIn___release___publishedBy___picture',
  ScheduledInReleasePublishedByPublishedAt = 'scheduledIn___release___publishedBy___publishedAt',
  ScheduledInReleasePublishedByRemoteId = 'scheduledIn___release___publishedBy___remoteId',
  ScheduledInReleasePublishedByRemoteTypeName = 'scheduledIn___release___publishedBy___remoteTypeName',
  ScheduledInReleasePublishedByStage = 'scheduledIn___release___publishedBy___stage',
  ScheduledInReleasePublishedByUpdatedAt = 'scheduledIn___release___publishedBy___updatedAt',
  ScheduledInReleaseReleaseAt = 'scheduledIn___release___releaseAt',
  ScheduledInReleaseRemoteId = 'scheduledIn___release___remoteId',
  ScheduledInReleaseRemoteTypeName = 'scheduledIn___release___remoteTypeName',
  ScheduledInReleaseStage = 'scheduledIn___release___stage',
  ScheduledInReleaseStatus = 'scheduledIn___release___status',
  ScheduledInReleaseTitle = 'scheduledIn___release___title',
  ScheduledInReleaseUpdatedAt = 'scheduledIn___release___updatedAt',
  ScheduledInReleaseUpdatedByChildren = 'scheduledIn___release___updatedBy___children',
  ScheduledInReleaseUpdatedByCreatedAt = 'scheduledIn___release___updatedBy___createdAt',
  ScheduledInReleaseUpdatedById = 'scheduledIn___release___updatedBy___id',
  ScheduledInReleaseUpdatedByIsActive = 'scheduledIn___release___updatedBy___isActive',
  ScheduledInReleaseUpdatedByKind = 'scheduledIn___release___updatedBy___kind',
  ScheduledInReleaseUpdatedByName = 'scheduledIn___release___updatedBy___name',
  ScheduledInReleaseUpdatedByPicture = 'scheduledIn___release___updatedBy___picture',
  ScheduledInReleaseUpdatedByPublishedAt = 'scheduledIn___release___updatedBy___publishedAt',
  ScheduledInReleaseUpdatedByRemoteId = 'scheduledIn___release___updatedBy___remoteId',
  ScheduledInReleaseUpdatedByRemoteTypeName = 'scheduledIn___release___updatedBy___remoteTypeName',
  ScheduledInReleaseUpdatedByStage = 'scheduledIn___release___updatedBy___stage',
  ScheduledInReleaseUpdatedByUpdatedAt = 'scheduledIn___release___updatedBy___updatedAt',
  ScheduledInRemoteId = 'scheduledIn___remoteId',
  ScheduledInRemoteTypeName = 'scheduledIn___remoteTypeName',
  ScheduledInStage = 'scheduledIn___stage',
  ScheduledInStatus = 'scheduledIn___status',
  ScheduledInUpdatedAt = 'scheduledIn___updatedAt',
  ScheduledInUpdatedByChildren = 'scheduledIn___updatedBy___children',
  ScheduledInUpdatedByChildrenChildren = 'scheduledIn___updatedBy___children___children',
  ScheduledInUpdatedByChildrenId = 'scheduledIn___updatedBy___children___id',
  ScheduledInUpdatedByCreatedAt = 'scheduledIn___updatedBy___createdAt',
  ScheduledInUpdatedById = 'scheduledIn___updatedBy___id',
  ScheduledInUpdatedByInternalContent = 'scheduledIn___updatedBy___internal___content',
  ScheduledInUpdatedByInternalContentDigest = 'scheduledIn___updatedBy___internal___contentDigest',
  ScheduledInUpdatedByInternalDescription = 'scheduledIn___updatedBy___internal___description',
  ScheduledInUpdatedByInternalFieldOwners = 'scheduledIn___updatedBy___internal___fieldOwners',
  ScheduledInUpdatedByInternalIgnoreType = 'scheduledIn___updatedBy___internal___ignoreType',
  ScheduledInUpdatedByInternalMediaType = 'scheduledIn___updatedBy___internal___mediaType',
  ScheduledInUpdatedByInternalOwner = 'scheduledIn___updatedBy___internal___owner',
  ScheduledInUpdatedByInternalType = 'scheduledIn___updatedBy___internal___type',
  ScheduledInUpdatedByIsActive = 'scheduledIn___updatedBy___isActive',
  ScheduledInUpdatedByKind = 'scheduledIn___updatedBy___kind',
  ScheduledInUpdatedByName = 'scheduledIn___updatedBy___name',
  ScheduledInUpdatedByParentChildren = 'scheduledIn___updatedBy___parent___children',
  ScheduledInUpdatedByParentId = 'scheduledIn___updatedBy___parent___id',
  ScheduledInUpdatedByPicture = 'scheduledIn___updatedBy___picture',
  ScheduledInUpdatedByPublishedAt = 'scheduledIn___updatedBy___publishedAt',
  ScheduledInUpdatedByRemoteId = 'scheduledIn___updatedBy___remoteId',
  ScheduledInUpdatedByRemoteTypeName = 'scheduledIn___updatedBy___remoteTypeName',
  ScheduledInUpdatedByStage = 'scheduledIn___updatedBy___stage',
  ScheduledInUpdatedByUpdatedAt = 'scheduledIn___updatedBy___updatedAt',
  Size = 'size',
  Stage = 'stage',
  UpdatedAt = 'updatedAt',
  UpdatedByChildren = 'updatedBy___children',
  UpdatedByChildrenChildren = 'updatedBy___children___children',
  UpdatedByChildrenChildrenChildren = 'updatedBy___children___children___children',
  UpdatedByChildrenChildrenId = 'updatedBy___children___children___id',
  UpdatedByChildrenId = 'updatedBy___children___id',
  UpdatedByChildrenInternalContent = 'updatedBy___children___internal___content',
  UpdatedByChildrenInternalContentDigest = 'updatedBy___children___internal___contentDigest',
  UpdatedByChildrenInternalDescription = 'updatedBy___children___internal___description',
  UpdatedByChildrenInternalFieldOwners = 'updatedBy___children___internal___fieldOwners',
  UpdatedByChildrenInternalIgnoreType = 'updatedBy___children___internal___ignoreType',
  UpdatedByChildrenInternalMediaType = 'updatedBy___children___internal___mediaType',
  UpdatedByChildrenInternalOwner = 'updatedBy___children___internal___owner',
  UpdatedByChildrenInternalType = 'updatedBy___children___internal___type',
  UpdatedByChildrenParentChildren = 'updatedBy___children___parent___children',
  UpdatedByChildrenParentId = 'updatedBy___children___parent___id',
  UpdatedByCreatedAt = 'updatedBy___createdAt',
  UpdatedById = 'updatedBy___id',
  UpdatedByInternalContent = 'updatedBy___internal___content',
  UpdatedByInternalContentDigest = 'updatedBy___internal___contentDigest',
  UpdatedByInternalDescription = 'updatedBy___internal___description',
  UpdatedByInternalFieldOwners = 'updatedBy___internal___fieldOwners',
  UpdatedByInternalIgnoreType = 'updatedBy___internal___ignoreType',
  UpdatedByInternalMediaType = 'updatedBy___internal___mediaType',
  UpdatedByInternalOwner = 'updatedBy___internal___owner',
  UpdatedByInternalType = 'updatedBy___internal___type',
  UpdatedByIsActive = 'updatedBy___isActive',
  UpdatedByKind = 'updatedBy___kind',
  UpdatedByName = 'updatedBy___name',
  UpdatedByParentChildren = 'updatedBy___parent___children',
  UpdatedByParentChildrenChildren = 'updatedBy___parent___children___children',
  UpdatedByParentChildrenId = 'updatedBy___parent___children___id',
  UpdatedByParentId = 'updatedBy___parent___id',
  UpdatedByParentInternalContent = 'updatedBy___parent___internal___content',
  UpdatedByParentInternalContentDigest = 'updatedBy___parent___internal___contentDigest',
  UpdatedByParentInternalDescription = 'updatedBy___parent___internal___description',
  UpdatedByParentInternalFieldOwners = 'updatedBy___parent___internal___fieldOwners',
  UpdatedByParentInternalIgnoreType = 'updatedBy___parent___internal___ignoreType',
  UpdatedByParentInternalMediaType = 'updatedBy___parent___internal___mediaType',
  UpdatedByParentInternalOwner = 'updatedBy___parent___internal___owner',
  UpdatedByParentInternalType = 'updatedBy___parent___internal___type',
  UpdatedByParentParentChildren = 'updatedBy___parent___parent___children',
  UpdatedByParentParentId = 'updatedBy___parent___parent___id',
  UpdatedByPicture = 'updatedBy___picture',
  UpdatedByPublishedAt = 'updatedBy___publishedAt',
  UpdatedByRemoteId = 'updatedBy___remoteId',
  UpdatedByRemoteTypeName = 'updatedBy___remoteTypeName',
  UpdatedByStage = 'updatedBy___stage',
  UpdatedByUpdatedAt = 'updatedBy___updatedAt',
  Url = 'url',
  Width = 'width',
}

export type GraphCms_AssetFilterInput = {
  carouselImagesPortfolioItem?: InputMaybe<GraphCms_PortfolioItemFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<GraphCms_LocaleQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type GraphCms_AssetFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_AssetFilterInput>;
};

export type GraphCms_AssetGroupConnection = {
  __typename?: 'GraphCMS_AssetGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_AssetEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GraphCms_AssetGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_Asset>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_AssetGroupConnectionDistinctArgs = {
  field: GraphCms_AssetFieldsEnum;
};

export type GraphCms_AssetGroupConnectionGroupArgs = {
  field: GraphCms_AssetFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type GraphCms_AssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_AssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_Link = Node & {
  __typename?: 'GraphCMS_Link';
  children: Array<Node>;
  createdAt: Scalars['JSON'];
  createdBy?: Maybe<GraphCms_User>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  publishedAt?: Maybe<Scalars['JSON']>;
  publishedBy?: Maybe<GraphCms_User>;
  remoteId: Scalars['ID'];
  remoteTypeName: Scalars['String'];
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  stage: GraphCms_Stage;
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['JSON'];
  updatedBy?: Maybe<GraphCms_User>;
  url: Scalars['String'];
};

export type GraphCms_LinkConnection = {
  __typename?: 'GraphCMS_LinkConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_LinkEdge>;
  group: Array<GraphCms_LinkGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_Link>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_LinkConnectionDistinctArgs = {
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkConnectionGroupArgs = {
  field: GraphCms_LinkFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type GraphCms_LinkEdge = {
  __typename?: 'GraphCMS_LinkEdge';
  next?: Maybe<GraphCms_Link>;
  node: GraphCms_Link;
  previous?: Maybe<GraphCms_Link>;
};

export enum GraphCms_LinkFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CreatedAt = 'createdAt',
  CreatedByChildren = 'createdBy___children',
  CreatedByChildrenChildren = 'createdBy___children___children',
  CreatedByChildrenChildrenChildren = 'createdBy___children___children___children',
  CreatedByChildrenChildrenId = 'createdBy___children___children___id',
  CreatedByChildrenId = 'createdBy___children___id',
  CreatedByChildrenInternalContent = 'createdBy___children___internal___content',
  CreatedByChildrenInternalContentDigest = 'createdBy___children___internal___contentDigest',
  CreatedByChildrenInternalDescription = 'createdBy___children___internal___description',
  CreatedByChildrenInternalFieldOwners = 'createdBy___children___internal___fieldOwners',
  CreatedByChildrenInternalIgnoreType = 'createdBy___children___internal___ignoreType',
  CreatedByChildrenInternalMediaType = 'createdBy___children___internal___mediaType',
  CreatedByChildrenInternalOwner = 'createdBy___children___internal___owner',
  CreatedByChildrenInternalType = 'createdBy___children___internal___type',
  CreatedByChildrenParentChildren = 'createdBy___children___parent___children',
  CreatedByChildrenParentId = 'createdBy___children___parent___id',
  CreatedByCreatedAt = 'createdBy___createdAt',
  CreatedById = 'createdBy___id',
  CreatedByInternalContent = 'createdBy___internal___content',
  CreatedByInternalContentDigest = 'createdBy___internal___contentDigest',
  CreatedByInternalDescription = 'createdBy___internal___description',
  CreatedByInternalFieldOwners = 'createdBy___internal___fieldOwners',
  CreatedByInternalIgnoreType = 'createdBy___internal___ignoreType',
  CreatedByInternalMediaType = 'createdBy___internal___mediaType',
  CreatedByInternalOwner = 'createdBy___internal___owner',
  CreatedByInternalType = 'createdBy___internal___type',
  CreatedByIsActive = 'createdBy___isActive',
  CreatedByKind = 'createdBy___kind',
  CreatedByName = 'createdBy___name',
  CreatedByParentChildren = 'createdBy___parent___children',
  CreatedByParentChildrenChildren = 'createdBy___parent___children___children',
  CreatedByParentChildrenId = 'createdBy___parent___children___id',
  CreatedByParentId = 'createdBy___parent___id',
  CreatedByParentInternalContent = 'createdBy___parent___internal___content',
  CreatedByParentInternalContentDigest = 'createdBy___parent___internal___contentDigest',
  CreatedByParentInternalDescription = 'createdBy___parent___internal___description',
  CreatedByParentInternalFieldOwners = 'createdBy___parent___internal___fieldOwners',
  CreatedByParentInternalIgnoreType = 'createdBy___parent___internal___ignoreType',
  CreatedByParentInternalMediaType = 'createdBy___parent___internal___mediaType',
  CreatedByParentInternalOwner = 'createdBy___parent___internal___owner',
  CreatedByParentInternalType = 'createdBy___parent___internal___type',
  CreatedByParentParentChildren = 'createdBy___parent___parent___children',
  CreatedByParentParentId = 'createdBy___parent___parent___id',
  CreatedByPicture = 'createdBy___picture',
  CreatedByPublishedAt = 'createdBy___publishedAt',
  CreatedByRemoteId = 'createdBy___remoteId',
  CreatedByRemoteTypeName = 'createdBy___remoteTypeName',
  CreatedByStage = 'createdBy___stage',
  CreatedByUpdatedAt = 'createdBy___updatedAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PublishedAt = 'publishedAt',
  PublishedByChildren = 'publishedBy___children',
  PublishedByChildrenChildren = 'publishedBy___children___children',
  PublishedByChildrenChildrenChildren = 'publishedBy___children___children___children',
  PublishedByChildrenChildrenId = 'publishedBy___children___children___id',
  PublishedByChildrenId = 'publishedBy___children___id',
  PublishedByChildrenInternalContent = 'publishedBy___children___internal___content',
  PublishedByChildrenInternalContentDigest = 'publishedBy___children___internal___contentDigest',
  PublishedByChildrenInternalDescription = 'publishedBy___children___internal___description',
  PublishedByChildrenInternalFieldOwners = 'publishedBy___children___internal___fieldOwners',
  PublishedByChildrenInternalIgnoreType = 'publishedBy___children___internal___ignoreType',
  PublishedByChildrenInternalMediaType = 'publishedBy___children___internal___mediaType',
  PublishedByChildrenInternalOwner = 'publishedBy___children___internal___owner',
  PublishedByChildrenInternalType = 'publishedBy___children___internal___type',
  PublishedByChildrenParentChildren = 'publishedBy___children___parent___children',
  PublishedByChildrenParentId = 'publishedBy___children___parent___id',
  PublishedByCreatedAt = 'publishedBy___createdAt',
  PublishedById = 'publishedBy___id',
  PublishedByInternalContent = 'publishedBy___internal___content',
  PublishedByInternalContentDigest = 'publishedBy___internal___contentDigest',
  PublishedByInternalDescription = 'publishedBy___internal___description',
  PublishedByInternalFieldOwners = 'publishedBy___internal___fieldOwners',
  PublishedByInternalIgnoreType = 'publishedBy___internal___ignoreType',
  PublishedByInternalMediaType = 'publishedBy___internal___mediaType',
  PublishedByInternalOwner = 'publishedBy___internal___owner',
  PublishedByInternalType = 'publishedBy___internal___type',
  PublishedByIsActive = 'publishedBy___isActive',
  PublishedByKind = 'publishedBy___kind',
  PublishedByName = 'publishedBy___name',
  PublishedByParentChildren = 'publishedBy___parent___children',
  PublishedByParentChildrenChildren = 'publishedBy___parent___children___children',
  PublishedByParentChildrenId = 'publishedBy___parent___children___id',
  PublishedByParentId = 'publishedBy___parent___id',
  PublishedByParentInternalContent = 'publishedBy___parent___internal___content',
  PublishedByParentInternalContentDigest = 'publishedBy___parent___internal___contentDigest',
  PublishedByParentInternalDescription = 'publishedBy___parent___internal___description',
  PublishedByParentInternalFieldOwners = 'publishedBy___parent___internal___fieldOwners',
  PublishedByParentInternalIgnoreType = 'publishedBy___parent___internal___ignoreType',
  PublishedByParentInternalMediaType = 'publishedBy___parent___internal___mediaType',
  PublishedByParentInternalOwner = 'publishedBy___parent___internal___owner',
  PublishedByParentInternalType = 'publishedBy___parent___internal___type',
  PublishedByParentParentChildren = 'publishedBy___parent___parent___children',
  PublishedByParentParentId = 'publishedBy___parent___parent___id',
  PublishedByPicture = 'publishedBy___picture',
  PublishedByPublishedAt = 'publishedBy___publishedAt',
  PublishedByRemoteId = 'publishedBy___remoteId',
  PublishedByRemoteTypeName = 'publishedBy___remoteTypeName',
  PublishedByStage = 'publishedBy___stage',
  PublishedByUpdatedAt = 'publishedBy___updatedAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  ScheduledIn = 'scheduledIn',
  ScheduledInChildren = 'scheduledIn___children',
  ScheduledInChildrenChildren = 'scheduledIn___children___children',
  ScheduledInChildrenChildrenChildren = 'scheduledIn___children___children___children',
  ScheduledInChildrenChildrenId = 'scheduledIn___children___children___id',
  ScheduledInChildrenId = 'scheduledIn___children___id',
  ScheduledInChildrenInternalContent = 'scheduledIn___children___internal___content',
  ScheduledInChildrenInternalContentDigest = 'scheduledIn___children___internal___contentDigest',
  ScheduledInChildrenInternalDescription = 'scheduledIn___children___internal___description',
  ScheduledInChildrenInternalFieldOwners = 'scheduledIn___children___internal___fieldOwners',
  ScheduledInChildrenInternalIgnoreType = 'scheduledIn___children___internal___ignoreType',
  ScheduledInChildrenInternalMediaType = 'scheduledIn___children___internal___mediaType',
  ScheduledInChildrenInternalOwner = 'scheduledIn___children___internal___owner',
  ScheduledInChildrenInternalType = 'scheduledIn___children___internal___type',
  ScheduledInChildrenParentChildren = 'scheduledIn___children___parent___children',
  ScheduledInChildrenParentId = 'scheduledIn___children___parent___id',
  ScheduledInCreatedAt = 'scheduledIn___createdAt',
  ScheduledInCreatedByChildren = 'scheduledIn___createdBy___children',
  ScheduledInCreatedByChildrenChildren = 'scheduledIn___createdBy___children___children',
  ScheduledInCreatedByChildrenId = 'scheduledIn___createdBy___children___id',
  ScheduledInCreatedByCreatedAt = 'scheduledIn___createdBy___createdAt',
  ScheduledInCreatedById = 'scheduledIn___createdBy___id',
  ScheduledInCreatedByInternalContent = 'scheduledIn___createdBy___internal___content',
  ScheduledInCreatedByInternalContentDigest = 'scheduledIn___createdBy___internal___contentDigest',
  ScheduledInCreatedByInternalDescription = 'scheduledIn___createdBy___internal___description',
  ScheduledInCreatedByInternalFieldOwners = 'scheduledIn___createdBy___internal___fieldOwners',
  ScheduledInCreatedByInternalIgnoreType = 'scheduledIn___createdBy___internal___ignoreType',
  ScheduledInCreatedByInternalMediaType = 'scheduledIn___createdBy___internal___mediaType',
  ScheduledInCreatedByInternalOwner = 'scheduledIn___createdBy___internal___owner',
  ScheduledInCreatedByInternalType = 'scheduledIn___createdBy___internal___type',
  ScheduledInCreatedByIsActive = 'scheduledIn___createdBy___isActive',
  ScheduledInCreatedByKind = 'scheduledIn___createdBy___kind',
  ScheduledInCreatedByName = 'scheduledIn___createdBy___name',
  ScheduledInCreatedByParentChildren = 'scheduledIn___createdBy___parent___children',
  ScheduledInCreatedByParentId = 'scheduledIn___createdBy___parent___id',
  ScheduledInCreatedByPicture = 'scheduledIn___createdBy___picture',
  ScheduledInCreatedByPublishedAt = 'scheduledIn___createdBy___publishedAt',
  ScheduledInCreatedByRemoteId = 'scheduledIn___createdBy___remoteId',
  ScheduledInCreatedByRemoteTypeName = 'scheduledIn___createdBy___remoteTypeName',
  ScheduledInCreatedByStage = 'scheduledIn___createdBy___stage',
  ScheduledInCreatedByUpdatedAt = 'scheduledIn___createdBy___updatedAt',
  ScheduledInDescription = 'scheduledIn___description',
  ScheduledInErrorMessage = 'scheduledIn___errorMessage',
  ScheduledInId = 'scheduledIn___id',
  ScheduledInInternalContent = 'scheduledIn___internal___content',
  ScheduledInInternalContentDigest = 'scheduledIn___internal___contentDigest',
  ScheduledInInternalDescription = 'scheduledIn___internal___description',
  ScheduledInInternalFieldOwners = 'scheduledIn___internal___fieldOwners',
  ScheduledInInternalIgnoreType = 'scheduledIn___internal___ignoreType',
  ScheduledInInternalMediaType = 'scheduledIn___internal___mediaType',
  ScheduledInInternalOwner = 'scheduledIn___internal___owner',
  ScheduledInInternalType = 'scheduledIn___internal___type',
  ScheduledInParentChildren = 'scheduledIn___parent___children',
  ScheduledInParentChildrenChildren = 'scheduledIn___parent___children___children',
  ScheduledInParentChildrenId = 'scheduledIn___parent___children___id',
  ScheduledInParentId = 'scheduledIn___parent___id',
  ScheduledInParentInternalContent = 'scheduledIn___parent___internal___content',
  ScheduledInParentInternalContentDigest = 'scheduledIn___parent___internal___contentDigest',
  ScheduledInParentInternalDescription = 'scheduledIn___parent___internal___description',
  ScheduledInParentInternalFieldOwners = 'scheduledIn___parent___internal___fieldOwners',
  ScheduledInParentInternalIgnoreType = 'scheduledIn___parent___internal___ignoreType',
  ScheduledInParentInternalMediaType = 'scheduledIn___parent___internal___mediaType',
  ScheduledInParentInternalOwner = 'scheduledIn___parent___internal___owner',
  ScheduledInParentInternalType = 'scheduledIn___parent___internal___type',
  ScheduledInParentParentChildren = 'scheduledIn___parent___parent___children',
  ScheduledInParentParentId = 'scheduledIn___parent___parent___id',
  ScheduledInPublishedAt = 'scheduledIn___publishedAt',
  ScheduledInPublishedByChildren = 'scheduledIn___publishedBy___children',
  ScheduledInPublishedByChildrenChildren = 'scheduledIn___publishedBy___children___children',
  ScheduledInPublishedByChildrenId = 'scheduledIn___publishedBy___children___id',
  ScheduledInPublishedByCreatedAt = 'scheduledIn___publishedBy___createdAt',
  ScheduledInPublishedById = 'scheduledIn___publishedBy___id',
  ScheduledInPublishedByInternalContent = 'scheduledIn___publishedBy___internal___content',
  ScheduledInPublishedByInternalContentDigest = 'scheduledIn___publishedBy___internal___contentDigest',
  ScheduledInPublishedByInternalDescription = 'scheduledIn___publishedBy___internal___description',
  ScheduledInPublishedByInternalFieldOwners = 'scheduledIn___publishedBy___internal___fieldOwners',
  ScheduledInPublishedByInternalIgnoreType = 'scheduledIn___publishedBy___internal___ignoreType',
  ScheduledInPublishedByInternalMediaType = 'scheduledIn___publishedBy___internal___mediaType',
  ScheduledInPublishedByInternalOwner = 'scheduledIn___publishedBy___internal___owner',
  ScheduledInPublishedByInternalType = 'scheduledIn___publishedBy___internal___type',
  ScheduledInPublishedByIsActive = 'scheduledIn___publishedBy___isActive',
  ScheduledInPublishedByKind = 'scheduledIn___publishedBy___kind',
  ScheduledInPublishedByName = 'scheduledIn___publishedBy___name',
  ScheduledInPublishedByParentChildren = 'scheduledIn___publishedBy___parent___children',
  ScheduledInPublishedByParentId = 'scheduledIn___publishedBy___parent___id',
  ScheduledInPublishedByPicture = 'scheduledIn___publishedBy___picture',
  ScheduledInPublishedByPublishedAt = 'scheduledIn___publishedBy___publishedAt',
  ScheduledInPublishedByRemoteId = 'scheduledIn___publishedBy___remoteId',
  ScheduledInPublishedByRemoteTypeName = 'scheduledIn___publishedBy___remoteTypeName',
  ScheduledInPublishedByStage = 'scheduledIn___publishedBy___stage',
  ScheduledInPublishedByUpdatedAt = 'scheduledIn___publishedBy___updatedAt',
  ScheduledInRawPayload = 'scheduledIn___rawPayload',
  ScheduledInReleaseChildren = 'scheduledIn___release___children',
  ScheduledInReleaseChildrenChildren = 'scheduledIn___release___children___children',
  ScheduledInReleaseChildrenId = 'scheduledIn___release___children___id',
  ScheduledInReleaseCreatedAt = 'scheduledIn___release___createdAt',
  ScheduledInReleaseCreatedByChildren = 'scheduledIn___release___createdBy___children',
  ScheduledInReleaseCreatedByCreatedAt = 'scheduledIn___release___createdBy___createdAt',
  ScheduledInReleaseCreatedById = 'scheduledIn___release___createdBy___id',
  ScheduledInReleaseCreatedByIsActive = 'scheduledIn___release___createdBy___isActive',
  ScheduledInReleaseCreatedByKind = 'scheduledIn___release___createdBy___kind',
  ScheduledInReleaseCreatedByName = 'scheduledIn___release___createdBy___name',
  ScheduledInReleaseCreatedByPicture = 'scheduledIn___release___createdBy___picture',
  ScheduledInReleaseCreatedByPublishedAt = 'scheduledIn___release___createdBy___publishedAt',
  ScheduledInReleaseCreatedByRemoteId = 'scheduledIn___release___createdBy___remoteId',
  ScheduledInReleaseCreatedByRemoteTypeName = 'scheduledIn___release___createdBy___remoteTypeName',
  ScheduledInReleaseCreatedByStage = 'scheduledIn___release___createdBy___stage',
  ScheduledInReleaseCreatedByUpdatedAt = 'scheduledIn___release___createdBy___updatedAt',
  ScheduledInReleaseDescription = 'scheduledIn___release___description',
  ScheduledInReleaseErrorMessage = 'scheduledIn___release___errorMessage',
  ScheduledInReleaseId = 'scheduledIn___release___id',
  ScheduledInReleaseInternalContent = 'scheduledIn___release___internal___content',
  ScheduledInReleaseInternalContentDigest = 'scheduledIn___release___internal___contentDigest',
  ScheduledInReleaseInternalDescription = 'scheduledIn___release___internal___description',
  ScheduledInReleaseInternalFieldOwners = 'scheduledIn___release___internal___fieldOwners',
  ScheduledInReleaseInternalIgnoreType = 'scheduledIn___release___internal___ignoreType',
  ScheduledInReleaseInternalMediaType = 'scheduledIn___release___internal___mediaType',
  ScheduledInReleaseInternalOwner = 'scheduledIn___release___internal___owner',
  ScheduledInReleaseInternalType = 'scheduledIn___release___internal___type',
  ScheduledInReleaseIsActive = 'scheduledIn___release___isActive',
  ScheduledInReleaseIsImplicit = 'scheduledIn___release___isImplicit',
  ScheduledInReleaseOperations = 'scheduledIn___release___operations',
  ScheduledInReleaseOperationsChildren = 'scheduledIn___release___operations___children',
  ScheduledInReleaseOperationsCreatedAt = 'scheduledIn___release___operations___createdAt',
  ScheduledInReleaseOperationsDescription = 'scheduledIn___release___operations___description',
  ScheduledInReleaseOperationsErrorMessage = 'scheduledIn___release___operations___errorMessage',
  ScheduledInReleaseOperationsId = 'scheduledIn___release___operations___id',
  ScheduledInReleaseOperationsPublishedAt = 'scheduledIn___release___operations___publishedAt',
  ScheduledInReleaseOperationsRawPayload = 'scheduledIn___release___operations___rawPayload',
  ScheduledInReleaseOperationsRemoteId = 'scheduledIn___release___operations___remoteId',
  ScheduledInReleaseOperationsRemoteTypeName = 'scheduledIn___release___operations___remoteTypeName',
  ScheduledInReleaseOperationsStage = 'scheduledIn___release___operations___stage',
  ScheduledInReleaseOperationsStatus = 'scheduledIn___release___operations___status',
  ScheduledInReleaseOperationsUpdatedAt = 'scheduledIn___release___operations___updatedAt',
  ScheduledInReleaseParentChildren = 'scheduledIn___release___parent___children',
  ScheduledInReleaseParentId = 'scheduledIn___release___parent___id',
  ScheduledInReleasePublishedAt = 'scheduledIn___release___publishedAt',
  ScheduledInReleasePublishedByChildren = 'scheduledIn___release___publishedBy___children',
  ScheduledInReleasePublishedByCreatedAt = 'scheduledIn___release___publishedBy___createdAt',
  ScheduledInReleasePublishedById = 'scheduledIn___release___publishedBy___id',
  ScheduledInReleasePublishedByIsActive = 'scheduledIn___release___publishedBy___isActive',
  ScheduledInReleasePublishedByKind = 'scheduledIn___release___publishedBy___kind',
  ScheduledInReleasePublishedByName = 'scheduledIn___release___publishedBy___name',
  ScheduledInReleasePublishedByPicture = 'scheduledIn___release___publishedBy___picture',
  ScheduledInReleasePublishedByPublishedAt = 'scheduledIn___release___publishedBy___publishedAt',
  ScheduledInReleasePublishedByRemoteId = 'scheduledIn___release___publishedBy___remoteId',
  ScheduledInReleasePublishedByRemoteTypeName = 'scheduledIn___release___publishedBy___remoteTypeName',
  ScheduledInReleasePublishedByStage = 'scheduledIn___release___publishedBy___stage',
  ScheduledInReleasePublishedByUpdatedAt = 'scheduledIn___release___publishedBy___updatedAt',
  ScheduledInReleaseReleaseAt = 'scheduledIn___release___releaseAt',
  ScheduledInReleaseRemoteId = 'scheduledIn___release___remoteId',
  ScheduledInReleaseRemoteTypeName = 'scheduledIn___release___remoteTypeName',
  ScheduledInReleaseStage = 'scheduledIn___release___stage',
  ScheduledInReleaseStatus = 'scheduledIn___release___status',
  ScheduledInReleaseTitle = 'scheduledIn___release___title',
  ScheduledInReleaseUpdatedAt = 'scheduledIn___release___updatedAt',
  ScheduledInReleaseUpdatedByChildren = 'scheduledIn___release___updatedBy___children',
  ScheduledInReleaseUpdatedByCreatedAt = 'scheduledIn___release___updatedBy___createdAt',
  ScheduledInReleaseUpdatedById = 'scheduledIn___release___updatedBy___id',
  ScheduledInReleaseUpdatedByIsActive = 'scheduledIn___release___updatedBy___isActive',
  ScheduledInReleaseUpdatedByKind = 'scheduledIn___release___updatedBy___kind',
  ScheduledInReleaseUpdatedByName = 'scheduledIn___release___updatedBy___name',
  ScheduledInReleaseUpdatedByPicture = 'scheduledIn___release___updatedBy___picture',
  ScheduledInReleaseUpdatedByPublishedAt = 'scheduledIn___release___updatedBy___publishedAt',
  ScheduledInReleaseUpdatedByRemoteId = 'scheduledIn___release___updatedBy___remoteId',
  ScheduledInReleaseUpdatedByRemoteTypeName = 'scheduledIn___release___updatedBy___remoteTypeName',
  ScheduledInReleaseUpdatedByStage = 'scheduledIn___release___updatedBy___stage',
  ScheduledInReleaseUpdatedByUpdatedAt = 'scheduledIn___release___updatedBy___updatedAt',
  ScheduledInRemoteId = 'scheduledIn___remoteId',
  ScheduledInRemoteTypeName = 'scheduledIn___remoteTypeName',
  ScheduledInStage = 'scheduledIn___stage',
  ScheduledInStatus = 'scheduledIn___status',
  ScheduledInUpdatedAt = 'scheduledIn___updatedAt',
  ScheduledInUpdatedByChildren = 'scheduledIn___updatedBy___children',
  ScheduledInUpdatedByChildrenChildren = 'scheduledIn___updatedBy___children___children',
  ScheduledInUpdatedByChildrenId = 'scheduledIn___updatedBy___children___id',
  ScheduledInUpdatedByCreatedAt = 'scheduledIn___updatedBy___createdAt',
  ScheduledInUpdatedById = 'scheduledIn___updatedBy___id',
  ScheduledInUpdatedByInternalContent = 'scheduledIn___updatedBy___internal___content',
  ScheduledInUpdatedByInternalContentDigest = 'scheduledIn___updatedBy___internal___contentDigest',
  ScheduledInUpdatedByInternalDescription = 'scheduledIn___updatedBy___internal___description',
  ScheduledInUpdatedByInternalFieldOwners = 'scheduledIn___updatedBy___internal___fieldOwners',
  ScheduledInUpdatedByInternalIgnoreType = 'scheduledIn___updatedBy___internal___ignoreType',
  ScheduledInUpdatedByInternalMediaType = 'scheduledIn___updatedBy___internal___mediaType',
  ScheduledInUpdatedByInternalOwner = 'scheduledIn___updatedBy___internal___owner',
  ScheduledInUpdatedByInternalType = 'scheduledIn___updatedBy___internal___type',
  ScheduledInUpdatedByIsActive = 'scheduledIn___updatedBy___isActive',
  ScheduledInUpdatedByKind = 'scheduledIn___updatedBy___kind',
  ScheduledInUpdatedByName = 'scheduledIn___updatedBy___name',
  ScheduledInUpdatedByParentChildren = 'scheduledIn___updatedBy___parent___children',
  ScheduledInUpdatedByParentId = 'scheduledIn___updatedBy___parent___id',
  ScheduledInUpdatedByPicture = 'scheduledIn___updatedBy___picture',
  ScheduledInUpdatedByPublishedAt = 'scheduledIn___updatedBy___publishedAt',
  ScheduledInUpdatedByRemoteId = 'scheduledIn___updatedBy___remoteId',
  ScheduledInUpdatedByRemoteTypeName = 'scheduledIn___updatedBy___remoteTypeName',
  ScheduledInUpdatedByStage = 'scheduledIn___updatedBy___stage',
  ScheduledInUpdatedByUpdatedAt = 'scheduledIn___updatedBy___updatedAt',
  Stage = 'stage',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UpdatedByChildren = 'updatedBy___children',
  UpdatedByChildrenChildren = 'updatedBy___children___children',
  UpdatedByChildrenChildrenChildren = 'updatedBy___children___children___children',
  UpdatedByChildrenChildrenId = 'updatedBy___children___children___id',
  UpdatedByChildrenId = 'updatedBy___children___id',
  UpdatedByChildrenInternalContent = 'updatedBy___children___internal___content',
  UpdatedByChildrenInternalContentDigest = 'updatedBy___children___internal___contentDigest',
  UpdatedByChildrenInternalDescription = 'updatedBy___children___internal___description',
  UpdatedByChildrenInternalFieldOwners = 'updatedBy___children___internal___fieldOwners',
  UpdatedByChildrenInternalIgnoreType = 'updatedBy___children___internal___ignoreType',
  UpdatedByChildrenInternalMediaType = 'updatedBy___children___internal___mediaType',
  UpdatedByChildrenInternalOwner = 'updatedBy___children___internal___owner',
  UpdatedByChildrenInternalType = 'updatedBy___children___internal___type',
  UpdatedByChildrenParentChildren = 'updatedBy___children___parent___children',
  UpdatedByChildrenParentId = 'updatedBy___children___parent___id',
  UpdatedByCreatedAt = 'updatedBy___createdAt',
  UpdatedById = 'updatedBy___id',
  UpdatedByInternalContent = 'updatedBy___internal___content',
  UpdatedByInternalContentDigest = 'updatedBy___internal___contentDigest',
  UpdatedByInternalDescription = 'updatedBy___internal___description',
  UpdatedByInternalFieldOwners = 'updatedBy___internal___fieldOwners',
  UpdatedByInternalIgnoreType = 'updatedBy___internal___ignoreType',
  UpdatedByInternalMediaType = 'updatedBy___internal___mediaType',
  UpdatedByInternalOwner = 'updatedBy___internal___owner',
  UpdatedByInternalType = 'updatedBy___internal___type',
  UpdatedByIsActive = 'updatedBy___isActive',
  UpdatedByKind = 'updatedBy___kind',
  UpdatedByName = 'updatedBy___name',
  UpdatedByParentChildren = 'updatedBy___parent___children',
  UpdatedByParentChildrenChildren = 'updatedBy___parent___children___children',
  UpdatedByParentChildrenId = 'updatedBy___parent___children___id',
  UpdatedByParentId = 'updatedBy___parent___id',
  UpdatedByParentInternalContent = 'updatedBy___parent___internal___content',
  UpdatedByParentInternalContentDigest = 'updatedBy___parent___internal___contentDigest',
  UpdatedByParentInternalDescription = 'updatedBy___parent___internal___description',
  UpdatedByParentInternalFieldOwners = 'updatedBy___parent___internal___fieldOwners',
  UpdatedByParentInternalIgnoreType = 'updatedBy___parent___internal___ignoreType',
  UpdatedByParentInternalMediaType = 'updatedBy___parent___internal___mediaType',
  UpdatedByParentInternalOwner = 'updatedBy___parent___internal___owner',
  UpdatedByParentInternalType = 'updatedBy___parent___internal___type',
  UpdatedByParentParentChildren = 'updatedBy___parent___parent___children',
  UpdatedByParentParentId = 'updatedBy___parent___parent___id',
  UpdatedByPicture = 'updatedBy___picture',
  UpdatedByPublishedAt = 'updatedBy___publishedAt',
  UpdatedByRemoteId = 'updatedBy___remoteId',
  UpdatedByRemoteTypeName = 'updatedBy___remoteTypeName',
  UpdatedByStage = 'updatedBy___stage',
  UpdatedByUpdatedAt = 'updatedBy___updatedAt',
  Url = 'url',
}

export type GraphCms_LinkFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type GraphCms_LinkFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_LinkFilterInput>;
};

export type GraphCms_LinkGroupConnection = {
  __typename?: 'GraphCMS_LinkGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_LinkEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GraphCms_LinkGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_Link>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_LinkGroupConnectionDistinctArgs = {
  field: GraphCms_LinkFieldsEnum;
};

export type GraphCms_LinkGroupConnectionGroupArgs = {
  field: GraphCms_LinkFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type GraphCms_LinkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_LinkFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum GraphCms_Locale {
  En = 'en',
}

export type GraphCms_LocaleQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Locale>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Locale>>>;
  ne?: InputMaybe<GraphCms_Locale>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Locale>>>;
};

export type GraphCms_PortfolioItem = Node & {
  __typename?: 'GraphCMS_PortfolioItem';
  about?: Maybe<GraphCms_RichText>;
  carouselImages: Array<GraphCms_Asset>;
  children: Array<Node>;
  createdAt: Scalars['JSON'];
  createdBy?: Maybe<GraphCms_User>;
  description: Scalars['String'];
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  links: Array<GraphCms_Link>;
  parent?: Maybe<Node>;
  publishedAt?: Maybe<Scalars['JSON']>;
  publishedBy?: Maybe<GraphCms_User>;
  remoteId: Scalars['ID'];
  remoteTypeName: Scalars['String'];
  scheduledIn: Array<GraphCms_ScheduledOperation>;
  stage: GraphCms_Stage;
  techSheet: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['JSON'];
  updatedBy?: Maybe<GraphCms_User>;
};

export type GraphCms_PortfolioItemGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars['String']>;
};

export type GraphCms_PortfolioItemConnection = {
  __typename?: 'GraphCMS_PortfolioItemConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_PortfolioItemEdge>;
  group: Array<GraphCms_PortfolioItemGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_PortfolioItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_PortfolioItemConnectionDistinctArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemConnectionGroupArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type GraphCms_PortfolioItemEdge = {
  __typename?: 'GraphCMS_PortfolioItemEdge';
  next?: Maybe<GraphCms_PortfolioItem>;
  node: GraphCms_PortfolioItem;
  previous?: Maybe<GraphCms_PortfolioItem>;
};

export enum GraphCms_PortfolioItemFieldsEnum {
  AboutHtml = 'about___html',
  AboutMarkdown = 'about___markdown',
  AboutRaw = 'about___raw',
  AboutRemoteTypeName = 'about___remoteTypeName',
  AboutText = 'about___text',
  CarouselImages = 'carouselImages',
  CarouselImagesCarouselImagesPortfolioItem = 'carouselImages___carouselImagesPortfolioItem',
  CarouselImagesCarouselImagesPortfolioItemAboutHtml = 'carouselImages___carouselImagesPortfolioItem___about___html',
  CarouselImagesCarouselImagesPortfolioItemAboutMarkdown = 'carouselImages___carouselImagesPortfolioItem___about___markdown',
  CarouselImagesCarouselImagesPortfolioItemAboutRaw = 'carouselImages___carouselImagesPortfolioItem___about___raw',
  CarouselImagesCarouselImagesPortfolioItemAboutRemoteTypeName = 'carouselImages___carouselImagesPortfolioItem___about___remoteTypeName',
  CarouselImagesCarouselImagesPortfolioItemAboutText = 'carouselImages___carouselImagesPortfolioItem___about___text',
  CarouselImagesCarouselImagesPortfolioItemCarouselImages = 'carouselImages___carouselImagesPortfolioItem___carouselImages',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesCarouselImagesPortfolioItem = 'carouselImages___carouselImagesPortfolioItem___carouselImages___carouselImagesPortfolioItem',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesChildren = 'carouselImages___carouselImagesPortfolioItem___carouselImages___children',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesCreatedAt = 'carouselImages___carouselImagesPortfolioItem___carouselImages___createdAt',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesFileName = 'carouselImages___carouselImagesPortfolioItem___carouselImages___fileName',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesHandle = 'carouselImages___carouselImagesPortfolioItem___carouselImages___handle',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesHeight = 'carouselImages___carouselImagesPortfolioItem___carouselImages___height',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesId = 'carouselImages___carouselImagesPortfolioItem___carouselImages___id',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesLocale = 'carouselImages___carouselImagesPortfolioItem___carouselImages___locale',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesMimeType = 'carouselImages___carouselImagesPortfolioItem___carouselImages___mimeType',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesPublishedAt = 'carouselImages___carouselImagesPortfolioItem___carouselImages___publishedAt',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesRemoteId = 'carouselImages___carouselImagesPortfolioItem___carouselImages___remoteId',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesRemoteTypeName = 'carouselImages___carouselImagesPortfolioItem___carouselImages___remoteTypeName',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesScheduledIn = 'carouselImages___carouselImagesPortfolioItem___carouselImages___scheduledIn',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesSize = 'carouselImages___carouselImagesPortfolioItem___carouselImages___size',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesStage = 'carouselImages___carouselImagesPortfolioItem___carouselImages___stage',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesUpdatedAt = 'carouselImages___carouselImagesPortfolioItem___carouselImages___updatedAt',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesUrl = 'carouselImages___carouselImagesPortfolioItem___carouselImages___url',
  CarouselImagesCarouselImagesPortfolioItemCarouselImagesWidth = 'carouselImages___carouselImagesPortfolioItem___carouselImages___width',
  CarouselImagesCarouselImagesPortfolioItemChildren = 'carouselImages___carouselImagesPortfolioItem___children',
  CarouselImagesCarouselImagesPortfolioItemChildrenChildren = 'carouselImages___carouselImagesPortfolioItem___children___children',
  CarouselImagesCarouselImagesPortfolioItemChildrenId = 'carouselImages___carouselImagesPortfolioItem___children___id',
  CarouselImagesCarouselImagesPortfolioItemCreatedAt = 'carouselImages___carouselImagesPortfolioItem___createdAt',
  CarouselImagesCarouselImagesPortfolioItemCreatedByChildren = 'carouselImages___carouselImagesPortfolioItem___createdBy___children',
  CarouselImagesCarouselImagesPortfolioItemCreatedByCreatedAt = 'carouselImages___carouselImagesPortfolioItem___createdBy___createdAt',
  CarouselImagesCarouselImagesPortfolioItemCreatedById = 'carouselImages___carouselImagesPortfolioItem___createdBy___id',
  CarouselImagesCarouselImagesPortfolioItemCreatedByIsActive = 'carouselImages___carouselImagesPortfolioItem___createdBy___isActive',
  CarouselImagesCarouselImagesPortfolioItemCreatedByKind = 'carouselImages___carouselImagesPortfolioItem___createdBy___kind',
  CarouselImagesCarouselImagesPortfolioItemCreatedByName = 'carouselImages___carouselImagesPortfolioItem___createdBy___name',
  CarouselImagesCarouselImagesPortfolioItemCreatedByPicture = 'carouselImages___carouselImagesPortfolioItem___createdBy___picture',
  CarouselImagesCarouselImagesPortfolioItemCreatedByPublishedAt = 'carouselImages___carouselImagesPortfolioItem___createdBy___publishedAt',
  CarouselImagesCarouselImagesPortfolioItemCreatedByRemoteId = 'carouselImages___carouselImagesPortfolioItem___createdBy___remoteId',
  CarouselImagesCarouselImagesPortfolioItemCreatedByRemoteTypeName = 'carouselImages___carouselImagesPortfolioItem___createdBy___remoteTypeName',
  CarouselImagesCarouselImagesPortfolioItemCreatedByStage = 'carouselImages___carouselImagesPortfolioItem___createdBy___stage',
  CarouselImagesCarouselImagesPortfolioItemCreatedByUpdatedAt = 'carouselImages___carouselImagesPortfolioItem___createdBy___updatedAt',
  CarouselImagesCarouselImagesPortfolioItemDescription = 'carouselImages___carouselImagesPortfolioItem___description',
  CarouselImagesCarouselImagesPortfolioItemGatsbyPath = 'carouselImages___carouselImagesPortfolioItem___gatsbyPath',
  CarouselImagesCarouselImagesPortfolioItemId = 'carouselImages___carouselImagesPortfolioItem___id',
  CarouselImagesCarouselImagesPortfolioItemInternalContent = 'carouselImages___carouselImagesPortfolioItem___internal___content',
  CarouselImagesCarouselImagesPortfolioItemInternalContentDigest = 'carouselImages___carouselImagesPortfolioItem___internal___contentDigest',
  CarouselImagesCarouselImagesPortfolioItemInternalDescription = 'carouselImages___carouselImagesPortfolioItem___internal___description',
  CarouselImagesCarouselImagesPortfolioItemInternalFieldOwners = 'carouselImages___carouselImagesPortfolioItem___internal___fieldOwners',
  CarouselImagesCarouselImagesPortfolioItemInternalIgnoreType = 'carouselImages___carouselImagesPortfolioItem___internal___ignoreType',
  CarouselImagesCarouselImagesPortfolioItemInternalMediaType = 'carouselImages___carouselImagesPortfolioItem___internal___mediaType',
  CarouselImagesCarouselImagesPortfolioItemInternalOwner = 'carouselImages___carouselImagesPortfolioItem___internal___owner',
  CarouselImagesCarouselImagesPortfolioItemInternalType = 'carouselImages___carouselImagesPortfolioItem___internal___type',
  CarouselImagesCarouselImagesPortfolioItemLinks = 'carouselImages___carouselImagesPortfolioItem___links',
  CarouselImagesCarouselImagesPortfolioItemLinksChildren = 'carouselImages___carouselImagesPortfolioItem___links___children',
  CarouselImagesCarouselImagesPortfolioItemLinksCreatedAt = 'carouselImages___carouselImagesPortfolioItem___links___createdAt',
  CarouselImagesCarouselImagesPortfolioItemLinksId = 'carouselImages___carouselImagesPortfolioItem___links___id',
  CarouselImagesCarouselImagesPortfolioItemLinksPublishedAt = 'carouselImages___carouselImagesPortfolioItem___links___publishedAt',
  CarouselImagesCarouselImagesPortfolioItemLinksRemoteId = 'carouselImages___carouselImagesPortfolioItem___links___remoteId',
  CarouselImagesCarouselImagesPortfolioItemLinksRemoteTypeName = 'carouselImages___carouselImagesPortfolioItem___links___remoteTypeName',
  CarouselImagesCarouselImagesPortfolioItemLinksScheduledIn = 'carouselImages___carouselImagesPortfolioItem___links___scheduledIn',
  CarouselImagesCarouselImagesPortfolioItemLinksStage = 'carouselImages___carouselImagesPortfolioItem___links___stage',
  CarouselImagesCarouselImagesPortfolioItemLinksTitle = 'carouselImages___carouselImagesPortfolioItem___links___title',
  CarouselImagesCarouselImagesPortfolioItemLinksType = 'carouselImages___carouselImagesPortfolioItem___links___type',
  CarouselImagesCarouselImagesPortfolioItemLinksUpdatedAt = 'carouselImages___carouselImagesPortfolioItem___links___updatedAt',
  CarouselImagesCarouselImagesPortfolioItemLinksUrl = 'carouselImages___carouselImagesPortfolioItem___links___url',
  CarouselImagesCarouselImagesPortfolioItemParentChildren = 'carouselImages___carouselImagesPortfolioItem___parent___children',
  CarouselImagesCarouselImagesPortfolioItemParentId = 'carouselImages___carouselImagesPortfolioItem___parent___id',
  CarouselImagesCarouselImagesPortfolioItemPublishedAt = 'carouselImages___carouselImagesPortfolioItem___publishedAt',
  CarouselImagesCarouselImagesPortfolioItemPublishedByChildren = 'carouselImages___carouselImagesPortfolioItem___publishedBy___children',
  CarouselImagesCarouselImagesPortfolioItemPublishedByCreatedAt = 'carouselImages___carouselImagesPortfolioItem___publishedBy___createdAt',
  CarouselImagesCarouselImagesPortfolioItemPublishedById = 'carouselImages___carouselImagesPortfolioItem___publishedBy___id',
  CarouselImagesCarouselImagesPortfolioItemPublishedByIsActive = 'carouselImages___carouselImagesPortfolioItem___publishedBy___isActive',
  CarouselImagesCarouselImagesPortfolioItemPublishedByKind = 'carouselImages___carouselImagesPortfolioItem___publishedBy___kind',
  CarouselImagesCarouselImagesPortfolioItemPublishedByName = 'carouselImages___carouselImagesPortfolioItem___publishedBy___name',
  CarouselImagesCarouselImagesPortfolioItemPublishedByPicture = 'carouselImages___carouselImagesPortfolioItem___publishedBy___picture',
  CarouselImagesCarouselImagesPortfolioItemPublishedByPublishedAt = 'carouselImages___carouselImagesPortfolioItem___publishedBy___publishedAt',
  CarouselImagesCarouselImagesPortfolioItemPublishedByRemoteId = 'carouselImages___carouselImagesPortfolioItem___publishedBy___remoteId',
  CarouselImagesCarouselImagesPortfolioItemPublishedByRemoteTypeName = 'carouselImages___carouselImagesPortfolioItem___publishedBy___remoteTypeName',
  CarouselImagesCarouselImagesPortfolioItemPublishedByStage = 'carouselImages___carouselImagesPortfolioItem___publishedBy___stage',
  CarouselImagesCarouselImagesPortfolioItemPublishedByUpdatedAt = 'carouselImages___carouselImagesPortfolioItem___publishedBy___updatedAt',
  CarouselImagesCarouselImagesPortfolioItemRemoteId = 'carouselImages___carouselImagesPortfolioItem___remoteId',
  CarouselImagesCarouselImagesPortfolioItemRemoteTypeName = 'carouselImages___carouselImagesPortfolioItem___remoteTypeName',
  CarouselImagesCarouselImagesPortfolioItemScheduledIn = 'carouselImages___carouselImagesPortfolioItem___scheduledIn',
  CarouselImagesCarouselImagesPortfolioItemScheduledInChildren = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___children',
  CarouselImagesCarouselImagesPortfolioItemScheduledInCreatedAt = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___createdAt',
  CarouselImagesCarouselImagesPortfolioItemScheduledInDescription = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___description',
  CarouselImagesCarouselImagesPortfolioItemScheduledInErrorMessage = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___errorMessage',
  CarouselImagesCarouselImagesPortfolioItemScheduledInId = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___id',
  CarouselImagesCarouselImagesPortfolioItemScheduledInPublishedAt = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___publishedAt',
  CarouselImagesCarouselImagesPortfolioItemScheduledInRawPayload = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___rawPayload',
  CarouselImagesCarouselImagesPortfolioItemScheduledInRemoteId = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___remoteId',
  CarouselImagesCarouselImagesPortfolioItemScheduledInRemoteTypeName = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___remoteTypeName',
  CarouselImagesCarouselImagesPortfolioItemScheduledInStage = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___stage',
  CarouselImagesCarouselImagesPortfolioItemScheduledInStatus = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___status',
  CarouselImagesCarouselImagesPortfolioItemScheduledInUpdatedAt = 'carouselImages___carouselImagesPortfolioItem___scheduledIn___updatedAt',
  CarouselImagesCarouselImagesPortfolioItemStage = 'carouselImages___carouselImagesPortfolioItem___stage',
  CarouselImagesCarouselImagesPortfolioItemTechSheet = 'carouselImages___carouselImagesPortfolioItem___techSheet',
  CarouselImagesCarouselImagesPortfolioItemTitle = 'carouselImages___carouselImagesPortfolioItem___title',
  CarouselImagesCarouselImagesPortfolioItemUpdatedAt = 'carouselImages___carouselImagesPortfolioItem___updatedAt',
  CarouselImagesCarouselImagesPortfolioItemUpdatedByChildren = 'carouselImages___carouselImagesPortfolioItem___updatedBy___children',
  CarouselImagesCarouselImagesPortfolioItemUpdatedByCreatedAt = 'carouselImages___carouselImagesPortfolioItem___updatedBy___createdAt',
  CarouselImagesCarouselImagesPortfolioItemUpdatedById = 'carouselImages___carouselImagesPortfolioItem___updatedBy___id',
  CarouselImagesCarouselImagesPortfolioItemUpdatedByIsActive = 'carouselImages___carouselImagesPortfolioItem___updatedBy___isActive',
  CarouselImagesCarouselImagesPortfolioItemUpdatedByKind = 'carouselImages___carouselImagesPortfolioItem___updatedBy___kind',
  CarouselImagesCarouselImagesPortfolioItemUpdatedByName = 'carouselImages___carouselImagesPortfolioItem___updatedBy___name',
  CarouselImagesCarouselImagesPortfolioItemUpdatedByPicture = 'carouselImages___carouselImagesPortfolioItem___updatedBy___picture',
  CarouselImagesCarouselImagesPortfolioItemUpdatedByPublishedAt = 'carouselImages___carouselImagesPortfolioItem___updatedBy___publishedAt',
  CarouselImagesCarouselImagesPortfolioItemUpdatedByRemoteId = 'carouselImages___carouselImagesPortfolioItem___updatedBy___remoteId',
  CarouselImagesCarouselImagesPortfolioItemUpdatedByRemoteTypeName = 'carouselImages___carouselImagesPortfolioItem___updatedBy___remoteTypeName',
  CarouselImagesCarouselImagesPortfolioItemUpdatedByStage = 'carouselImages___carouselImagesPortfolioItem___updatedBy___stage',
  CarouselImagesCarouselImagesPortfolioItemUpdatedByUpdatedAt = 'carouselImages___carouselImagesPortfolioItem___updatedBy___updatedAt',
  CarouselImagesChildren = 'carouselImages___children',
  CarouselImagesChildrenChildren = 'carouselImages___children___children',
  CarouselImagesChildrenChildrenChildren = 'carouselImages___children___children___children',
  CarouselImagesChildrenChildrenId = 'carouselImages___children___children___id',
  CarouselImagesChildrenId = 'carouselImages___children___id',
  CarouselImagesChildrenInternalContent = 'carouselImages___children___internal___content',
  CarouselImagesChildrenInternalContentDigest = 'carouselImages___children___internal___contentDigest',
  CarouselImagesChildrenInternalDescription = 'carouselImages___children___internal___description',
  CarouselImagesChildrenInternalFieldOwners = 'carouselImages___children___internal___fieldOwners',
  CarouselImagesChildrenInternalIgnoreType = 'carouselImages___children___internal___ignoreType',
  CarouselImagesChildrenInternalMediaType = 'carouselImages___children___internal___mediaType',
  CarouselImagesChildrenInternalOwner = 'carouselImages___children___internal___owner',
  CarouselImagesChildrenInternalType = 'carouselImages___children___internal___type',
  CarouselImagesChildrenParentChildren = 'carouselImages___children___parent___children',
  CarouselImagesChildrenParentId = 'carouselImages___children___parent___id',
  CarouselImagesCreatedAt = 'carouselImages___createdAt',
  CarouselImagesCreatedByChildren = 'carouselImages___createdBy___children',
  CarouselImagesCreatedByChildrenChildren = 'carouselImages___createdBy___children___children',
  CarouselImagesCreatedByChildrenId = 'carouselImages___createdBy___children___id',
  CarouselImagesCreatedByCreatedAt = 'carouselImages___createdBy___createdAt',
  CarouselImagesCreatedById = 'carouselImages___createdBy___id',
  CarouselImagesCreatedByInternalContent = 'carouselImages___createdBy___internal___content',
  CarouselImagesCreatedByInternalContentDigest = 'carouselImages___createdBy___internal___contentDigest',
  CarouselImagesCreatedByInternalDescription = 'carouselImages___createdBy___internal___description',
  CarouselImagesCreatedByInternalFieldOwners = 'carouselImages___createdBy___internal___fieldOwners',
  CarouselImagesCreatedByInternalIgnoreType = 'carouselImages___createdBy___internal___ignoreType',
  CarouselImagesCreatedByInternalMediaType = 'carouselImages___createdBy___internal___mediaType',
  CarouselImagesCreatedByInternalOwner = 'carouselImages___createdBy___internal___owner',
  CarouselImagesCreatedByInternalType = 'carouselImages___createdBy___internal___type',
  CarouselImagesCreatedByIsActive = 'carouselImages___createdBy___isActive',
  CarouselImagesCreatedByKind = 'carouselImages___createdBy___kind',
  CarouselImagesCreatedByName = 'carouselImages___createdBy___name',
  CarouselImagesCreatedByParentChildren = 'carouselImages___createdBy___parent___children',
  CarouselImagesCreatedByParentId = 'carouselImages___createdBy___parent___id',
  CarouselImagesCreatedByPicture = 'carouselImages___createdBy___picture',
  CarouselImagesCreatedByPublishedAt = 'carouselImages___createdBy___publishedAt',
  CarouselImagesCreatedByRemoteId = 'carouselImages___createdBy___remoteId',
  CarouselImagesCreatedByRemoteTypeName = 'carouselImages___createdBy___remoteTypeName',
  CarouselImagesCreatedByStage = 'carouselImages___createdBy___stage',
  CarouselImagesCreatedByUpdatedAt = 'carouselImages___createdBy___updatedAt',
  CarouselImagesFileName = 'carouselImages___fileName',
  CarouselImagesHandle = 'carouselImages___handle',
  CarouselImagesHeight = 'carouselImages___height',
  CarouselImagesId = 'carouselImages___id',
  CarouselImagesInternalContent = 'carouselImages___internal___content',
  CarouselImagesInternalContentDigest = 'carouselImages___internal___contentDigest',
  CarouselImagesInternalDescription = 'carouselImages___internal___description',
  CarouselImagesInternalFieldOwners = 'carouselImages___internal___fieldOwners',
  CarouselImagesInternalIgnoreType = 'carouselImages___internal___ignoreType',
  CarouselImagesInternalMediaType = 'carouselImages___internal___mediaType',
  CarouselImagesInternalOwner = 'carouselImages___internal___owner',
  CarouselImagesInternalType = 'carouselImages___internal___type',
  CarouselImagesLocale = 'carouselImages___locale',
  CarouselImagesMimeType = 'carouselImages___mimeType',
  CarouselImagesParentChildren = 'carouselImages___parent___children',
  CarouselImagesParentChildrenChildren = 'carouselImages___parent___children___children',
  CarouselImagesParentChildrenId = 'carouselImages___parent___children___id',
  CarouselImagesParentId = 'carouselImages___parent___id',
  CarouselImagesParentInternalContent = 'carouselImages___parent___internal___content',
  CarouselImagesParentInternalContentDigest = 'carouselImages___parent___internal___contentDigest',
  CarouselImagesParentInternalDescription = 'carouselImages___parent___internal___description',
  CarouselImagesParentInternalFieldOwners = 'carouselImages___parent___internal___fieldOwners',
  CarouselImagesParentInternalIgnoreType = 'carouselImages___parent___internal___ignoreType',
  CarouselImagesParentInternalMediaType = 'carouselImages___parent___internal___mediaType',
  CarouselImagesParentInternalOwner = 'carouselImages___parent___internal___owner',
  CarouselImagesParentInternalType = 'carouselImages___parent___internal___type',
  CarouselImagesParentParentChildren = 'carouselImages___parent___parent___children',
  CarouselImagesParentParentId = 'carouselImages___parent___parent___id',
  CarouselImagesPublishedAt = 'carouselImages___publishedAt',
  CarouselImagesPublishedByChildren = 'carouselImages___publishedBy___children',
  CarouselImagesPublishedByChildrenChildren = 'carouselImages___publishedBy___children___children',
  CarouselImagesPublishedByChildrenId = 'carouselImages___publishedBy___children___id',
  CarouselImagesPublishedByCreatedAt = 'carouselImages___publishedBy___createdAt',
  CarouselImagesPublishedById = 'carouselImages___publishedBy___id',
  CarouselImagesPublishedByInternalContent = 'carouselImages___publishedBy___internal___content',
  CarouselImagesPublishedByInternalContentDigest = 'carouselImages___publishedBy___internal___contentDigest',
  CarouselImagesPublishedByInternalDescription = 'carouselImages___publishedBy___internal___description',
  CarouselImagesPublishedByInternalFieldOwners = 'carouselImages___publishedBy___internal___fieldOwners',
  CarouselImagesPublishedByInternalIgnoreType = 'carouselImages___publishedBy___internal___ignoreType',
  CarouselImagesPublishedByInternalMediaType = 'carouselImages___publishedBy___internal___mediaType',
  CarouselImagesPublishedByInternalOwner = 'carouselImages___publishedBy___internal___owner',
  CarouselImagesPublishedByInternalType = 'carouselImages___publishedBy___internal___type',
  CarouselImagesPublishedByIsActive = 'carouselImages___publishedBy___isActive',
  CarouselImagesPublishedByKind = 'carouselImages___publishedBy___kind',
  CarouselImagesPublishedByName = 'carouselImages___publishedBy___name',
  CarouselImagesPublishedByParentChildren = 'carouselImages___publishedBy___parent___children',
  CarouselImagesPublishedByParentId = 'carouselImages___publishedBy___parent___id',
  CarouselImagesPublishedByPicture = 'carouselImages___publishedBy___picture',
  CarouselImagesPublishedByPublishedAt = 'carouselImages___publishedBy___publishedAt',
  CarouselImagesPublishedByRemoteId = 'carouselImages___publishedBy___remoteId',
  CarouselImagesPublishedByRemoteTypeName = 'carouselImages___publishedBy___remoteTypeName',
  CarouselImagesPublishedByStage = 'carouselImages___publishedBy___stage',
  CarouselImagesPublishedByUpdatedAt = 'carouselImages___publishedBy___updatedAt',
  CarouselImagesRemoteId = 'carouselImages___remoteId',
  CarouselImagesRemoteTypeName = 'carouselImages___remoteTypeName',
  CarouselImagesScheduledIn = 'carouselImages___scheduledIn',
  CarouselImagesScheduledInChildren = 'carouselImages___scheduledIn___children',
  CarouselImagesScheduledInChildrenChildren = 'carouselImages___scheduledIn___children___children',
  CarouselImagesScheduledInChildrenId = 'carouselImages___scheduledIn___children___id',
  CarouselImagesScheduledInCreatedAt = 'carouselImages___scheduledIn___createdAt',
  CarouselImagesScheduledInCreatedByChildren = 'carouselImages___scheduledIn___createdBy___children',
  CarouselImagesScheduledInCreatedByCreatedAt = 'carouselImages___scheduledIn___createdBy___createdAt',
  CarouselImagesScheduledInCreatedById = 'carouselImages___scheduledIn___createdBy___id',
  CarouselImagesScheduledInCreatedByIsActive = 'carouselImages___scheduledIn___createdBy___isActive',
  CarouselImagesScheduledInCreatedByKind = 'carouselImages___scheduledIn___createdBy___kind',
  CarouselImagesScheduledInCreatedByName = 'carouselImages___scheduledIn___createdBy___name',
  CarouselImagesScheduledInCreatedByPicture = 'carouselImages___scheduledIn___createdBy___picture',
  CarouselImagesScheduledInCreatedByPublishedAt = 'carouselImages___scheduledIn___createdBy___publishedAt',
  CarouselImagesScheduledInCreatedByRemoteId = 'carouselImages___scheduledIn___createdBy___remoteId',
  CarouselImagesScheduledInCreatedByRemoteTypeName = 'carouselImages___scheduledIn___createdBy___remoteTypeName',
  CarouselImagesScheduledInCreatedByStage = 'carouselImages___scheduledIn___createdBy___stage',
  CarouselImagesScheduledInCreatedByUpdatedAt = 'carouselImages___scheduledIn___createdBy___updatedAt',
  CarouselImagesScheduledInDescription = 'carouselImages___scheduledIn___description',
  CarouselImagesScheduledInErrorMessage = 'carouselImages___scheduledIn___errorMessage',
  CarouselImagesScheduledInId = 'carouselImages___scheduledIn___id',
  CarouselImagesScheduledInInternalContent = 'carouselImages___scheduledIn___internal___content',
  CarouselImagesScheduledInInternalContentDigest = 'carouselImages___scheduledIn___internal___contentDigest',
  CarouselImagesScheduledInInternalDescription = 'carouselImages___scheduledIn___internal___description',
  CarouselImagesScheduledInInternalFieldOwners = 'carouselImages___scheduledIn___internal___fieldOwners',
  CarouselImagesScheduledInInternalIgnoreType = 'carouselImages___scheduledIn___internal___ignoreType',
  CarouselImagesScheduledInInternalMediaType = 'carouselImages___scheduledIn___internal___mediaType',
  CarouselImagesScheduledInInternalOwner = 'carouselImages___scheduledIn___internal___owner',
  CarouselImagesScheduledInInternalType = 'carouselImages___scheduledIn___internal___type',
  CarouselImagesScheduledInParentChildren = 'carouselImages___scheduledIn___parent___children',
  CarouselImagesScheduledInParentId = 'carouselImages___scheduledIn___parent___id',
  CarouselImagesScheduledInPublishedAt = 'carouselImages___scheduledIn___publishedAt',
  CarouselImagesScheduledInPublishedByChildren = 'carouselImages___scheduledIn___publishedBy___children',
  CarouselImagesScheduledInPublishedByCreatedAt = 'carouselImages___scheduledIn___publishedBy___createdAt',
  CarouselImagesScheduledInPublishedById = 'carouselImages___scheduledIn___publishedBy___id',
  CarouselImagesScheduledInPublishedByIsActive = 'carouselImages___scheduledIn___publishedBy___isActive',
  CarouselImagesScheduledInPublishedByKind = 'carouselImages___scheduledIn___publishedBy___kind',
  CarouselImagesScheduledInPublishedByName = 'carouselImages___scheduledIn___publishedBy___name',
  CarouselImagesScheduledInPublishedByPicture = 'carouselImages___scheduledIn___publishedBy___picture',
  CarouselImagesScheduledInPublishedByPublishedAt = 'carouselImages___scheduledIn___publishedBy___publishedAt',
  CarouselImagesScheduledInPublishedByRemoteId = 'carouselImages___scheduledIn___publishedBy___remoteId',
  CarouselImagesScheduledInPublishedByRemoteTypeName = 'carouselImages___scheduledIn___publishedBy___remoteTypeName',
  CarouselImagesScheduledInPublishedByStage = 'carouselImages___scheduledIn___publishedBy___stage',
  CarouselImagesScheduledInPublishedByUpdatedAt = 'carouselImages___scheduledIn___publishedBy___updatedAt',
  CarouselImagesScheduledInRawPayload = 'carouselImages___scheduledIn___rawPayload',
  CarouselImagesScheduledInReleaseChildren = 'carouselImages___scheduledIn___release___children',
  CarouselImagesScheduledInReleaseCreatedAt = 'carouselImages___scheduledIn___release___createdAt',
  CarouselImagesScheduledInReleaseDescription = 'carouselImages___scheduledIn___release___description',
  CarouselImagesScheduledInReleaseErrorMessage = 'carouselImages___scheduledIn___release___errorMessage',
  CarouselImagesScheduledInReleaseId = 'carouselImages___scheduledIn___release___id',
  CarouselImagesScheduledInReleaseIsActive = 'carouselImages___scheduledIn___release___isActive',
  CarouselImagesScheduledInReleaseIsImplicit = 'carouselImages___scheduledIn___release___isImplicit',
  CarouselImagesScheduledInReleaseOperations = 'carouselImages___scheduledIn___release___operations',
  CarouselImagesScheduledInReleasePublishedAt = 'carouselImages___scheduledIn___release___publishedAt',
  CarouselImagesScheduledInReleaseReleaseAt = 'carouselImages___scheduledIn___release___releaseAt',
  CarouselImagesScheduledInReleaseRemoteId = 'carouselImages___scheduledIn___release___remoteId',
  CarouselImagesScheduledInReleaseRemoteTypeName = 'carouselImages___scheduledIn___release___remoteTypeName',
  CarouselImagesScheduledInReleaseStage = 'carouselImages___scheduledIn___release___stage',
  CarouselImagesScheduledInReleaseStatus = 'carouselImages___scheduledIn___release___status',
  CarouselImagesScheduledInReleaseTitle = 'carouselImages___scheduledIn___release___title',
  CarouselImagesScheduledInReleaseUpdatedAt = 'carouselImages___scheduledIn___release___updatedAt',
  CarouselImagesScheduledInRemoteId = 'carouselImages___scheduledIn___remoteId',
  CarouselImagesScheduledInRemoteTypeName = 'carouselImages___scheduledIn___remoteTypeName',
  CarouselImagesScheduledInStage = 'carouselImages___scheduledIn___stage',
  CarouselImagesScheduledInStatus = 'carouselImages___scheduledIn___status',
  CarouselImagesScheduledInUpdatedAt = 'carouselImages___scheduledIn___updatedAt',
  CarouselImagesScheduledInUpdatedByChildren = 'carouselImages___scheduledIn___updatedBy___children',
  CarouselImagesScheduledInUpdatedByCreatedAt = 'carouselImages___scheduledIn___updatedBy___createdAt',
  CarouselImagesScheduledInUpdatedById = 'carouselImages___scheduledIn___updatedBy___id',
  CarouselImagesScheduledInUpdatedByIsActive = 'carouselImages___scheduledIn___updatedBy___isActive',
  CarouselImagesScheduledInUpdatedByKind = 'carouselImages___scheduledIn___updatedBy___kind',
  CarouselImagesScheduledInUpdatedByName = 'carouselImages___scheduledIn___updatedBy___name',
  CarouselImagesScheduledInUpdatedByPicture = 'carouselImages___scheduledIn___updatedBy___picture',
  CarouselImagesScheduledInUpdatedByPublishedAt = 'carouselImages___scheduledIn___updatedBy___publishedAt',
  CarouselImagesScheduledInUpdatedByRemoteId = 'carouselImages___scheduledIn___updatedBy___remoteId',
  CarouselImagesScheduledInUpdatedByRemoteTypeName = 'carouselImages___scheduledIn___updatedBy___remoteTypeName',
  CarouselImagesScheduledInUpdatedByStage = 'carouselImages___scheduledIn___updatedBy___stage',
  CarouselImagesScheduledInUpdatedByUpdatedAt = 'carouselImages___scheduledIn___updatedBy___updatedAt',
  CarouselImagesSize = 'carouselImages___size',
  CarouselImagesStage = 'carouselImages___stage',
  CarouselImagesUpdatedAt = 'carouselImages___updatedAt',
  CarouselImagesUpdatedByChildren = 'carouselImages___updatedBy___children',
  CarouselImagesUpdatedByChildrenChildren = 'carouselImages___updatedBy___children___children',
  CarouselImagesUpdatedByChildrenId = 'carouselImages___updatedBy___children___id',
  CarouselImagesUpdatedByCreatedAt = 'carouselImages___updatedBy___createdAt',
  CarouselImagesUpdatedById = 'carouselImages___updatedBy___id',
  CarouselImagesUpdatedByInternalContent = 'carouselImages___updatedBy___internal___content',
  CarouselImagesUpdatedByInternalContentDigest = 'carouselImages___updatedBy___internal___contentDigest',
  CarouselImagesUpdatedByInternalDescription = 'carouselImages___updatedBy___internal___description',
  CarouselImagesUpdatedByInternalFieldOwners = 'carouselImages___updatedBy___internal___fieldOwners',
  CarouselImagesUpdatedByInternalIgnoreType = 'carouselImages___updatedBy___internal___ignoreType',
  CarouselImagesUpdatedByInternalMediaType = 'carouselImages___updatedBy___internal___mediaType',
  CarouselImagesUpdatedByInternalOwner = 'carouselImages___updatedBy___internal___owner',
  CarouselImagesUpdatedByInternalType = 'carouselImages___updatedBy___internal___type',
  CarouselImagesUpdatedByIsActive = 'carouselImages___updatedBy___isActive',
  CarouselImagesUpdatedByKind = 'carouselImages___updatedBy___kind',
  CarouselImagesUpdatedByName = 'carouselImages___updatedBy___name',
  CarouselImagesUpdatedByParentChildren = 'carouselImages___updatedBy___parent___children',
  CarouselImagesUpdatedByParentId = 'carouselImages___updatedBy___parent___id',
  CarouselImagesUpdatedByPicture = 'carouselImages___updatedBy___picture',
  CarouselImagesUpdatedByPublishedAt = 'carouselImages___updatedBy___publishedAt',
  CarouselImagesUpdatedByRemoteId = 'carouselImages___updatedBy___remoteId',
  CarouselImagesUpdatedByRemoteTypeName = 'carouselImages___updatedBy___remoteTypeName',
  CarouselImagesUpdatedByStage = 'carouselImages___updatedBy___stage',
  CarouselImagesUpdatedByUpdatedAt = 'carouselImages___updatedBy___updatedAt',
  CarouselImagesUrl = 'carouselImages___url',
  CarouselImagesWidth = 'carouselImages___width',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CreatedAt = 'createdAt',
  CreatedByChildren = 'createdBy___children',
  CreatedByChildrenChildren = 'createdBy___children___children',
  CreatedByChildrenChildrenChildren = 'createdBy___children___children___children',
  CreatedByChildrenChildrenId = 'createdBy___children___children___id',
  CreatedByChildrenId = 'createdBy___children___id',
  CreatedByChildrenInternalContent = 'createdBy___children___internal___content',
  CreatedByChildrenInternalContentDigest = 'createdBy___children___internal___contentDigest',
  CreatedByChildrenInternalDescription = 'createdBy___children___internal___description',
  CreatedByChildrenInternalFieldOwners = 'createdBy___children___internal___fieldOwners',
  CreatedByChildrenInternalIgnoreType = 'createdBy___children___internal___ignoreType',
  CreatedByChildrenInternalMediaType = 'createdBy___children___internal___mediaType',
  CreatedByChildrenInternalOwner = 'createdBy___children___internal___owner',
  CreatedByChildrenInternalType = 'createdBy___children___internal___type',
  CreatedByChildrenParentChildren = 'createdBy___children___parent___children',
  CreatedByChildrenParentId = 'createdBy___children___parent___id',
  CreatedByCreatedAt = 'createdBy___createdAt',
  CreatedById = 'createdBy___id',
  CreatedByInternalContent = 'createdBy___internal___content',
  CreatedByInternalContentDigest = 'createdBy___internal___contentDigest',
  CreatedByInternalDescription = 'createdBy___internal___description',
  CreatedByInternalFieldOwners = 'createdBy___internal___fieldOwners',
  CreatedByInternalIgnoreType = 'createdBy___internal___ignoreType',
  CreatedByInternalMediaType = 'createdBy___internal___mediaType',
  CreatedByInternalOwner = 'createdBy___internal___owner',
  CreatedByInternalType = 'createdBy___internal___type',
  CreatedByIsActive = 'createdBy___isActive',
  CreatedByKind = 'createdBy___kind',
  CreatedByName = 'createdBy___name',
  CreatedByParentChildren = 'createdBy___parent___children',
  CreatedByParentChildrenChildren = 'createdBy___parent___children___children',
  CreatedByParentChildrenId = 'createdBy___parent___children___id',
  CreatedByParentId = 'createdBy___parent___id',
  CreatedByParentInternalContent = 'createdBy___parent___internal___content',
  CreatedByParentInternalContentDigest = 'createdBy___parent___internal___contentDigest',
  CreatedByParentInternalDescription = 'createdBy___parent___internal___description',
  CreatedByParentInternalFieldOwners = 'createdBy___parent___internal___fieldOwners',
  CreatedByParentInternalIgnoreType = 'createdBy___parent___internal___ignoreType',
  CreatedByParentInternalMediaType = 'createdBy___parent___internal___mediaType',
  CreatedByParentInternalOwner = 'createdBy___parent___internal___owner',
  CreatedByParentInternalType = 'createdBy___parent___internal___type',
  CreatedByParentParentChildren = 'createdBy___parent___parent___children',
  CreatedByParentParentId = 'createdBy___parent___parent___id',
  CreatedByPicture = 'createdBy___picture',
  CreatedByPublishedAt = 'createdBy___publishedAt',
  CreatedByRemoteId = 'createdBy___remoteId',
  CreatedByRemoteTypeName = 'createdBy___remoteTypeName',
  CreatedByStage = 'createdBy___stage',
  CreatedByUpdatedAt = 'createdBy___updatedAt',
  Description = 'description',
  GatsbyPath = 'gatsbyPath',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Links = 'links',
  LinksChildren = 'links___children',
  LinksChildrenChildren = 'links___children___children',
  LinksChildrenChildrenChildren = 'links___children___children___children',
  LinksChildrenChildrenId = 'links___children___children___id',
  LinksChildrenId = 'links___children___id',
  LinksChildrenInternalContent = 'links___children___internal___content',
  LinksChildrenInternalContentDigest = 'links___children___internal___contentDigest',
  LinksChildrenInternalDescription = 'links___children___internal___description',
  LinksChildrenInternalFieldOwners = 'links___children___internal___fieldOwners',
  LinksChildrenInternalIgnoreType = 'links___children___internal___ignoreType',
  LinksChildrenInternalMediaType = 'links___children___internal___mediaType',
  LinksChildrenInternalOwner = 'links___children___internal___owner',
  LinksChildrenInternalType = 'links___children___internal___type',
  LinksChildrenParentChildren = 'links___children___parent___children',
  LinksChildrenParentId = 'links___children___parent___id',
  LinksCreatedAt = 'links___createdAt',
  LinksCreatedByChildren = 'links___createdBy___children',
  LinksCreatedByChildrenChildren = 'links___createdBy___children___children',
  LinksCreatedByChildrenId = 'links___createdBy___children___id',
  LinksCreatedByCreatedAt = 'links___createdBy___createdAt',
  LinksCreatedById = 'links___createdBy___id',
  LinksCreatedByInternalContent = 'links___createdBy___internal___content',
  LinksCreatedByInternalContentDigest = 'links___createdBy___internal___contentDigest',
  LinksCreatedByInternalDescription = 'links___createdBy___internal___description',
  LinksCreatedByInternalFieldOwners = 'links___createdBy___internal___fieldOwners',
  LinksCreatedByInternalIgnoreType = 'links___createdBy___internal___ignoreType',
  LinksCreatedByInternalMediaType = 'links___createdBy___internal___mediaType',
  LinksCreatedByInternalOwner = 'links___createdBy___internal___owner',
  LinksCreatedByInternalType = 'links___createdBy___internal___type',
  LinksCreatedByIsActive = 'links___createdBy___isActive',
  LinksCreatedByKind = 'links___createdBy___kind',
  LinksCreatedByName = 'links___createdBy___name',
  LinksCreatedByParentChildren = 'links___createdBy___parent___children',
  LinksCreatedByParentId = 'links___createdBy___parent___id',
  LinksCreatedByPicture = 'links___createdBy___picture',
  LinksCreatedByPublishedAt = 'links___createdBy___publishedAt',
  LinksCreatedByRemoteId = 'links___createdBy___remoteId',
  LinksCreatedByRemoteTypeName = 'links___createdBy___remoteTypeName',
  LinksCreatedByStage = 'links___createdBy___stage',
  LinksCreatedByUpdatedAt = 'links___createdBy___updatedAt',
  LinksId = 'links___id',
  LinksInternalContent = 'links___internal___content',
  LinksInternalContentDigest = 'links___internal___contentDigest',
  LinksInternalDescription = 'links___internal___description',
  LinksInternalFieldOwners = 'links___internal___fieldOwners',
  LinksInternalIgnoreType = 'links___internal___ignoreType',
  LinksInternalMediaType = 'links___internal___mediaType',
  LinksInternalOwner = 'links___internal___owner',
  LinksInternalType = 'links___internal___type',
  LinksParentChildren = 'links___parent___children',
  LinksParentChildrenChildren = 'links___parent___children___children',
  LinksParentChildrenId = 'links___parent___children___id',
  LinksParentId = 'links___parent___id',
  LinksParentInternalContent = 'links___parent___internal___content',
  LinksParentInternalContentDigest = 'links___parent___internal___contentDigest',
  LinksParentInternalDescription = 'links___parent___internal___description',
  LinksParentInternalFieldOwners = 'links___parent___internal___fieldOwners',
  LinksParentInternalIgnoreType = 'links___parent___internal___ignoreType',
  LinksParentInternalMediaType = 'links___parent___internal___mediaType',
  LinksParentInternalOwner = 'links___parent___internal___owner',
  LinksParentInternalType = 'links___parent___internal___type',
  LinksParentParentChildren = 'links___parent___parent___children',
  LinksParentParentId = 'links___parent___parent___id',
  LinksPublishedAt = 'links___publishedAt',
  LinksPublishedByChildren = 'links___publishedBy___children',
  LinksPublishedByChildrenChildren = 'links___publishedBy___children___children',
  LinksPublishedByChildrenId = 'links___publishedBy___children___id',
  LinksPublishedByCreatedAt = 'links___publishedBy___createdAt',
  LinksPublishedById = 'links___publishedBy___id',
  LinksPublishedByInternalContent = 'links___publishedBy___internal___content',
  LinksPublishedByInternalContentDigest = 'links___publishedBy___internal___contentDigest',
  LinksPublishedByInternalDescription = 'links___publishedBy___internal___description',
  LinksPublishedByInternalFieldOwners = 'links___publishedBy___internal___fieldOwners',
  LinksPublishedByInternalIgnoreType = 'links___publishedBy___internal___ignoreType',
  LinksPublishedByInternalMediaType = 'links___publishedBy___internal___mediaType',
  LinksPublishedByInternalOwner = 'links___publishedBy___internal___owner',
  LinksPublishedByInternalType = 'links___publishedBy___internal___type',
  LinksPublishedByIsActive = 'links___publishedBy___isActive',
  LinksPublishedByKind = 'links___publishedBy___kind',
  LinksPublishedByName = 'links___publishedBy___name',
  LinksPublishedByParentChildren = 'links___publishedBy___parent___children',
  LinksPublishedByParentId = 'links___publishedBy___parent___id',
  LinksPublishedByPicture = 'links___publishedBy___picture',
  LinksPublishedByPublishedAt = 'links___publishedBy___publishedAt',
  LinksPublishedByRemoteId = 'links___publishedBy___remoteId',
  LinksPublishedByRemoteTypeName = 'links___publishedBy___remoteTypeName',
  LinksPublishedByStage = 'links___publishedBy___stage',
  LinksPublishedByUpdatedAt = 'links___publishedBy___updatedAt',
  LinksRemoteId = 'links___remoteId',
  LinksRemoteTypeName = 'links___remoteTypeName',
  LinksScheduledIn = 'links___scheduledIn',
  LinksScheduledInChildren = 'links___scheduledIn___children',
  LinksScheduledInChildrenChildren = 'links___scheduledIn___children___children',
  LinksScheduledInChildrenId = 'links___scheduledIn___children___id',
  LinksScheduledInCreatedAt = 'links___scheduledIn___createdAt',
  LinksScheduledInCreatedByChildren = 'links___scheduledIn___createdBy___children',
  LinksScheduledInCreatedByCreatedAt = 'links___scheduledIn___createdBy___createdAt',
  LinksScheduledInCreatedById = 'links___scheduledIn___createdBy___id',
  LinksScheduledInCreatedByIsActive = 'links___scheduledIn___createdBy___isActive',
  LinksScheduledInCreatedByKind = 'links___scheduledIn___createdBy___kind',
  LinksScheduledInCreatedByName = 'links___scheduledIn___createdBy___name',
  LinksScheduledInCreatedByPicture = 'links___scheduledIn___createdBy___picture',
  LinksScheduledInCreatedByPublishedAt = 'links___scheduledIn___createdBy___publishedAt',
  LinksScheduledInCreatedByRemoteId = 'links___scheduledIn___createdBy___remoteId',
  LinksScheduledInCreatedByRemoteTypeName = 'links___scheduledIn___createdBy___remoteTypeName',
  LinksScheduledInCreatedByStage = 'links___scheduledIn___createdBy___stage',
  LinksScheduledInCreatedByUpdatedAt = 'links___scheduledIn___createdBy___updatedAt',
  LinksScheduledInDescription = 'links___scheduledIn___description',
  LinksScheduledInErrorMessage = 'links___scheduledIn___errorMessage',
  LinksScheduledInId = 'links___scheduledIn___id',
  LinksScheduledInInternalContent = 'links___scheduledIn___internal___content',
  LinksScheduledInInternalContentDigest = 'links___scheduledIn___internal___contentDigest',
  LinksScheduledInInternalDescription = 'links___scheduledIn___internal___description',
  LinksScheduledInInternalFieldOwners = 'links___scheduledIn___internal___fieldOwners',
  LinksScheduledInInternalIgnoreType = 'links___scheduledIn___internal___ignoreType',
  LinksScheduledInInternalMediaType = 'links___scheduledIn___internal___mediaType',
  LinksScheduledInInternalOwner = 'links___scheduledIn___internal___owner',
  LinksScheduledInInternalType = 'links___scheduledIn___internal___type',
  LinksScheduledInParentChildren = 'links___scheduledIn___parent___children',
  LinksScheduledInParentId = 'links___scheduledIn___parent___id',
  LinksScheduledInPublishedAt = 'links___scheduledIn___publishedAt',
  LinksScheduledInPublishedByChildren = 'links___scheduledIn___publishedBy___children',
  LinksScheduledInPublishedByCreatedAt = 'links___scheduledIn___publishedBy___createdAt',
  LinksScheduledInPublishedById = 'links___scheduledIn___publishedBy___id',
  LinksScheduledInPublishedByIsActive = 'links___scheduledIn___publishedBy___isActive',
  LinksScheduledInPublishedByKind = 'links___scheduledIn___publishedBy___kind',
  LinksScheduledInPublishedByName = 'links___scheduledIn___publishedBy___name',
  LinksScheduledInPublishedByPicture = 'links___scheduledIn___publishedBy___picture',
  LinksScheduledInPublishedByPublishedAt = 'links___scheduledIn___publishedBy___publishedAt',
  LinksScheduledInPublishedByRemoteId = 'links___scheduledIn___publishedBy___remoteId',
  LinksScheduledInPublishedByRemoteTypeName = 'links___scheduledIn___publishedBy___remoteTypeName',
  LinksScheduledInPublishedByStage = 'links___scheduledIn___publishedBy___stage',
  LinksScheduledInPublishedByUpdatedAt = 'links___scheduledIn___publishedBy___updatedAt',
  LinksScheduledInRawPayload = 'links___scheduledIn___rawPayload',
  LinksScheduledInReleaseChildren = 'links___scheduledIn___release___children',
  LinksScheduledInReleaseCreatedAt = 'links___scheduledIn___release___createdAt',
  LinksScheduledInReleaseDescription = 'links___scheduledIn___release___description',
  LinksScheduledInReleaseErrorMessage = 'links___scheduledIn___release___errorMessage',
  LinksScheduledInReleaseId = 'links___scheduledIn___release___id',
  LinksScheduledInReleaseIsActive = 'links___scheduledIn___release___isActive',
  LinksScheduledInReleaseIsImplicit = 'links___scheduledIn___release___isImplicit',
  LinksScheduledInReleaseOperations = 'links___scheduledIn___release___operations',
  LinksScheduledInReleasePublishedAt = 'links___scheduledIn___release___publishedAt',
  LinksScheduledInReleaseReleaseAt = 'links___scheduledIn___release___releaseAt',
  LinksScheduledInReleaseRemoteId = 'links___scheduledIn___release___remoteId',
  LinksScheduledInReleaseRemoteTypeName = 'links___scheduledIn___release___remoteTypeName',
  LinksScheduledInReleaseStage = 'links___scheduledIn___release___stage',
  LinksScheduledInReleaseStatus = 'links___scheduledIn___release___status',
  LinksScheduledInReleaseTitle = 'links___scheduledIn___release___title',
  LinksScheduledInReleaseUpdatedAt = 'links___scheduledIn___release___updatedAt',
  LinksScheduledInRemoteId = 'links___scheduledIn___remoteId',
  LinksScheduledInRemoteTypeName = 'links___scheduledIn___remoteTypeName',
  LinksScheduledInStage = 'links___scheduledIn___stage',
  LinksScheduledInStatus = 'links___scheduledIn___status',
  LinksScheduledInUpdatedAt = 'links___scheduledIn___updatedAt',
  LinksScheduledInUpdatedByChildren = 'links___scheduledIn___updatedBy___children',
  LinksScheduledInUpdatedByCreatedAt = 'links___scheduledIn___updatedBy___createdAt',
  LinksScheduledInUpdatedById = 'links___scheduledIn___updatedBy___id',
  LinksScheduledInUpdatedByIsActive = 'links___scheduledIn___updatedBy___isActive',
  LinksScheduledInUpdatedByKind = 'links___scheduledIn___updatedBy___kind',
  LinksScheduledInUpdatedByName = 'links___scheduledIn___updatedBy___name',
  LinksScheduledInUpdatedByPicture = 'links___scheduledIn___updatedBy___picture',
  LinksScheduledInUpdatedByPublishedAt = 'links___scheduledIn___updatedBy___publishedAt',
  LinksScheduledInUpdatedByRemoteId = 'links___scheduledIn___updatedBy___remoteId',
  LinksScheduledInUpdatedByRemoteTypeName = 'links___scheduledIn___updatedBy___remoteTypeName',
  LinksScheduledInUpdatedByStage = 'links___scheduledIn___updatedBy___stage',
  LinksScheduledInUpdatedByUpdatedAt = 'links___scheduledIn___updatedBy___updatedAt',
  LinksStage = 'links___stage',
  LinksTitle = 'links___title',
  LinksType = 'links___type',
  LinksUpdatedAt = 'links___updatedAt',
  LinksUpdatedByChildren = 'links___updatedBy___children',
  LinksUpdatedByChildrenChildren = 'links___updatedBy___children___children',
  LinksUpdatedByChildrenId = 'links___updatedBy___children___id',
  LinksUpdatedByCreatedAt = 'links___updatedBy___createdAt',
  LinksUpdatedById = 'links___updatedBy___id',
  LinksUpdatedByInternalContent = 'links___updatedBy___internal___content',
  LinksUpdatedByInternalContentDigest = 'links___updatedBy___internal___contentDigest',
  LinksUpdatedByInternalDescription = 'links___updatedBy___internal___description',
  LinksUpdatedByInternalFieldOwners = 'links___updatedBy___internal___fieldOwners',
  LinksUpdatedByInternalIgnoreType = 'links___updatedBy___internal___ignoreType',
  LinksUpdatedByInternalMediaType = 'links___updatedBy___internal___mediaType',
  LinksUpdatedByInternalOwner = 'links___updatedBy___internal___owner',
  LinksUpdatedByInternalType = 'links___updatedBy___internal___type',
  LinksUpdatedByIsActive = 'links___updatedBy___isActive',
  LinksUpdatedByKind = 'links___updatedBy___kind',
  LinksUpdatedByName = 'links___updatedBy___name',
  LinksUpdatedByParentChildren = 'links___updatedBy___parent___children',
  LinksUpdatedByParentId = 'links___updatedBy___parent___id',
  LinksUpdatedByPicture = 'links___updatedBy___picture',
  LinksUpdatedByPublishedAt = 'links___updatedBy___publishedAt',
  LinksUpdatedByRemoteId = 'links___updatedBy___remoteId',
  LinksUpdatedByRemoteTypeName = 'links___updatedBy___remoteTypeName',
  LinksUpdatedByStage = 'links___updatedBy___stage',
  LinksUpdatedByUpdatedAt = 'links___updatedBy___updatedAt',
  LinksUrl = 'links___url',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PublishedAt = 'publishedAt',
  PublishedByChildren = 'publishedBy___children',
  PublishedByChildrenChildren = 'publishedBy___children___children',
  PublishedByChildrenChildrenChildren = 'publishedBy___children___children___children',
  PublishedByChildrenChildrenId = 'publishedBy___children___children___id',
  PublishedByChildrenId = 'publishedBy___children___id',
  PublishedByChildrenInternalContent = 'publishedBy___children___internal___content',
  PublishedByChildrenInternalContentDigest = 'publishedBy___children___internal___contentDigest',
  PublishedByChildrenInternalDescription = 'publishedBy___children___internal___description',
  PublishedByChildrenInternalFieldOwners = 'publishedBy___children___internal___fieldOwners',
  PublishedByChildrenInternalIgnoreType = 'publishedBy___children___internal___ignoreType',
  PublishedByChildrenInternalMediaType = 'publishedBy___children___internal___mediaType',
  PublishedByChildrenInternalOwner = 'publishedBy___children___internal___owner',
  PublishedByChildrenInternalType = 'publishedBy___children___internal___type',
  PublishedByChildrenParentChildren = 'publishedBy___children___parent___children',
  PublishedByChildrenParentId = 'publishedBy___children___parent___id',
  PublishedByCreatedAt = 'publishedBy___createdAt',
  PublishedById = 'publishedBy___id',
  PublishedByInternalContent = 'publishedBy___internal___content',
  PublishedByInternalContentDigest = 'publishedBy___internal___contentDigest',
  PublishedByInternalDescription = 'publishedBy___internal___description',
  PublishedByInternalFieldOwners = 'publishedBy___internal___fieldOwners',
  PublishedByInternalIgnoreType = 'publishedBy___internal___ignoreType',
  PublishedByInternalMediaType = 'publishedBy___internal___mediaType',
  PublishedByInternalOwner = 'publishedBy___internal___owner',
  PublishedByInternalType = 'publishedBy___internal___type',
  PublishedByIsActive = 'publishedBy___isActive',
  PublishedByKind = 'publishedBy___kind',
  PublishedByName = 'publishedBy___name',
  PublishedByParentChildren = 'publishedBy___parent___children',
  PublishedByParentChildrenChildren = 'publishedBy___parent___children___children',
  PublishedByParentChildrenId = 'publishedBy___parent___children___id',
  PublishedByParentId = 'publishedBy___parent___id',
  PublishedByParentInternalContent = 'publishedBy___parent___internal___content',
  PublishedByParentInternalContentDigest = 'publishedBy___parent___internal___contentDigest',
  PublishedByParentInternalDescription = 'publishedBy___parent___internal___description',
  PublishedByParentInternalFieldOwners = 'publishedBy___parent___internal___fieldOwners',
  PublishedByParentInternalIgnoreType = 'publishedBy___parent___internal___ignoreType',
  PublishedByParentInternalMediaType = 'publishedBy___parent___internal___mediaType',
  PublishedByParentInternalOwner = 'publishedBy___parent___internal___owner',
  PublishedByParentInternalType = 'publishedBy___parent___internal___type',
  PublishedByParentParentChildren = 'publishedBy___parent___parent___children',
  PublishedByParentParentId = 'publishedBy___parent___parent___id',
  PublishedByPicture = 'publishedBy___picture',
  PublishedByPublishedAt = 'publishedBy___publishedAt',
  PublishedByRemoteId = 'publishedBy___remoteId',
  PublishedByRemoteTypeName = 'publishedBy___remoteTypeName',
  PublishedByStage = 'publishedBy___stage',
  PublishedByUpdatedAt = 'publishedBy___updatedAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  ScheduledIn = 'scheduledIn',
  ScheduledInChildren = 'scheduledIn___children',
  ScheduledInChildrenChildren = 'scheduledIn___children___children',
  ScheduledInChildrenChildrenChildren = 'scheduledIn___children___children___children',
  ScheduledInChildrenChildrenId = 'scheduledIn___children___children___id',
  ScheduledInChildrenId = 'scheduledIn___children___id',
  ScheduledInChildrenInternalContent = 'scheduledIn___children___internal___content',
  ScheduledInChildrenInternalContentDigest = 'scheduledIn___children___internal___contentDigest',
  ScheduledInChildrenInternalDescription = 'scheduledIn___children___internal___description',
  ScheduledInChildrenInternalFieldOwners = 'scheduledIn___children___internal___fieldOwners',
  ScheduledInChildrenInternalIgnoreType = 'scheduledIn___children___internal___ignoreType',
  ScheduledInChildrenInternalMediaType = 'scheduledIn___children___internal___mediaType',
  ScheduledInChildrenInternalOwner = 'scheduledIn___children___internal___owner',
  ScheduledInChildrenInternalType = 'scheduledIn___children___internal___type',
  ScheduledInChildrenParentChildren = 'scheduledIn___children___parent___children',
  ScheduledInChildrenParentId = 'scheduledIn___children___parent___id',
  ScheduledInCreatedAt = 'scheduledIn___createdAt',
  ScheduledInCreatedByChildren = 'scheduledIn___createdBy___children',
  ScheduledInCreatedByChildrenChildren = 'scheduledIn___createdBy___children___children',
  ScheduledInCreatedByChildrenId = 'scheduledIn___createdBy___children___id',
  ScheduledInCreatedByCreatedAt = 'scheduledIn___createdBy___createdAt',
  ScheduledInCreatedById = 'scheduledIn___createdBy___id',
  ScheduledInCreatedByInternalContent = 'scheduledIn___createdBy___internal___content',
  ScheduledInCreatedByInternalContentDigest = 'scheduledIn___createdBy___internal___contentDigest',
  ScheduledInCreatedByInternalDescription = 'scheduledIn___createdBy___internal___description',
  ScheduledInCreatedByInternalFieldOwners = 'scheduledIn___createdBy___internal___fieldOwners',
  ScheduledInCreatedByInternalIgnoreType = 'scheduledIn___createdBy___internal___ignoreType',
  ScheduledInCreatedByInternalMediaType = 'scheduledIn___createdBy___internal___mediaType',
  ScheduledInCreatedByInternalOwner = 'scheduledIn___createdBy___internal___owner',
  ScheduledInCreatedByInternalType = 'scheduledIn___createdBy___internal___type',
  ScheduledInCreatedByIsActive = 'scheduledIn___createdBy___isActive',
  ScheduledInCreatedByKind = 'scheduledIn___createdBy___kind',
  ScheduledInCreatedByName = 'scheduledIn___createdBy___name',
  ScheduledInCreatedByParentChildren = 'scheduledIn___createdBy___parent___children',
  ScheduledInCreatedByParentId = 'scheduledIn___createdBy___parent___id',
  ScheduledInCreatedByPicture = 'scheduledIn___createdBy___picture',
  ScheduledInCreatedByPublishedAt = 'scheduledIn___createdBy___publishedAt',
  ScheduledInCreatedByRemoteId = 'scheduledIn___createdBy___remoteId',
  ScheduledInCreatedByRemoteTypeName = 'scheduledIn___createdBy___remoteTypeName',
  ScheduledInCreatedByStage = 'scheduledIn___createdBy___stage',
  ScheduledInCreatedByUpdatedAt = 'scheduledIn___createdBy___updatedAt',
  ScheduledInDescription = 'scheduledIn___description',
  ScheduledInErrorMessage = 'scheduledIn___errorMessage',
  ScheduledInId = 'scheduledIn___id',
  ScheduledInInternalContent = 'scheduledIn___internal___content',
  ScheduledInInternalContentDigest = 'scheduledIn___internal___contentDigest',
  ScheduledInInternalDescription = 'scheduledIn___internal___description',
  ScheduledInInternalFieldOwners = 'scheduledIn___internal___fieldOwners',
  ScheduledInInternalIgnoreType = 'scheduledIn___internal___ignoreType',
  ScheduledInInternalMediaType = 'scheduledIn___internal___mediaType',
  ScheduledInInternalOwner = 'scheduledIn___internal___owner',
  ScheduledInInternalType = 'scheduledIn___internal___type',
  ScheduledInParentChildren = 'scheduledIn___parent___children',
  ScheduledInParentChildrenChildren = 'scheduledIn___parent___children___children',
  ScheduledInParentChildrenId = 'scheduledIn___parent___children___id',
  ScheduledInParentId = 'scheduledIn___parent___id',
  ScheduledInParentInternalContent = 'scheduledIn___parent___internal___content',
  ScheduledInParentInternalContentDigest = 'scheduledIn___parent___internal___contentDigest',
  ScheduledInParentInternalDescription = 'scheduledIn___parent___internal___description',
  ScheduledInParentInternalFieldOwners = 'scheduledIn___parent___internal___fieldOwners',
  ScheduledInParentInternalIgnoreType = 'scheduledIn___parent___internal___ignoreType',
  ScheduledInParentInternalMediaType = 'scheduledIn___parent___internal___mediaType',
  ScheduledInParentInternalOwner = 'scheduledIn___parent___internal___owner',
  ScheduledInParentInternalType = 'scheduledIn___parent___internal___type',
  ScheduledInParentParentChildren = 'scheduledIn___parent___parent___children',
  ScheduledInParentParentId = 'scheduledIn___parent___parent___id',
  ScheduledInPublishedAt = 'scheduledIn___publishedAt',
  ScheduledInPublishedByChildren = 'scheduledIn___publishedBy___children',
  ScheduledInPublishedByChildrenChildren = 'scheduledIn___publishedBy___children___children',
  ScheduledInPublishedByChildrenId = 'scheduledIn___publishedBy___children___id',
  ScheduledInPublishedByCreatedAt = 'scheduledIn___publishedBy___createdAt',
  ScheduledInPublishedById = 'scheduledIn___publishedBy___id',
  ScheduledInPublishedByInternalContent = 'scheduledIn___publishedBy___internal___content',
  ScheduledInPublishedByInternalContentDigest = 'scheduledIn___publishedBy___internal___contentDigest',
  ScheduledInPublishedByInternalDescription = 'scheduledIn___publishedBy___internal___description',
  ScheduledInPublishedByInternalFieldOwners = 'scheduledIn___publishedBy___internal___fieldOwners',
  ScheduledInPublishedByInternalIgnoreType = 'scheduledIn___publishedBy___internal___ignoreType',
  ScheduledInPublishedByInternalMediaType = 'scheduledIn___publishedBy___internal___mediaType',
  ScheduledInPublishedByInternalOwner = 'scheduledIn___publishedBy___internal___owner',
  ScheduledInPublishedByInternalType = 'scheduledIn___publishedBy___internal___type',
  ScheduledInPublishedByIsActive = 'scheduledIn___publishedBy___isActive',
  ScheduledInPublishedByKind = 'scheduledIn___publishedBy___kind',
  ScheduledInPublishedByName = 'scheduledIn___publishedBy___name',
  ScheduledInPublishedByParentChildren = 'scheduledIn___publishedBy___parent___children',
  ScheduledInPublishedByParentId = 'scheduledIn___publishedBy___parent___id',
  ScheduledInPublishedByPicture = 'scheduledIn___publishedBy___picture',
  ScheduledInPublishedByPublishedAt = 'scheduledIn___publishedBy___publishedAt',
  ScheduledInPublishedByRemoteId = 'scheduledIn___publishedBy___remoteId',
  ScheduledInPublishedByRemoteTypeName = 'scheduledIn___publishedBy___remoteTypeName',
  ScheduledInPublishedByStage = 'scheduledIn___publishedBy___stage',
  ScheduledInPublishedByUpdatedAt = 'scheduledIn___publishedBy___updatedAt',
  ScheduledInRawPayload = 'scheduledIn___rawPayload',
  ScheduledInReleaseChildren = 'scheduledIn___release___children',
  ScheduledInReleaseChildrenChildren = 'scheduledIn___release___children___children',
  ScheduledInReleaseChildrenId = 'scheduledIn___release___children___id',
  ScheduledInReleaseCreatedAt = 'scheduledIn___release___createdAt',
  ScheduledInReleaseCreatedByChildren = 'scheduledIn___release___createdBy___children',
  ScheduledInReleaseCreatedByCreatedAt = 'scheduledIn___release___createdBy___createdAt',
  ScheduledInReleaseCreatedById = 'scheduledIn___release___createdBy___id',
  ScheduledInReleaseCreatedByIsActive = 'scheduledIn___release___createdBy___isActive',
  ScheduledInReleaseCreatedByKind = 'scheduledIn___release___createdBy___kind',
  ScheduledInReleaseCreatedByName = 'scheduledIn___release___createdBy___name',
  ScheduledInReleaseCreatedByPicture = 'scheduledIn___release___createdBy___picture',
  ScheduledInReleaseCreatedByPublishedAt = 'scheduledIn___release___createdBy___publishedAt',
  ScheduledInReleaseCreatedByRemoteId = 'scheduledIn___release___createdBy___remoteId',
  ScheduledInReleaseCreatedByRemoteTypeName = 'scheduledIn___release___createdBy___remoteTypeName',
  ScheduledInReleaseCreatedByStage = 'scheduledIn___release___createdBy___stage',
  ScheduledInReleaseCreatedByUpdatedAt = 'scheduledIn___release___createdBy___updatedAt',
  ScheduledInReleaseDescription = 'scheduledIn___release___description',
  ScheduledInReleaseErrorMessage = 'scheduledIn___release___errorMessage',
  ScheduledInReleaseId = 'scheduledIn___release___id',
  ScheduledInReleaseInternalContent = 'scheduledIn___release___internal___content',
  ScheduledInReleaseInternalContentDigest = 'scheduledIn___release___internal___contentDigest',
  ScheduledInReleaseInternalDescription = 'scheduledIn___release___internal___description',
  ScheduledInReleaseInternalFieldOwners = 'scheduledIn___release___internal___fieldOwners',
  ScheduledInReleaseInternalIgnoreType = 'scheduledIn___release___internal___ignoreType',
  ScheduledInReleaseInternalMediaType = 'scheduledIn___release___internal___mediaType',
  ScheduledInReleaseInternalOwner = 'scheduledIn___release___internal___owner',
  ScheduledInReleaseInternalType = 'scheduledIn___release___internal___type',
  ScheduledInReleaseIsActive = 'scheduledIn___release___isActive',
  ScheduledInReleaseIsImplicit = 'scheduledIn___release___isImplicit',
  ScheduledInReleaseOperations = 'scheduledIn___release___operations',
  ScheduledInReleaseOperationsChildren = 'scheduledIn___release___operations___children',
  ScheduledInReleaseOperationsCreatedAt = 'scheduledIn___release___operations___createdAt',
  ScheduledInReleaseOperationsDescription = 'scheduledIn___release___operations___description',
  ScheduledInReleaseOperationsErrorMessage = 'scheduledIn___release___operations___errorMessage',
  ScheduledInReleaseOperationsId = 'scheduledIn___release___operations___id',
  ScheduledInReleaseOperationsPublishedAt = 'scheduledIn___release___operations___publishedAt',
  ScheduledInReleaseOperationsRawPayload = 'scheduledIn___release___operations___rawPayload',
  ScheduledInReleaseOperationsRemoteId = 'scheduledIn___release___operations___remoteId',
  ScheduledInReleaseOperationsRemoteTypeName = 'scheduledIn___release___operations___remoteTypeName',
  ScheduledInReleaseOperationsStage = 'scheduledIn___release___operations___stage',
  ScheduledInReleaseOperationsStatus = 'scheduledIn___release___operations___status',
  ScheduledInReleaseOperationsUpdatedAt = 'scheduledIn___release___operations___updatedAt',
  ScheduledInReleaseParentChildren = 'scheduledIn___release___parent___children',
  ScheduledInReleaseParentId = 'scheduledIn___release___parent___id',
  ScheduledInReleasePublishedAt = 'scheduledIn___release___publishedAt',
  ScheduledInReleasePublishedByChildren = 'scheduledIn___release___publishedBy___children',
  ScheduledInReleasePublishedByCreatedAt = 'scheduledIn___release___publishedBy___createdAt',
  ScheduledInReleasePublishedById = 'scheduledIn___release___publishedBy___id',
  ScheduledInReleasePublishedByIsActive = 'scheduledIn___release___publishedBy___isActive',
  ScheduledInReleasePublishedByKind = 'scheduledIn___release___publishedBy___kind',
  ScheduledInReleasePublishedByName = 'scheduledIn___release___publishedBy___name',
  ScheduledInReleasePublishedByPicture = 'scheduledIn___release___publishedBy___picture',
  ScheduledInReleasePublishedByPublishedAt = 'scheduledIn___release___publishedBy___publishedAt',
  ScheduledInReleasePublishedByRemoteId = 'scheduledIn___release___publishedBy___remoteId',
  ScheduledInReleasePublishedByRemoteTypeName = 'scheduledIn___release___publishedBy___remoteTypeName',
  ScheduledInReleasePublishedByStage = 'scheduledIn___release___publishedBy___stage',
  ScheduledInReleasePublishedByUpdatedAt = 'scheduledIn___release___publishedBy___updatedAt',
  ScheduledInReleaseReleaseAt = 'scheduledIn___release___releaseAt',
  ScheduledInReleaseRemoteId = 'scheduledIn___release___remoteId',
  ScheduledInReleaseRemoteTypeName = 'scheduledIn___release___remoteTypeName',
  ScheduledInReleaseStage = 'scheduledIn___release___stage',
  ScheduledInReleaseStatus = 'scheduledIn___release___status',
  ScheduledInReleaseTitle = 'scheduledIn___release___title',
  ScheduledInReleaseUpdatedAt = 'scheduledIn___release___updatedAt',
  ScheduledInReleaseUpdatedByChildren = 'scheduledIn___release___updatedBy___children',
  ScheduledInReleaseUpdatedByCreatedAt = 'scheduledIn___release___updatedBy___createdAt',
  ScheduledInReleaseUpdatedById = 'scheduledIn___release___updatedBy___id',
  ScheduledInReleaseUpdatedByIsActive = 'scheduledIn___release___updatedBy___isActive',
  ScheduledInReleaseUpdatedByKind = 'scheduledIn___release___updatedBy___kind',
  ScheduledInReleaseUpdatedByName = 'scheduledIn___release___updatedBy___name',
  ScheduledInReleaseUpdatedByPicture = 'scheduledIn___release___updatedBy___picture',
  ScheduledInReleaseUpdatedByPublishedAt = 'scheduledIn___release___updatedBy___publishedAt',
  ScheduledInReleaseUpdatedByRemoteId = 'scheduledIn___release___updatedBy___remoteId',
  ScheduledInReleaseUpdatedByRemoteTypeName = 'scheduledIn___release___updatedBy___remoteTypeName',
  ScheduledInReleaseUpdatedByStage = 'scheduledIn___release___updatedBy___stage',
  ScheduledInReleaseUpdatedByUpdatedAt = 'scheduledIn___release___updatedBy___updatedAt',
  ScheduledInRemoteId = 'scheduledIn___remoteId',
  ScheduledInRemoteTypeName = 'scheduledIn___remoteTypeName',
  ScheduledInStage = 'scheduledIn___stage',
  ScheduledInStatus = 'scheduledIn___status',
  ScheduledInUpdatedAt = 'scheduledIn___updatedAt',
  ScheduledInUpdatedByChildren = 'scheduledIn___updatedBy___children',
  ScheduledInUpdatedByChildrenChildren = 'scheduledIn___updatedBy___children___children',
  ScheduledInUpdatedByChildrenId = 'scheduledIn___updatedBy___children___id',
  ScheduledInUpdatedByCreatedAt = 'scheduledIn___updatedBy___createdAt',
  ScheduledInUpdatedById = 'scheduledIn___updatedBy___id',
  ScheduledInUpdatedByInternalContent = 'scheduledIn___updatedBy___internal___content',
  ScheduledInUpdatedByInternalContentDigest = 'scheduledIn___updatedBy___internal___contentDigest',
  ScheduledInUpdatedByInternalDescription = 'scheduledIn___updatedBy___internal___description',
  ScheduledInUpdatedByInternalFieldOwners = 'scheduledIn___updatedBy___internal___fieldOwners',
  ScheduledInUpdatedByInternalIgnoreType = 'scheduledIn___updatedBy___internal___ignoreType',
  ScheduledInUpdatedByInternalMediaType = 'scheduledIn___updatedBy___internal___mediaType',
  ScheduledInUpdatedByInternalOwner = 'scheduledIn___updatedBy___internal___owner',
  ScheduledInUpdatedByInternalType = 'scheduledIn___updatedBy___internal___type',
  ScheduledInUpdatedByIsActive = 'scheduledIn___updatedBy___isActive',
  ScheduledInUpdatedByKind = 'scheduledIn___updatedBy___kind',
  ScheduledInUpdatedByName = 'scheduledIn___updatedBy___name',
  ScheduledInUpdatedByParentChildren = 'scheduledIn___updatedBy___parent___children',
  ScheduledInUpdatedByParentId = 'scheduledIn___updatedBy___parent___id',
  ScheduledInUpdatedByPicture = 'scheduledIn___updatedBy___picture',
  ScheduledInUpdatedByPublishedAt = 'scheduledIn___updatedBy___publishedAt',
  ScheduledInUpdatedByRemoteId = 'scheduledIn___updatedBy___remoteId',
  ScheduledInUpdatedByRemoteTypeName = 'scheduledIn___updatedBy___remoteTypeName',
  ScheduledInUpdatedByStage = 'scheduledIn___updatedBy___stage',
  ScheduledInUpdatedByUpdatedAt = 'scheduledIn___updatedBy___updatedAt',
  Stage = 'stage',
  TechSheet = 'techSheet',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UpdatedByChildren = 'updatedBy___children',
  UpdatedByChildrenChildren = 'updatedBy___children___children',
  UpdatedByChildrenChildrenChildren = 'updatedBy___children___children___children',
  UpdatedByChildrenChildrenId = 'updatedBy___children___children___id',
  UpdatedByChildrenId = 'updatedBy___children___id',
  UpdatedByChildrenInternalContent = 'updatedBy___children___internal___content',
  UpdatedByChildrenInternalContentDigest = 'updatedBy___children___internal___contentDigest',
  UpdatedByChildrenInternalDescription = 'updatedBy___children___internal___description',
  UpdatedByChildrenInternalFieldOwners = 'updatedBy___children___internal___fieldOwners',
  UpdatedByChildrenInternalIgnoreType = 'updatedBy___children___internal___ignoreType',
  UpdatedByChildrenInternalMediaType = 'updatedBy___children___internal___mediaType',
  UpdatedByChildrenInternalOwner = 'updatedBy___children___internal___owner',
  UpdatedByChildrenInternalType = 'updatedBy___children___internal___type',
  UpdatedByChildrenParentChildren = 'updatedBy___children___parent___children',
  UpdatedByChildrenParentId = 'updatedBy___children___parent___id',
  UpdatedByCreatedAt = 'updatedBy___createdAt',
  UpdatedById = 'updatedBy___id',
  UpdatedByInternalContent = 'updatedBy___internal___content',
  UpdatedByInternalContentDigest = 'updatedBy___internal___contentDigest',
  UpdatedByInternalDescription = 'updatedBy___internal___description',
  UpdatedByInternalFieldOwners = 'updatedBy___internal___fieldOwners',
  UpdatedByInternalIgnoreType = 'updatedBy___internal___ignoreType',
  UpdatedByInternalMediaType = 'updatedBy___internal___mediaType',
  UpdatedByInternalOwner = 'updatedBy___internal___owner',
  UpdatedByInternalType = 'updatedBy___internal___type',
  UpdatedByIsActive = 'updatedBy___isActive',
  UpdatedByKind = 'updatedBy___kind',
  UpdatedByName = 'updatedBy___name',
  UpdatedByParentChildren = 'updatedBy___parent___children',
  UpdatedByParentChildrenChildren = 'updatedBy___parent___children___children',
  UpdatedByParentChildrenId = 'updatedBy___parent___children___id',
  UpdatedByParentId = 'updatedBy___parent___id',
  UpdatedByParentInternalContent = 'updatedBy___parent___internal___content',
  UpdatedByParentInternalContentDigest = 'updatedBy___parent___internal___contentDigest',
  UpdatedByParentInternalDescription = 'updatedBy___parent___internal___description',
  UpdatedByParentInternalFieldOwners = 'updatedBy___parent___internal___fieldOwners',
  UpdatedByParentInternalIgnoreType = 'updatedBy___parent___internal___ignoreType',
  UpdatedByParentInternalMediaType = 'updatedBy___parent___internal___mediaType',
  UpdatedByParentInternalOwner = 'updatedBy___parent___internal___owner',
  UpdatedByParentInternalType = 'updatedBy___parent___internal___type',
  UpdatedByParentParentChildren = 'updatedBy___parent___parent___children',
  UpdatedByParentParentId = 'updatedBy___parent___parent___id',
  UpdatedByPicture = 'updatedBy___picture',
  UpdatedByPublishedAt = 'updatedBy___publishedAt',
  UpdatedByRemoteId = 'updatedBy___remoteId',
  UpdatedByRemoteTypeName = 'updatedBy___remoteTypeName',
  UpdatedByStage = 'updatedBy___stage',
  UpdatedByUpdatedAt = 'updatedBy___updatedAt',
}

export type GraphCms_PortfolioItemFilterInput = {
  about?: InputMaybe<GraphCms_RichTextFilterInput>;
  carouselImages?: InputMaybe<GraphCms_AssetFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  links?: InputMaybe<GraphCms_LinkFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  techSheet?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
};

export type GraphCms_PortfolioItemFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_PortfolioItemFilterInput>;
};

export type GraphCms_PortfolioItemGroupConnection = {
  __typename?: 'GraphCMS_PortfolioItemGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_PortfolioItemEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GraphCms_PortfolioItemGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_PortfolioItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_PortfolioItemGroupConnectionDistinctArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
};

export type GraphCms_PortfolioItemGroupConnectionGroupArgs = {
  field: GraphCms_PortfolioItemFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type GraphCms_PortfolioItemSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_PortfolioItemFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type GraphCms_RichText = {
  __typename?: 'GraphCMS_RichText';
  html: Scalars['String'];
  markdown: Scalars['String'];
  raw: Scalars['JSON'];
  remoteTypeName: Scalars['String'];
  text: Scalars['String'];
};

export type GraphCms_RichTextFilterInput = {
  html?: InputMaybe<StringQueryOperatorInput>;
  markdown?: InputMaybe<StringQueryOperatorInput>;
  raw?: InputMaybe<JsonQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type GraphCms_ScheduledOperation = Node & {
  __typename?: 'GraphCMS_ScheduledOperation';
  affectedDocuments: Array<GraphCms_ScheduledOperationAffectedDocument>;
  children: Array<Node>;
  createdAt: Scalars['JSON'];
  createdBy?: Maybe<GraphCms_User>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
  publishedAt?: Maybe<Scalars['JSON']>;
  publishedBy?: Maybe<GraphCms_User>;
  rawPayload: Scalars['JSON'];
  release?: Maybe<GraphCms_ScheduledRelease>;
  remoteId: Scalars['ID'];
  remoteTypeName: Scalars['String'];
  stage: GraphCms_Stage;
  status: GraphCms_ScheduledOperationStatus;
  updatedAt: Scalars['JSON'];
  updatedBy?: Maybe<GraphCms_User>;
};

export type GraphCms_ScheduledOperationAffectedDocument = GraphCms_Asset | GraphCms_Link | GraphCms_PortfolioItem;

export type GraphCms_ScheduledOperationConnection = {
  __typename?: 'GraphCMS_ScheduledOperationConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_ScheduledOperationEdge>;
  group: Array<GraphCms_ScheduledOperationGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_ScheduledOperation>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_ScheduledOperationConnectionDistinctArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationConnectionGroupArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type GraphCms_ScheduledOperationEdge = {
  __typename?: 'GraphCMS_ScheduledOperationEdge';
  next?: Maybe<GraphCms_ScheduledOperation>;
  node: GraphCms_ScheduledOperation;
  previous?: Maybe<GraphCms_ScheduledOperation>;
};

export enum GraphCms_ScheduledOperationFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CreatedAt = 'createdAt',
  CreatedByChildren = 'createdBy___children',
  CreatedByChildrenChildren = 'createdBy___children___children',
  CreatedByChildrenChildrenChildren = 'createdBy___children___children___children',
  CreatedByChildrenChildrenId = 'createdBy___children___children___id',
  CreatedByChildrenId = 'createdBy___children___id',
  CreatedByChildrenInternalContent = 'createdBy___children___internal___content',
  CreatedByChildrenInternalContentDigest = 'createdBy___children___internal___contentDigest',
  CreatedByChildrenInternalDescription = 'createdBy___children___internal___description',
  CreatedByChildrenInternalFieldOwners = 'createdBy___children___internal___fieldOwners',
  CreatedByChildrenInternalIgnoreType = 'createdBy___children___internal___ignoreType',
  CreatedByChildrenInternalMediaType = 'createdBy___children___internal___mediaType',
  CreatedByChildrenInternalOwner = 'createdBy___children___internal___owner',
  CreatedByChildrenInternalType = 'createdBy___children___internal___type',
  CreatedByChildrenParentChildren = 'createdBy___children___parent___children',
  CreatedByChildrenParentId = 'createdBy___children___parent___id',
  CreatedByCreatedAt = 'createdBy___createdAt',
  CreatedById = 'createdBy___id',
  CreatedByInternalContent = 'createdBy___internal___content',
  CreatedByInternalContentDigest = 'createdBy___internal___contentDigest',
  CreatedByInternalDescription = 'createdBy___internal___description',
  CreatedByInternalFieldOwners = 'createdBy___internal___fieldOwners',
  CreatedByInternalIgnoreType = 'createdBy___internal___ignoreType',
  CreatedByInternalMediaType = 'createdBy___internal___mediaType',
  CreatedByInternalOwner = 'createdBy___internal___owner',
  CreatedByInternalType = 'createdBy___internal___type',
  CreatedByIsActive = 'createdBy___isActive',
  CreatedByKind = 'createdBy___kind',
  CreatedByName = 'createdBy___name',
  CreatedByParentChildren = 'createdBy___parent___children',
  CreatedByParentChildrenChildren = 'createdBy___parent___children___children',
  CreatedByParentChildrenId = 'createdBy___parent___children___id',
  CreatedByParentId = 'createdBy___parent___id',
  CreatedByParentInternalContent = 'createdBy___parent___internal___content',
  CreatedByParentInternalContentDigest = 'createdBy___parent___internal___contentDigest',
  CreatedByParentInternalDescription = 'createdBy___parent___internal___description',
  CreatedByParentInternalFieldOwners = 'createdBy___parent___internal___fieldOwners',
  CreatedByParentInternalIgnoreType = 'createdBy___parent___internal___ignoreType',
  CreatedByParentInternalMediaType = 'createdBy___parent___internal___mediaType',
  CreatedByParentInternalOwner = 'createdBy___parent___internal___owner',
  CreatedByParentInternalType = 'createdBy___parent___internal___type',
  CreatedByParentParentChildren = 'createdBy___parent___parent___children',
  CreatedByParentParentId = 'createdBy___parent___parent___id',
  CreatedByPicture = 'createdBy___picture',
  CreatedByPublishedAt = 'createdBy___publishedAt',
  CreatedByRemoteId = 'createdBy___remoteId',
  CreatedByRemoteTypeName = 'createdBy___remoteTypeName',
  CreatedByStage = 'createdBy___stage',
  CreatedByUpdatedAt = 'createdBy___updatedAt',
  Description = 'description',
  ErrorMessage = 'errorMessage',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PublishedAt = 'publishedAt',
  PublishedByChildren = 'publishedBy___children',
  PublishedByChildrenChildren = 'publishedBy___children___children',
  PublishedByChildrenChildrenChildren = 'publishedBy___children___children___children',
  PublishedByChildrenChildrenId = 'publishedBy___children___children___id',
  PublishedByChildrenId = 'publishedBy___children___id',
  PublishedByChildrenInternalContent = 'publishedBy___children___internal___content',
  PublishedByChildrenInternalContentDigest = 'publishedBy___children___internal___contentDigest',
  PublishedByChildrenInternalDescription = 'publishedBy___children___internal___description',
  PublishedByChildrenInternalFieldOwners = 'publishedBy___children___internal___fieldOwners',
  PublishedByChildrenInternalIgnoreType = 'publishedBy___children___internal___ignoreType',
  PublishedByChildrenInternalMediaType = 'publishedBy___children___internal___mediaType',
  PublishedByChildrenInternalOwner = 'publishedBy___children___internal___owner',
  PublishedByChildrenInternalType = 'publishedBy___children___internal___type',
  PublishedByChildrenParentChildren = 'publishedBy___children___parent___children',
  PublishedByChildrenParentId = 'publishedBy___children___parent___id',
  PublishedByCreatedAt = 'publishedBy___createdAt',
  PublishedById = 'publishedBy___id',
  PublishedByInternalContent = 'publishedBy___internal___content',
  PublishedByInternalContentDigest = 'publishedBy___internal___contentDigest',
  PublishedByInternalDescription = 'publishedBy___internal___description',
  PublishedByInternalFieldOwners = 'publishedBy___internal___fieldOwners',
  PublishedByInternalIgnoreType = 'publishedBy___internal___ignoreType',
  PublishedByInternalMediaType = 'publishedBy___internal___mediaType',
  PublishedByInternalOwner = 'publishedBy___internal___owner',
  PublishedByInternalType = 'publishedBy___internal___type',
  PublishedByIsActive = 'publishedBy___isActive',
  PublishedByKind = 'publishedBy___kind',
  PublishedByName = 'publishedBy___name',
  PublishedByParentChildren = 'publishedBy___parent___children',
  PublishedByParentChildrenChildren = 'publishedBy___parent___children___children',
  PublishedByParentChildrenId = 'publishedBy___parent___children___id',
  PublishedByParentId = 'publishedBy___parent___id',
  PublishedByParentInternalContent = 'publishedBy___parent___internal___content',
  PublishedByParentInternalContentDigest = 'publishedBy___parent___internal___contentDigest',
  PublishedByParentInternalDescription = 'publishedBy___parent___internal___description',
  PublishedByParentInternalFieldOwners = 'publishedBy___parent___internal___fieldOwners',
  PublishedByParentInternalIgnoreType = 'publishedBy___parent___internal___ignoreType',
  PublishedByParentInternalMediaType = 'publishedBy___parent___internal___mediaType',
  PublishedByParentInternalOwner = 'publishedBy___parent___internal___owner',
  PublishedByParentInternalType = 'publishedBy___parent___internal___type',
  PublishedByParentParentChildren = 'publishedBy___parent___parent___children',
  PublishedByParentParentId = 'publishedBy___parent___parent___id',
  PublishedByPicture = 'publishedBy___picture',
  PublishedByPublishedAt = 'publishedBy___publishedAt',
  PublishedByRemoteId = 'publishedBy___remoteId',
  PublishedByRemoteTypeName = 'publishedBy___remoteTypeName',
  PublishedByStage = 'publishedBy___stage',
  PublishedByUpdatedAt = 'publishedBy___updatedAt',
  RawPayload = 'rawPayload',
  ReleaseChildren = 'release___children',
  ReleaseChildrenChildren = 'release___children___children',
  ReleaseChildrenChildrenChildren = 'release___children___children___children',
  ReleaseChildrenChildrenId = 'release___children___children___id',
  ReleaseChildrenId = 'release___children___id',
  ReleaseChildrenInternalContent = 'release___children___internal___content',
  ReleaseChildrenInternalContentDigest = 'release___children___internal___contentDigest',
  ReleaseChildrenInternalDescription = 'release___children___internal___description',
  ReleaseChildrenInternalFieldOwners = 'release___children___internal___fieldOwners',
  ReleaseChildrenInternalIgnoreType = 'release___children___internal___ignoreType',
  ReleaseChildrenInternalMediaType = 'release___children___internal___mediaType',
  ReleaseChildrenInternalOwner = 'release___children___internal___owner',
  ReleaseChildrenInternalType = 'release___children___internal___type',
  ReleaseChildrenParentChildren = 'release___children___parent___children',
  ReleaseChildrenParentId = 'release___children___parent___id',
  ReleaseCreatedAt = 'release___createdAt',
  ReleaseCreatedByChildren = 'release___createdBy___children',
  ReleaseCreatedByChildrenChildren = 'release___createdBy___children___children',
  ReleaseCreatedByChildrenId = 'release___createdBy___children___id',
  ReleaseCreatedByCreatedAt = 'release___createdBy___createdAt',
  ReleaseCreatedById = 'release___createdBy___id',
  ReleaseCreatedByInternalContent = 'release___createdBy___internal___content',
  ReleaseCreatedByInternalContentDigest = 'release___createdBy___internal___contentDigest',
  ReleaseCreatedByInternalDescription = 'release___createdBy___internal___description',
  ReleaseCreatedByInternalFieldOwners = 'release___createdBy___internal___fieldOwners',
  ReleaseCreatedByInternalIgnoreType = 'release___createdBy___internal___ignoreType',
  ReleaseCreatedByInternalMediaType = 'release___createdBy___internal___mediaType',
  ReleaseCreatedByInternalOwner = 'release___createdBy___internal___owner',
  ReleaseCreatedByInternalType = 'release___createdBy___internal___type',
  ReleaseCreatedByIsActive = 'release___createdBy___isActive',
  ReleaseCreatedByKind = 'release___createdBy___kind',
  ReleaseCreatedByName = 'release___createdBy___name',
  ReleaseCreatedByParentChildren = 'release___createdBy___parent___children',
  ReleaseCreatedByParentId = 'release___createdBy___parent___id',
  ReleaseCreatedByPicture = 'release___createdBy___picture',
  ReleaseCreatedByPublishedAt = 'release___createdBy___publishedAt',
  ReleaseCreatedByRemoteId = 'release___createdBy___remoteId',
  ReleaseCreatedByRemoteTypeName = 'release___createdBy___remoteTypeName',
  ReleaseCreatedByStage = 'release___createdBy___stage',
  ReleaseCreatedByUpdatedAt = 'release___createdBy___updatedAt',
  ReleaseDescription = 'release___description',
  ReleaseErrorMessage = 'release___errorMessage',
  ReleaseId = 'release___id',
  ReleaseInternalContent = 'release___internal___content',
  ReleaseInternalContentDigest = 'release___internal___contentDigest',
  ReleaseInternalDescription = 'release___internal___description',
  ReleaseInternalFieldOwners = 'release___internal___fieldOwners',
  ReleaseInternalIgnoreType = 'release___internal___ignoreType',
  ReleaseInternalMediaType = 'release___internal___mediaType',
  ReleaseInternalOwner = 'release___internal___owner',
  ReleaseInternalType = 'release___internal___type',
  ReleaseIsActive = 'release___isActive',
  ReleaseIsImplicit = 'release___isImplicit',
  ReleaseOperations = 'release___operations',
  ReleaseOperationsChildren = 'release___operations___children',
  ReleaseOperationsChildrenChildren = 'release___operations___children___children',
  ReleaseOperationsChildrenId = 'release___operations___children___id',
  ReleaseOperationsCreatedAt = 'release___operations___createdAt',
  ReleaseOperationsCreatedByChildren = 'release___operations___createdBy___children',
  ReleaseOperationsCreatedByCreatedAt = 'release___operations___createdBy___createdAt',
  ReleaseOperationsCreatedById = 'release___operations___createdBy___id',
  ReleaseOperationsCreatedByIsActive = 'release___operations___createdBy___isActive',
  ReleaseOperationsCreatedByKind = 'release___operations___createdBy___kind',
  ReleaseOperationsCreatedByName = 'release___operations___createdBy___name',
  ReleaseOperationsCreatedByPicture = 'release___operations___createdBy___picture',
  ReleaseOperationsCreatedByPublishedAt = 'release___operations___createdBy___publishedAt',
  ReleaseOperationsCreatedByRemoteId = 'release___operations___createdBy___remoteId',
  ReleaseOperationsCreatedByRemoteTypeName = 'release___operations___createdBy___remoteTypeName',
  ReleaseOperationsCreatedByStage = 'release___operations___createdBy___stage',
  ReleaseOperationsCreatedByUpdatedAt = 'release___operations___createdBy___updatedAt',
  ReleaseOperationsDescription = 'release___operations___description',
  ReleaseOperationsErrorMessage = 'release___operations___errorMessage',
  ReleaseOperationsId = 'release___operations___id',
  ReleaseOperationsInternalContent = 'release___operations___internal___content',
  ReleaseOperationsInternalContentDigest = 'release___operations___internal___contentDigest',
  ReleaseOperationsInternalDescription = 'release___operations___internal___description',
  ReleaseOperationsInternalFieldOwners = 'release___operations___internal___fieldOwners',
  ReleaseOperationsInternalIgnoreType = 'release___operations___internal___ignoreType',
  ReleaseOperationsInternalMediaType = 'release___operations___internal___mediaType',
  ReleaseOperationsInternalOwner = 'release___operations___internal___owner',
  ReleaseOperationsInternalType = 'release___operations___internal___type',
  ReleaseOperationsParentChildren = 'release___operations___parent___children',
  ReleaseOperationsParentId = 'release___operations___parent___id',
  ReleaseOperationsPublishedAt = 'release___operations___publishedAt',
  ReleaseOperationsPublishedByChildren = 'release___operations___publishedBy___children',
  ReleaseOperationsPublishedByCreatedAt = 'release___operations___publishedBy___createdAt',
  ReleaseOperationsPublishedById = 'release___operations___publishedBy___id',
  ReleaseOperationsPublishedByIsActive = 'release___operations___publishedBy___isActive',
  ReleaseOperationsPublishedByKind = 'release___operations___publishedBy___kind',
  ReleaseOperationsPublishedByName = 'release___operations___publishedBy___name',
  ReleaseOperationsPublishedByPicture = 'release___operations___publishedBy___picture',
  ReleaseOperationsPublishedByPublishedAt = 'release___operations___publishedBy___publishedAt',
  ReleaseOperationsPublishedByRemoteId = 'release___operations___publishedBy___remoteId',
  ReleaseOperationsPublishedByRemoteTypeName = 'release___operations___publishedBy___remoteTypeName',
  ReleaseOperationsPublishedByStage = 'release___operations___publishedBy___stage',
  ReleaseOperationsPublishedByUpdatedAt = 'release___operations___publishedBy___updatedAt',
  ReleaseOperationsRawPayload = 'release___operations___rawPayload',
  ReleaseOperationsReleaseChildren = 'release___operations___release___children',
  ReleaseOperationsReleaseCreatedAt = 'release___operations___release___createdAt',
  ReleaseOperationsReleaseDescription = 'release___operations___release___description',
  ReleaseOperationsReleaseErrorMessage = 'release___operations___release___errorMessage',
  ReleaseOperationsReleaseId = 'release___operations___release___id',
  ReleaseOperationsReleaseIsActive = 'release___operations___release___isActive',
  ReleaseOperationsReleaseIsImplicit = 'release___operations___release___isImplicit',
  ReleaseOperationsReleaseOperations = 'release___operations___release___operations',
  ReleaseOperationsReleasePublishedAt = 'release___operations___release___publishedAt',
  ReleaseOperationsReleaseReleaseAt = 'release___operations___release___releaseAt',
  ReleaseOperationsReleaseRemoteId = 'release___operations___release___remoteId',
  ReleaseOperationsReleaseRemoteTypeName = 'release___operations___release___remoteTypeName',
  ReleaseOperationsReleaseStage = 'release___operations___release___stage',
  ReleaseOperationsReleaseStatus = 'release___operations___release___status',
  ReleaseOperationsReleaseTitle = 'release___operations___release___title',
  ReleaseOperationsReleaseUpdatedAt = 'release___operations___release___updatedAt',
  ReleaseOperationsRemoteId = 'release___operations___remoteId',
  ReleaseOperationsRemoteTypeName = 'release___operations___remoteTypeName',
  ReleaseOperationsStage = 'release___operations___stage',
  ReleaseOperationsStatus = 'release___operations___status',
  ReleaseOperationsUpdatedAt = 'release___operations___updatedAt',
  ReleaseOperationsUpdatedByChildren = 'release___operations___updatedBy___children',
  ReleaseOperationsUpdatedByCreatedAt = 'release___operations___updatedBy___createdAt',
  ReleaseOperationsUpdatedById = 'release___operations___updatedBy___id',
  ReleaseOperationsUpdatedByIsActive = 'release___operations___updatedBy___isActive',
  ReleaseOperationsUpdatedByKind = 'release___operations___updatedBy___kind',
  ReleaseOperationsUpdatedByName = 'release___operations___updatedBy___name',
  ReleaseOperationsUpdatedByPicture = 'release___operations___updatedBy___picture',
  ReleaseOperationsUpdatedByPublishedAt = 'release___operations___updatedBy___publishedAt',
  ReleaseOperationsUpdatedByRemoteId = 'release___operations___updatedBy___remoteId',
  ReleaseOperationsUpdatedByRemoteTypeName = 'release___operations___updatedBy___remoteTypeName',
  ReleaseOperationsUpdatedByStage = 'release___operations___updatedBy___stage',
  ReleaseOperationsUpdatedByUpdatedAt = 'release___operations___updatedBy___updatedAt',
  ReleaseParentChildren = 'release___parent___children',
  ReleaseParentChildrenChildren = 'release___parent___children___children',
  ReleaseParentChildrenId = 'release___parent___children___id',
  ReleaseParentId = 'release___parent___id',
  ReleaseParentInternalContent = 'release___parent___internal___content',
  ReleaseParentInternalContentDigest = 'release___parent___internal___contentDigest',
  ReleaseParentInternalDescription = 'release___parent___internal___description',
  ReleaseParentInternalFieldOwners = 'release___parent___internal___fieldOwners',
  ReleaseParentInternalIgnoreType = 'release___parent___internal___ignoreType',
  ReleaseParentInternalMediaType = 'release___parent___internal___mediaType',
  ReleaseParentInternalOwner = 'release___parent___internal___owner',
  ReleaseParentInternalType = 'release___parent___internal___type',
  ReleaseParentParentChildren = 'release___parent___parent___children',
  ReleaseParentParentId = 'release___parent___parent___id',
  ReleasePublishedAt = 'release___publishedAt',
  ReleasePublishedByChildren = 'release___publishedBy___children',
  ReleasePublishedByChildrenChildren = 'release___publishedBy___children___children',
  ReleasePublishedByChildrenId = 'release___publishedBy___children___id',
  ReleasePublishedByCreatedAt = 'release___publishedBy___createdAt',
  ReleasePublishedById = 'release___publishedBy___id',
  ReleasePublishedByInternalContent = 'release___publishedBy___internal___content',
  ReleasePublishedByInternalContentDigest = 'release___publishedBy___internal___contentDigest',
  ReleasePublishedByInternalDescription = 'release___publishedBy___internal___description',
  ReleasePublishedByInternalFieldOwners = 'release___publishedBy___internal___fieldOwners',
  ReleasePublishedByInternalIgnoreType = 'release___publishedBy___internal___ignoreType',
  ReleasePublishedByInternalMediaType = 'release___publishedBy___internal___mediaType',
  ReleasePublishedByInternalOwner = 'release___publishedBy___internal___owner',
  ReleasePublishedByInternalType = 'release___publishedBy___internal___type',
  ReleasePublishedByIsActive = 'release___publishedBy___isActive',
  ReleasePublishedByKind = 'release___publishedBy___kind',
  ReleasePublishedByName = 'release___publishedBy___name',
  ReleasePublishedByParentChildren = 'release___publishedBy___parent___children',
  ReleasePublishedByParentId = 'release___publishedBy___parent___id',
  ReleasePublishedByPicture = 'release___publishedBy___picture',
  ReleasePublishedByPublishedAt = 'release___publishedBy___publishedAt',
  ReleasePublishedByRemoteId = 'release___publishedBy___remoteId',
  ReleasePublishedByRemoteTypeName = 'release___publishedBy___remoteTypeName',
  ReleasePublishedByStage = 'release___publishedBy___stage',
  ReleasePublishedByUpdatedAt = 'release___publishedBy___updatedAt',
  ReleaseReleaseAt = 'release___releaseAt',
  ReleaseRemoteId = 'release___remoteId',
  ReleaseRemoteTypeName = 'release___remoteTypeName',
  ReleaseStage = 'release___stage',
  ReleaseStatus = 'release___status',
  ReleaseTitle = 'release___title',
  ReleaseUpdatedAt = 'release___updatedAt',
  ReleaseUpdatedByChildren = 'release___updatedBy___children',
  ReleaseUpdatedByChildrenChildren = 'release___updatedBy___children___children',
  ReleaseUpdatedByChildrenId = 'release___updatedBy___children___id',
  ReleaseUpdatedByCreatedAt = 'release___updatedBy___createdAt',
  ReleaseUpdatedById = 'release___updatedBy___id',
  ReleaseUpdatedByInternalContent = 'release___updatedBy___internal___content',
  ReleaseUpdatedByInternalContentDigest = 'release___updatedBy___internal___contentDigest',
  ReleaseUpdatedByInternalDescription = 'release___updatedBy___internal___description',
  ReleaseUpdatedByInternalFieldOwners = 'release___updatedBy___internal___fieldOwners',
  ReleaseUpdatedByInternalIgnoreType = 'release___updatedBy___internal___ignoreType',
  ReleaseUpdatedByInternalMediaType = 'release___updatedBy___internal___mediaType',
  ReleaseUpdatedByInternalOwner = 'release___updatedBy___internal___owner',
  ReleaseUpdatedByInternalType = 'release___updatedBy___internal___type',
  ReleaseUpdatedByIsActive = 'release___updatedBy___isActive',
  ReleaseUpdatedByKind = 'release___updatedBy___kind',
  ReleaseUpdatedByName = 'release___updatedBy___name',
  ReleaseUpdatedByParentChildren = 'release___updatedBy___parent___children',
  ReleaseUpdatedByParentId = 'release___updatedBy___parent___id',
  ReleaseUpdatedByPicture = 'release___updatedBy___picture',
  ReleaseUpdatedByPublishedAt = 'release___updatedBy___publishedAt',
  ReleaseUpdatedByRemoteId = 'release___updatedBy___remoteId',
  ReleaseUpdatedByRemoteTypeName = 'release___updatedBy___remoteTypeName',
  ReleaseUpdatedByStage = 'release___updatedBy___stage',
  ReleaseUpdatedByUpdatedAt = 'release___updatedBy___updatedAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  Stage = 'stage',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UpdatedByChildren = 'updatedBy___children',
  UpdatedByChildrenChildren = 'updatedBy___children___children',
  UpdatedByChildrenChildrenChildren = 'updatedBy___children___children___children',
  UpdatedByChildrenChildrenId = 'updatedBy___children___children___id',
  UpdatedByChildrenId = 'updatedBy___children___id',
  UpdatedByChildrenInternalContent = 'updatedBy___children___internal___content',
  UpdatedByChildrenInternalContentDigest = 'updatedBy___children___internal___contentDigest',
  UpdatedByChildrenInternalDescription = 'updatedBy___children___internal___description',
  UpdatedByChildrenInternalFieldOwners = 'updatedBy___children___internal___fieldOwners',
  UpdatedByChildrenInternalIgnoreType = 'updatedBy___children___internal___ignoreType',
  UpdatedByChildrenInternalMediaType = 'updatedBy___children___internal___mediaType',
  UpdatedByChildrenInternalOwner = 'updatedBy___children___internal___owner',
  UpdatedByChildrenInternalType = 'updatedBy___children___internal___type',
  UpdatedByChildrenParentChildren = 'updatedBy___children___parent___children',
  UpdatedByChildrenParentId = 'updatedBy___children___parent___id',
  UpdatedByCreatedAt = 'updatedBy___createdAt',
  UpdatedById = 'updatedBy___id',
  UpdatedByInternalContent = 'updatedBy___internal___content',
  UpdatedByInternalContentDigest = 'updatedBy___internal___contentDigest',
  UpdatedByInternalDescription = 'updatedBy___internal___description',
  UpdatedByInternalFieldOwners = 'updatedBy___internal___fieldOwners',
  UpdatedByInternalIgnoreType = 'updatedBy___internal___ignoreType',
  UpdatedByInternalMediaType = 'updatedBy___internal___mediaType',
  UpdatedByInternalOwner = 'updatedBy___internal___owner',
  UpdatedByInternalType = 'updatedBy___internal___type',
  UpdatedByIsActive = 'updatedBy___isActive',
  UpdatedByKind = 'updatedBy___kind',
  UpdatedByName = 'updatedBy___name',
  UpdatedByParentChildren = 'updatedBy___parent___children',
  UpdatedByParentChildrenChildren = 'updatedBy___parent___children___children',
  UpdatedByParentChildrenId = 'updatedBy___parent___children___id',
  UpdatedByParentId = 'updatedBy___parent___id',
  UpdatedByParentInternalContent = 'updatedBy___parent___internal___content',
  UpdatedByParentInternalContentDigest = 'updatedBy___parent___internal___contentDigest',
  UpdatedByParentInternalDescription = 'updatedBy___parent___internal___description',
  UpdatedByParentInternalFieldOwners = 'updatedBy___parent___internal___fieldOwners',
  UpdatedByParentInternalIgnoreType = 'updatedBy___parent___internal___ignoreType',
  UpdatedByParentInternalMediaType = 'updatedBy___parent___internal___mediaType',
  UpdatedByParentInternalOwner = 'updatedBy___parent___internal___owner',
  UpdatedByParentInternalType = 'updatedBy___parent___internal___type',
  UpdatedByParentParentChildren = 'updatedBy___parent___parent___children',
  UpdatedByParentParentId = 'updatedBy___parent___parent___id',
  UpdatedByPicture = 'updatedBy___picture',
  UpdatedByPublishedAt = 'updatedBy___publishedAt',
  UpdatedByRemoteId = 'updatedBy___remoteId',
  UpdatedByRemoteTypeName = 'updatedBy___remoteTypeName',
  UpdatedByStage = 'updatedBy___stage',
  UpdatedByUpdatedAt = 'updatedBy___updatedAt',
}

export type GraphCms_ScheduledOperationFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  rawPayload?: InputMaybe<JsonQueryOperatorInput>;
  release?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  status?: InputMaybe<GraphCms_ScheduledOperationStatusQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
};

export type GraphCms_ScheduledOperationFilterListInput = {
  elemMatch?: InputMaybe<GraphCms_ScheduledOperationFilterInput>;
};

export type GraphCms_ScheduledOperationGroupConnection = {
  __typename?: 'GraphCMS_ScheduledOperationGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_ScheduledOperationEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GraphCms_ScheduledOperationGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_ScheduledOperation>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_ScheduledOperationGroupConnectionDistinctArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
};

export type GraphCms_ScheduledOperationGroupConnectionGroupArgs = {
  field: GraphCms_ScheduledOperationFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type GraphCms_ScheduledOperationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum GraphCms_ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type GraphCms_ScheduledOperationStatusQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_ScheduledOperationStatus>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationStatus>>>;
  ne?: InputMaybe<GraphCms_ScheduledOperationStatus>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledOperationStatus>>>;
};

export type GraphCms_ScheduledRelease = Node & {
  __typename?: 'GraphCMS_ScheduledRelease';
  children: Array<Node>;
  createdAt: Scalars['JSON'];
  createdBy?: Maybe<GraphCms_User>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  isActive: Scalars['Boolean'];
  isImplicit: Scalars['Boolean'];
  operations: Array<GraphCms_ScheduledOperation>;
  parent?: Maybe<Node>;
  publishedAt?: Maybe<Scalars['JSON']>;
  publishedBy?: Maybe<GraphCms_User>;
  releaseAt?: Maybe<Scalars['JSON']>;
  remoteId: Scalars['ID'];
  remoteTypeName: Scalars['String'];
  stage: GraphCms_Stage;
  status: GraphCms_ScheduledReleaseStatus;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['JSON'];
  updatedBy?: Maybe<GraphCms_User>;
};

export type GraphCms_ScheduledReleaseConnection = {
  __typename?: 'GraphCMS_ScheduledReleaseConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_ScheduledReleaseEdge>;
  group: Array<GraphCms_ScheduledReleaseGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_ScheduledRelease>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_ScheduledReleaseConnectionDistinctArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseConnectionGroupArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type GraphCms_ScheduledReleaseEdge = {
  __typename?: 'GraphCMS_ScheduledReleaseEdge';
  next?: Maybe<GraphCms_ScheduledRelease>;
  node: GraphCms_ScheduledRelease;
  previous?: Maybe<GraphCms_ScheduledRelease>;
};

export enum GraphCms_ScheduledReleaseFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CreatedAt = 'createdAt',
  CreatedByChildren = 'createdBy___children',
  CreatedByChildrenChildren = 'createdBy___children___children',
  CreatedByChildrenChildrenChildren = 'createdBy___children___children___children',
  CreatedByChildrenChildrenId = 'createdBy___children___children___id',
  CreatedByChildrenId = 'createdBy___children___id',
  CreatedByChildrenInternalContent = 'createdBy___children___internal___content',
  CreatedByChildrenInternalContentDigest = 'createdBy___children___internal___contentDigest',
  CreatedByChildrenInternalDescription = 'createdBy___children___internal___description',
  CreatedByChildrenInternalFieldOwners = 'createdBy___children___internal___fieldOwners',
  CreatedByChildrenInternalIgnoreType = 'createdBy___children___internal___ignoreType',
  CreatedByChildrenInternalMediaType = 'createdBy___children___internal___mediaType',
  CreatedByChildrenInternalOwner = 'createdBy___children___internal___owner',
  CreatedByChildrenInternalType = 'createdBy___children___internal___type',
  CreatedByChildrenParentChildren = 'createdBy___children___parent___children',
  CreatedByChildrenParentId = 'createdBy___children___parent___id',
  CreatedByCreatedAt = 'createdBy___createdAt',
  CreatedById = 'createdBy___id',
  CreatedByInternalContent = 'createdBy___internal___content',
  CreatedByInternalContentDigest = 'createdBy___internal___contentDigest',
  CreatedByInternalDescription = 'createdBy___internal___description',
  CreatedByInternalFieldOwners = 'createdBy___internal___fieldOwners',
  CreatedByInternalIgnoreType = 'createdBy___internal___ignoreType',
  CreatedByInternalMediaType = 'createdBy___internal___mediaType',
  CreatedByInternalOwner = 'createdBy___internal___owner',
  CreatedByInternalType = 'createdBy___internal___type',
  CreatedByIsActive = 'createdBy___isActive',
  CreatedByKind = 'createdBy___kind',
  CreatedByName = 'createdBy___name',
  CreatedByParentChildren = 'createdBy___parent___children',
  CreatedByParentChildrenChildren = 'createdBy___parent___children___children',
  CreatedByParentChildrenId = 'createdBy___parent___children___id',
  CreatedByParentId = 'createdBy___parent___id',
  CreatedByParentInternalContent = 'createdBy___parent___internal___content',
  CreatedByParentInternalContentDigest = 'createdBy___parent___internal___contentDigest',
  CreatedByParentInternalDescription = 'createdBy___parent___internal___description',
  CreatedByParentInternalFieldOwners = 'createdBy___parent___internal___fieldOwners',
  CreatedByParentInternalIgnoreType = 'createdBy___parent___internal___ignoreType',
  CreatedByParentInternalMediaType = 'createdBy___parent___internal___mediaType',
  CreatedByParentInternalOwner = 'createdBy___parent___internal___owner',
  CreatedByParentInternalType = 'createdBy___parent___internal___type',
  CreatedByParentParentChildren = 'createdBy___parent___parent___children',
  CreatedByParentParentId = 'createdBy___parent___parent___id',
  CreatedByPicture = 'createdBy___picture',
  CreatedByPublishedAt = 'createdBy___publishedAt',
  CreatedByRemoteId = 'createdBy___remoteId',
  CreatedByRemoteTypeName = 'createdBy___remoteTypeName',
  CreatedByStage = 'createdBy___stage',
  CreatedByUpdatedAt = 'createdBy___updatedAt',
  Description = 'description',
  ErrorMessage = 'errorMessage',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsActive = 'isActive',
  IsImplicit = 'isImplicit',
  Operations = 'operations',
  OperationsChildren = 'operations___children',
  OperationsChildrenChildren = 'operations___children___children',
  OperationsChildrenChildrenChildren = 'operations___children___children___children',
  OperationsChildrenChildrenId = 'operations___children___children___id',
  OperationsChildrenId = 'operations___children___id',
  OperationsChildrenInternalContent = 'operations___children___internal___content',
  OperationsChildrenInternalContentDigest = 'operations___children___internal___contentDigest',
  OperationsChildrenInternalDescription = 'operations___children___internal___description',
  OperationsChildrenInternalFieldOwners = 'operations___children___internal___fieldOwners',
  OperationsChildrenInternalIgnoreType = 'operations___children___internal___ignoreType',
  OperationsChildrenInternalMediaType = 'operations___children___internal___mediaType',
  OperationsChildrenInternalOwner = 'operations___children___internal___owner',
  OperationsChildrenInternalType = 'operations___children___internal___type',
  OperationsChildrenParentChildren = 'operations___children___parent___children',
  OperationsChildrenParentId = 'operations___children___parent___id',
  OperationsCreatedAt = 'operations___createdAt',
  OperationsCreatedByChildren = 'operations___createdBy___children',
  OperationsCreatedByChildrenChildren = 'operations___createdBy___children___children',
  OperationsCreatedByChildrenId = 'operations___createdBy___children___id',
  OperationsCreatedByCreatedAt = 'operations___createdBy___createdAt',
  OperationsCreatedById = 'operations___createdBy___id',
  OperationsCreatedByInternalContent = 'operations___createdBy___internal___content',
  OperationsCreatedByInternalContentDigest = 'operations___createdBy___internal___contentDigest',
  OperationsCreatedByInternalDescription = 'operations___createdBy___internal___description',
  OperationsCreatedByInternalFieldOwners = 'operations___createdBy___internal___fieldOwners',
  OperationsCreatedByInternalIgnoreType = 'operations___createdBy___internal___ignoreType',
  OperationsCreatedByInternalMediaType = 'operations___createdBy___internal___mediaType',
  OperationsCreatedByInternalOwner = 'operations___createdBy___internal___owner',
  OperationsCreatedByInternalType = 'operations___createdBy___internal___type',
  OperationsCreatedByIsActive = 'operations___createdBy___isActive',
  OperationsCreatedByKind = 'operations___createdBy___kind',
  OperationsCreatedByName = 'operations___createdBy___name',
  OperationsCreatedByParentChildren = 'operations___createdBy___parent___children',
  OperationsCreatedByParentId = 'operations___createdBy___parent___id',
  OperationsCreatedByPicture = 'operations___createdBy___picture',
  OperationsCreatedByPublishedAt = 'operations___createdBy___publishedAt',
  OperationsCreatedByRemoteId = 'operations___createdBy___remoteId',
  OperationsCreatedByRemoteTypeName = 'operations___createdBy___remoteTypeName',
  OperationsCreatedByStage = 'operations___createdBy___stage',
  OperationsCreatedByUpdatedAt = 'operations___createdBy___updatedAt',
  OperationsDescription = 'operations___description',
  OperationsErrorMessage = 'operations___errorMessage',
  OperationsId = 'operations___id',
  OperationsInternalContent = 'operations___internal___content',
  OperationsInternalContentDigest = 'operations___internal___contentDigest',
  OperationsInternalDescription = 'operations___internal___description',
  OperationsInternalFieldOwners = 'operations___internal___fieldOwners',
  OperationsInternalIgnoreType = 'operations___internal___ignoreType',
  OperationsInternalMediaType = 'operations___internal___mediaType',
  OperationsInternalOwner = 'operations___internal___owner',
  OperationsInternalType = 'operations___internal___type',
  OperationsParentChildren = 'operations___parent___children',
  OperationsParentChildrenChildren = 'operations___parent___children___children',
  OperationsParentChildrenId = 'operations___parent___children___id',
  OperationsParentId = 'operations___parent___id',
  OperationsParentInternalContent = 'operations___parent___internal___content',
  OperationsParentInternalContentDigest = 'operations___parent___internal___contentDigest',
  OperationsParentInternalDescription = 'operations___parent___internal___description',
  OperationsParentInternalFieldOwners = 'operations___parent___internal___fieldOwners',
  OperationsParentInternalIgnoreType = 'operations___parent___internal___ignoreType',
  OperationsParentInternalMediaType = 'operations___parent___internal___mediaType',
  OperationsParentInternalOwner = 'operations___parent___internal___owner',
  OperationsParentInternalType = 'operations___parent___internal___type',
  OperationsParentParentChildren = 'operations___parent___parent___children',
  OperationsParentParentId = 'operations___parent___parent___id',
  OperationsPublishedAt = 'operations___publishedAt',
  OperationsPublishedByChildren = 'operations___publishedBy___children',
  OperationsPublishedByChildrenChildren = 'operations___publishedBy___children___children',
  OperationsPublishedByChildrenId = 'operations___publishedBy___children___id',
  OperationsPublishedByCreatedAt = 'operations___publishedBy___createdAt',
  OperationsPublishedById = 'operations___publishedBy___id',
  OperationsPublishedByInternalContent = 'operations___publishedBy___internal___content',
  OperationsPublishedByInternalContentDigest = 'operations___publishedBy___internal___contentDigest',
  OperationsPublishedByInternalDescription = 'operations___publishedBy___internal___description',
  OperationsPublishedByInternalFieldOwners = 'operations___publishedBy___internal___fieldOwners',
  OperationsPublishedByInternalIgnoreType = 'operations___publishedBy___internal___ignoreType',
  OperationsPublishedByInternalMediaType = 'operations___publishedBy___internal___mediaType',
  OperationsPublishedByInternalOwner = 'operations___publishedBy___internal___owner',
  OperationsPublishedByInternalType = 'operations___publishedBy___internal___type',
  OperationsPublishedByIsActive = 'operations___publishedBy___isActive',
  OperationsPublishedByKind = 'operations___publishedBy___kind',
  OperationsPublishedByName = 'operations___publishedBy___name',
  OperationsPublishedByParentChildren = 'operations___publishedBy___parent___children',
  OperationsPublishedByParentId = 'operations___publishedBy___parent___id',
  OperationsPublishedByPicture = 'operations___publishedBy___picture',
  OperationsPublishedByPublishedAt = 'operations___publishedBy___publishedAt',
  OperationsPublishedByRemoteId = 'operations___publishedBy___remoteId',
  OperationsPublishedByRemoteTypeName = 'operations___publishedBy___remoteTypeName',
  OperationsPublishedByStage = 'operations___publishedBy___stage',
  OperationsPublishedByUpdatedAt = 'operations___publishedBy___updatedAt',
  OperationsRawPayload = 'operations___rawPayload',
  OperationsReleaseChildren = 'operations___release___children',
  OperationsReleaseChildrenChildren = 'operations___release___children___children',
  OperationsReleaseChildrenId = 'operations___release___children___id',
  OperationsReleaseCreatedAt = 'operations___release___createdAt',
  OperationsReleaseCreatedByChildren = 'operations___release___createdBy___children',
  OperationsReleaseCreatedByCreatedAt = 'operations___release___createdBy___createdAt',
  OperationsReleaseCreatedById = 'operations___release___createdBy___id',
  OperationsReleaseCreatedByIsActive = 'operations___release___createdBy___isActive',
  OperationsReleaseCreatedByKind = 'operations___release___createdBy___kind',
  OperationsReleaseCreatedByName = 'operations___release___createdBy___name',
  OperationsReleaseCreatedByPicture = 'operations___release___createdBy___picture',
  OperationsReleaseCreatedByPublishedAt = 'operations___release___createdBy___publishedAt',
  OperationsReleaseCreatedByRemoteId = 'operations___release___createdBy___remoteId',
  OperationsReleaseCreatedByRemoteTypeName = 'operations___release___createdBy___remoteTypeName',
  OperationsReleaseCreatedByStage = 'operations___release___createdBy___stage',
  OperationsReleaseCreatedByUpdatedAt = 'operations___release___createdBy___updatedAt',
  OperationsReleaseDescription = 'operations___release___description',
  OperationsReleaseErrorMessage = 'operations___release___errorMessage',
  OperationsReleaseId = 'operations___release___id',
  OperationsReleaseInternalContent = 'operations___release___internal___content',
  OperationsReleaseInternalContentDigest = 'operations___release___internal___contentDigest',
  OperationsReleaseInternalDescription = 'operations___release___internal___description',
  OperationsReleaseInternalFieldOwners = 'operations___release___internal___fieldOwners',
  OperationsReleaseInternalIgnoreType = 'operations___release___internal___ignoreType',
  OperationsReleaseInternalMediaType = 'operations___release___internal___mediaType',
  OperationsReleaseInternalOwner = 'operations___release___internal___owner',
  OperationsReleaseInternalType = 'operations___release___internal___type',
  OperationsReleaseIsActive = 'operations___release___isActive',
  OperationsReleaseIsImplicit = 'operations___release___isImplicit',
  OperationsReleaseOperations = 'operations___release___operations',
  OperationsReleaseOperationsChildren = 'operations___release___operations___children',
  OperationsReleaseOperationsCreatedAt = 'operations___release___operations___createdAt',
  OperationsReleaseOperationsDescription = 'operations___release___operations___description',
  OperationsReleaseOperationsErrorMessage = 'operations___release___operations___errorMessage',
  OperationsReleaseOperationsId = 'operations___release___operations___id',
  OperationsReleaseOperationsPublishedAt = 'operations___release___operations___publishedAt',
  OperationsReleaseOperationsRawPayload = 'operations___release___operations___rawPayload',
  OperationsReleaseOperationsRemoteId = 'operations___release___operations___remoteId',
  OperationsReleaseOperationsRemoteTypeName = 'operations___release___operations___remoteTypeName',
  OperationsReleaseOperationsStage = 'operations___release___operations___stage',
  OperationsReleaseOperationsStatus = 'operations___release___operations___status',
  OperationsReleaseOperationsUpdatedAt = 'operations___release___operations___updatedAt',
  OperationsReleaseParentChildren = 'operations___release___parent___children',
  OperationsReleaseParentId = 'operations___release___parent___id',
  OperationsReleasePublishedAt = 'operations___release___publishedAt',
  OperationsReleasePublishedByChildren = 'operations___release___publishedBy___children',
  OperationsReleasePublishedByCreatedAt = 'operations___release___publishedBy___createdAt',
  OperationsReleasePublishedById = 'operations___release___publishedBy___id',
  OperationsReleasePublishedByIsActive = 'operations___release___publishedBy___isActive',
  OperationsReleasePublishedByKind = 'operations___release___publishedBy___kind',
  OperationsReleasePublishedByName = 'operations___release___publishedBy___name',
  OperationsReleasePublishedByPicture = 'operations___release___publishedBy___picture',
  OperationsReleasePublishedByPublishedAt = 'operations___release___publishedBy___publishedAt',
  OperationsReleasePublishedByRemoteId = 'operations___release___publishedBy___remoteId',
  OperationsReleasePublishedByRemoteTypeName = 'operations___release___publishedBy___remoteTypeName',
  OperationsReleasePublishedByStage = 'operations___release___publishedBy___stage',
  OperationsReleasePublishedByUpdatedAt = 'operations___release___publishedBy___updatedAt',
  OperationsReleaseReleaseAt = 'operations___release___releaseAt',
  OperationsReleaseRemoteId = 'operations___release___remoteId',
  OperationsReleaseRemoteTypeName = 'operations___release___remoteTypeName',
  OperationsReleaseStage = 'operations___release___stage',
  OperationsReleaseStatus = 'operations___release___status',
  OperationsReleaseTitle = 'operations___release___title',
  OperationsReleaseUpdatedAt = 'operations___release___updatedAt',
  OperationsReleaseUpdatedByChildren = 'operations___release___updatedBy___children',
  OperationsReleaseUpdatedByCreatedAt = 'operations___release___updatedBy___createdAt',
  OperationsReleaseUpdatedById = 'operations___release___updatedBy___id',
  OperationsReleaseUpdatedByIsActive = 'operations___release___updatedBy___isActive',
  OperationsReleaseUpdatedByKind = 'operations___release___updatedBy___kind',
  OperationsReleaseUpdatedByName = 'operations___release___updatedBy___name',
  OperationsReleaseUpdatedByPicture = 'operations___release___updatedBy___picture',
  OperationsReleaseUpdatedByPublishedAt = 'operations___release___updatedBy___publishedAt',
  OperationsReleaseUpdatedByRemoteId = 'operations___release___updatedBy___remoteId',
  OperationsReleaseUpdatedByRemoteTypeName = 'operations___release___updatedBy___remoteTypeName',
  OperationsReleaseUpdatedByStage = 'operations___release___updatedBy___stage',
  OperationsReleaseUpdatedByUpdatedAt = 'operations___release___updatedBy___updatedAt',
  OperationsRemoteId = 'operations___remoteId',
  OperationsRemoteTypeName = 'operations___remoteTypeName',
  OperationsStage = 'operations___stage',
  OperationsStatus = 'operations___status',
  OperationsUpdatedAt = 'operations___updatedAt',
  OperationsUpdatedByChildren = 'operations___updatedBy___children',
  OperationsUpdatedByChildrenChildren = 'operations___updatedBy___children___children',
  OperationsUpdatedByChildrenId = 'operations___updatedBy___children___id',
  OperationsUpdatedByCreatedAt = 'operations___updatedBy___createdAt',
  OperationsUpdatedById = 'operations___updatedBy___id',
  OperationsUpdatedByInternalContent = 'operations___updatedBy___internal___content',
  OperationsUpdatedByInternalContentDigest = 'operations___updatedBy___internal___contentDigest',
  OperationsUpdatedByInternalDescription = 'operations___updatedBy___internal___description',
  OperationsUpdatedByInternalFieldOwners = 'operations___updatedBy___internal___fieldOwners',
  OperationsUpdatedByInternalIgnoreType = 'operations___updatedBy___internal___ignoreType',
  OperationsUpdatedByInternalMediaType = 'operations___updatedBy___internal___mediaType',
  OperationsUpdatedByInternalOwner = 'operations___updatedBy___internal___owner',
  OperationsUpdatedByInternalType = 'operations___updatedBy___internal___type',
  OperationsUpdatedByIsActive = 'operations___updatedBy___isActive',
  OperationsUpdatedByKind = 'operations___updatedBy___kind',
  OperationsUpdatedByName = 'operations___updatedBy___name',
  OperationsUpdatedByParentChildren = 'operations___updatedBy___parent___children',
  OperationsUpdatedByParentId = 'operations___updatedBy___parent___id',
  OperationsUpdatedByPicture = 'operations___updatedBy___picture',
  OperationsUpdatedByPublishedAt = 'operations___updatedBy___publishedAt',
  OperationsUpdatedByRemoteId = 'operations___updatedBy___remoteId',
  OperationsUpdatedByRemoteTypeName = 'operations___updatedBy___remoteTypeName',
  OperationsUpdatedByStage = 'operations___updatedBy___stage',
  OperationsUpdatedByUpdatedAt = 'operations___updatedBy___updatedAt',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PublishedAt = 'publishedAt',
  PublishedByChildren = 'publishedBy___children',
  PublishedByChildrenChildren = 'publishedBy___children___children',
  PublishedByChildrenChildrenChildren = 'publishedBy___children___children___children',
  PublishedByChildrenChildrenId = 'publishedBy___children___children___id',
  PublishedByChildrenId = 'publishedBy___children___id',
  PublishedByChildrenInternalContent = 'publishedBy___children___internal___content',
  PublishedByChildrenInternalContentDigest = 'publishedBy___children___internal___contentDigest',
  PublishedByChildrenInternalDescription = 'publishedBy___children___internal___description',
  PublishedByChildrenInternalFieldOwners = 'publishedBy___children___internal___fieldOwners',
  PublishedByChildrenInternalIgnoreType = 'publishedBy___children___internal___ignoreType',
  PublishedByChildrenInternalMediaType = 'publishedBy___children___internal___mediaType',
  PublishedByChildrenInternalOwner = 'publishedBy___children___internal___owner',
  PublishedByChildrenInternalType = 'publishedBy___children___internal___type',
  PublishedByChildrenParentChildren = 'publishedBy___children___parent___children',
  PublishedByChildrenParentId = 'publishedBy___children___parent___id',
  PublishedByCreatedAt = 'publishedBy___createdAt',
  PublishedById = 'publishedBy___id',
  PublishedByInternalContent = 'publishedBy___internal___content',
  PublishedByInternalContentDigest = 'publishedBy___internal___contentDigest',
  PublishedByInternalDescription = 'publishedBy___internal___description',
  PublishedByInternalFieldOwners = 'publishedBy___internal___fieldOwners',
  PublishedByInternalIgnoreType = 'publishedBy___internal___ignoreType',
  PublishedByInternalMediaType = 'publishedBy___internal___mediaType',
  PublishedByInternalOwner = 'publishedBy___internal___owner',
  PublishedByInternalType = 'publishedBy___internal___type',
  PublishedByIsActive = 'publishedBy___isActive',
  PublishedByKind = 'publishedBy___kind',
  PublishedByName = 'publishedBy___name',
  PublishedByParentChildren = 'publishedBy___parent___children',
  PublishedByParentChildrenChildren = 'publishedBy___parent___children___children',
  PublishedByParentChildrenId = 'publishedBy___parent___children___id',
  PublishedByParentId = 'publishedBy___parent___id',
  PublishedByParentInternalContent = 'publishedBy___parent___internal___content',
  PublishedByParentInternalContentDigest = 'publishedBy___parent___internal___contentDigest',
  PublishedByParentInternalDescription = 'publishedBy___parent___internal___description',
  PublishedByParentInternalFieldOwners = 'publishedBy___parent___internal___fieldOwners',
  PublishedByParentInternalIgnoreType = 'publishedBy___parent___internal___ignoreType',
  PublishedByParentInternalMediaType = 'publishedBy___parent___internal___mediaType',
  PublishedByParentInternalOwner = 'publishedBy___parent___internal___owner',
  PublishedByParentInternalType = 'publishedBy___parent___internal___type',
  PublishedByParentParentChildren = 'publishedBy___parent___parent___children',
  PublishedByParentParentId = 'publishedBy___parent___parent___id',
  PublishedByPicture = 'publishedBy___picture',
  PublishedByPublishedAt = 'publishedBy___publishedAt',
  PublishedByRemoteId = 'publishedBy___remoteId',
  PublishedByRemoteTypeName = 'publishedBy___remoteTypeName',
  PublishedByStage = 'publishedBy___stage',
  PublishedByUpdatedAt = 'publishedBy___updatedAt',
  ReleaseAt = 'releaseAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  Stage = 'stage',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UpdatedByChildren = 'updatedBy___children',
  UpdatedByChildrenChildren = 'updatedBy___children___children',
  UpdatedByChildrenChildrenChildren = 'updatedBy___children___children___children',
  UpdatedByChildrenChildrenId = 'updatedBy___children___children___id',
  UpdatedByChildrenId = 'updatedBy___children___id',
  UpdatedByChildrenInternalContent = 'updatedBy___children___internal___content',
  UpdatedByChildrenInternalContentDigest = 'updatedBy___children___internal___contentDigest',
  UpdatedByChildrenInternalDescription = 'updatedBy___children___internal___description',
  UpdatedByChildrenInternalFieldOwners = 'updatedBy___children___internal___fieldOwners',
  UpdatedByChildrenInternalIgnoreType = 'updatedBy___children___internal___ignoreType',
  UpdatedByChildrenInternalMediaType = 'updatedBy___children___internal___mediaType',
  UpdatedByChildrenInternalOwner = 'updatedBy___children___internal___owner',
  UpdatedByChildrenInternalType = 'updatedBy___children___internal___type',
  UpdatedByChildrenParentChildren = 'updatedBy___children___parent___children',
  UpdatedByChildrenParentId = 'updatedBy___children___parent___id',
  UpdatedByCreatedAt = 'updatedBy___createdAt',
  UpdatedById = 'updatedBy___id',
  UpdatedByInternalContent = 'updatedBy___internal___content',
  UpdatedByInternalContentDigest = 'updatedBy___internal___contentDigest',
  UpdatedByInternalDescription = 'updatedBy___internal___description',
  UpdatedByInternalFieldOwners = 'updatedBy___internal___fieldOwners',
  UpdatedByInternalIgnoreType = 'updatedBy___internal___ignoreType',
  UpdatedByInternalMediaType = 'updatedBy___internal___mediaType',
  UpdatedByInternalOwner = 'updatedBy___internal___owner',
  UpdatedByInternalType = 'updatedBy___internal___type',
  UpdatedByIsActive = 'updatedBy___isActive',
  UpdatedByKind = 'updatedBy___kind',
  UpdatedByName = 'updatedBy___name',
  UpdatedByParentChildren = 'updatedBy___parent___children',
  UpdatedByParentChildrenChildren = 'updatedBy___parent___children___children',
  UpdatedByParentChildrenId = 'updatedBy___parent___children___id',
  UpdatedByParentId = 'updatedBy___parent___id',
  UpdatedByParentInternalContent = 'updatedBy___parent___internal___content',
  UpdatedByParentInternalContentDigest = 'updatedBy___parent___internal___contentDigest',
  UpdatedByParentInternalDescription = 'updatedBy___parent___internal___description',
  UpdatedByParentInternalFieldOwners = 'updatedBy___parent___internal___fieldOwners',
  UpdatedByParentInternalIgnoreType = 'updatedBy___parent___internal___ignoreType',
  UpdatedByParentInternalMediaType = 'updatedBy___parent___internal___mediaType',
  UpdatedByParentInternalOwner = 'updatedBy___parent___internal___owner',
  UpdatedByParentInternalType = 'updatedBy___parent___internal___type',
  UpdatedByParentParentChildren = 'updatedBy___parent___parent___children',
  UpdatedByParentParentId = 'updatedBy___parent___parent___id',
  UpdatedByPicture = 'updatedBy___picture',
  UpdatedByPublishedAt = 'updatedBy___publishedAt',
  UpdatedByRemoteId = 'updatedBy___remoteId',
  UpdatedByRemoteTypeName = 'updatedBy___remoteTypeName',
  UpdatedByStage = 'updatedBy___stage',
  UpdatedByUpdatedAt = 'updatedBy___updatedAt',
}

export type GraphCms_ScheduledReleaseFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  isImplicit?: InputMaybe<BooleanQueryOperatorInput>;
  operations?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  releaseAt?: InputMaybe<JsonQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  status?: InputMaybe<GraphCms_ScheduledReleaseStatusQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
};

export type GraphCms_ScheduledReleaseGroupConnection = {
  __typename?: 'GraphCMS_ScheduledReleaseGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_ScheduledReleaseEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GraphCms_ScheduledReleaseGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_ScheduledRelease>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_ScheduledReleaseGroupConnectionDistinctArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
};

export type GraphCms_ScheduledReleaseGroupConnectionGroupArgs = {
  field: GraphCms_ScheduledReleaseFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type GraphCms_ScheduledReleaseSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum GraphCms_ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type GraphCms_ScheduledReleaseStatusQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_ScheduledReleaseStatus>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseStatus>>>;
  ne?: InputMaybe<GraphCms_ScheduledReleaseStatus>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_ScheduledReleaseStatus>>>;
};

export enum GraphCms_Stage {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type GraphCms_StageQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_Stage>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_Stage>>>;
  ne?: InputMaybe<GraphCms_Stage>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_Stage>>>;
};

export type GraphCms_User = Node & {
  __typename?: 'GraphCMS_User';
  children: Array<Node>;
  createdAt: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  isActive: Scalars['Boolean'];
  kind: GraphCms_UserKind;
  name: Scalars['String'];
  parent?: Maybe<Node>;
  picture?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['JSON']>;
  remoteId: Scalars['ID'];
  remoteTypeName: Scalars['String'];
  stage: GraphCms_Stage;
  updatedAt: Scalars['JSON'];
};

export type GraphCms_UserConnection = {
  __typename?: 'GraphCMS_UserConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_UserEdge>;
  group: Array<GraphCms_UserGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_User>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_UserConnectionDistinctArgs = {
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserConnectionGroupArgs = {
  field: GraphCms_UserFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type GraphCms_UserEdge = {
  __typename?: 'GraphCMS_UserEdge';
  next?: Maybe<GraphCms_User>;
  node: GraphCms_User;
  previous?: Maybe<GraphCms_User>;
};

export enum GraphCms_UserFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CreatedAt = 'createdAt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsActive = 'isActive',
  Kind = 'kind',
  Name = 'name',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Picture = 'picture',
  PublishedAt = 'publishedAt',
  RemoteId = 'remoteId',
  RemoteTypeName = 'remoteTypeName',
  Stage = 'stage',
  UpdatedAt = 'updatedAt',
}

export type GraphCms_UserFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  kind?: InputMaybe<GraphCms_UserKindQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  picture?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
};

export type GraphCms_UserGroupConnection = {
  __typename?: 'GraphCMS_UserGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<GraphCms_UserEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<GraphCms_UserGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<GraphCms_User>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type GraphCms_UserGroupConnectionDistinctArgs = {
  field: GraphCms_UserFieldsEnum;
};

export type GraphCms_UserGroupConnectionGroupArgs = {
  field: GraphCms_UserFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export enum GraphCms_UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

export type GraphCms_UserKindQueryOperatorInput = {
  eq?: InputMaybe<GraphCms_UserKind>;
  in?: InputMaybe<Array<InputMaybe<GraphCms_UserKind>>>;
  ne?: InputMaybe<GraphCms_UserKind>;
  nin?: InputMaybe<Array<InputMaybe<GraphCms_UserKind>>>;
};

export type GraphCms_UserSortInput = {
  fields?: InputMaybe<Array<InputMaybe<GraphCms_UserFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IdQueryOperatorInput = {
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ne?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedOriginalName = 'fixed___originalName',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidTracedSvg = 'fluid___tracedSVG',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeHeight = 'resize___height',
  ResizeOriginalName = 'resize___originalName',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
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
};

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
}

export type Query = {
  __typename?: 'Query';
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allGraphCmsAsset: GraphCms_AssetConnection;
  allGraphCmsLink: GraphCms_LinkConnection;
  allGraphCmsPortfolioItem: GraphCms_PortfolioItemConnection;
  allGraphCmsScheduledOperation: GraphCms_ScheduledOperationConnection;
  allGraphCmsScheduledRelease: GraphCms_ScheduledReleaseConnection;
  allGraphCmsUser: GraphCms_UserConnection;
  allImageSharp: ImageSharpConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  graphCmsAsset?: Maybe<GraphCms_Asset>;
  graphCmsLink?: Maybe<GraphCms_Link>;
  graphCmsPortfolioItem?: Maybe<GraphCms_PortfolioItem>;
  graphCmsScheduledOperation?: Maybe<GraphCms_ScheduledOperation>;
  graphCmsScheduledRelease?: Maybe<GraphCms_ScheduledRelease>;
  graphCmsUser?: Maybe<GraphCms_User>;
  imageSharp?: Maybe<ImageSharp>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};

export type QueryAllGraphCmsAssetArgs = {
  filter?: InputMaybe<GraphCms_AssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GraphCms_AssetSortInput>;
};

export type QueryAllGraphCmsLinkArgs = {
  filter?: InputMaybe<GraphCms_LinkFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GraphCms_LinkSortInput>;
};

export type QueryAllGraphCmsPortfolioItemArgs = {
  filter?: InputMaybe<GraphCms_PortfolioItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GraphCms_PortfolioItemSortInput>;
};

export type QueryAllGraphCmsScheduledOperationArgs = {
  filter?: InputMaybe<GraphCms_ScheduledOperationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GraphCms_ScheduledOperationSortInput>;
};

export type QueryAllGraphCmsScheduledReleaseArgs = {
  filter?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GraphCms_ScheduledReleaseSortInput>;
};

export type QueryAllGraphCmsUserArgs = {
  filter?: InputMaybe<GraphCms_UserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<GraphCms_UserSortInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};

export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type QueryGraphCmsAssetArgs = {
  carouselImagesPortfolioItem?: InputMaybe<GraphCms_PortfolioItemFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locale?: InputMaybe<GraphCms_LocaleQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type QueryGraphCmsLinkArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryGraphCmsPortfolioItemArgs = {
  about?: InputMaybe<GraphCms_RichTextFilterInput>;
  carouselImages?: InputMaybe<GraphCms_AssetFilterListInput>;
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  links?: InputMaybe<GraphCms_LinkFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  scheduledIn?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  techSheet?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
};

export type QueryGraphCmsScheduledOperationArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  rawPayload?: InputMaybe<JsonQueryOperatorInput>;
  release?: InputMaybe<GraphCms_ScheduledReleaseFilterInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  status?: InputMaybe<GraphCms_ScheduledOperationStatusQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
};

export type QueryGraphCmsScheduledReleaseArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  createdBy?: InputMaybe<GraphCms_UserFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  errorMessage?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  isImplicit?: InputMaybe<BooleanQueryOperatorInput>;
  operations?: InputMaybe<GraphCms_ScheduledOperationFilterListInput>;
  parent?: InputMaybe<NodeFilterInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  publishedBy?: InputMaybe<GraphCms_UserFilterInput>;
  releaseAt?: InputMaybe<JsonQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  status?: InputMaybe<GraphCms_ScheduledReleaseStatusQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
  updatedBy?: InputMaybe<GraphCms_UserFilterInput>;
};

export type QueryGraphCmsUserArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  createdAt?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isActive?: InputMaybe<BooleanQueryOperatorInput>;
  kind?: InputMaybe<GraphCms_UserKindQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  picture?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<JsonQueryOperatorInput>;
  remoteId?: InputMaybe<IdQueryOperatorInput>;
  remoteTypeName?: InputMaybe<StringQueryOperatorInput>;
  stage?: InputMaybe<GraphCms_StageQueryOperatorInput>;
  updatedAt?: InputMaybe<JsonQueryOperatorInput>;
};

export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
};

export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  JsxRuntime = 'jsxRuntime',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTitle = 'siteMetadata___title',
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  PageContext = 'pageContext',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJson = 'pluginCreator___packageJson',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version',
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJson = 'packageJson',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptions = 'pluginOptions',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version',
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AllPortfolioItemsQueryVariables = Exact<{ [key: string]: never }>;

export type AllPortfolioItemsQuery = {
  __typename?: 'Query';
  allGraphCmsPortfolioItem: {
    __typename?: 'GraphCMS_PortfolioItemConnection';
    nodes: Array<{
      __typename?: 'GraphCMS_PortfolioItem';
      id: string;
      title: string;
      description: string;
      portfolioPath?: string | null | undefined;
      carouselImages: Array<{ __typename?: 'GraphCMS_Asset'; id: string; url: string }>;
    }>;
  };
};

export type PortfolioItemQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type PortfolioItemQuery = {
  __typename?: 'Query';
  graphCmsPortfolioItem?:
    | {
        __typename?: 'GraphCMS_PortfolioItem';
        id: string;
        title: string;
        description: string;
        techSheet: Array<string>;
        about?: { __typename?: 'GraphCMS_RichText'; html: string } | null | undefined;
        carouselImages: Array<{ __typename?: 'GraphCMS_Asset'; id: string; url: string }>;
        links: Array<{
          __typename?: 'GraphCMS_Link';
          id: string;
          title: string;
          url: string;
          type?: string | null | undefined;
        }>;
      }
    | null
    | undefined;
};
