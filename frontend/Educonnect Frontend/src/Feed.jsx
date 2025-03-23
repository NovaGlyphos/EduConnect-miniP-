// Feed.jsx
import { FaUserCircle, FaHeart, FaComment, FaShare } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";

function Feed({ posts }) {
  if (posts.length === 0) {
    return (
      <div className="mt-8 bg-base-200 p-4 rounded-lg shadow-md">
        <p className="text-center text-gray-500">No posts yet. Be the first to share!</p>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="bg-base-200 p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <FaUserCircle className="text-4xl text-gray-500" />
            <div>
              <span className="font-semibold">User</span>
              <p className="text-sm text-gray-500">
                {post.timestamp ? formatDistanceToNow(post.timestamp, { addSuffix: true }) : "Just now"}
              </p>
            </div>
          </div>

          {post.text && <p className="mb-4">{post.text}</p>}

          {post.file && (
            <div className="my-3 flex justify-center">
              {post.fileType === "image" && (
                <img src={post.file} alt="Posted content" className="rounded-lg shadow-lg max-w-full max-h-96 object-contain" />
              )}
              {post.fileType === "video" && (
                <video controls className="rounded-lg shadow-lg w-full max-h-96">
                  <source src={post.file} />
                  Your browser does not support video playback.
                </video>
              )}
              {post.fileType === "audio" && (
                <audio controls className="w-full">
                  <source src={post.file} />
                  Your browser does not support audio playback.
                </audio>
              )}
              {post.fileType === "document" && (
                <a href={post.file} download className="btn btn-outline">
                  Download File
                </a>
              )}
            </div>
          )}

          <div className="flex gap-4 mt-4">
            <button className="btn btn-ghost btn-sm gap-2">
              <FaHeart /> Like
            </button>
            <button className="btn btn-ghost btn-sm gap-2">
              <FaComment /> Comment
            </button>
            <button className="btn btn-ghost btn-sm gap-2">
              <FaShare /> Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;