import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./summaryCard.css";

function SummaryCard({ items, amount }) {
  return (
    <>
      <Card className="card" variant="elevation" elevation={8}>
        <CardContent>
          <Typography className="title" variant="h3" gutterBottom>
            Order Summary
          </Typography>
          <Typography className="summary-text" color="textSecondary">
            Total Items:<strong className="summary-text">{items}</strong>
          </Typography>
          <Typography className="summary-text" variant="h5" gutterBottom>
            Total Amount:<strong className="summary-text">{amount}</strong>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default SummaryCard;
