import React from "react";

export default function footer() {
  return (
    <div>
      <div className="fixed bottom-0 w-[100%] ">
        <footer className="flex justify-between bg-neutral text-neutral-content items-center p-4">
          <aside className="grid-flow-col items-center">
            <p className="sm:text-xs">
              Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 place-self-center justify-self-end">
            <p className="sm:text-xs text-warning font-bold text-xl">
              By Team Sun Veil
            </p>
          </nav>
        </footer>
      </div>
    </div>
  );
}
