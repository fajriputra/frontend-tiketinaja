import React from "react";

import Card from "components/Card";
import Button from "components/UI/Button";

import "./tab-profile.scss";

export default function TabProfile({ className }) {
  return (
    <Card className={["tab__profile d-none d-md-block", className].join(" ")}>
      <Button className="btn btn__tab account p-0">Account Settings</Button>
      <Button className="btn btn__tab order__history p-0 ">
        Order History
      </Button>
    </Card>
  );
}
