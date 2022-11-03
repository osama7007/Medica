import { Skeleton, Space } from "antd";
import React, { useState } from "react";

const SkeletonComponent = () => {
  const [active, setActive] = useState(false);
  const [block, setBlock] = useState(false);
  const [size, setSize] = useState("default");
  const [buttonShape, setButtonShape] = useState("default");
  const [avatarShape, setAvatarShape] = useState("circle");

  return (
    <>
      <div className="mb-3">
        <Space>
          <Skeleton.Avatar active={active} size={size} shape={avatarShape} />

          <Skeleton.Input active={active} size={size} />
          <Skeleton.Button
            active={active}
            size={size}
            shape={buttonShape}
            block={block}
          />
        </Space>
      </div>

      <div className="mb-3">
        <Space>
          <Skeleton.Avatar active={active} size={size} shape={avatarShape} />

          <Skeleton.Input active={active} size={size} />
          <Skeleton.Button
            active={active}
            size={size}
            shape={buttonShape}
            block={block}
          />
        </Space>
      </div>

      <div className="mb-3">
        <Space>
          <Skeleton.Avatar active={active} size={size} shape={avatarShape} />

          <Skeleton.Input active={active} size={size} />
          <Skeleton.Button
            active={active}
            size={size}
            shape={buttonShape}
            block={block}
          />
        </Space>
      </div>

      <div className="mb-3">
        <Space>
          <Skeleton.Avatar active={active} size={size} shape={avatarShape} />

          <Skeleton.Input active={active} size={size} />
          <Skeleton.Button
            active={active}
            size={size}
            shape={buttonShape}
            block={block}
          />
        </Space>
      </div>

      <div className="mb-3">
        <Space>
          <Skeleton.Avatar active={active} size={size} shape={avatarShape} />

          <Skeleton.Input active={active} size={size} />
          <Skeleton.Button
            active={active}
            size={size}
            shape={buttonShape}
            block={block}
          />
        </Space>
      </div>
    </>
  );
};
export default SkeletonComponent;
