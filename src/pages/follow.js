import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import followimg from "../assets/followimg.png";
import followimg2 from "../assets/followimg1.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function WhoToFollow() {
  return (
    <>
      <Box sx={{ marginTop: "20px", padding: "10px", borderRadius: "8px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#203758" }}>
            Who To Follow
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MoreHorizIcon sx={{ color: "#788292" }} />
          </Box>
        </Box>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            marginTop: "10px",
            justifyContent: "center",
          }}
        >
          <ListItem alignItems="flex-start" sx={{ flexWrap: "wrap" }}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={followimg2} />
            </ListItemAvatar>
            <Box sx={{ display: "flex", alignSelf: "center" }}>
              <ListItemText
                secondary={
                  <Typography
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#788292",
                      alignSelf: "center",
                    }}
                    component="span"
                    variant="h6"
                  >
                    Ben Thomas
                  </Typography>
                }
              />
            </Box>
            <Box
              sx={{
                alignSelf: "center",
                display: "flex",
                flexGrow: 1,
              }}
            >
              <CheckCircleIcon sx={{ color: "#788292" }} />
            </Box>
            <Box sx={{ alignSelf: "center" }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#F0F7FF",
                  color: "#1877F2",
                  fontWeight: "bold",
                }}
              >
                Follow
              </Button>
            </Box>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem
            alignItems="flex-start"
            sx={{ flexWrap: "wrap", justifyContent: "center" }}
          >
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={followimg} />
            </ListItemAvatar>
            <Box sx={{ display: "flex", alignSelf: "center" }}>
              <ListItemText
                secondary={
                  <Typography
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#788292",
                    }}
                    variant="h6"
                  >
                    ketty pierce
                  </Typography>
                }
              />
            </Box>
            <Box
              sx={{
                alignSelf: "center",
                display: "flex",
                flexGrow: 1,
              }}
            >
              <CheckCircleIcon sx={{ color: "#788292" }} />
            </Box>
            <Box sx={{ alignSelf: "center" }}>
              <Button
                sx={{
                  display: "flex",
                  alignSelf: "center",
                  backgroundColor: "#F0F7FF",
                  color: "#1877F2",
                  fontWeight: "bold",
                }}
                variant="contained"
                size="small"
              >
                Follow
              </Button>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ marginTop: "20px", color: "#788292" }}>
        <Typography variant="body1">
          Privacy . Terms . Advertising . Ad Choices . Cookies . More . Facebook
          © 2020
        </Typography>
      </Box>
    </>
  );
}
