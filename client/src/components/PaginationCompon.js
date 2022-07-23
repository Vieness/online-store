import React, {useContext} from 'react';
import {Pagination, Stack} from "@mui/material";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const PaginationCompon = observer(() => {
  const {device} = useContext(Context)
  const pages = Math.ceil(device.totalCount / device.limit)

  return (
    <div>

      <Stack
        sx={{mt: 2, mb: 2}}
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Pagination
          count={pages}
          color="primary"
          onChange={(event, value) => device.setPage(value)}
        />
      </Stack>
    </div>
  );
});

export default PaginationCompon;