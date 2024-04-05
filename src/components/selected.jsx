import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { users } from "../assets/user.json";

export function Selected() {
  return (
    <div className="p-2 flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select label="Select region" className="h-full">
        {users.map((user) => (
          <SelectItem key={user.userName} value={user.userName}>
            {user.name}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
