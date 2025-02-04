import React from "react";

const GroupMembers = () => {
  const members = [
    {
      name: "John Doe",
      isYou: true,
      spent: "$450.00",
      balance: "-$125.00",
      balanceColor: "text-red-500",
    },
    {
      name: "Jane Smith",
      spent: "$300.00",
      balance: "$75.00",
      balanceColor: "text-green-500",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-medium">Group Members</h3>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="Member"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium">
                  {member.name} {member.isYou ? "(You)" : ""}
                </p>
                <p className="text-xs text-gray-500">Spent {member.spent}</p>
              </div>
            </div>
            <span className={`text-sm font-medium ${member.balanceColor}`}>
              {member.isYou ? "Owes" : "Gets back"} {member.balance}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupMembers;
