import { FaUserCircle } from "react-icons/fa";

const Feed = ({ posts }) => {
  return (
    <div className="max-w-2xl mx-auto mt-5 space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="card bg-base-200 shadow-xl p-4 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <FaUserCircle className="text-4xl text-gray-500" />
            <div>
              <span className="font-semibold text-lg">User</span>
              <p className="text-gray-500 text-sm">
                {new Date(post.timestamp).toLocaleString()}
              </p>
            </div>
          </div>

          <p className="text-lg">{post.text}</p>

          {/* Show File Preview */}
          {post.file && (
            <div className="rounded-lg overflow-hidden mt-2">
              {post.fileType === "image" && (
                <img src={post.file} alt="Post" className="w-full h-60 object-cover" />
              )}
              {post.fileType === "video" && (
                <video controls className="w-full rounded-lg">
                  <source src={post.file} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              )}
              {post.fileType === "audio" && (
                <audio controls className="w-full">
                  <source src={post.file} type="audio/mpeg" />
                  Your browser does not support audio playback.
                </audio>
              )}
              {post.fileType === "document" && (
                <a href={post.file} download className="btn btn-outline mt-2">
                  Download File
                </a>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="card-actions justify-end mt-2">
            <button className="btn btn-outline btn-sm">Like</button>
            <button className="btn btn-outline btn-sm">Comment</button>
            <button className="btn btn-outline btn-sm">Share</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
