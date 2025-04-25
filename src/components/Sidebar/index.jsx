import {
  CheckOutlined,
  FileTextOutlined,
  HomeOutlined,
  PlusOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

export default function Sidebar() {
  return (
    <div className="w-[340px] my-3 px-3">
      <div className="py-10 px-4 bg-white rounded-md h-full">
        <h3 className="font-semibold text-2xl">Private</h3>

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
            icon={
              <FileTextOutlined style={{ color: "var(--emoji-booklist)" }} />
            }
            type="text"
            className="hover:bg-[var(--background-light)] justify-start"
          >
            Work
          </Button>
          <Button
            icon={
              <SmileOutlined style={{ color: "var(--checkbox-checked)" }} />
            }
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
    </div>
  );
}
