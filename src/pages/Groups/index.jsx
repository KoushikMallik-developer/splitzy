import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import GroupCard from "../../components/Groups/GroupCard";
import Modal from "../../components/Modal";
import SearchBar from "../../components/Groups/SearchBar";
import ActionButtons from "../../components/Groups/ActionButtons";
import CreateGroupModalContent from "../../components/Groups/CreateGroupModalContent";
import {
  createGroup,
  deleteGroup,
  getGroupByUser,
} from "../../store/groupSlice.js";

const GroupsDashboard = () => {
  const dispatch = useDispatch();
  const [groups, setGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleCreateGroup = async () => {
    const payload = {
      name: newGroupName,
      members: selectedUsers.map((user) => user.id),
    };
    await dispatch(createGroup(payload));
    setIsModalOpen(false);
  };

  const handleDelete = async (groupId) => {
    try {
      console.log(groupId);
      await dispatch(deleteGroup(groupId));
      fetchGroupsByUser();
    } catch (error) {
      console.error("Failed to delete group", error);
    }
  };

  const fetchGroupsByUser = () => {
    setIsLoading(true);
    dispatch(getGroupByUser()).then((response) => {
      setGroups(response.payload.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchGroupsByUser();
  }, []);

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
          {groups.length > 0 &&
            groups.map((group) => (
              <GroupCard key={group.id} group={group} onDelete={handleDelete} />
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
