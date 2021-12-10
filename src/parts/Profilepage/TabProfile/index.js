import React from "react";

import Card from "components/Card";
import Button from "components/UI/Button";

import "./tab-profile.scss";

export default function TabProfile({ className, account, history, active }) {
  return (
    <Card className={["tab__profile d-none d-md-block", className].join(" ")}>
      <Button
        className={`btn btn__tab account ${!active ? "active" : ""} p-0`}
        onClick={account}
      >
        Account Settings
      </Button>
      <Button
        className={`btn btn__tab order__history ${active ? "active" : ""} p-0`}
        onClick={history}
      >
        Order History
      </Button>
    </Card>
  );
}
