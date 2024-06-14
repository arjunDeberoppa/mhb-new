import Icon from "./Icon";

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];

const ALLOWED_AUDIO_TYPES = [
  "audio/mpeg",
  "audio/wav",
  "audio/x-wav",
  //'audio/ogg',
  "audio/mp3",
];

const ALLOWED_VIDEO_TYPES = [
  "video/mp4",
  "video/mpeg",
  "video/webm",
  //'video/ogg'
];

const ALLOWED_DOC_TYPES = ["application/pdf", "text/plain"];

const ALLOWED_WORD_TYPES = [
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", //docx
  "application/msword", //doc
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
];

const ALLOWED_PPT_TYPES = [
  "application/vnd.ms-powerpoint", //ppt
  "application/vnd.openxmlformats-officedocument.presentationml.presentation", //pptx
];

const ALLOWED_ZIP_TYPES = [
  "application/zip",
  "application/vnd.rar",
  "application/x-rar",
  "application/x-zip-compressed",
];

type Props = {
  type: string;
};

const TypeIcon = ({ type }: Props) => {
  if (ALLOWED_AUDIO_TYPES.includes(type)) {
    return <Icon icon="file-audio" />;
  } else if (ALLOWED_IMAGE_TYPES.includes(type)) {
    return <Icon icon="file-image" />;
  } else if (ALLOWED_VIDEO_TYPES.includes(type)) {
    return <Icon icon="file-video" />;
  } else if (type === "application/pdf") {
    return <Icon icon="file-pdf" />;
  } else if (ALLOWED_DOC_TYPES.includes(type)) {
    return <Icon icon="file" />;
  } else if (type === "external_url" || type === "link") {
    return <Icon icon="file-link" />;
  } else if (ALLOWED_WORD_TYPES.includes(type)) {
    return <Icon icon="file-doc" />;
  } else if (ALLOWED_PPT_TYPES.includes(type)) {
    return <Icon icon="file-ppt" />;
  } else if (ALLOWED_ZIP_TYPES.includes(type)) {
    return <Icon icon="file-zip" />;
  } else {
    if (type === "youtube") {
      return <Icon icon="file-youtube" />;
    } else if (type === "vimeo") {
      return <Icon icon="file-video" />;
    } else {
      return <Icon icon="file-quiz" />;
    }
  }
};

export default TypeIcon;
