import React from "react";
import NameToAvatar from "../NameToAvatar";
import { useSelector } from "react-redux";

const GroupMembers = ({ members }) => {
  const { userDetails } = useSelector((state) => state.user);
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium">Group Members</h3>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((member, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt="Member"
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <NameToAvatar name={member.fname + " " + member.lname} />
                )}
                <div className="ml-3">
                  <p className="text-sm font-medium">
                    {member.fname + " " + member.lname}{" "}
                    {member.id == userDetails.id ? "(You)" : ""}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupMembers;
