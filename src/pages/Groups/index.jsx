import React, { useState } from "react";
import Loader from "../../components/Loader";
import GroupCard from "../../components/Groups/GroupCard";
import Modal from "../../components/Modal";
import SearchBar from "../../components/Groups/SearchBar";
import ActionButtons from "../../components/Groups/ActionButtons";
import CreateGroupModalContent from "../../components/Groups/CreateGroupModalContent";

const GroupsDashboard = () => {
  const initialGroups = [
    {
      id: 1,
      name: "Roommates",
      members: 4,
      totalSpent: 12450,
      yourShare: 3112,
      memberAvatars: [1, 2, 3, 4],
      type: "home",
    },
    {
      id: 2,
      name: "Weekend Trip",
      members: 6,
      totalSpent: 24800,
      yourShare: 4133,
      memberAvatars: [5, 6, 7],
      remainingMembers: 3,
      type: "travel",
    },
  ];

  // State
  const [groups] = useState(initialGroups);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleCreateGroup = () => {
    // Logic to create a new group
    console.log("Creating group:", newGroupName, selectedUsers);
    setIsModalOpen(false);
  };

  return (
    <section className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Groups</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <SearchBar />
          <ActionButtons onCreate={() => setIsModalOpen(true)} />
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      )}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateGroupModalContent
            newGroupName={newGroupName}
            setNewGroupName={setNewGroupName}
            selectedUsers={selectedUsers}
            setSelectedUsers={setSelectedUsers}
            onCreateGroup={handleCreateGroup}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </section>
  );
};

export default GroupsDashboard;
