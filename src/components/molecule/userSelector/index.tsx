import { useEffect, useRef, useState } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";

export interface User {
  id: number;
  name: string;
}

export default function UserSelector() {
  const [userList, setUserList] = useState<Array<User>>([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob White" },
    { id: 5, name: "Eve Brown" },
  ]);
  const [selectedUsers, setSelectedUsers] = useState<Array<User>>([]);
  const [inputValue, setInputValue] = useState("");

  const [showUserList, setShowUserList] = useState(false);

  const sortedUserList = userList.sort((a, b) => a.name.localeCompare(b.name));

  const handleUserSelect = (user: User) => {
    setSelectedUsers([...selectedUsers, user]);
    setUserList(userList.filter((u) => u.id !== user.id));
    setInputValue("");
  };

  const handleUserRemove = (userId: number) => {
    setSelectedUsers(selectedUsers.filter((user) => user.id !== userId));
    const removedUser = selectedUsers.find((user) => user.id === userId);
    if (removedUser) {
      const sortedUserList = [...userList, removedUser].sort((a, b) => a.name.localeCompare(b.name));
      setUserList(sortedUserList);
    }
  };

  const inputRef = useRef(null);

  return (
    <div className="input__field relative">
      <div className="selected__users flex justify-start items-center gap-3 absolute left-2 top-[50%] translate-y-[-50%] z-10 w-[90%] overflow-x-auto">
        {selectedUsers.map((user) => (
          <button
            type="button"
            key={user.id}
            className="user__chip bg-blue-200 rounded-sm px-[5px]  cursor-pointer text-nowrap"
            onClick={() => handleUserRemove(user.id)}
          >
            <span>{user.name}</span>
            <span className="remove__user ms-2">&times;</span>
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder={selectedUsers.length > 0 ? "" : "Assignee"}
        disabled={selectedUsers.length > 0}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputRef}
        onFocus={() => setShowUserList((prev) => !prev)}
      />
      <button type="button" className="input__icon" onClick={() => setShowUserList((prev) => !prev)}>
        {showUserList ? <LiaAngleUpSolid className="text-gray-500" /> : <LiaAngleDownSolid className="text-gray-500" />}
      </button>
      {sortedUserList.length > 0 ? (
        <div
          className={`user__list absolute top-[100%] left-0 right-0 flex flex-col  items-start bg-white z-10 py-2 ps-4 rounded-lg border-[1px] border-solid border-gray-400 
           ${showUserList ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          {/* Display the list of available users */}
          {sortedUserList.map((user) => (
            <button key={user.id} type="button" onClick={() => handleUserSelect(user)} className="user__item">
              {user.name}
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
