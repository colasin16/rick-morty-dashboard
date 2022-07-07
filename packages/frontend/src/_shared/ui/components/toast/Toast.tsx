import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../app/hooks";
import "./Toast.css";

export const Toasts = () => {
  const toastList = useAppSelector((state) => state.toasts.list);
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  return (
    <div className="toast-container">
      {list.map((toast) => {
        return (
          <div className={`toast type-${toast.type}`} key={toast.id}>
            <span>{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
};
