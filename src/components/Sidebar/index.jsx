import {
  CheckOutlined,
  FileTextOutlined,
  HomeOutlined,
  PlusOutlined,
  SmileOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React, { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const sidebarContent = (
    <div className="py-10 px-4 bg-white h-full rounded-md">
      <h3 className="font-semibold text-2xl mb-4">Private</h3>
      <div className="flex flex-col gap-1">
        <Button
          style={{
            backgroundColor: "var(--background-light)",
          }}
          icon={<HomeOutlined />}
          type="text"
          className="hover:bg-[var(--background-light)] justify-start"
        >
          Home
        </Button>
        <Button
          icon={<CheckOutlined />}
          type="text"
          className="hover:bg-[var(--background-light)] justify-start"
        >
          Completed
        </Button>
        <Button
          icon={<FileTextOutlined style={{ color: "var(--emoji-booklist)" }} />}
          type="text"
          className="hover:bg-[var(--background-light)] justify-start"
        >
          Work
        </Button>
        <Button
          icon={<SmileOutlined style={{ color: "var(--checkbox-checked)" }} />}
          type="text"
          className="hover:bg-[var(--background-light)] justify-start"
        >
          Diet
        </Button>
        <Button
          icon={<PlusOutlined />}
          type="text"
          className="hover:bg-[var(--background-light)] justify-start"
        >
          Create New List
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <div className="w-[280px] my-3 px-3 hidden md:block">
        {sidebarContent}
      </div>

      <div className="md:hidden px-4 py-2 bg-white shadow-sm flex items-center justify-betwee rounded-md">
        <h3 className="text-xl font-semibold">Private</h3>
        <Button icon={<MenuOutlined />} onClick={() => setOpen(true)} />
      </div>

      <Drawer
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        width={280}
        className="p-0"
        style={{ padding: 0 }}
      >
        {sidebarContent}
      </Drawer>
    </>
  );
}
