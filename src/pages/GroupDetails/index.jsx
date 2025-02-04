import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import FinancialSummary from "../../components/GroupDetails/FinancialSummary";
import GroupMembers from "../../components/GroupDetails/GroupMembers";
import RecentExpenses from "../../components/GroupDetails/RecentExpenses";
import AddExpenseModal from "../../components/GroupDetails/AddExpenseModal";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGroupDetailsById } from "../../store/groupSlice";
import { convertDateToReadableString } from "../../utils/dateFormatter";

const GroupDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userDetails } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenseForm, setExpenseForm] = useState({
    description: "",
    amount: "",
    splitType: "Equal Split",
    paidBy: "You",
  });
  const [group, setGroup] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExpenseForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddExpense = () => {
    // Add expense logic here
    console.log("Expense added:", expenseForm);
    setIsModalOpen(false);
  };

  const fetchGroupDetails = () => {
    setIsLoading(true);
    dispatch(getGroupDetailsById(id)).then((response) => {
      setGroup(response.payload.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchGroupDetails();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8 lg:p-10">
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                {group.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                {convertDateToReadableString(group.created_at)}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center text-sm sm:text-base"
          >
            <FaPlus className="w-4 h-4 mr-2" />
            Add Expense
          </button>
        </div>
        <FinancialSummary
          totalSpent={group.total_spent}
          stats={
            group.balances[userDetails.id] && group.balances[userDetails.id]
          }
        />
        <GroupMembers members={group.members} />
        <RecentExpenses />
        {isModalOpen && (
          <AddExpenseModal
            expenseForm={expenseForm}
            handleInputChange={handleInputChange}
            handleAddExpense={handleAddExpense}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </div>
    </div>
  );
};

export default GroupDetails;
