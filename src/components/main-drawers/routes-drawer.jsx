import React from "react";
import { Drawer } from "antd";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SettingsIcon } from "@/assets/icons/routes-drawer";

const RoutesDrawer = ({
  routesDrawerOpen,
  setRoutesDrawerOpen,
  setSearchParams,
}) => {
  const handleDrawerClose = () => {
    setRoutesDrawerOpen(false);
    setSearchParams({});
  };

  return (
    <Drawer
      title="Routes"
      onClose={handleDrawerClose}
      open={routesDrawerOpen}
      placement="left"
      mask={false}
      maskClosable={false}
      className="main-drawer max-h-[calc(100dvh-128px)]"
    >
      <div className="flex items-center gap-4">
        <Input
          placeholder="default size"
          variant="filled"
          prefix={<SearchOutlined />}
          className="rounded-2xl flex-1"
        />
        <div className="h-5">
          <SettingsIcon className={"h-full w-full"} />
        </div>
      </div>
    </Drawer>
  );
};

export default RoutesDrawer;
