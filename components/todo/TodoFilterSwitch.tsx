"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useId } from "react";
import { useTodoFilterStore } from "../../store/useTodoFilterStore";

const TodoFilterSwitch = () => {
  const switchId = useId();
  const { filter, setFilter } = useTodoFilterStore();

  const onCheckedChange = (checked: boolean) => {
    setFilter(checked ? "completed" : "all");
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={switchId}
        checked={filter === "completed"}
        onCheckedChange={onCheckedChange}
      />
      <Label htmlFor={switchId}>Completed</Label>
    </div>
  );
};

export default TodoFilterSwitch;
