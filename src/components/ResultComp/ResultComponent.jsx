import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { FaRegWindowClose } from "react-icons/fa";

const ResultComponent = ({
  open,
  close,
  audio,
  transcript,
  ques,
  comparison,
}) => {
  console.log(transcript, "THIS ISSSSSS");
  return (
    <Dialog
      open={open}
      onClose={close}
      fullScreen
      PaperProps={{
        style: {
          backgroundColor: "#616161",
          color: "white",
        },
      }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">Result</Typography>
          <FaRegWindowClose
            size={30}
            style={{ cursor: "pointer" }}
            onClick={close}
          />
        </Box>
        <Divider sx={{ background: "#fff", mt: 3 }} />
      </DialogTitle>
      <DialogContent sx={{ minHeight: "100vh" }}>
        <Box
          sx={{
            background: "#fff",
            height: "100%",
            borderRadius: "10px",
            p: 5,
            color: "#000",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 10, mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" flex={1}>
              Question:
            </Typography>
            <Typography flex={2}>{ques}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 10, mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" flex={1}>
              Your Recorded Audio:
            </Typography>
            <Box flex={2}>
              <div className="mt-4 w-1/2">
                <audio controls src={audio} className="w-full mb-4" />
                <span>{transcript}</span>
              </div>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 10, mb: 4 }}>
            <Typography variant="h6" fontWeight="bold" flex={1}>
              Standard scoring (Correct:45%)
            </Typography>
            <Typography flex={2}>{comparison}</Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ResultComponent;
