import { Card, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import back1 from "../../home/home1.jpeg";
import { useEffect, useState } from "react";
import { Dropdown, Space } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

const HomeItems = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>Hover me</Space>
              </a>
            </Dropdown>
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}></Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeItems;
