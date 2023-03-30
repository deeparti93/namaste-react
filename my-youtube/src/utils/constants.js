/** @format */

const GOOGLE_API_KEY = "AIzaSyCW3tmAjgVwvKYvDuqNnQIqeBpvq1oA98U";
const MAX_RESULTS_OF_VIDEOS = 50;
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=" +
  MAX_RESULTS_OF_VIDEOS +
  "&regionCode=IN&key=" +
  GOOGLE_API_KEY;
