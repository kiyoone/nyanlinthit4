import React from "react";
import { useDeleteResourceMutation } from "../../features/api/apiSlice";
import { Link } from "react-router-dom";

const Resource = ({ resource }) => {
  const { image, title, createdAt, _id } = resource;

  const [deleteResource] = useDeleteResourceMutation();

  const handleDelete = (id) => {
    deleteResource(id);
  };

  return (
    <div className="w-64 h-80 rounded-xl border bg-gray-300 overflow-hidden ]">
      <div className="w-full h-1/2 bg-black">
        <img src={image[0]} className="w-full h-full" alt="" />
      </div>
      <div className="w-full h-1/2 ">
        <div className="w-full h-2/3 text-center py-3">
          <h3>{title}</h3>
          <h6>{createdAt}</h6>
        </div>
        <div className="w-full h-1/3 ">
          <Link to={`/admin/edit/${_id}`}>
            <button className="w-1/2 h-full bg-blue-600 text-white">
              Edit
            </button>
          </Link>
          <button
            className="w-1/2 h-full bg-red-600 text-white"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resource;
